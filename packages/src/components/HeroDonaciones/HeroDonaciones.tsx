import React from 'react';
import { DonationCards } from '../DonationCards/DonationCards';

export const HeroDonaciones: React.FC = () => {
  console.log('HeroDonaciones renderizado');
  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-100">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        {/* Imagen HTML como fondo */}
        <img 
          src="/images/NiñaSombrero.png" 
          alt="Niña con sombrero" 
          className="w-full h-full object-cover object-center"
          onLoad={() => console.log('Imagen cargada exitosamente')}
          onError={(e) => {
            console.log('Error cargando imagen desde /images/NiñaSombrero.png');
            // Probar ruta alternativa
            const target = e.currentTarget as HTMLImageElement;
            if (target.src.includes('/images/')) {
              console.log('Probando ruta alternativa...');
              target.src = './images/NiñaSombrero.png';
            } else if (target.src.includes('./images/')) {
              console.log('Probando segunda ruta alternativa...');
              target.src = '/public/images/NiñaSombrero.png';
            } else {
              console.log('Todas las rutas fallaron, ocultando imagen');
              target.style.display = 'none';
            }
          }}
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex h-full">
        {/* Lado izquierdo - Componente de donaciones */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md">
            <DonationCards />
          </div>
        </div>

        {/* Lado derecho - Espacio para la imagen (visible en pantallas grandes) */}
        <div className="hidden lg:block lg:w-1/2">
          {/* Este espacio permite que la imagen de fondo sea más visible */}
        </div>
      </div>


    </div>
  );
};