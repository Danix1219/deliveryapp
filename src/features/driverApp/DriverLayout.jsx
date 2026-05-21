import { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Navigation, DollarSign, User, Mail, Lock, ArrowRight, Package } from 'lucide-react';
import { useGlobalState } from '../../store/GlobalContext';

export default function DriverLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, login, logout } = useGlobalState();

  // EFECTO: Seguridad. Si un cliente intenta entrar, lo sacamos.
  useEffect(() => {
    if (user && user.role !== 'driver') {
      logout(); // Cierra sesión inmediatamente si no es driver
      navigate('/driver'); // Redirige al login de repartidor
    }
  }, [user, logout, navigate]);

  const navItems = [
    { path: '/driver/dashboard', icon: Navigation, label: 'Ruta' },
    { path: '/driver/earnings', icon: DollarSign, label: 'Ganancias' },
    { path: '/driver/profile', icon: User, label: 'Perfil' },
  ];

  // ==========================================
  // VISTA DE LOGIN (Acceso Repartidor)
  // ==========================================
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-sm bg-white p-8 rounded-[2rem] shadow-2xl shadow-blue-900/20 animate-slide-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Portal Repartidor</h1>
            <p className="text-gray-500 text-sm font-medium mt-1">Ingresa tus credenciales de flota</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => login('repartidor@veltrix.com', '123456')} 
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg mt-2 group"
            >
              Acceso Rápido (Demo) <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VISTA PRINCIPAL REPARTIDOR
  // ==========================================
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center font-sans">
      <div className="bg-white w-full max-w-md min-h-screen relative shadow-2xl flex flex-col overflow-hidden">
        
        <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide w-full">
          <Outlet />
        </main>

        <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center py-4 z-50 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.includes(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1.5 w-16 transition-all duration-300 ${
                  isActive ? 'text-blue-600 scale-105' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-blue-50' : ''}`}>
                  <Icon strokeWidth={isActive ? 2.5 : 2} className="w-6 h-6" />
                </div>
                <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}