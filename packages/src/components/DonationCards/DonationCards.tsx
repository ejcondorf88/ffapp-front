import React, { useState } from "react";

type DonationCardsProps = {
  onDonate: (monto: number) => void;
};

export const DonationCards: React.FC<DonationCardsProps> = ({ onDonate }) => {
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const onceAmounts = [50, 100, 150, 200];
  const monthlyAmounts = [10, 20, 40, 100];
  const currentAmounts = donationType === "once" ? onceAmounts : monthlyAmounts;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = selectedAmount ?? parseFloat(customAmount);
    if (amount && !isNaN(amount) && amount > 0) {
      onDonate(amount);
    }
  };

  const getImpactMessage = () => {
    const amount = (selectedAmount ?? parseFloat(customAmount)) || 0;
    if (donationType === "monthly" && amount >= 40) {
      return `Tu donación de $${amount.toFixed(2)} mensual puede ayudar a ${Math.floor(
        amount / 3.33
      )} personas cada año con nuestros programas sociales.`;
    } else if (donationType === "once" && amount >= 50) {
      return `Tu donación de $${amount.toFixed(2)} puede beneficiar directamente a ${Math.floor(
        amount / 12
      )} familias con nuestros programas de nutrición, educación y emprendimiento.`;
    }
    return "Selecciona un monto para ver el impacto de tu donación.";
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Selector de tipo de donación */}
      <div className="flex">
        <button
          type="button"
          onClick={() => setDonationType("once")}
          className={`flex-1 py-4 px-6 font-semibold text-center transition-colors ${
            donationType === "once"
              ? "bg-white text-gray-800 border-b-2 border-red-500"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          DONAR UNA VEZ
        </button>
        <button
          type="button"
          onClick={() => setDonationType("monthly")}
          className={`flex-1 py-4 px-6 font-semibold text-center transition-colors ${
            donationType === "monthly"
              ? "bg-yellow-400 text-gray-800 border-b-2 border-red-500"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          MENSUAL
        </button>
      </div>

      {/* Contenido principal */}
      <div className="p-6 bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          {donationType === "once"
            ? "Elige un monto para donar una vez"
            : "Elige un monto para donar por mes"}
        </h3>

        {/* Grid de montos */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {currentAmounts.map((amount) => (
            <button
              type="button"
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              className={`py-4 px-4 rounded-lg font-semibold text-lg transition-all ${
                selectedAmount === amount
                  ? "bg-yellow-400 text-gray-800 shadow-md transform scale-105"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              ${amount}
              <span className="text-sm font-normal ml-1">
                USD{donationType === "monthly" ? "/mes" : ""}
              </span>
            </button>
          ))}
        </div>

        {/* Campo de monto personalizado */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="number"
              placeholder="Otro monto"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className={`w-full py-4 px-4 rounded-lg text-center font-semibold text-lg border-2 transition-colors ${
                customAmount
                  ? "border-yellow-400 bg-white text-gray-800"
                  : "border-gray-300 bg-gray-200 text-gray-500"
              }`}
            />
            {customAmount && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm">
                USD{donationType === "monthly" ? "/mes" : ""}
              </span>
            )}
          </div>
        </div>

        {/* Botón de donación */}
        <button
          type="button"
          onClick={handleDonate}
          disabled={!selectedAmount && !customAmount}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
            selectedAmount || customAmount
              ? "bg-yellow-400 hover:bg-yellow-500 text-gray-800 shadow-md"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Donar
        </button>

        {/* Mensaje de impacto */}
        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 text-center leading-relaxed">
            {getImpactMessage()}
          </p>
        </div>
      </div>
    </div>
  );
};
