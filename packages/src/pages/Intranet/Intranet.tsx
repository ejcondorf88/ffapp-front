import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Intranet/SideBar';
import { ResumenGeneral } from '../../components/Intranet/ResumenGeneral';

export const Intranet = () => {
  return (
    <div className="flex">
      <Sidebar isOpen={true} onClose={() => {}} />
      <main className="flex-1 ml-64 p-4 space-y-6">
        {/* Resumen general con gráficos */}
        <ResumenGeneral />

        {/* Rutas internas */}
        <Outlet />
      </main>
    </div>
  );
};
