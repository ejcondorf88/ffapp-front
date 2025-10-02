import React from 'react';

export const EcuadorSostenible: React.FC = () => {
  return (
    <section id="ejes-trabajo" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Contenido centrado */}
        <div className="text-center">
          {/* Squiggle decorativo */}
          <div className="flex justify-center mb-6">
            <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8c4-8 8 8 12 0s8 8 12 0 8 8 12 0 8 8 12 0 8 8 12 0" stroke="#E53935" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          
          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            ¿Cómo lograr un <span className="text-red-600">Ecuador sostenible?</span>
          </h2>
          
          {/* Primer párrafo */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-6xl mx-auto">
            Llegamos con acciones e iniciativas a miles de personas en todo el país. Articulamos la ejecución de proyectos con quienes 
            mejor sabe hacerlo: nuestros aliados. Con ellos caminamos con una misma visión para transformar vidas y construir un 
            mejor Ecuador.
          </p>
          
          {/* Segundo párrafo con texto destacado */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl mx-auto">
            Trabajamos con <span className="font-bold">26 organizaciones especializadas</span> a nivel nacional en nutrición, educación, emprendimiento, ambiente, 
            equidad de género y respuesta a emergencias.
          </p>
        </div>
      </div>
    </section>
  );
};