import { useState } from 'react';
import { MapPin, CreditCard, Bell, Shield, LogOut, ChevronRight, Receipt, Heart, X, Info, CheckCircle2 } from 'lucide-react';
import { useGlobalState } from '../../../store/GlobalContext';

export default function ClientProfile() {
  const { user, logout } = useGlobalState();
  const [activeModal, setActiveModal] = useState(null); 

  const MENU_OPTIONS = [
    { id: 'pedidos', icon: Receipt, label: 'Mis Pedidos', desc: 'Historial y recibos' },
    { id: 'favoritos', icon: Heart, label: 'Favoritos', desc: 'Restaurantes que amas' },
    { id: 'direcciones', icon: MapPin, label: 'Direcciones', desc: 'Casa, trabajo, otros' },
    { id: 'pago', icon: CreditCard, label: 'Métodos de pago', desc: 'Tarjetas y facturación' },
    { id: 'notificaciones', icon: Bell, label: 'Notificaciones', desc: 'Alertas y promociones' },
    { id: 'seguridad', icon: Shield, label: 'Seguridad', desc: 'Contraseña y privacidad' },
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen pb-24 font-sans relative animate-slide-up">
      
      {/* HEADER LIMPIO */}
      <header className="bg-white px-5 pt-10 pb-5 sticky top-0 z-10 shadow-sm flex items-center justify-center">
        <h1 className="text-lg font-black text-gray-900 tracking-tight">Mi Perfil</h1>
      </header>

      {/* CONTENEDOR CENTRALIZADO PARA DESKTOP */}
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 mt-8">
        
        {/* TARJETA DE USUARIO PREMIUM */}
        <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-orange-100 to-orange-50 flex items-center justify-center text-orange-600 font-black text-4xl shadow-inner border-4 border-white ring-1 ring-gray-100 shrink-0">
            {user?.name.charAt(0)}
          </div>
          <div className="flex-1 flex flex-col justify-center h-full pt-2">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">{user?.name}</h2>
            <p className="text-sm font-medium text-gray-500 mt-1">{user?.email}</p>
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
              <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Usuario Verificado
              </span>
              <span className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                Veltrix ID: #0928
              </span>
            </div>
          </div>
        </div>

        {/* LISTA DE OPCIONES */}
        <div className="mt-8">
          <h3 className="text-sm font-bold text-gray-900 mb-4 px-2 tracking-tight">Ajustes de la cuenta</h3>
          <div className="bg-white rounded-[2rem] p-2 shadow-sm border border-gray-100 flex flex-col">
            {MENU_OPTIONS.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => setActiveModal(item.label)} 
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors rounded-3xl group ${index !== MENU_OPTIONS.length - 1 ? 'border-b border-dashed border-gray-100' : ''}`}
              >
                <div className="bg-gray-50 p-3.5 rounded-2xl text-gray-500 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-bold text-gray-900">{item.label}</h3>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">{item.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:shadow-sm transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTÓN CERRAR SESIÓN */}
        <button 
          onClick={logout} 
          className="w-full flex items-center justify-center gap-2 bg-white border border-red-100 text-red-500 font-bold py-4 rounded-2xl shadow-sm hover:bg-red-50 transition-colors mt-8 active:scale-95"
        >
          <LogOut className="w-5 h-5" /> Cerrar Sesión
        </button>

      </div>

      {/* MODAL SIMULADO FUNCIONAL (Adaptable Mobile/Desktop) */}
      {activeModal && (
        <div 
          onClick={() => setActiveModal(null)} 
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 flex flex-col sm:items-center sm:justify-center animate-fade-in p-0 sm:p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white w-full h-[70vh] sm:h-auto sm:max-h-[80vh] sm:max-w-sm rounded-t-[2.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 mt-auto sm:mt-0 flex flex-col animate-slide-up shadow-2xl"
          >
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden"></div>

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-gray-900">{activeModal}</h2>
              <button 
                onClick={() => setActiveModal(null)} 
                className="p-2 bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="bg-gray-50 p-6 rounded-full mb-6 border border-gray-100 shadow-inner">
                <Info className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="font-black text-gray-900 text-lg">Sección en construcción</h3>
              <p className="text-gray-500 text-sm mt-2 font-medium max-w-[250px]">
                Esta es una vista simulada para la demostración de la interfaz.
              </p>
              
              <button 
                onClick={() => setActiveModal(null)} 
                className="mt-8 w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}