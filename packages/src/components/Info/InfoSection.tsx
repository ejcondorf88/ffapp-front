import React from 'react';

export const InfoSection: React.FC = () => {
  return (
    <section id="info" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Título a la izquierda */}
          <div>
            <div className="mb-3">
              {/* squiggle */}
              <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8c4-8 8 8 12 0s8 8 12 0 8 8 12 0 8 8 12 0 8 8 12 0" stroke="#E53935" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sobre <span className="text-red-600">Fundación Favorita</span>
            </h2>
          </div>

          {/* Texto descriptivo a la derecha */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              Fundación Favorita nació para asumir y liderar las actividades de valor compartido en las que ha venido trabajando Corporación Favorita desde hace 70 años. Es una organización de segundo piso con una visión nacional y un enfoque integral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};