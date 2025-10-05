import { useState } from "react";

interface ONG {
  id: number;
  nombre: string;
  filtros: string[];
  kpi: "Sí" | "No";
}

const ONGS: ONG[] = [
  { id: 1, nombre: "Banco de Alimentos de Quito (BAQ)", filtros: ["Nutrición"], kpi: "Sí" },
  { id: 2, nombre: "Programa Mundial de Alimentos (PMA)", filtros: ["Nutrición", "Educación"], kpi: "Sí" },
  { id: 3, nombre: "REDNI", filtros: ["Emprendimiento", "Equidad de Género"], kpi: "No" },
  { id: 4, nombre: "Banco de Alimentos de Cuenca (BAAC)", filtros: ["Nutrición"], kpi: "Sí" },
  { id: 5, nombre: "Fundación Acción Social", filtros: ["Educación", "Ambiente"], kpi: "No" },
  { id: 6, nombre: "Cruz Roja Ecuatoriana", filtros: ["Respuesta a Emergencias"], kpi: "Sí" },
  { id: 7, nombre: "Fundación Telefónica Ecuador", filtros: ["Educación"], kpi: "Sí" },
  { id: 8, nombre: "Fundación Holcim Ecuador", filtros: ["Ambiente"], kpi: "No" },
  { id: 9, nombre: "Fundación Esquel", filtros: ["Equidad de Género"], kpi: "Sí" },
  { id: 10, nombre: "Fundación Futuro", filtros: ["Nutrición"], kpi: "No" },
  { id: 11, nombre: "Fundación Crisfe", filtros: ["Educación"], kpi: "Sí" },
  { id: 12, nombre: "Fundación Ecuador", filtros: ["Emprendimiento"], kpi: "No" },
  { id: 13, nombre: "Fundación Nobis", filtros: ["Ambiente"], kpi: "Sí" },
  { id: 14, nombre: "Fundación Raíz", filtros: ["Equidad de Género"], kpi: "No" },
  { id: 15, nombre: "Fundación TASE", filtros: ["Educación"], kpi: "Sí" },
  { id: 16, nombre: "Fundación VASE", filtros: ["Nutrición"], kpi: "No" },
  { id: 17, nombre: "Fundación Hogar de Cristo", filtros: ["Respuesta a Emergencias"], kpi: "Sí" },
  { id: 18, nombre: "Fundación María Amor", filtros: ["Equidad de Género"], kpi: "Sí" },
  { id: 19, nombre: "Fundación Niños de la Calle", filtros: ["Educación"], kpi: "No" },
  { id: 20, nombre: "Fundación Sembrar", filtros: ["Ambiente"], kpi: "Sí" },
  { id: 21, nombre: "Fundación Ayuda en Acción", filtros: ["Educación"], kpi: "No" },
  { id: 22, nombre: "Fundación Plan Internacional", filtros: ["Equidad de Género"], kpi: "Sí" },
  { id: 23, nombre: "Fundación CARE", filtros: ["Nutrición"], kpi: "No" },
  { id: 24, nombre: "Fundación World Vision", filtros: ["Educación"], kpi: "Sí" },
  { id: 25, nombre: "Fundación Aldeas SOS", filtros: ["Equidad de Género"], kpi: "No" },
  { id: 26, nombre: "Fundación Fe y Alegría", filtros: ["Educación"], kpi: "Sí" },
  { id: 27, nombre: "Fundación Salesiana", filtros: ["Emprendimiento"], kpi: "No" },
  { id: 28, nombre: "Fundación Marista", filtros: ["Educación"], kpi: "Sí" },
  { id: 29, nombre: "Fundación Don Bosco", filtros: ["Respuesta a Emergencias"], kpi: "No" },
  { id: 30, nombre: "Fundación San José", filtros: ["Ambiente"], kpi: "Sí" },
  { id: 31, nombre: "Fundación San Vicente", filtros: ["Nutrición"], kpi: "No" },
  { id: 32, nombre: "Fundación San Francisco", filtros: ["Equidad de Género"], kpi: "Sí" },
  { id: 33, nombre: "Fundación San Antonio", filtros: ["Emprendimiento"], kpi: "No" },
  { id: 34, nombre: "Fundación San Pedro", filtros: ["Ambiente"], kpi: "Sí" },
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
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedKPI, setSelectedKPI] = useState<string>("");

  // Filtrar ONGs
  const filteredONGs = ONGS.filter((ong) => {
    const filtroOk = selectedFilter ? ong.filtros.includes(selectedFilter) : true;
    const kpiOk = selectedKPI ? ong.kpi === selectedKPI : true;
    return filtroOk && kpiOk;
  });

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Factura ONG</h1>

      {/* Combobox Filtros y KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Filtrar por categoría</label>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option value="">Todos</option>
            {FILTROS.map((filter) => (
              <option key={filter} value={filter}>{filter}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">Filtrar por KPI</label>
          <select
            value={selectedKPI}
            onChange={(e) => setSelectedKPI(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option value="">Todos</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      {/* Lista de ONGs filtradas */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Organizaciones que cumplen los criterios</h2>
        {filteredONGs.length === 0 ? (
          <p className="text-gray-500">No hay organizaciones que cumplan los filtros seleccionados.</p>
        ) : (
          <ul className="space-y-2">
            {filteredONGs.map((ong) => (
              <li key={ong.id} className="p-2 rounded bg-blue-50 text-blue-700 font-medium flex justify-between items-center">
                <span>{ong.nombre}</span>
                <span className={ong.kpi === "Sí" ? "text-green-600" : "text-red-600"}>
                  KPI: {ong.kpi}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
