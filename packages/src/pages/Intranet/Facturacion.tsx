import { useState } from 'react';

interface ONG {
  id: number;
  nombre: string;
}

// Retrieve user from localStorage and ensure it’s a string
const userOng = localStorage.getItem('user') || 'Usuario Desconocido';

// Initialize ONGS array with the user name
const ONGS: ONG[] = [
  { id: 1, nombre: userOng },
];

export const Facturacion = () => {
  const [selectedONG, setSelectedONG] = useState<ONG | null>(ONGS[0] || null); // Default to first ONG
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Por favor selecciona un archivo PDF válido.' });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedONG || !selectedFile) {
      setMessage({ type: 'error', text: 'Por favor selecciona una ONG y un archivo PDF.' });
      return;
    }

    setIsUploading(true);
    setMessage(null);

    try {
      // Simulate a delay for loading effect (e.g., 2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('organizacion', selectedONG.nombre);

      const response = await fetch('/api/facturas/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        await response.json();
        setMessage({ type: 'success', text: 'Factura guardada exitosamente.' });
        setSelectedFile(null);
        setSelectedONG(ONGS[0] || null); // Reset to default ONG
        const fileInput = document.getElementById('pdf-file') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.message || 'Error al guardar la factura.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error de conexión. Inténtalo de nuevo.' });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Módulo de Facturación</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Selector de ONG */}
        <div>
          <label htmlFor="ong-select" className="block text-sm font-medium text-gray-700 mb-2">
            Seleccionar Organización
          </label>
          <select
            id="ong-select"
            value={selectedONG?.id || ''}
            onChange={(e) => {
              const ongId = parseInt(e.target.value);
              const ong = ONGS.find((o) => o.id === ongId);
              setSelectedONG(ong || null);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            disabled={isUploading} // Disable during upload
          >
            <option value="">Selecciona una ONG...</option>
            {ONGS.map((ong) => (
              <option key={ong.id} value={ong.id}>
                {ong.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Upload de archivo PDF */}
        <div>
          <label htmlFor="pdf-file" className="block text-sm font-medium text-gray-700 mb-2">
            Subir Factura (PDF)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
            <div className="space-y-1 text-center">
              {isUploading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-12 w-12 text-blue-600"
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
              ) : (
                <>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="pdf-file"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Subir archivo</span>
                      <input
                        id="pdf-file"
                        name="pdf-file"
                        type="file"
                        accept=".pdf"
                        className="sr-only"
                        onChange={handleFileChange}
                        disabled={isUploading} // Disable during upload
                      />
                    </label>
                    <p className="pl-1">o arrastra y suelta aquí</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF hasta 10MB</p>
                </>
              )}
            </div>
          </div>
          {selectedFile && !isUploading && (
            <div className="mt-2 text-sm text-green-600">
              ✓ Archivo seleccionado: {selectedFile.name}
            </div>
          )}
        </div>

        {/* Mensaje de estado */}
        {message && (
          <div
            className={`p-4 rounded-md ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-green-50 text-green-800 border border-green-200'
            }`}
          >
            {'Enviado'}
          </div>
        )}

        {/* Botón de envío */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isUploading || !selectedONG || !selectedFile}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isUploading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                Guardando...
              </span>
            ) : (
              'Guardar Factura'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};