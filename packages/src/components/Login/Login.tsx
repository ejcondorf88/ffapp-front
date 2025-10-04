import React, { useState } from "react";

import { useLogin } from "../../hooks/useLogin"; // Hook que crearemos

export const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleLogin = async () => {
    // Validación simple
    if (!email || !password) {
      alert("Ingresa usuario y contraseña");
      return;
    }

    try {
      const success = await login({ email, password });
      if (success) {
        console.log("Prueba")
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error, intenta de nuevo");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-pink px-8 py-12">
        <div className="bg-red-600 p-8 rounded-xl shadow-xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-white mb-6">Por un Futuro Mejor</h1>
          <h2 className="text-xl font-semibold text-white mb-4">Iniciar Sesión</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Usuario</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ejemplo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between text-white">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Recuérdame
              </label>
              <a href="#" className="text-white/80 hover:underline text-sm">
                Olvidaste tu contraseña?
              </a>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-white text-red-600 py-2 px-4 rounded-md hover:bg-gray-100 transition"
            >
              {loading ? "Cargando..." : "Iniciar Sesión"}
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
