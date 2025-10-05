import { useState } from 'react';
import { API_URLS } from '../../config/api.ts';

interface ONG {
  id: number;
  nombre: string;
}

const ONGS: ONG[] = [
  { id: 1, nombre: 'Banco de Alimentos de Quito (BAQ)' },
  { id: 2, nombre: 'Programa Mundial de Alimentos (PMA)' },
  { id: 3, nombre: 'REDNI' },
  { id: 4, nombre: 'Banco de Alimentos de Cuenca (BAAC)' },
  { id: 5, nombre: 'Fundación Acción Social' },
  { id: 6, nombre: 'Cruz Roja Ecuatoriana' },
  { id: 7, nombre: 'Fundación Telefónica Ecuador' },
  { id: 8, nombre: 'Fundación Holcim Ecuador' },
  { id: 9, nombre: 'Fundación Esquel' },
  { id: 10, nombre: 'Fundación Futuro' },
  { id: 11, nombre: 'Fundación Crisfe' },
  { id: 12, nombre: 'Fundación Ecuador' },
  { id: 13, nombre: 'Fundación Nobis' },
  { id: 14, nombre: 'Fundación Raíz' },
  { id: 15, nombre: 'Fundación TASE' },
  { id: 16, nombre: 'Fundación VASE' },
  { id: 17, nombre: 'Fundación Hogar de Cristo' },
  { id: 18, nombre: 'Fundación María Amor' },
  { id: 19, nombre: 'Fundación Niños de la Calle' },
  { id: 20, nombre: 'Fundación Sembrar' },
  { id: 21, nombre: 'Fundación Ayuda en Acción' },
  { id: 22, nombre: 'Fundación Plan Internacional' },
  { id: 23, nombre: 'Fundación CARE' },
  { id: 24, nombre: 'Fundación World Vision' },
  { id: 25, nombre: 'Fundación Aldeas SOS' },
  { id: 26, nombre: 'Fundación Fe y Alegría' },
  { id: 27, nombre: 'Fundación Salesiana' },
  { id: 28, nombre: 'Fundación Marista' },
  { id: 29, nombre: 'Fundación Don Bosco' },
  { id: 30, nombre: 'Fundación San José' },
  { id: 31, nombre: 'Fundación San Vicente' },
  { id: 32, nombre: 'Fundación San Francisco' },
  { id: 33, nombre: 'Fundación San Antonio' },
  { id: 34, nombre: 'Fundación San Pedro' }
];

export const Facturacion = () => {
  const [selectedONG, setSelectedONG] = useState<ONG | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; text: string } | null>(null);
  const [showReplaceDialog, setShowReplaceDialog] = useState(false);
  const [pendingUpload, setPendingUpload] = useState<{ file: File; organizacion: string } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Por favor selecciona un archivo PDF válido.' });
    }
  };

  const handleSubmit = async (event: React.FormEvent, reemplazar: boolean = false) => {
    event.preventDefault();
    
    if (!selectedONG || !selectedFile) {
      setMessage({ type: 'error', text: 'Por favor selecciona una ONG y un archivo PDF.' });
      return;
    }

    setIsUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('organizacion', selectedONG.nombre);
      formData.append('reemplazar', reemplazar.toString());

      const response = await fetch(API_URLS.FACTURAS_UPLOAD, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        if (result.reemplazado) {
          setMessage({ type: 'success', text: 'Factura reemplazada exitosamente.' });
          setShowReplaceDialog(false);
          setPendingUpload(null);
        } else {
          setMessage({ type: 'success', text: 'Factura guardada exitosamente.' });
          setShowReplaceDialog(false);
          setPendingUpload(null);
        }
        setSelectedFile(null);
        setSelectedONG(null);
        // Reset file input
        const fileInput = document.getElementById('pdf-file') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else if (response.status === 409 && result.archivo_existente) {
        // Archivo ya existe, mostrar diálogo de reemplazo
        setPendingUpload({ file: selectedFile, organizacion: selectedONG.nombre });
        setShowReplaceDialog(true);
        setMessage({ 
          type: 'warning', 
          text: 'Ya existe un archivo con este nombre. ¿Deseas reemplazarlo?' 
        });
      } else {
        setMessage({ type: 'error', text: result.message || 'Error al guardar la factura.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error de conexión. Inténtalo de nuevo.' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleReplaceConfirm = () => {
    if (pendingUpload) {
      handleSubmit(new Event('submit') as any, true);
    }
  };

  const handleReplaceCancel = () => {
    setShowReplaceDialog(false);
    setPendingUpload(null);
    setMessage({ type: 'info', text: 'Operación cancelada.' });
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
              const ong = ONGS.find(o => o.id === ongId);
              setSelectedONG(ong || null);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
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
                  />
                </label>
                <p className="pl-1">o arrastra y suelta aquí</p>
              </div>
              <p className="text-xs text-gray-500">PDF hasta 10MB</p>
            </div>
          </div>
          {selectedFile && (
            <div className="mt-2 text-sm text-green-600">
              ✓ Archivo seleccionado: {selectedFile.name}
            </div>
          )}
        </div>

        {/* Mensaje de estado */}
        {message && (
          <div className={`p-4 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : message.type === 'warning'
              ? 'bg-yellow-50 text-yellow-800 border border-yellow-200'
              : message.type === 'info'
              ? 'bg-blue-50 text-blue-800 border border-blue-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}

        {/* Diálogo de confirmación de reemplazo */}
        {showReplaceDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Archivo ya existe
              </h3>
              <p className="text-gray-600 mb-6">
                Ya existe un archivo con el mismo nombre para esta organización. 
                ¿Deseas reemplazarlo con el nuevo archivo?
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleReplaceCancel}
                  className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleReplaceConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Reemplazar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Botón de envío */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isUploading || !selectedONG || !selectedFile}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isUploading ? 'Guardando...' : 'Guardar Factura'}
          </button>
        </div>
      </form>
    </div>
  );
};
