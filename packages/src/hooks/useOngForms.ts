
import { useState } from 'react';
import type { FormOngData  } from '../types/Data';
import { FormsOngAdapter } from '../adapters/OngAdapter';
interface UseFormsOngReturn {
  loading: boolean;
  error: string | null;
  success: boolean;
  submitForm: (data: FormOngData) => Promise<void>;
  resetStatus: () => void;
}

export const useFormsOng = (adapter: FormsOngAdapter): UseFormsOngReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: FormOngData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await adapter.submitForm(data);
      setSuccess(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? 'Envio Correcto' : 'Envio Correcto';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetStatus = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    loading,
    error,
    success,
    submitForm,
    resetStatus,
  };
};