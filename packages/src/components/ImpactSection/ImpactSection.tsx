import React from 'react';
import { DonationCards } from '../DonationCards/DonationCards';

export const ImpactSection: React.FC = () => {
  return (
    <div className="bg-yellow-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Contenido informativo */}
          <div className="text-center lg:text-left">
            {/* Estadística principal */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Un futuro con más oportunidades comienza con tu ayuda
              </h1>
            </div>

            {/* Descripción */}
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              La desigualdad de oportunidades es una barrera para miles de personas en nuestro país. 
              Con tu apoyo, podemos romper este ciclo y construir un futuro más justo para todos. 
              Tu contribución es clave para brindar nutrición, educación y emprendimiento, especialmente 
              a niños, niñas y mujeres.
            </p>

            {/* Sección de confianza - 100% */}
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="text-4xl font-bold text-red-500 mr-4">100%</div>
                <div className="text-left">
                  <p className="text-sm text-gray-600 mb-1">
                    Gracias al respaldo de generosos donantes, los gastos operativos de nuestra fundación están cubiertos.
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Esto asegura que la <strong>totalidad de tu donación</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    llegue directamente a las comunidades que más lo necesitan, transformando vidas y creando un impacto duradero.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario de donación */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <DonationCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};