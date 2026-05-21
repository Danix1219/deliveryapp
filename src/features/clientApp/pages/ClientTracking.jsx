import { useState, useEffect } from 'react';
import { ArrowLeft, Phone, MessageSquare, MapPin, CheckCircle2, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../../store/GlobalContext';

export default function ClientTracking() {
  const { user } = useGlobalState();
  const [activeStep, setActiveStep] = useState(1);

  // Trayectoria definida en porcentajes para que sea 100% responsiva
  const pathCoordinates = [
    { left: '10%', top: '75%' }, // Restaurante
    { left: '35%', top: '60%' },
    { left: '65%', top: '40%' },
    { left: '90%', top: '25%' }, // Destino (Usuario)
  ];

  // Simulación de WebSocket: Avanza el paso cada 4 segundos
  useEffect(() => {
    if (activeStep < 4) {
      const timer = setTimeout(() => setActiveStep(prev => prev + 1), 4000);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const ORDER_STATUS = [
    { id: 1, label: 'Pedido confirmado', time: '12:45 PM', done: activeStep > 1, active: activeStep === 1 },
    { id: 2, label: 'Preparando tu comida', time: '12:50 PM', done: activeStep > 2, active: activeStep === 2 },
    { id: 3, label: 'Repartidor en camino', time: '13:05 PM', done: activeStep > 3, active: activeStep === 3 },
    { id: 4, label: 'Entregado', time: activeStep === 4 ? 'Ahora' : '--', done: activeStep === 4, active: activeStep === 4 }
  ];

  const DRIVER = {
    name: 'Carlos M.', rating: '4.9', vehicle: 'Honda Tool 150cc',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80',
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans overflow-hidden flex flex-col relative">
      
      {/* MAPA DINÁMICO (Tech-Grid Style) */}
      <div className="absolute inset-0 h-[60%] w-full bg-gray-950">
        {/* Rejilla de fondo */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Trayectoria SVG */}
        <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 500">
           <path 
             d="M 100 400 Q 500 200 900 120" 
             fill="none" 
             stroke="#374151" 
             strokeWidth="4" 
             strokeDasharray="8 8"
           />
           <path 
             d="M 100 400 Q 500 200 900 120" 
             fill="none" 
             stroke="#f97316" 
             strokeWidth="4" 
             className="transition-all duration-1000 ease-in-out"
             style={{ 
               strokeDasharray: "1000", 
               strokeDashoffset: activeStep === 1 ? 1000 : activeStep === 2 ? 700 : activeStep === 3 ? 300 : 0 
             }}
           />
        </svg>

        {/* Marcador del Repartidor */}
        <div 
          className="absolute z-20 transition-all duration-1000 ease-in-out"
          style={{ 
            top: pathCoordinates[activeStep - 1].top, 
            left: pathCoordinates[activeStep - 1].left 
          }}
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-orange-500/30 rounded-full animate-ping"></div>
            <div className="bg-orange-600 p-2 rounded-full border-2 border-white shadow-[0_0_15px_rgba(234,88,12,0.6)]">
              <Truck className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* HEADER FLOTANTE */}
      <header className="absolute top-0 w-full px-6 pt-12 z-30 flex justify-between items-center">
        <Link to="/client/home" className="bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all border border-white/20">
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white font-black text-sm border border-white/20 shadow-lg">
          <Clock className="w-4 h-4 inline mr-2 text-orange-400" />
          {activeStep === 4 ? 'Entregado' : 'Llegada 13:15'}
        </div>
      </header>

      {/* PANEL INFERIOR */}
      <div className="absolute bottom-0 w-full bg-white rounded-t-[2.5rem] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.3)] z-40 p-8">
        <div className="w-12 h-1.5 bg-gray-100 rounded-full mx-auto mb-8"></div>
        
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Timeline de estados */}
          <div>
            <h2 className="text-xl font-black text-gray-900 mb-6">Estado del pedido</h2>
            <div className="space-y-6">
              {ORDER_STATUS.map((status) => (
                <div key={status.id} className="flex gap-4 items-center">
                  <div className={`w-3 h-3 rounded-full ${status.done ? 'bg-green-500' : status.active ? 'bg-orange-600 animate-pulse' : 'bg-gray-200'}`}></div>
                  <span className={`font-bold text-sm ${status.active ? 'text-orange-600' : status.done ? 'text-gray-900' : 'text-gray-400'}`}>
                    {status.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta del Repartidor */}
          <div className={`bg-gray-50 p-5 rounded-3xl border border-gray-100 flex items-center justify-between transition-opacity duration-1000 ${activeStep >= 3 ? 'opacity-100' : 'opacity-60'}`}>
            <div className="flex items-center gap-4">
              <img src={DRIVER.image} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-black text-gray-900">{DRIVER.name}</h4>
                <p className="text-xs font-bold text-gray-500">{DRIVER.vehicle}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-white rounded-2xl shadow-sm text-gray-500 hover:text-orange-600"><MessageSquare className="w-5 h-5" /></button>
              <button className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg hover:bg-orange-700"><Phone className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}