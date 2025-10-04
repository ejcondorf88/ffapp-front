import React, { useState } from 'react';

type DonationType = 'once' | 'monthly';

type PaymentMethod = 'card' | 'qr';

export const DonationCards: React.FC = () => {
  const [donationType, setDonationType] = useState<DonationType>('once');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  // Estados del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    emailUpdates: true,
    textUpdates: false
  });

  // Estados del pago
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    receiptNumber: ''
  });

  // Montos para donación única
  const onceAmounts = [50, 100, 150, 200];
  
  // Montos para donación mensual
  const monthlyAmounts = [10, 20, 40, 100];

  const currentAmounts = donationType === 'once' ? onceAmounts : monthlyAmounts;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && amount > 0) {
      setShowForm(true);
    }
  };

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBackToSelection = () => {
    setShowForm(false);
  };

  const handleSubmitDonation = () => {
    setShowPayment(true);
  };

  const handleBackToForm = () => {
    setShowPayment(false);
  };

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handlePaymentDataChange = (field: string, value: string) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFinalSubmit = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    console.log(`Donación completada: ${donationType}: $${amount} USD`, {
      formData,
      paymentMethod,
      paymentData
    });
    // Aquí iría la lógica final de procesamiento de donación
    setShowThankYou(true);
  };

  const handleNewDonation = () => {
    // Reiniciar todos los estados
    setSelectedAmount(null);
    setCustomAmount('');
    setDonationType('once');
    setShowForm(false);
    setShowPayment(false);
    setShowThankYou(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      emailUpdates: false,
      textUpdates: false
    });
    setPaymentMethod(null);
    setPaymentData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: '',
      receiptNumber: ''
    });
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const getImpactMessage = () => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    if (donationType === 'monthly' && amount >= 40) {
      return `Tu donación de $${amount.toFixed(2)} mensual puede ayudar a ${Math.floor(amount / 3.33)} personas cada año con nuestros programas sociales. 100% de los fondos van directamente a los proyectos.`;
    } else if (donationType === 'once' && amount >= 50) {
      return `Tu donación de $${amount.toFixed(2)} puede beneficiar directamente a ${Math.floor(amount / 12)} familias con nuestros programas de nutrición, educación y emprendimiento. 100% de los fondos van directamente a los proyectos.`;
    }
    return 'Selecciona un monto para ver el impacto de tu donación.';
  };

  if (showThankYou) {
    // Paso 4: Pantalla de agradecimiento
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          {/* Icono de éxito */}
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Título de agradecimiento */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¡GRACIAS POR TU GENEROSIDAD!
          </h2>

          {/* Monto donado */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-lg font-semibold text-gray-800">
              Tu donación de ${getCurrentAmount().toFixed(2)} USD {donationType === 'monthly' ? 'mensual' : 'única'}
            </p>
            <p className="text-sm text-gray-600">
              ha sido registrada exitosamente
            </p>
          </div>

          {/* Mensaje motivacional */}
          <div className="text-left mb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-red-600">Tu solidaridad hace la diferencia.</span> Gracias a tu donación, estamos construyendo un Ecuador más próspero y equitativo para todos.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Con tu apoyo, continuamos trabajando para:
            </p>

            <ul className="text-gray-700 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Brindar alimentación nutritiva a familias vulnerables</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Fortalecer la educación en comunidades rurales</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Crear oportunidades de empleo sostenible</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Proteger nuestro medio ambiente para futuras generaciones</span>
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
              <p className="text-gray-700 font-medium text-center">
                "Juntos construimos esperanza, juntos transformamos vidas"
              </p>
            </div>
          </div>

          {/* Información de seguimiento */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Número de comprobante:</strong> {paymentData.receiptNumber}
            </p>
            <p className="text-xs text-gray-500">
              Recibirás un correo de confirmación en {formData.email} con todos los detalles de tu donación.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <button
              onClick={handleNewDonation}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all"
            >
              HACER OTRA DONACIÓN
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-all"
            >
              VOLVER AL INICIO
            </button>
          </div>

          {/* Redes sociales para compartir */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">
              Comparte tu acto de solidaridad:
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent('Acabo de donar a Fundación Favorita para ayudar a construir un Ecuador mejor. ¡Únete a esta causa!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                📘 Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Acabo de donar a @FundacionFavorita para construir un Ecuador mejor. ¡Únete! 🇪🇨❤️')}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors"
              >
                🐦 Twitter
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent('Acabo de donar a Fundación Favorita para ayudar a construir un Ecuador mejor. Te invito a conocer su trabajo: ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showPayment) {
    // Paso 3: Método de pago
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Encabezado con monto seleccionado */}
        <div className="bg-gray-100 p-4 text-center border-b">
          <p className="text-gray-700 text-sm">
            Donando ${getCurrentAmount().toFixed(2)} USD {donationType === 'monthly' ? 'por mes' : 'una vez'}
            <button 
              onClick={handleBackToForm}
              className="ml-2 text-red-600 hover:text-red-700 underline text-sm"
            >
              EDITAR
            </button>
          </p>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            SELECCIONA MÉTODO DE PAGO
          </h3>

          {/* Opciones de método de pago */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handlePaymentMethodSelect('card')}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                paymentMethod === 'card'
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="w-8 h-8 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
                💳
              </div>
              <p className="font-semibold text-gray-800">TARJETA</p>
            </button>

            <button
              onClick={() => handlePaymentMethodSelect('qr')}
              className={`p-4 border-2 rounded-lg text-center transition-all ${
                paymentMethod === 'qr'
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="w-8 h-8 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
                📱
              </div>
              <p className="font-semibold text-gray-800">QR</p>
            </button>
          </div>

          {/* Formulario de tarjeta */}
          {paymentMethod === 'card' && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  NÚMERO DE TARJETA
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={(e) => handlePaymentDataChange('cardNumber', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    FECHA DE VENCIMIENTO
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    value={paymentData.expiryDate}
                    onChange={(e) => handlePaymentDataChange('expiryDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={paymentData.cvv}
                    onChange={(e) => handlePaymentDataChange('cvv', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  NOMBRE EN LA TARJETA
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  value={paymentData.cardName}
                  onChange={(e) => handlePaymentDataChange('cardName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>
          )}

          {/* Pago por QR */}
          {paymentMethod === 'qr' && (
            <div className="text-center mb-6">
              <p className="text-gray-700 mb-4">Escanea el código QR para realizar tu donación:</p>
              <div className="bg-white p-4 rounded-lg border border-gray-200 inline-block">
                <img 
                  src="/images/QRresultados.png" 
                  alt="Código QR para donación" 
                  className="w-48 h-48 mx-auto"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Usa tu aplicación de banco móvil para escanear
              </p>
            </div>
          )}

          {/* Campo de número de comprobante (solo para QR) */}
          {paymentMethod === 'qr' && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                NÚMERO DE COMPROBANTE
              </label>
              <input
                type="text"
                placeholder="Ingresa el número de comprobante de tu pago"
                value={paymentData.receiptNumber}
                onChange={(e) => handlePaymentDataChange('receiptNumber', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Este número nos ayuda a validar tu pago
              </p>
            </div>
          )}

          {/* Botón de finalizar */}
          <button
            onClick={handleFinalSubmit}
            disabled={
              !paymentMethod || 
              (paymentMethod === 'qr' && !paymentData.receiptNumber) ||
              (paymentMethod === 'card' && (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardName))
            }
            className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all ${
              paymentMethod && 
              ((paymentMethod === 'qr' && paymentData.receiptNumber) || 
               (paymentMethod === 'card' && paymentData.cardNumber && paymentData.expiryDate && paymentData.cvv && paymentData.cardName))
                ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            FINALIZAR DONACIÓN
          </button>

          {/* Mensaje de seguridad */}
          <div className="text-center text-xs text-gray-500 mt-4">
            🔒 Pago Seguro • Este sitio está protegido por reCAPTCHA y se aplican la{' '}
            <a href="#" className="text-red-600 hover:underline">Política de Privacidad</a> y{' '}
            <a href="#" className="text-red-600 hover:underline">Términos de Servicio</a> de Google.
            El pago es procesado por <span className="font-semibold">PayPal</span>.
          </div>
        </div>
      </div>
    );
  }

  if (showForm) {
    // Paso 2: Formulario de donación
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Encabezado con monto seleccionado */}
        <div className="bg-gray-100 p-4 text-center border-b">
          <p className="text-gray-700 text-sm">
            Donando ${getCurrentAmount().toFixed(2)} USD {donationType === 'monthly' ? 'por mes' : 'una vez'}
            <button 
              onClick={handleBackToSelection}
              className="ml-2 text-red-600 hover:text-red-700 underline text-sm"
            >
              EDITAR
            </button>
          </p>
        </div>

        <div className="p-6">
          {/* Método de pago express */}
          <div className="mb-6">
            <p className="text-gray-700 text-sm font-medium mb-3">MÉTODO DE PAGO EXPRESS</p>
            <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
              DONACION RAPIDA →
            </button>
          </div>

          {/* Separador */}
          <div className="text-center text-gray-500 text-sm mb-6">
            o ingresa tus datos manualmente abajo
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            {/* Nombre y Apellido */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  NOMBRE
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleFormChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  APELLIDO
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleFormChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                EMAIL
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                NÚMERO DE TELÉFONO (OPCIONAL)
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                  <span className="text-red-600 mr-1">🇺🇸</span>
                  <span className="text-gray-600 text-sm">+1</span>
                </div>
                <input
                  type="tel"
                  placeholder="(201) 555-0123"
                  value={formData.phone}
                  onChange={(e) => handleFormChange('phone', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            {/* Preferencias de comunicación */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3">
                ELIGE CÓMO QUIERES RECIBIR NOTICIAS DE NOSOTROS
                <span className="text-yellow-500 ml-1">💡</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.emailUpdates}
                    onChange={(e) => handleFormChange('emailUpdates', e.target.checked)}
                    className="mr-3 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700 text-sm">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.textUpdates}
                    onChange={(e) => handleFormChange('textUpdates', e.target.checked)}
                    className="mr-3 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700 text-sm">Mensaje de texto</span>
                </label>
              </div>
            </div>

            {/* Texto legal */}
            <div className="text-xs text-gray-500 leading-relaxed">
              Recibe textos automatizados ocasionales de la fundación con actualizaciones y
              formas de ayudar. Responde CANCELAR para cancelar suscripción o AYUDA para ayuda.
              Pueden aplicar tarifas de mensajes y datos. El consentimiento no es requerido para donar.{' '}
              <a href="#" className="text-red-600 hover:underline">Ver Términos</a> y{' '}
              <a href="#" className="text-red-600 hover:underline">Política de Privacidad</a>.
            </div>

            {/* Botón siguiente */}
            <button
              type="button"
              onClick={handleSubmitDonation}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 px-6 rounded-lg font-bold text-lg transition-colors"
            >
              SIGUIENTE
            </button>

            {/* Mensaje de seguridad */}
            <div className="text-center text-xs text-gray-500 mt-4">
              🔒 Pago Seguro • Este sitio está protegido por reCAPTCHA y se aplican la{' '}
              <a href="#" className="text-red-600 hover:underline">Política de Privacidad</a> y{' '}
              <a href="#" className="text-red-600 hover:underline">Términos de Servicio</a> de Google.
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Selección de monto (vista inicial)
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Selector de tipo de donación */}
      <div className="flex">
        <button
          onClick={() => setDonationType('once')}
          className={`flex-1 py-4 px-6 font-semibold text-center transition-colors ${
            donationType === 'once'
              ? 'bg-white text-gray-800 border-b-2 border-red-500'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          DONAR UNA VEZ
        </button>
        <button
          onClick={() => setDonationType('monthly')}
          className={`flex-1 py-4 px-6 font-semibold text-center transition-colors ${
            donationType === 'monthly'
              ? 'bg-yellow-400 text-gray-800 border-b-2 border-red-500'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          MENSUAL
        </button>
      </div>

      {/* Contenido principal */}
      <div className="p-6 bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          {donationType === 'once' 
            ? 'Elige un monto para donar una vez' 
            : 'Elige un monto para donar por mes'
          }
        </h3>

        {/* Grid de montos */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {currentAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              className={`py-4 px-4 rounded-lg font-semibold text-lg transition-all ${
                selectedAmount === amount
                  ? 'bg-yellow-400 text-gray-800 shadow-md transform scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              ${amount}
              <span className="text-sm font-normal ml-1">
                USD{donationType === 'monthly' ? '/mes' : ''}
              </span>
            </button>
          ))}
        </div>

        {/* Campo de monto personalizado */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="number"
              placeholder="Otro monto"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className={`w-full py-4 px-4 rounded-lg text-center font-semibold text-lg border-2 transition-colors ${
                customAmount
                  ? 'border-yellow-400 bg-white text-gray-800'
                  : 'border-gray-300 bg-gray-200 text-gray-500'
              }`}
            />
            {customAmount && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                USD{donationType === 'monthly' ? '/mes' : ''}
              </span>
            )}
          </div>
        </div>

        {/* Botón de donación */}
        <button
          onClick={handleDonate}
          disabled={!selectedAmount && !customAmount}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
            selectedAmount || customAmount
              ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800 shadow-md'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          ÚNETE HOY
        </button>

        {/* Mensaje de impacto */}
        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 text-center leading-relaxed">
            {getImpactMessage()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationCards;