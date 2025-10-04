import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as EcuadorSVG } from './assets/EcuadorMap.svg';

interface ProvinceData {
  name: string;
  beneficiaries: number;
}

const provincesData: ProvinceData[] = [
{ name: 'Guayas', beneficiaries: 96480 },
{ name: 'Pichincha', beneficiaries: 73190 },
{ name: 'Manabí', beneficiaries: 34030 },
{ name: 'Los Ríos', beneficiaries: 20440 },
{ name: 'Azuay', beneficiaries: 20440 },
{ name: 'El Oro', beneficiaries: 15420 },
{ name: 'Esmeraldas', beneficiaries: 13620 },
{ name: 'Tungurahua', beneficiaries: 12900 },
{ name: 'Chimborazo', beneficiaries: 11510 },
{ name: 'Loja', beneficiaries: 11230 },
{ name: 'Santo Domingo', beneficiaries: 9900 },
{ name: 'Cotopaxi', beneficiaries: 10760 },
{ name: 'Imbabura', beneficiaries: 10280 },
{ name: 'Pastaza', beneficiaries: 2160 },
{ name: 'Santa Elena', beneficiaries: 8620 },
{ name: 'Bolívar', beneficiaries: 4500 },
{ name: 'Carchi', beneficiaries: 4100 },
{ name: 'Cañar', beneficiaries: 4830 },
{ name: 'Orellana', beneficiaries: 3560 },
{ name: 'Morona Santiago', beneficiaries: 4230 },
{ name: 'Napo', beneficiaries: 2900 },
{ name: 'Zamora Chinchipe', beneficiaries: 2460 },
{ name: 'Sucumbíos', beneficiaries: 4760 },
{ name: 'Galápagos', beneficiaries: 720 }
];

