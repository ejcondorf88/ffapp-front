import React from 'react';

export const ImpactoSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna Izquierda */}
          <div className="space-y-8">
            {/* Squiggle decorativo */}
            <div className="flex justify-start mb-6">
              <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8c4-8 8 8 12 0s8 8 12 0 8 8 12 0 8 8 12 0 8 8 12 0" stroke="#E53935" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            {/* Título principal */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Impactamos en el ciclo de<br />
                <span className="text-red-600">vida de las personas</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Somos un actor relevante de la sociedad, la fundación líder del país en{' '}
                <span className="font-bold">articulación y fortalecimiento de iniciativas que promueven la sostenibilidad del Ecuador.</span>
                {' '}Nos alineamos a los Objetivos de Desarrollo Sostenible en cada uno de nuestros ejes de acción.
              </p>
              <p className="text-gray-900 font-bold">
                ¡Trabajamos localmente para impactar globalmente!
              </p>
            </div>

            {/* Impacto Directo */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">Impacto directo:</h3>
              <div className="space-y-4">
                <img 
                  src="/images/ImpactoDirecto.png" 
                  alt="Objetivos de Desarrollo Sostenible - Impacto Directo"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>

            {/* Impacto Indirecto */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Impacto indirecto:</h3>
              <div className="space-y-4">
                <img 
                  src="/images/ImpactoIndirecto.png" 
                  alt="Objetivos de Desarrollo Sostenible - Impacto Indirecto"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="bg-gray-100 rounded-2xl p-8">
            {/* Estadística principal */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Nuestros resultados en 2023
              </h3>
              <div className="mb-6">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  270,000
                </div>
                <div className="text-sm md:text-base font-semibold text-gray-700 uppercase tracking-wide">
                  PERSONAS CON MEJOR CALIDAD DE VIDA
                </div>
              </div>
            </div>

            {/* Sección QR */}
            <div className="text-center">
              <h4 className="text-xl md:text-2xl font-bold text-red-600 mb-6">
                Conoce más sobre nuestra gestión:
              </h4>
              <div className="flex justify-center">
                <img 
                  src="/images/QRresultados.png" 
                  alt="Código QR para conocer más sobre nuestra gestión"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};