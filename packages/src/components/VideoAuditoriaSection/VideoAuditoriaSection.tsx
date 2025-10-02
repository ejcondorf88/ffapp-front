import React, { useState } from 'react';

export const VideoAuditoriaSection: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoUrl = 'https://fundacionfavorita.org/wp-content/uploads/2023/01/TESTIMONIO-FUNDACION-FAVORITA-ALTA-SUBTI-baja.mp4';

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      {/* Sección superior con video - fondo oscuro */}
      <section id="testimonios" className="bg-gray-900 py-16 relative overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          {/* Aquí se puede agregar una imagen de fondo si se desea */}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Columna Izquierda - Contenido */}
            <div className="relative">
              {/* Squiggle decorativo */}
              <div className="flex justify-start mb-6">
                <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8c4-8 8 8 12 0s8 8 12 0 8 8 12 0 8 8 12 0 8 8 12 0" stroke="#E53935" strokeWidth="4" strokeLinecap="round" fill="none"/>
                </svg>
              </div>

              {/* Título principal */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestro sueño puede replicarse y{' '}
                <span className="text-red-500 font-bold">multiplicarse con la ayuda de todos.</span>
              </h2>
              
              <p className="text-white text-lg leading-relaxed mb-8">
                Queremos sumar esfuerzos, manos y corazones de quienes, al igual que nosotros, sueñan con un mejor futuro.
              </p>
            </div>

            {/* Columna Derecha - Container del video */}
            <div className="relative">
              {/* Container del video con fondo gris */}
              <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video shadow-2xl cursor-pointer group" onClick={openVideoModal}>
                {/* Video como thumbnail */}
                <video
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                  src={videoUrl}
                  poster="" // Se puede agregar un poster image si se desea
                >
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Overlay oscuro para mejor contraste */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Botón de reproducción centrado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="inline-flex items-center justify-center w-20 h-20 bg-red-500 hover:bg-red-600 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                    aria-label="Reproducir video"
                  >
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección inferior - Información de auditoría */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-4xl w-full">
              <div className="flex items-center justify-between gap-6">
                <p className="text-gray-700 text-xl font-medium flex-1">
                  Los estados financieros de Fundación Favorita son auditados por:
                </p>
                {/* Logo de PWC */}
                <div className="flex-shrink-0">
                  <img 
                    src="./images/Pwc.png" 
                    alt="PWC Logo" 
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      console.log('Error cargando imagen PWC:', e);
                      // Fallback: mostrar texto si la imagen no carga
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'block';
                      }
                    }}
                    onLoad={() => {
                      console.log('Imagen PWC cargada correctamente');
                    }}
                  />
                  {/* Fallback texto si la imagen no carga */}
                  <div className="hidden bg-red-500 text-white px-6 py-3 rounded font-bold text-lg">
                    PWC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Video */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full aspect-video">
            {/* Botón cerrar */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
              aria-label="Cerrar video"
            >
              ✕
            </button>

            {/* Container del video */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src={videoUrl}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoAuditoriaSection;