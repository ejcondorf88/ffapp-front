import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const topBarHeight = 60; // px
  const mainHeaderHeight = 120; // px - aumentado para más espacio
  const maxWidth = 1150; // px - aumentado para más ancho

  // Función para manejar navegación inteligente
  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // Si estamos en la página principal, hacer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 140;
        const elementPosition = element.offsetTop - headerOffset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Si estamos en otra página, navegar a la página principal y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 140;
          const elementPosition = element.offsetTop - headerOffset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Pequeño delay para asegurar que la página se cargue
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full">
        {/* Franja superior (estática) */}
        <div className="relative bg-gray-50">
          {/* Background overlay */}
          <div className="elementor-background-overlay absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
          
          <div
            className="relative flex justify-between items-center text-sm px-6 mx-auto text-gray-600 z-10"
            style={{ height: `${topBarHeight}px`, maxWidth: `${maxWidth}px` }}
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Mail size={16} className="text-red-600" />
                fundacionfavorita@favorita.com
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <MapPin size={16} className="text-red-600" />
                Av. General Enríquez vía Cotogchoa
              </span>
            </div>
            <div className="flex gap-3 text-red-600">
              <a href="https://www.facebook.com/FundacionFavoritaEc" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/FundFavoritaEC" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://ec.linkedin.com/in/fundación-favorita-ec-53b71624b/en" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/fundacionfavoritaec/" target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bloque principal FIXED con ancho limitado y centrado */}
        <div
          className={`fixed z-50 bg-white shadow-md transition-all duration-300 ease-in-out`}
          style={{
            top: isSticky ? 0 : `${topBarHeight}px`,
            height: `${mainHeaderHeight}px`,
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: `${maxWidth}px`,
            width: "100%",
            borderRadius: "1rem", // rounded-xl - todos los bordes redondeados
          }}
        >
          <div
            className="flex justify-between items-center w-full h-full"
            style={{
              paddingTop: isSticky ? "15px" : "30px",
              paddingBottom: isSticky ? "15px" : "30px",
              paddingLeft: "16px", // Logo más cerca del borde izquierdo
              paddingRight: "24px",
              transition: "padding 0.3s ease-in-out",
            }}
          >
            {/* Logo */}
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  // Si estamos en HomePage, scroll al top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  // Si estamos en otra página, navegar a HomePage
                  navigate('/');
                }
              }}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src="/images/LogoFavorita.png"
                alt="Fundación Favorita"
                className="w-auto object-contain"
                style={{ maxHeight: "95px", maxWidth: "450px" }}
              />
            </button>

            {/* Menú Desktop con separadores */}
            <nav
              aria-label="Menú principal"
              className="hidden lg:flex text-gray-700 font-medium justify-center flex-1 mx-6 text-sm"
            >
              {[
                { to: "sobre", label: "Sobre Fundación Favorita", isScroll: true },
                { to: "ejes-trabajo", label: "Ejes de trabajo", isScroll: true },
                { to: "impacto", label: "Nuestro impacto", isScroll: true },
                { to: "respaldo", label: "Nuestro respaldo", isScroll: true },
                { to: "testimonios", label: "Testimonios", isScroll: true },
                { to: "/donaciones", label: "¡Dona aquí!", isDonation: true },
              ].map(({ to, label, isDonation, isScroll }, index, arr) => (
                <span key={to} className="flex items-center">
                  {isScroll ? (
                    <button
                      onClick={() => handleNavigation(to)}
                      className={`font-medium transition-colors ${
                        isDonation
                          ? "text-red-600 font-semibold hover:text-red-700"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      to={to}
                      className={`font-medium transition-colors ${
                        isDonation
                          ? "text-red-600 font-semibold hover:text-red-700"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                      onClick={() => {
                        if (isDonation) {
                          // Para donaciones, scroll al top después de navegar
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                    >
                      {label}
                    </Link>
                  )}
                  {index < arr.length - 1 && (
                    <span className="mx-4 select-none text-gray-400">|</span>
                  )}
                </span>
              ))}
            </nav>

            {/* Botón menú móvil */}
            <button
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="lg:hidden flex items-center px-3 py-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="flex flex-col py-6 px-12">
                {[
                  { to: "sobre", label: "Sobre Fundación Favorita", isScroll: true },
                  { to: "ejes-trabajo", label: "Ejes de trabajo", isScroll: true },
                  { to: "impacto", label: "Nuestro impacto", isScroll: true },
                  { to: "respaldo", label: "Nuestro respaldo", isScroll: true },
                  { to: "testimonios", label: "Testimonios", isScroll: true },
                  { to: "/donaciones", label: "¡Dona aquí!", isDonation: true },
                ].map(({ to, label, isDonation, isScroll }) => (
                  isScroll ? (
                    <button
                      key={to}
                      onClick={() => {
                        handleNavigation(to);
                        setIsMenuOpen(false);
                      }}
                      className={`py-3 border-b border-gray-100 font-medium transition-colors text-left ${
                        isDonation
                          ? "text-red-600 font-semibold hover:text-red-700"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      key={to}
                      to={to}
                      className={`py-3 border-b border-gray-100 font-medium transition-colors ${
                        isDonation
                          ? "text-red-600 font-semibold hover:text-red-700"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        if (isDonation) {
                          // Para donaciones, scroll al top después de navegar
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }, 100);
                        }
                      }}
                    >
                      {label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Espacio para que el contenido no quede oculto debajo del header fijo */}
      <div className="relative w-full">
        {/* Background overlay que cubre toda la anchura */}
        <div className="elementor-background-overlay absolute inset-0 w-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
        
        <div
          className="relative mx-auto px-6 z-10"
          style={{ paddingTop: `${topBarHeight + mainHeaderHeight}px`, maxWidth: `${maxWidth}px` }}
        >
          {/* Aquí va el contenido principal de la página */}
        </div>
      </div>
    </>
  );
};
