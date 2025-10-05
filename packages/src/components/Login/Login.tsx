import React, { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";

interface Toast {
  message: string;
  type: "success" | "error";
  id: number;
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isSimulatedLoading, setIsSimulatedLoading] = useState(false);
  const { login, loading, error } = useLogin();

  // Usar loading simulado o el loading real del hook
  const isLoading = isSimulatedLoading || loading;

  // Function to add a new toast
  const addToast = (message: string, type: "success" | "error") => {
    const id = Date.now(); // Unique ID for each toast
    setToasts((prev) => [...prev, { message, type, id }]);
  };

  // Automatically remove toast after 3 seconds
  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1)); // Remove oldest toast
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const handleLogin = async () => {
    // Validation
    if (!email || !password) {
      addToast("Ingresa usuario y contraseña", "error");
      return;
    }

    try {
      // Activar loading simulado
      setIsSimulatedLoading(true);
      
      // Simulate a 2-second delay for loading effect
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const success = await login({ email, password });
      
      // Desactivar loading simulado
      setIsSimulatedLoading(false);
      
      if (success) {
        addToast("Inicio de sesión exitoso", "success");
        console.log("Prueba");
      } else {
        addToast("Usuario o contraseña incorrectos", "error");
      }
    } catch (err) {
      console.error(err);
      setIsSimulatedLoading(false);
      addToast("Ocurrió un error, intenta de nuevo", "error");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex relative">
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`p-4 rounded-md shadow-lg text-white text-sm transition-all duration-300 transform animate-slide-in ${
              toast.type === "success"
                ? "bg-green-600 border border-green-400"
                : "bg-red-600 border border-red-400"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-pink px-8 py-12">
        <div className="bg-red-600 p-8 rounded-xl shadow-xl max-w-md w-full relative">
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center z-10">
              <svg
                className="animate-spin h-12 w-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}

          <h1 className="text-3xl font-bold text-white mb-6">Por un Futuro Mejor</h1>
          <h2 className="text-xl font-semibold text-white mb-4">Iniciar Sesión</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Usuario</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ejemplo"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="********"
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center justify-between text-white">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" disabled={isLoading} /> Recuérdame
              </label>
              <a href="#" className="text-white/80 hover:underline text-sm">
                Olvidaste tu contraseña?
              </a>
            </div>

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-white text-red-600 py-2 px-4 rounded-md hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Cargando...
                </span>
              ) : (
                "Iniciar Sesión"
              )}
            </button>

            {error && <p className="text-yellow-200 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img
          src="/images/LoginImage.png"
          alt="Login Illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};