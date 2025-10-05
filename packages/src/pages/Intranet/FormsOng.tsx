  import { useState } from 'react';
  import { FormsOngAdapter } from '../../adapters/OngAdapter';
  import { useFormsOng } from '../../hooks/useOngForms';
  import type { FormOngData } from '../../types/Data';

  export const FormsOng = () => {
    const adapter = new FormsOngAdapter('https://api.example.com'); // Reemplaza con tu URL real
    const { loading, error, success, submitForm, resetStatus } = useFormsOng(adapter);

    const [formData, setFormData] = useState<FormOngData>({
      meta2024: '',
      asistencias: 0,
      personasCapacitadas: 0,
      horasCapacitacion: 0,
      avanceCocinas: 0,
      mujeresNinas: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'number' ? parseFloat(value) || 0 : value,
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      resetStatus();

      try {
        await submitForm(formData);
        // Limpiar formulario después del éxito
        setFormData({
          meta2024: '',
          asistencias: 0,
          personasCapacitadas: 0,
          horasCapacitacion: 0,
          avanceCocinas: 0,
          mujeresNinas: 0,
        });
      } catch (err) {
        console.error('Error al enviar:', err);
      }
    };

    return (
      <div className="flex min-h-screen bg-gray-50">
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
              Formulario de Metas ONG - 2024
            </h1>

            {success && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                ✓ Formulario enviado exitosamente
              </div>
            )}

            {error && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                ✓ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta 2024 */}
              <div className="col-span-2">
                <label htmlFor="meta2024" className="block text-sm font-semibold text-gray-700 mb-2">
                  Meta establecida para el 2024
                </label>
                <input
                  type="text"
                  id="meta2024"
                  name="meta2024"
                  value={formData.meta2024}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Describe la meta general para 2024"
                  required
                />
              </div>

              {/* Asistencias */}
              <div>
                <label htmlFor="asistencias" className="block text-sm font-semibold text-gray-700 mb-2">
                  Asistencias a personas con alimentos, cuidado y/o guía en nutrición (#)
                </label>
                <input
                  type="number"
                  id="asistencias"
                  name="asistencias"
                  value={formData.asistencias}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Ej. 150"
                  min="0"
                  required
                />
              </div>

              {/* Personas capacitadas */}
              <div>
                <label htmlFor="personasCapacitadas" className="block text-sm font-semibold text-gray-700 mb-2">
                  Personas capacitadas e informadas en aspectos críticos de nutrición (#)
                </label>
                <input
                  type="number"
                  id="personasCapacitadas"
                  name="personasCapacitadas"
                  value={formData.personasCapacitadas}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Ej. 80"
                  min="0"
                  required
                />
              </div>

              {/* Horas de capacitación */}
              <div>
                <label htmlFor="horasCapacitacion" className="block text-sm font-semibold text-gray-700 mb-2">
                  Horas de capacitación en nutrición
                </label>
                <input
                  type="number"
                  id="horasCapacitacion"
                  name="horasCapacitacion"
                  value={formData.horasCapacitacion}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Ej. 40"
                  min="0"
                  required
                />
              </div>

              {/* Avance en construcción de cocinas */}
              <div>
                <label htmlFor="avanceCocinas" className="block text-sm font-semibold text-gray-700 mb-2">
                  Avance en el proyecto de construcción de cocinas (%)
                </label>
                <input
                  type="number"
                  id="avanceCocinas"
                  name="avanceCocinas"
                  value={formData.avanceCocinas}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Ej. 75"
                  min="0"
                  max="100"
                  required
                />
              </div>

              {/* Mujeres y niñas beneficiadas */}
              <div>
                <label htmlFor="mujeresNinas" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mujeres y niñas beneficiadas (#)
                </label>
                <input
                  type="number"
                  id="mujeresNinas"
                  name="mujeresNinas"
                  value={formData.mujeresNinas}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Ej. 120"
                  min="0"
                  required
                />
              </div>

              <div className="col-span-2 flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar Formulario'}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  };
