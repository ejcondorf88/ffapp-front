import React, { useState } from 'react';

type AboutSectionProps = {
  videoUrl?: string;
};

export const AboutSection: React.FC<AboutSectionProps> = ({ videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="sobre" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video a la izquierda */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-video shadow-lg">
            {/* Botón de play */}
            <button
              onClick={openModal}
              aria-label="Reproducir video"
              className="group absolute inset-0 flex items-center justify-center focus:outline-none"
            >
              <span className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600 text-white shadow-2xl transition-all group-hover:scale-105 group-hover:bg-red-700">
                <svg className="w-8 h-8 md:w-10 md:h-10 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Tarjeta de texto a la derecha */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                <span className="text-red-600">Somos la fundación que trabaja</span><br />
                <span className="text-gray-900">#PorLaSostenibilidadDelEcuador</span>
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Nuestra visión es lograr un Ecuador sostenible, en donde todas las personas tengan una buena calidad de vida.
                </p>
                <p>
                  Nuestra misión, mejorar la calidad de vida de personas vulnerables en el Ecuador, con acciones de nutrición, educación, emprendimiento, ambiente y equidad de género, a través del apoyo a aliados estratégicos ejecutores, sobre planes de acción concretos.
                </p>
                <p>
                  Lo logramos con el respaldo de las principales empresas a escala nacional, nuestros aliados aportantes, y junto a organizaciones especializadas, nuestros aliados ejecutores, lo hacemos realidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de video */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all"
              aria-label="Cerrar video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video */}
            {videoUrl && (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
                onError={() => {
                  console.error('Error loading video');
                  closeModal();
                }}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
