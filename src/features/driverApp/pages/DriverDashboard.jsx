import { useState } from 'react';
import { Power, MapPin, Navigation, Clock, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(false);
  const [incomingOrder, setIncomingOrder] = useState(true); // Simula que entra un pedido

  return (
    <div className="relative h-screen bg-gray-200 font-sans overflow-hidden">
      {/* Fondo de Mapa */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isOnline ? 'opacity-100' : 'opacity-40 grayscale'}`}>
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
          alt="Mapa GPS" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header Fijo con Toggle de Conexión */}
      <header className="absolute top-0 w-full px-5 pt-12 z-20 flex justify-center">
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-lg font-bold text-sm transition-all duration-300 ${
            isOnline ? 'bg-white text-gray-900 border-2 border-blue-500' : 'bg-gray-900 text-white'
          }`}
        >
          <Power className={`w-5 h-5 ${isOnline ? 'text-blue-600' : 'text-red-500'}`} />
          {isOnline ? 'Conectado • Buscando pedidos' : 'Desconectado • Toca para iniciar'}
        </button>
      </header>

      {/* Tarjeta de Solicitud de Pedido Entrante (Aparece si está online) */}
      {isOnline && incomingOrder && (
        <div className="absolute bottom-24 w-full px-4 z-30 animate-bounce">
          <div className="bg-white rounded-3xl p-5 shadow-2xl border-2 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="bg-blue-100 text-blue-700 text-xs font-black uppercase px-2 py-1 rounded-md tracking-wide">Nuevo Pedido</span>
                <h3 className="text-xl font-black text-gray-900 mt-2">The Burger Joint</h3>
              </div>
              <div className="text-right">
                <span className="block text-2xl font-black text-green-600">$45.00</span>
                <span className="text-xs text-gray-500 font-bold">Ganancia est.</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                <Navigation className="w-5 h-5 text-gray-400" />
                <span>A 2.5 km de ti (Restaurante)</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>Entrega a 4.1 km (Cliente)</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setIncomingOrder(false)}
                className="w-16 h-14 flex items-center justify-center bg-gray-100 text-gray-500 rounded-2xl hover:bg-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <Link 
                to="/driver/active-order"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-colors"
              >
                <Check className="w-6 h-6" />
                Aceptar Pedido
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}