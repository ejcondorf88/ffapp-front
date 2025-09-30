import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gray-50 py-12">
      {/* Background overlay */}
      <div className="elementor-background-overlay absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">
        {/* Columna izquierda */}
        <div className="flex flex-col items-start">
          <img
            src="/images/Sostenibilidad.png"
            alt="Trabajamos por la sostenibilidad del Ecuador"
            className="w-full max-w-2xl object-contain mb-4"
          />

          <p className="text-gray-700 leading-relaxed max-w-lg mb-6">
            Trabajamos para mejorar la calidad de vida de las personas e impactar en 
            espacios fundamentales para el desarrollo del país: nutrición, educación, 
            emprendimiento, ambiente y equidad de género.
          </p>

          <button
            onClick={handleScroll}
            className="flex items-center gap-2 px-6 py-2 border-2 border-red-500 text-black font-bold rounded-xl hover:bg-red-500 hover:text-white transition-colors"
          >
            CONOCE MÁS
            <ArrowDown size={18} />
          </button>
        </div>

        {/* Columna derecha */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/Niñoponcho.png"
            alt="Niño con poncho"
            className="max-h-[480px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};