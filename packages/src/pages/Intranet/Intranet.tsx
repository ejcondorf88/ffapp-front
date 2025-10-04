import { useState } from 'react';
import { Sidebar } from '../../components/SidebBar/SideBar';
import { PowerBIEmbed } from '../../components/PowerBI/PowerBIEmbedProps';
import { FormsOng } from './FormsOng';
import { Facturacion } from './Facturacion';

export const Intranet = () => {
  const user = localStorage.getItem("user");

  // Si es admin, que por defecto cargue dashboard
  const [currentView, setCurrentView] = useState(user === "ONG" ? "formulario-ongs" : "dashboard");
  
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <PowerBIEmbed
            url="https://app.powerbi.com/view?r=eyJrIjoiODI4MWE4ZjUtNTQyMy00MmEyLTljOGMtZDVmZjU1MTcwNTIyIiwidCI6IjhjYTUyZTJiLTFkMjAtNDI3NC05YTEzLWJkNzZlY2NiODFkMSIsImMiOjR9"
            height="600px"
            className="w-full"
          />
        );
      case 'facturacion':
        return <Facturacion />;
      case 'formulario-ongs':
        return <FormsOng />;
      case 'configuracion':
        return <h1 className="text-2xl font-bold text-gray-800">Configuraciones del sistema</h1>;
      default:
        return <p>Seleccione una opción del menú.</p>;
    }
  };

  return (
    <main className="flex h-screen">
      <Sidebar onSelectView={setCurrentView} />
      <section className="flex-1 p-8 overflow-y-auto bg-gray-50">{renderContent()}</section>
    </main>
  );
};
