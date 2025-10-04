import React from 'react';

export const WhyDonateBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Pregunta principal */}
        <h3 className="text-blue-400 text-lg font-medium mb-6 uppercase tracking-wide">
          ¿Por qué donar?
        </h3>
        
        {/* Mensaje principal */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Nuestra misión es mejorar
        </h1>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          la calidad de vida
        </h1>
        
        {/* Subtítulo */}
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
          de las personas vulnerables en el Ecuador
        </h2>
        
        {/* Llamada a la acción */}
        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          a través de 5 ejes de acción:
        </p>
      </div>
    </div>
  );
};