import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

// Datos de ejemplo
const dataPagos = [
  { name: "Enero", total: 400 },
  { name: "Febrero", total: 300 },
  { name: "Marzo", total: 500 },
];

const dataMetodos = [
  { name: "Plux", value: 450 },
  { name: "Tarjeta", value: 300 },
  { name: "Efectivo", value: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ResumenGeneral() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Resumen General
          </h1>
          <p className="text-slate-600">
            Visualización de pagos y métodos de pago
          </p>
        </div>

        {/* Grid de gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pagos por mes (BarChart) */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-slate-800">
                Pagos por Mes
              </h2>
              <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataPagos}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#64748b' }}
                    axisLine={{ stroke: '#cbd5e1' }}
                  />
                  <YAxis 
                    tick={{ fill: '#64748b' }}
                    axisLine={{ stroke: '#cbd5e1' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar 
                    dataKey="total" 
                    fill="#3b82f6" 
                    radius={[8, 8, 0, 0]}
                    animationDuration={1000}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Métodos de pago (PieChart) */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-slate-800">
                Métodos de Pago
              </h2>
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataMetodos}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent as number * 100).toFixed(0)}%`}
                    animationDuration={1000}
                  >
                    {dataMetodos.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {/* Leyenda personalizada */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {dataMetodos.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm text-slate-600 font-medium">
                    {item.name}: ${item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards de estadísticas adicionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-blue-100 text-sm font-medium mb-1">Total Recaudado</p>
            <p className="text-3xl font-bold">$1,200</p>
            <p className="text-blue-100 text-xs mt-2">↑ 12% vs mes anterior</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-green-100 text-sm font-medium mb-1">Transacciones</p>
            <p className="text-3xl font-bold">156</p>
            <p className="text-green-100 text-xs mt-2">↑ 8% vs mes anterior</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg p-6 text-white">
            <p className="text-amber-100 text-sm font-medium mb-1">Promedio por Pago</p>
            <p className="text-3xl font-bold">$7.69</p>
            <p className="text-amber-100 text-xs mt-2">→ Similar al mes anterior</p>
          </div>
        </div>
      </div>
    </div>
  );
}