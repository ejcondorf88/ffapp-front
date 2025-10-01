import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("info");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gray-50 pt-4 pb-8 overflow-x-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 z-10">
        {/* Columna izquierda */}
        <div className="flex flex-col items-start max-w-lg w-full animate-fadeInLeft">
          <img
            src="/images/Sostenibilidad.png"
            alt="Trabajamos por la sostenibilidad del Ecuador"
            className="w-full object-contain mb-4"
          />

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Trabajamos para mejorar la calidad de vida de las personas e impactar en{" "}
            espacios fundamentales para el desarrollo del país: nutrición, educación,{" "}
            emprendimiento, ambiente y equidad de género.
          </p>

          <button
            onClick={handleScroll}
            className="flex items-center gap-2 px-6 py-2 border-2 border-red-500 text-black font-bold rounded-xl hover:bg-red-500 hover:text-white transition-colors"
            aria-label="Conoce más sobre Fundación Favorita"
          >
            CONOCE MÁS
            <ArrowDown size={18} />
          </button>
        </div>

        {/* Columna derecha */}
        <div className="flex justify-center md:justify-end w-full animate-fadeInRight">
          <img
            src="/images/Niñoponcho.png"
            alt="Niño con poncho"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 800ms ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 800ms ease-out forwards;
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};
