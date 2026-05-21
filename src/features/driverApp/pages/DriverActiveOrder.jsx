import { MapPin, Navigation, Phone, MessageSquare, ArrowLeft, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DriverActiveOrder() {
  return (
    <div className="relative h-screen bg-gray-200 font-sans overflow-hidden">
      {/* Fondo de Mapa Simulando Ruta */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
          alt="Ruta GPS" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/10"></div>
      </div>

      {/* Header Fijo */}
      <header className="absolute top-0 w-full px-5 pt-12 z-20 flex justify-between items-center">
        <Link to="/driver/dashboard" className="bg-white p-3 rounded-full shadow-md">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </Link>
        <div className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md font-bold text-sm flex items-center gap-2">
          <Navigation className="w-4 h-4" />
          En camino al cliente
        </div>
        <button className="bg-white p-3 rounded-full shadow-md">
          <MoreVertical className="w-5 h-5 text-gray-900" />
        </button>
      </header>

      {/* Panel Inferior de Entrega */}
      <div className="absolute bottom-0 w-full bg-white rounded-t-3xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.15)] z-20">
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">7 min</h2>
              <p className="text-sm font-medium text-gray-500">2.1 km • Llegada 13:15</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <div className="border-t border-b border-gray-100 py-4 mb-4 flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
              alt="Cliente" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="text-sm font-bold text-gray-900">Kevin M.</h4>
              <p className="text-xs text-gray-500 font-medium">Pedido #4829 • Pagado</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 p-3 rounded-full text-gray-700">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="bg-green-100 p-3 rounded-full text-green-700">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-500 font-medium bg-gray-50 p-3 rounded-xl mb-6">
            <span className="font-bold text-gray-900">Nota del cliente:</span> Tocar el timbre de la puerta negra. Dejar en recepción.
          </p>

          <Link 
            to="/driver/dashboard" 
            className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-600/30 flex justify-center items-center"
          >
            Confirmar Entrega
          </Link>
        </div>
      </div>
    </div>
  );
}