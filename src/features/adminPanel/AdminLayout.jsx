import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Store, Bike, Settings, ShieldAlert, LogOut, Search } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Vista General' },
    { path: '/admin/users', icon: Users, label: 'Gestión de Usuarios' },
    { path: '/admin/stores', icon: Store, label: 'Comercios' },
    { path: '/admin/drivers', icon: Bike, label: 'Repartidores' },
    { path: '/admin/settings', icon: Settings, label: 'Configuración Global' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar Corporativo Oscuro */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="bg-indigo-600 p-2 rounded-lg mr-3 shadow-lg shadow-indigo-600/20">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-black text-white text-lg tracking-tight">SuperAdmin</h2>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Veltrix Control</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.includes(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="font-bold text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 font-bold text-sm transition-colors">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex justify-between items-center px-8 shrink-0 shadow-sm">
          <div className="relative w-96 hidden lg:block">
            <Search className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar IDs, usuarios o transacciones..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900">Admin Master</p>
              <p className="text-xs font-semibold text-indigo-600">Nivel de Acceso 5</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-indigo-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}