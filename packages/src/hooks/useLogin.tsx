import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();``

  const login = async (data: LoginData): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
        console.log("Los datos estan aqui", data);
        
      const response = "test" as any// Ajusta la URL a tu backend
      navigate("/app-intranet");
      setLoading(false);
      return response.status === 200; // Devuelve true si login fue exitoso
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "Error desconocido");
      return false;
    }
  };

  return { login, loading, error };
};
