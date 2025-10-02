import React from 'react';

type ModeloGestionProps = {
  imageUrl?: string;
};

export const ModeloGestion: React.FC<ModeloGestionProps> = ({ imageUrl = '/images/ModeloGestion.png' }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Contenido de texto centrado */}
        <div className="text-center mb-12">
          {/* Squiggle decorativo */}
          <div className="flex justify-center mb-6">
            <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8c4-8 8 8 12 0s8 8 12 0 8 8 12 0 8 8 12 0 8 8 12 0" stroke="#E53935" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Modelo de <span className="text-red-600">gestión</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-6 max-w-4xl mx-auto">
            Buscamos generar un impacto integral en el ciclo de vida de las personas.
          </p>
          
          {/* Texto descriptivo */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto">
            Tenemos un compromiso a largo plazo para ser parte de la solución de los problemas estructurales del Ecuador.
          </p>
        </div>

        {/* Imagen del modelo de gestión */}
        <div className="w-full">
          <img
            src={imageUrl}
            alt="Modelo de gestión"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};