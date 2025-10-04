
export const FormsOng = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
            Formulario de Metas ONG - 2024
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meta establecida */}
            <div className="col-span-2">
              <label
                htmlFor="meta2024"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Meta establecida para el 2024
              </label>
              <input
                type="text"
                id="meta2024"
                name="meta2024"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Describe la meta general para 2024"
              />
            </div>

            {/* Asistencias */}
            <div>
              <label
                htmlFor="asistencias"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Asistencias a personas con alimentos, cuidado y/o guía en nutrición (#)
              </label>
              <input
                type="number"
                id="asistencias"
                name="asistencias"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Número de asistencias"
                min={0}
              />
            </div>

            {/* Personas capacitadas */}
            <div>
              <label
                htmlFor="personasCapacitadas"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Personas capacitadas e informadas en aspectos críticos de nutrición (#)
              </label>
              <input
                type="number"
                id="personasCapacitadas"
                name="personasCapacitadas"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Número de personas capacitadas"
                min={0}
              />
            </div>

            {/* Horas de capacitación */}
            <div>
              <label
                htmlFor="horasCapacitacion"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Horas de Capacitación en nutrición
              </label>
              <input
                type="number"
                id="horasCapacitacion"
                name="horasCapacitacion"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Total de horas"
                min={0}
              />
            </div>

            {/* Avance cocinas */}
            <div>
              <label
                htmlFor="avanceCocinas"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Avance en el proyecto de construcción de cocinas (%)
              </label>
              <input
                type="number"
                id="avanceCocinas"
                name="avanceCocinas"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Porcentaje de avance"
                min={0}
                max={100}
              />
            </div>

            {/* Mujeres beneficiadas */}
            <div>
              <label
                htmlFor="mujeresNinas"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Mujeres y Niñas beneficiadas (#)
              </label>
              <input
                type="number"
                id="mujeresNinas"
                name="mujeresNinas"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Número de beneficiarias"
                min={0}
              />
            </div>

            {/* Botón enviar */}
            <div className="col-span-2 flex justify-end pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all"
              >
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
