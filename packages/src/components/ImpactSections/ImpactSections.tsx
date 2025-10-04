import React, { useState } from 'react';

interface ContentTab {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  stats: {
    number: string;
    description: string;
  };
}

const contentTabs: ContentTab[] = [
  {
    id: 'nutricion',
    title: 'NUTRICIÓN',
    description: 'Promovemos la seguridad alimentaria y nutricional mediante programas que garantizan el acceso a alimentos nutritivos y la educación sobre hábitos alimentarios saludables para familias vulnerables en Ecuador.',
    imageUrl: '/images/nutricion-bg.png', 
    stats: {
      number: '25,000',
      description: 'familias beneficiadas con programas nutricionales'
    }
  },
  {
    id: 'educacion',
    title: 'EDUCACIÓN',
    description: 'Fortalecemos el sistema educativo mediante la construcción y equipamiento de escuelas, formación docente y programas de becas que garantizan el acceso a educación de calidad para niños y jóvenes.',
    imageUrl: '/images/educacion-bg.png', 
    stats: {
      number: '200',
      description: 'escuelas apoyadas en comunidades rurales'
    }
  },
  {
    id: 'emprendimiento',
    title: 'EMPRENDIMIENTO',
    description: 'Impulsamos el desarrollo económico local mediante programas de capacitación, microcréditos y acompañamiento técnico que permiten a las familias generar ingresos sostenibles y mejorar su calidad de vida.',
    imageUrl: '/images/emprendimiento-bg.png', 
    stats: {
      number: '5,000',
      description: 'emprendimientos apoyados y fortalecidos'
    }
  },
  {
    id: 'ambiente',
    title: 'AMBIENTE',
    description: 'Protegemos los recursos naturales y promovemos prácticas sostenibles a través de proyectos de reforestación, gestión de residuos y educación ambiental que contribuyen a la conservación del ecosistema.',
    imageUrl: '/images/ambiente-bg.png',
    stats: {
      number: '15',
      description: 'proyectos ambientales en ejecución'
    }
  },
  {
    id: 'equidad',
    title: 'EQUIDAD DE GÉNERO',
    description: 'Promovemos la igualdad de oportunidades mediante programas de empoderamiento femenino, prevención de violencia de género y liderazgo que fortalecen el rol de la mujer en el desarrollo comunitario.',
    imageUrl: '/images/equidad-bg.png', 
    stats: {
      number: '3,500',
      description: 'mujeres empoderadas en programas de liderazgo'
    }
  }
];

export const ImpactSections: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nutricion');

  const currentContent = contentTabs.find(tab => tab.id === activeTab) || contentTabs[0];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo dinámicamente cambiante */}
      <div className="absolute inset-0">
        <img 
          src={currentContent.imageUrl}
          alt={`Fondo ${currentContent.title}`}
          className="w-full h-full object-cover object-center transition-all duration-500"
          onError={(e) => {
            // Fallback a un color sólido si la imagen no carga
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Botones de navegación superiores */}
        <div className="pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {contentTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-yellow-400 text-gray-800 shadow-lg transform scale-105'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-105'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido principal centrado */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              {currentContent.title}
            </h1>

            {/* Descripción */}
            <div className="bg-white bg-opacity-95 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm">
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
                {currentContent.description}
              </p>

              {/* Estadística destacada */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                      {currentContent.stats.number}
                    </p>
                    <p className="text-gray-700 font-medium">
                      {currentContent.stats.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de acción */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              CONOCE MÁS SOBRE ESTE PROGRAMA
            </button>
          </div>
        </div>

        {/* Indicadores de navegación en la parte inferior */}
        <div className="pb-8">
          <div className="flex justify-center space-x-3">
            {contentTabs.map((tab) => (
              <button
                key={`indicator-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};