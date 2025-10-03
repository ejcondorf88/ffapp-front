import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Intranet/SideBar';

export const Intranet = () => {
  return (
    <div className="flex">
      <Sidebar isOpen={true} onClose={() => {}} />
      <main className="flex-1 ml-64 p-4">
        <Outlet />
      </main>
    </div>
  );
};
