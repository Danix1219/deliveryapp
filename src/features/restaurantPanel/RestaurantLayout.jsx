import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Settings, Bell, Store, LogOut } from 'lucide-react';

export default function RestaurantLayout() {
  const location = useLocation();

  const menuItems = [
    { path: '/restaurant/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/restaurant/orders', icon: ShoppingBag, label: 'Pedidos Activos' },
    { path: '/restaurant/inventory', icon: Package, label: 'Menú e Inventario' },
    { path: '/restaurant/settings', icon: Settings, label: 'Configuración' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      
      {/* Barra Lateral (Sidebar) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        {/* Logo y Nombre del Negocio */}
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
          <div className="bg-orange-100 p-2 rounded-lg mr-3">
            <Store className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h2 className="font-black text-gray-900 leading-tight">The Burger Joint</h2>
            <span className="text-xs font-bold text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Abierto
            </span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.includes(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span className="font-bold text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Cierre de sesión */}
        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 font-bold text-sm transition-colors">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Área de Contenido Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex justify-between items-center px-8 shrink-0">
          <h1 className="text-xl font-black text-gray-900">
            {menuItems.find(i => location.pathname.includes(i.path))?.label || 'Panel de Control'}
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-gray-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=100&q=80" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Contenido Dinámico (Vistas) */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <Outlet />
        </div>
      </main>
    </div>
  );
}