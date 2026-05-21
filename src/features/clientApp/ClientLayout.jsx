import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, User, Lock, Mail, ArrowRight, Truck } from 'lucide-react'; // Añadido 'Truck'
import { useGlobalState } from '../../store/GlobalContext';

export default function ClientLayout() {
  const location = useLocation();
  const { user, login } = useGlobalState();
  const [email, setEmail] = useState('kevin@veltrix.com');
  const [password, setPassword] = useState('123456');

  
  // Menú actualizado con la opción de Seguimiento
  const navItems = [
    { path: '/client/home', icon: Home, label: 'Inicio' },
    { path: '/client/search', icon: Search, label: 'Buscar' },
      { path: '/client/cart', icon: ShoppingBag, label: 'Carrito' },
    { path: '/client/tracking', icon: Truck, label: 'Seguimiento' }, // Nueva opción
    { path: '/client/profile', icon: User, label: 'Perfil' },
  ];

  // ==========================================
  // VISTA DE LOGIN
  // ==========================================
  if (!user) {
    return (
      <div className="flex min-h-screen bg-white font-sans w-full overflow-hidden animate-slide-up">
        {/* Lado Izquierdo - Imagen y Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-orange-600">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" 
            alt="Veltrix Delivery" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent"></div>
          <div className="relative z-10 flex flex-col justify-center p-16 text-white h-full w-full">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
               MKI-DELIVERY
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Tu comida favorita,<br/>a un clic de distancia.
            </h2>
            <p className="text-lg font-medium opacity-90 max-w-lg">
              La plataforma de delivery más rápida y segura. Disfruta de una experiencia sin fricciones desde el antojo hasta tu puerta.
            </p>
          </div>
        </div>

        {/* Lado Derecho - Formulario */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
          <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100">
            <div className="mb-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-orange-100">
                <Lock className="w-10 h-10" />
              </div>
              <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Bienvenido de nuevo</h1>
              <p className="text-gray-500 font-medium">Ingresa tus credenciales para acceder a la plataforma.</p>
            </div>
            
            <div className="space-y-5">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="email" value={email} onChange={e => setEmail(e.target.value)} 
                  className="w-full bg-gray-50/50 pl-12 pr-4 py-4 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-500 border border-gray-200 font-medium transition-all" 
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                <input 
                  type="password" value={password} onChange={e => setPassword(e.target.value)} 
                  className="w-full bg-gray-50/50 pl-12 pr-4 py-4 rounded-2xl outline-none focus:bg-white focus:ring-2 focus:ring-orange-500 border border-gray-200 font-medium transition-all" 
                  placeholder="Contraseña"
                />
              </div>
              <button 
                onClick={() => login(email, password)} 
                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-black py-4 rounded-2xl hover:bg-orange-600 transition-all active:scale-[0.98] shadow-lg mt-4 group"
              >
                Ingresar al sistema <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col w-full">
      <div className="w-full min-h-screen relative flex flex-col bg-white">
        
        <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide w-full animate-slide-up">
          <Outlet />
        </main>

        <div className="fixed bottom-0 w-full z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
          <nav className="max-w-7xl mx-auto flex justify-around items-center py-3 px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              // Usamos startsWith o una lógica más estricta si es necesario, 
              // pero aquí location.pathname.includes funciona para resaltar el ícono activo
              const isActive = location.pathname === item.path; 
              
              return (
                <Link 
                  key={item.path} to={item.path} 
                  className={`flex flex-col items-center gap-1.5 w-16 sm:w-20 transition-all duration-300 ${isActive ? 'text-orange-600 scale-110' : 'text-gray-400 hover:text-gray-900 hover:-translate-y-1'}`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-orange-50' : 'bg-transparent'}`}>
                    <Icon strokeWidth={isActive ? 2.5 : 2} className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] sm:text-[11px] tracking-wide ${isActive ? 'font-black' : 'font-semibold'}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}