export const EcuadorMap: React.FC = () => {
  const [hoveredProvince, setHoveredProvince] = useState<ProvinceData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current;

    const handleMouseEnter = (event: Event) => {
      const target = event.target as SVGElement;
      const provinceName = target.id;
      const province = provincesData.find(p => p.name === provinceName);
      if (province) {
        setHoveredProvince(province);
        // Efecto visual en hover
        target.style.fill = '#ef4444';
        target.style.stroke = '#ffffff';
        target.style.strokeWidth = '2';
        target.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))';
      }
    };

    const handleMouseMove = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      setMousePosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    };

    const handleMouseLeave = (event: Event) => {
      const target = event.target as SVGElement;
      setHoveredProvince(null);
      // Restaurar estilos originales
      target.style.fill = '#dc2626';
      target.style.stroke = '#ffffff';
      target.style.strokeWidth = '1';
      target.style.filter = 'none';
    };

    provincesData.forEach(({ name }) => {
      const provinceElement = svgElement.getElementById(name);
      if (provinceElement) {
        const element = provinceElement as SVGElement;
        // Estilos iniciales
        element.style.cursor = 'pointer';
        element.style.fill = '#dc2626';
        element.style.stroke = '#ffffff';
        element.style.strokeWidth = '1';
        element.style.transition = 'all 0.3s ease';
        
        // Event listeners
        provinceElement.addEventListener('mouseenter', handleMouseEnter);
        provinceElement.addEventListener('mousemove', handleMouseMove);
        provinceElement.addEventListener('mouseleave', handleMouseLeave);
      }
    });

    return () => {
      provincesData.forEach(({ name }) => {
        const provinceElement = svgElement.getElementById(name);
        if (provinceElement) {
          provinceElement.removeEventListener('mouseenter', handleMouseEnter);
          provinceElement.removeEventListener('mousemove', handleMouseMove);
          provinceElement.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  const formatNumber = (num: number) => num.toLocaleString('es-EC');

  const totalBeneficiaries = provincesData.reduce((sum, p) => sum + p.beneficiaries, 0);
  const averageBeneficiaries = Math.round(totalBeneficiaries / provincesData.length);
  const topProvinces = [...provincesData].sort((a, b) => b.beneficiaries - a.beneficiaries).slice(0, 5);
  const maxBeneficiaries = Math.max(...provincesData.map(p => p.beneficiaries));

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Nuestro Impacto en Ecuador
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Conoce cuántas personas hemos beneficiado en cada provincia
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-2xl font-bold text-red-600">
              {formatNumber(totalBeneficiaries)}
            </p>
            <p className="text-sm text-gray-700">
              Total de beneficiarios en todo Ecuador
            </p>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative flex justify-center">
          <EcuadorSVG
            ref={svgRef}
            width={320}
            height={380}
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          {/* Tooltip */}
          {hoveredProvince && (
            <div
              className="fixed z-50 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg pointer-events-none"
              style={{
                left: mousePosition.x + 10,
                top: mousePosition.y - 60,
                transform: 'translateX(-50%)'
              }}
            >
              <div className="text-sm font-semibold mb-1">
                {hoveredProvince.name}
              </div>
              <div className="text-lg font-bold text-yellow-400">
                {formatNumber(hoveredProvince.beneficiaries)}
              </div>
              <div className="text-xs text-gray-300">
                beneficiarios
              </div>
            </div>
          )}
        </div>

        {/* Estadísticas adicionales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Estadísticas generales */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📊 Estadísticas Generales
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Provincias cubiertas:</span>
                <span className="font-semibold text-gray-800">{provincesData.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cobertura nacional:</span>
                <span className="font-semibold text-green-600">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Promedio por provincia:</span>
                <span className="font-semibold text-gray-800">
                  {formatNumber(averageBeneficiaries)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mayor impacto:</span>
                <span className="font-semibold text-red-600">
                  {formatNumber(maxBeneficiaries)}
                </span>
              </div>
            </div>
          </div>

          {/* Top 5 provincias */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🏆 Top 5 Provincias
            </h3>
            <div className="space-y-3">
              {topProvinces.map((province, index) => {
                const percentage = Math.round((province.beneficiaries / totalBeneficiaries) * 100);
                return (
                  <div key={province.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 
                        index === 2 ? 'bg-orange-600' : 'bg-red-500'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-gray-700 font-medium text-sm">{province.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600 text-sm">
                        {formatNumber(province.beneficiaries)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {percentage}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impacto regional */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🌍 Impacto Regional
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Costa</div>
                <div className="font-bold text-2xl text-red-600">
                  {formatNumber(
                    provincesData
                      .filter(p => ['Guayas', 'Manabí', 'El Oro', 'Esmeraldas', 'Los Ríos', 'Santa Elena'].includes(p.name))
                      .reduce((sum, p) => sum + p.beneficiaries, 0)
                  )}
                </div>
                <div className="text-xs text-gray-500">beneficiarios</div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Sierra</div>
                <div className="font-bold text-2xl text-blue-600">
                  {formatNumber(
                    provincesData
                      .filter(p => ['Pichincha', 'Azuay', 'Tungurahua', 'Chimborazo', 'Loja', 'Cotopaxi', 'Imbabura', 'Bolívar', 'Carchi', 'Cañar'].includes(p.name))
                      .reduce((sum, p) => sum + p.beneficiaries, 0)
                  )}
                </div>
                <div className="text-xs text-gray-500">beneficiarios</div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Oriente & Galápagos</div>
                <div className="font-bold text-2xl text-green-600">
                  {formatNumber(
                    provincesData
                      .filter(p => ['Pastaza', 'Orellana', 'Morona Santiago', 'Napo', 'Zamora Chinchipe', 'Sucumbíos', 'Galápagos'].includes(p.name))
                      .reduce((sum, p) => sum + p.beneficiaries, 0)
                  )}
                </div>
                <div className="text-xs text-gray-500">beneficiarios</div>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¡Únete a nuestro impacto!
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Cada donación ayuda a expandir nuestro alcance y beneficiar a más familias ecuatorianas
          </p>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Donar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};
