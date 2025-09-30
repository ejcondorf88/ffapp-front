import React from 'react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Aliados Ejecutores */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              ALIADOS EJECUTORES
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {/* Placeholder for partner logos */}
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center">
                  <div className="text-gray-400 text-xs text-center">
                    Logo {i + 1}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Partner images from the original site */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <img 
                src="https://fundacionfavorita.org/wp-content/uploads/2023/01/ALIADOS-EJECUTORESDE-FUNDACION-FAVORITA-01.png"
                alt="Aliados Ejecutores 1"
                className="max-w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <img 
                src="https://fundacionfavorita.org/wp-content/uploads/2023/01/ALIADOS-EJECUTORESDE-FUNDACION-FAVORITA-02.png"
                alt="Aliados Ejecutores 2"
                className="max-w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Aliados Aportantes */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              ALIADOS APORTANTES
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <img 
                src="https://fundacionfavorita.org/wp-content/uploads/2023/05/logo-CF-web-FF.png"
                alt="Corporación Favorita"
                className="max-h-24 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <img 
                src="https://fundacionfavorita.org/wp-content/uploads/2023/01/APORTANTE-01.png"
                alt="Aportante"
                className="max-h-24 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Fallback content if images don't load */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Corporación Favorita
                </h3>
                <p className="text-green-600">Principal aliado aportante</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Aliados Corporativos
                </h3>
                <p className="text-green-600">Empresas comprometidas con el cambio social</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};