import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nuestro respaldo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos with aliados estratégicos con quienes construimos oportunidades para
              aquellos que más lo necesitan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">36</div>
              <p className="text-gray-600">Marcas comerciales de 26 empresas en este sueño</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">26</div>
              <p className="text-gray-600">Organizaciones trabajando para hacerlo realidad</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestro sueño puede replicarse y multiplicarse con la ayuda de todos.
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Queremos sumar esfuerzos, manos y corazones de quienes, al igual que nosotros,
              sueñan con un mejor futuro.
            </p>
            
            {/* Video popup placeholder */}
            <div className="relative inline-block">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center mx-auto">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Ver video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};