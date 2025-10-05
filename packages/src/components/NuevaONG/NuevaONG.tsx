import { useState } from "react";

interface ParametrosONG {
  id: number;
  nombre: string;
  filtro: string;
  kpis: string[];
}

const FILTROS = [
  "Nutrición",
  "Educación",
  "Emprendimiento",
  "Ambiente",
  "Equidad de Género",
  "Respuesta a Emergencias",
];

export const NuevaONG = () => {
  const [nombre, setNombre] = useState("");
  const [filtro, setFiltro] = useState("");
  const [kpiInput, setKpiInput] = useState("");
  const [kpis, setKpis] = useState<string[]>([]);
  const [ongs, setOngs] = useState<ParametrosONG[]>([]);

  // Agregar KPI a la lista
  const handleAddKPI = () => {
    if (kpiInput.trim() !== "" && !kpis.includes(kpiInput)) {
      setKpis([...kpis, kpiInput]);
      setKpiInput("");
    }
  };

  // Eliminar KPI
  const handleRemoveKPI = (kpi: string) => {
    setKpis(kpis.filter((item) => item !== kpi));
  };

  // Guardar ONG nueva
  const handleAddONG = () => {
    if (!nombre.trim() || !filtro) {
      alert("Debes ingresar un nombre y elegir un eje centralizado.");
      return;
    }

    const nuevaONG: ParametrosONG = {
      id: ongs.length + 1,
      nombre,
      filtro,
      kpis,
    };

    setOngs([...ongs, nuevaONG]);
    setNombre("");
    setFiltro("");
    setKpis([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Agregar Nueva ONG</h1>

      {/* Formulario */}
      <div className="space-y-4 mb-6">
        {/* Nombre ONG */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Nombre de la ONG</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
            placeholder="Ejemplo: Fundación Ejemplar"
          />
        </div>

        {/* Selección de Filtro */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Eje Centralizado</label>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option value="">Seleccione un eje</option>
            {FILTROS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        {/* KPIs dinámicos */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">KPIs</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={kpiInput}
              onChange={(e) => setKpiInput(e.target.value)}
              className="flex-1 border px-3 py-2 rounded-lg"
              placeholder="Ejemplo: KPI de Nutrición"
            />
            <button
              type="button"
              onClick={handleAddKPI}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Agregar
            </button>
          </div>

          {/* Listado de KPIs */}
          <div className="flex flex-wrap gap-2">
            {kpis.map((kpi, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
              >
                {kpi}
                <button
                  type="button"
                  onClick={() => handleRemoveKPI(kpi)}
                  className="text-red-600 font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Botón Guardar */}
        <div>
          <button
            type="button"
            onClick={handleAddONG}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Guardar ONG
          </button>
        </div>
      </div>

      {/* Listado de ONGs creadas */}
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">ONGs Registradas</h2>
        {ongs.length === 0 ? (
          <p className="text-gray-500">No se han agregado ONGs aún.</p>
        ) : (
          <ul className="space-y-2">
            {ongs.map((ong) => (
              <li
                key={ong.id}
                className="p-3 rounded bg-red-50 border border-red-200 flex flex-col gap-1"
              >
                <span className="font-bold text-green-800">{ong.nombre}</span>
                <span className="text-sm text-gray-600">Eje: {ong.filtro}</span>
                <span className="text-sm text-gray-600">
                  KPIs: {ong.kpis.length > 0 ? ong.kpis.join(", ") : "Ninguno"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
