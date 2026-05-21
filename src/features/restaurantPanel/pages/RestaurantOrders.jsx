import { Clock, Check, X, ChefHat, Motorbike } from 'lucide-react';

export default function RestaurantOrders() {
  // Datos simulados del tablero Kanban
  const ORDERS = {
    nuevos: [
      { id: '#4829', time: 'Hace 2 min', items: '2x Truffle Burger, 1x Papas', total: 455.00, client: 'Kevin M.' }
    ],
    preparando: [
      { id: '#4828', time: 'Hace 10 min', items: '1x Classic Smash, 2x Refresco', total: 205.00, client: 'Ana L.' },
      { id: '#4827', time: 'Hace 15 min', items: '3x Papas Trufadas', total: 255.00, client: 'Carlos D.' }
    ],
    listos: [
      { id: '#4826', time: 'Hace 22 min', items: '1x Truffle Burger', total: 185.00, client: 'Sofía R.', driver: 'Esperando repartidor...' }
    ]
  };

  return (
    <div className="h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-start">
        
        {/* Columna 1: Nuevos Pedidos */}
        <div className="bg-gray-100/50 rounded-3xl p-4 border border-gray-200 min-h-[500px]">
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className="font-black text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
              Nuevos
            </h3>
            <span className="bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">1</span>
          </div>
          
          <div className="space-y-4">
            {ORDERS.nuevos.map((order) => (
              <div key={order.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-black text-lg text-gray-900">{order.id}</h4>
                    <p className="text-xs font-bold text-gray-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5" /> {order.time}
                    </p>
                  </div>
                  <span className="font-black text-green-600">${order.total.toFixed(2)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-4 bg-gray-50 p-2 rounded-lg">{order.items}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-900 text-white font-bold py-2 rounded-xl text-sm shadow-md hover:bg-gray-800 flex items-center justify-center gap-1">
                    <Check className="w-4 h-4" /> Aceptar
                  </button>
                  <button className="px-3 bg-red-50 text-red-600 font-bold rounded-xl text-sm hover:bg-red-100 flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna 2: Preparando */}
        <div className="bg-gray-100/50 rounded-3xl p-4 border border-gray-200 min-h-[500px]">
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className="font-black text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              En Cocina
            </h3>
            <span className="bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">2</span>
          </div>
          
          <div className="space-y-4">
            {ORDERS.preparando.map((order) => (
              <div key={order.id} className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-l-orange-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-black text-lg text-gray-900">{order.id}</h4>
                    <p className="text-xs font-bold text-orange-600 flex items-center gap-1 mt-0.5">
                      <ChefHat className="w-3.5 h-3.5" /> Preparando
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-4 bg-gray-50 p-2 rounded-lg">{order.items}</p>
                <button className="w-full bg-orange-100 text-orange-700 font-bold py-2 rounded-xl text-sm hover:bg-orange-200">
                  Marcar como Listo
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Columna 3: Listos */}
        <div className="bg-gray-100/50 rounded-3xl p-4 border border-gray-200 min-h-[500px]">
          <div className="flex justify-between items-center mb-4 px-2">
            <h3 className="font-black text-gray-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Listos para entregar
            </h3>
            <span className="bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded-md shadow-sm">1</span>
          </div>
          
          <div className="space-y-4">
            {ORDERS.listos.map((order) => (
              <div key={order.id} className="bg-white p-5 rounded-2xl shadow-sm border border-green-200 bg-green-50/30">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-black text-lg text-gray-900">{order.id}</h4>
                    <p className="text-xs font-bold text-green-600 flex items-center gap-1 mt-0.5">
                      <Check className="w-3.5 h-3.5" /> Empaquetado
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-3">{order.items}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white p-2 rounded-lg border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bike"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 11.5V14l-3-3 4-3 2 3h2"/></svg>
                  {order.driver}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}