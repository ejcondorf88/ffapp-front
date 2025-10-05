import React, { useState } from "react";
import { DonationCards } from "../components";
import { PagoPluxCard } from "../DonationCards/PagoPulxCard"

export const HeroDonaciones: React.FC = () => {
  const [monto, setMonto] = useState<number | null>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-100">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/NiñaSombrero.png"
          alt="Niña con sombrero"
          className="w-full h-full object-cover object-center"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex h-full">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md">
            <DonationCards onDonate={(amount) => setMonto(amount)} />
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2"></div>
      </div>

      {/* Modal de PagoPlux */}
      {monto !== null && (
        <PagoPluxCard
          monto={monto}
          onClose={() => setMonto(null)} // Permite cerrar el modal
        />
      )}
    </div>
  );
};
