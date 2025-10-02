import React from 'react';

export const DonacionesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Haz una Donación
            </h1>
            <p className="text-xl text-gray-600">
              Tu contribución nos ayuda a seguir construyendo oportunidades para quienes más lo necesitan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Donación Única
              </h3>
              <p className="text-gray-600 mb-6">
                Realiza una contribución puntual para apoyar nuestros programas sociales.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-green-50 border border-green-200 text-green-700 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors">
                    $25
                  </button>
                  <button className="bg-green-50 border border-green-200 text-green-700 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors">
                    $50
                  </button>
                  <button className="bg-green-50 border border-green-200 text-green-700 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors">
                    $100
                  </button>
                  <button className="bg-green-50 border border-green-200 text-green-700 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors">
                    Otro
                  </button>
                </div>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Donar Ahora
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Donación Mensual
              </h3>
              <p className="text-gray-600 mb-6">
                Conviértete en un aliado constante con donaciones recurrentes.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                    $10/mes
                  </button>
                  <button className="bg-blue-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                    $25/mes
                  </button>
                  <button className="bg-blue-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                    $50/mes
                  </button>
                  <button className="bg-blue-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                    Otro
                  </button>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Donar Mensualmente
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Otras formas de ayudar
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Voluntariado</h4>
                <p className="text-gray-600 text-sm">Únete a nuestros programas como voluntario</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Alianzas</h4>
                <p className="text-gray-600 text-sm">Forma parte de nuestros aliados empresariales</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4h10m-10 0V6a1 1 0 011-1h8a1 1 0 011 1v2M7 8v8a1 1 0 001 1h8a1 1 0 001-1V8" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Donaciones en especie</h4>
                <p className="text-gray-600 text-sm">Contribuye con productos o servicios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};