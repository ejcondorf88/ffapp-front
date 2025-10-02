import React, { useState, useEffect } from 'react';

export const AliadosSection: React.FC = () => {
  // Estados para controlar los carruseles
  const [currentEjecutores, setCurrentEjecutores] = useState(0);
  const [currentAportantes, setCurrentAportantes] = useState(0);

  // Aliados ejecutores - usando imágenes de la carpeta Ejecutores
  const aliadosEjecutores = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    name: `Ejecutor ${i + 1}`,
    logo: `/images/Ejecutores/Ejecutor${i + 1}.png`
  }));

  // Aliados aportantes - usando imágenes de la carpeta Aportantes
  const aliadosAportantes = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    name: `Aportante ${i + 1}`,
    logo: `/images/Aportantes/Aportantes${i + 1}.png`
  }));

  // Funciones para navegar en el carrusel de ejecutores
  const nextEjecutores = () => {
    setCurrentEjecutores((prev) => (prev + 1) % Math.ceil(aliadosEjecutores.length / 3));
  };

  const prevEjecutores = () => {
    setCurrentEjecutores((prev) => (prev - 1 + Math.ceil(aliadosEjecutores.length / 3)) % Math.ceil(aliadosEjecutores.length / 3));
  };

  // Funciones para navegar en el carrusel de aportantes
  const nextAportantes = () => {
    setCurrentAportantes((prev) => (prev + 1) % Math.ceil(aliadosAportantes.length / 3));
  };

  const prevAportantes = () => {
    setCurrentAportantes((prev) => (prev - 1 + Math.ceil(aliadosAportantes.length / 3)) % Math.ceil(aliadosAportantes.length / 3));
  };

  // Carrusel automático para ejecutores
  useEffect(() => {
    const interval = setInterval(() => {
      nextEjecutores();
    }, 5000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [currentEjecutores]);

  // Carrusel automático para aportantes
  useEffect(() => {
    const interval = setInterval(() => {
      nextAportantes();
    }, 5000); // Cambia cada 5 segundos 

    return () => clearInterval(interval);
  }, [currentAportantes]);

  return (
    <>
      <style>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda - Información */}
          <div className="space-y-8">
            {/* Squiggle decorativo */}
            <div className="flex justify-start mb-6">
              <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8c4-8 8 8 12 0s8 8 12 0 8 8 12 0 8 8 12 0 8 8 12 0" stroke="#E53935" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            {/* Título */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestro <span className="font-bold">respaldo</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Contamos con aliados estratégicos con quienes construimos oportunidades para aquellos que más lo necesitan.
              </p>
              <p className="text-gray-900 font-bold text-lg">
                Sumamos a 36 marcas comerciales de 26 empresas en este sueño. Trabajamos con 26 organizaciones para hacerlo realidad.
              </p>
            </div>
          </div>

          {/* Columna Derecha - Carruseles */}
          <div className="space-y-12">
            
            {/* Aliados Ejecutores */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-red-600 uppercase tracking-wide">
                  Aliados Ejecutores
                </h3>
              </div>
              
              {/* Carrusel Ejecutores */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  {/* Botón anterior */}
                  <button 
                    onClick={prevEjecutores}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    aria-label="Anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Contenedor de logos */}
                  <div className="flex-1 overflow-hidden mx-4">
                    <div className="flex justify-center items-center space-x-8">
                      {aliadosEjecutores.slice(currentEjecutores * 3, (currentEjecutores + 1) * 3).map((aliado) => (
                        <div 
                          key={aliado.id} 
                          className="flex-shrink-0 transform transition-all duration-700 ease-out"
                          style={{ 
                            animation: `slideIn 0.6s ease-out both`
                          }}
                        >
                          <img 
                            src={aliado.logo} 
                            alt={aliado.name}
                            className="h-32 w-auto object-contain hover:scale-110 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón siguiente */}
                  <button 
                    onClick={nextEjecutores}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    aria-label="Siguiente"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: Math.ceil(aliadosEjecutores.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentEjecutores(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentEjecutores === index ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Aliados Aportantes */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-red-600 uppercase tracking-wide">
                  Aliados Aportantes
                </h3>
              </div>
              
              {/* Carrusel Aportantes */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  {/* Botón anterior */}
                  <button 
                    onClick={prevAportantes}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    aria-label="Anterior"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Contenedor de logos */}
                  <div className="flex-1 overflow-hidden mx-4">
                    <div className="flex justify-center items-center space-x-8">
                      {aliadosAportantes.slice(currentAportantes * 3, (currentAportantes + 1) * 3).map((aliado) => (
                        <div 
                          key={aliado.id} 
                          className="flex-shrink-0 transform transition-all duration-700 ease-out"
                          style={{ 
                            animation: `slideIn 0.6s ease-out both`
                          }}
                        >
                          <img 
                            src={aliado.logo} 
                            alt={aliado.name}
                            className="h-32 w-auto object-contain hover:scale-110 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón siguiente */}
                  <button 
                    onClick={nextAportantes}
                    className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                    aria-label="Siguiente"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: Math.ceil(aliadosAportantes.length / 3) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAportantes(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentAportantes === index ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};