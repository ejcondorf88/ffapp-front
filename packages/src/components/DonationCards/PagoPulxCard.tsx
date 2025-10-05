import React, { useState, useEffect } from "react";

type PagoPluxCardProps = {
  monto: number;
  onClose: () => void;
};

export const PagoPluxCard: React.FC<PagoPluxCardProps> = ({ monto, onClose }) => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [tipoCuenta, setTipoCuenta] = useState<"ahorros" | "corriente">("ahorros");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleLeido = () => {
    setShowTermsModal(false);
    setShowPaymentForm(true);
  };

  const handleCompletarPago = () => {
    setShowProcessing(true);
    setTimeout(() => {
      setShowProcessing(false);
      setTransactionSuccess(true);
      setTimeout(() => {
        onClose(); // Cierra automáticamente el modal después de 1s
      }, 1000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-3xl h-auto rounded-lg shadow-lg relative p-6">
        {/* Modal Términos */}
        {showTermsModal && (
          <div className="w-full h-full flex flex-col justify-between p-6">
            <p className="text-sm text-justify overflow-auto h-96">
          <h2>Términos y Condiciones de PagoPlux</h2>
          
          <h3>1. Aceptación de los Términos</h3>
            <ul>
                <li>El uso de la aplicación Plux App o sus funciones complementarias implica la aceptación de estos términos y condiciones.</li>
                <li>Al aceptar este acuerdo, el usuario actúa a título personal y no como agente, empleado, socio, aliado comercial o asociado de Plux.</li>
            </ul>
          
          <h3>2. Obligaciones y responsabilidades del usuario</h3>
            <ul>
                <li><strong>Credenciales:</strong> El usuario es responsable de la custodia y confidencialidad de sus credenciales de acceso a la plataforma.</li>
                <li><strong>Información:</strong> El usuario debe mantenerse informado sobre los términos y condiciones, así como de cualquier cambio futuro.</li>
                <li><strong>Datos de clientes:</strong> Debe tomar las medidas de seguridad adecuadas para verificar la veracidad de los datos personales de sus clientes y mantenerlos de forma reservada.</li>
                <li><strong>Datos de tarjetas:</strong> No debe guardar, almacenar ni imprimir los números de tarjetas de crédito o débito, sus fechas de vencimiento ni códigos de seguridad.</li>
                <li><strong>Cuenta bancaria:</strong> Debe designar y mantener operativa una cuenta bancaria para recibir los pagos procesados a través de la plataforma.</li>
                <li><strong>Actividad económica:</strong> Si la actividad económica del usuario cambia, debe comunicarlo a Plux con 30 días de antelación.</li>
            </ul>
          
          <h3>3. Prohibiciones</h3>
            <ul>
                <li><strong>Conducta fraudulenta:</strong> Se prohíbe realizar transacciones que no estén acordes con el acuerdo o la legislación ecuatoriana. Si Plux sospecha de actividades fraudulentas, puede rechazar o suspender la cuenta.</li>
                <li><strong>Cesión de derechos:</strong> Los usuarios no pueden ceder o transferir sus derechos y obligaciones sin el consentimiento previo por escrito de Plux.</li>
            </ul>
          
          <h3>4. Terminación del acuerdo</h3>
            <ul>
                <li>El acuerdo puede ser terminado si el usuario incumple las disposiciones del contrato, viola las políticas internas de Plux o utiliza la plataforma con fines ajenos a su actividad económica registrada.</li>
            </ul>
          
          <h3>5. Atención al cliente</h3>
            <ul>
                <li>Cualquier inquietud o reclamo debe ser comunicado a Plux a través de sus canales oficiales, como el correo electrónico `soporte@plux.ec` o su número de call center `0964282244`.</li>
            </ul>
          
          <h3>6. Disposiciones varias</h3>
            <ul>
                <li><strong>Naturaleza del acuerdo:</strong> El acuerdo es de naturaleza civil y comercial y se rige por las normas civiles y mercantiles ecuatorianas.</li>
                <li><strong>Relación laboral:</strong> Este acuerdo no constituye una relación laboral o patronal entre las partes.</li>
                <li><strong>Normativa vigente:</strong> Ambas partes están obligadas a cumplir con toda la normativa legal aplicable, especialmente la relacionada con protección de datos personales.</li>
            </ul>
        </p>
            <button
              onClick={handleLeido}
              className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-bold flex items-center justify-center mx-auto"
            >
              <img src="./images/PagoPluxLogoPeque.png" className="w-6 h-6 mr-2" alt="" />
              <b>Leído</b>
            </button>
          </div>
        )}

        {/* Registro de pago y formulario */}
        {!showTermsModal && (
          <div className="flex flex-col items-center">
            <div className="text-center mb-6">
              <img src="./images/PagoPluxLogo.png" className="mx-auto w-72" />
              <h3 className="text-xl font-semibold mt-4">Registrar pago recurrente</h3>
            </div>

            <div className="w-full space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="font-medium">Plan:</span>
                <span>{`Plan Donación Mensual ${monto}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Frecuencia:</span>
                <span>Mensual</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Monto Suscripción:</span>
                <span>{monto.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Pago Inicial:</span>
                <span>{monto.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Aplica IVA:</span>
                <span>No</span>
              </div>
            </div>

            {!showPaymentForm && (
              <div className="flex flex-col items-center w-full mb-6">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                    className="w-6 h-6 mr-2"
                  />
                  <span>Aceptar términos y condiciones</span>
                </div>
                <button
                  onClick={() => setShowTermsModal(true)}
                  disabled={!termsChecked}
                  className={`py-3 px-6 rounded-lg font-bold text-white transition-colors ${
                    termsChecked
                      ? "bg-yellow-400 hover:bg-yellow-500 text-gray-800"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <b>Ver Términos y Condiciones</b>
                </button>
              </div>
            )}

            {showPaymentForm && (
              <div className="w-full space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Cédula"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg"
                />
                <select
                  value={tipoCuenta}
                  onChange={(e) => setTipoCuenta(e.target.value as "ahorros" | "corriente")}
                  className="w-full border px-4 py-2 rounded-lg"
                >
                  <option value="ahorros">Ahorros</option>
                  <option value="corriente">Corriente</option>
                </select>
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  value={numeroTarjeta}
                  onChange={(e) => setNumeroTarjeta(e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg"
                />
                <button
                  onClick={handleCompletarPago}
                  disabled={showProcessing}
                  className="w-full py-3 rounded-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-800 flex items-center justify-center"
                >
                  <b>Completar Pago</b>
                </button>
              </div>
            )}
          </div>
        )}

        {showProcessing && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-xl font-bold">
            <div className="flex items-center space-x-4">
              <div className="loader-border w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Realizando transacción...</span>
            </div>
          </div>
        )}

        {transactionSuccess && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
            Transacción exitosa ✅
          </div>
        )}

        {/* Botón cerrar modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-2xl"
        >
          ×
        </button>
      </div>

      <style>
        {`
          .loader-border {
            border-top-color: transparent;
            border-right-color: white;
            border-bottom-color: white;
            border-left-color: white;
          }
        `}
      </style>
    </div>
  );
};
