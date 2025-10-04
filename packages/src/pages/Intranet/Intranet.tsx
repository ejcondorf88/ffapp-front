import { useState } from 'react';
import { Sidebar } from '../../components/SidebBar/SideBar';
import { FormsOng } from './FormsOng';
import { Facturacion } from './Facturacion';

export const Intranet = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <h1 className="text-2xl font-bold text-gray-800">Panel principal</h1>;
      case 'facturacion':
        return <Facturacion />;
      case 'formulario-ongs':
        return (
          <FormsOng />
        );
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
