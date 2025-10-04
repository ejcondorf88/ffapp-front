import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Search,
} from 'lucide-react';

const menuItems = [
  { id: 'home', icon: Home, label: 'Home', path: '/' },
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/intranet/dashboard' },
  { id: 'users', icon: Users, label: 'Users', path: '/intranet/users', badge: '12' },
  { id: 'analytics', icon: BarChart3, label: 'Facturacion', path: '/intranet/facturacion' },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-red-50">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? 'w-20' : 'w-64'
        } bg-gradient-to-b from-red-900 to-red-800 text-white transition-all duration-300 ease-in-out flex flex-col relative shadow-2xl`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-red-700">
          {!isCollapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-sm">
                MB
              </div>
              <span className="font-semibold text-lg">MyBrand</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center font-bold text-sm mx-auto">
              MB
            </div>
          )}
        </div>

        {/* Search */}
        {!isCollapsed && (
          <div className="p-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-300"
                size={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-red-800 border border-red-700 rounded-lg text-sm text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `w-full flex items-center ${
                        isCollapsed ? 'justify-center' : 'justify-between'
                      } px-3 py-3 rounded-lg transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/30'
                          : 'hover:bg-red-700/50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center space-x-3">
                          <Icon
                            size={20}
                            className={`${
                              isActive ? 'text-white' : 'text-red-200 group-hover:text-white'
                            } transition-colors`}
                          />
                          {!isCollapsed && (
                            <span
                              className={`font-medium ${
                                isActive ? 'text-white' : 'text-red-100'
                              }`}
                            >
                              {item.label}
                            </span>
                          )}
                        </div>
                        {!isCollapsed && item.badge && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-white text-red-700 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-red-700 p-4">
          <button
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center' : 'space-x-3'
            } px-3 py-3 rounded-lg hover:bg-red-700/50 transition-all duration-200 group`}
          >
            <LogOut size={20} className="text-red-200 group-hover:text-white transition-colors" />
            {!isCollapsed && (
              <span className="font-medium text-red-100 group-hover:text-white transition-colors">
                Logout
              </span>
            )}
          </button>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          {isCollapsed ? (
            <ChevronRight size={14} className="text-white" />
          ) : (
            <ChevronLeft size={14} className="text-white" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Dashboard</h1>
          <p className="text-gray-600 mb-8">
            This is your main content area. The sidebar is fully functional and uses red-themed
            styles.
          </p>
        </div>
      </div>
    </div>
  );
};
