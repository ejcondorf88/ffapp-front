import { useState } from "react";

interface ONG {
  id: number;
  nombre: string;
}

const ONGS: ONG[] = [
  { id: 1, nombre: "Banco de Alimentos de Quito (BAQ)" },
  { id: 2, nombre: "Programa Mundial de Alimentos (PMA)" },
  { id: 3, nombre: "REDNI" },
  { id: 4, nombre: "Banco de Alimentos de Cuenca (BAAC)" },
  { id: 5, nombre: "Fundación Acción Social" },
  { id: 6, nombre: "Cruz Roja Ecuatoriana" },
];

const FILTROS = [
  "Nutrición",
  "Educación",
  "Emprendimiento",
  "Ambiente",
  "Equidad de Género",
  "Respuesta a Emergencias",
];

export const FacturaONG = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedONG, setSelectedONG] = useState<ONG | null>(null);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const KPI = [
    { id: 1, nombre: "Nutrición", cumple: true },
    { id: 2, nombre: "Educación", cumple: false },
    { id: 3, nombre: "Emprendimiento", cumple: true },
    { id: 4, nombre: "Ambiente", cumple: true },
    { id: 5, nombre: "Equidad de Género", cumple: false },
    { id: 6, nombre: "Respuesta a Emergencias", cumple: true },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Factura ONG</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna de Filtros */}
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Filtros</h2>
          <div className="space-y-2">
            {FILTROS.map((filter) => (
              <label key={filter} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter)}
                  onChange={() => toggleFilter(filter)}
                  className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">{filter}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Columna de ONGs */}
        <div className="bg-gray-50 p-4 rounded-lg shadow col-span-1 md:col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Organizaciones</h2>
          <ul className="space-y-2">
            {ONGS.map((ong) => (
              <li
                key={ong.id}
                className={`p-2 rounded cursor-pointer ${
                  selectedONG?.id === ong.id
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedONG(ong)}
              >
                {ong.nombre}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna de KPI */}
        <div className="bg-gray-50 p-4 rounded-lg shadow col-span-1 md:col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">KPI</h2>
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 border text-left">Indicador</th>
                <th className="px-3 py-2 border text-center">Cumple</th>
              </tr>
            </thead>
            <tbody>
              {KPI.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border">{item.nombre}</td>
                  <td className="px-3 py-2 border text-center">
                    {item.cumple ? (
                      <span className="text-green-600 font-semibold">Sí</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
