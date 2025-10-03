import React from 'react';
import { NavLink } from 'react-router-dom';
import {  User, Settings, LogOut } from 'lucide-react';
import type { SidebarProps } from './types/SidebaProps';


// Debe ser un hook que llame a la api para obtener los items del menu
 const navItems = [
    { path: '/intranet/reportes', label: 'Reportes', icon: <User className="w-5 h-5" /> },
    { path: '/intranet/bi', label: 'BI', icon: <Settings className="w-5 h-5" /> },
    { path: '/intranet/salir', label: 'Salir', icon: <LogOut className="w-5 h-5" /> },
  ];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-red-600 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">App Interna</h2>
        <button onClick={onClose} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full p-2 rounded-md text-sm font-medium ${
                    isActive ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white'
                  }`
                }
                onClick={onClose}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;