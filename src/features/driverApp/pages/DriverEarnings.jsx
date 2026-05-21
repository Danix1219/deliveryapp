import { DollarSign, TrendingUp, Calendar, ChevronRight } from 'lucide-react';

export default function DriverEarnings() {
  const RECENT_TRIPS = [
    { id: 1, name: 'The Burger Joint', time: '14:30', amount: 45.50 },
    { id: 2, name: 'Sushi Master Do', time: '13:15', amount: 52.00 },
    { id: 3, name: 'Farmacia San Pablo', time: '11:45', amount: 35.00 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans">
      {/* Encabezado Azul */}
      <div className="bg-blue-600 pt-16 pb-8 px-5 rounded-b-[40px] text-white shadow-md">
        <h1 className="text-lg font-bold opacity-90 text-center mb-1">Ganancias de la semana</h1>
        <div className="text-5xl font-black text-center mb-6 flex items-center justify-center">
          <DollarSign className="w-8 h-8 opacity-80" />
          3,450.00
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex justify-between items-center">
          <div>
            <p className="text-xs font-bold uppercase opacity-80">Nivel Actual</p>
            <p className="text-lg font-black">Diamante 💎</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase opacity-80">Próximo Bono</p>
            <p className="text-lg font-black">+$500 mxn</p>
          </div>
        </div>
      </div>

      {/* Gráfica Simulada */}
      <div className="px-5 mt-6">
        <h2 className="text-sm font-bold text-gray-900 uppercase mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          Resumen Diario
        </h2>
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-end justify-between h-40">
          {/* Barras de la gráfica */}
          {[40, 70, 45, 90, 60, 100, 30].map((height, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-8">
              <div className="w-full bg-blue-100 rounded-t-md relative h-24 flex items-end justify-center">
                <div 
                  className={`w-full rounded-md ${i === 5 ? 'bg-blue-600' : 'bg-blue-300'}`} 
                  style={{ height: `${height}%` }}
                ></div>
              </div>
              <span className={`text-[10px] font-bold ${i === 5 ? 'text-blue-600' : 'text-gray-400'}`}>
                {['L', 'M', 'X', 'J', 'V', 'S', 'D'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Viajes Recientes */}
      <div className="px-5 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold text-gray-900 uppercase">Viajes de Hoy</h2>
          <button className="text-xs font-bold text-blue-600">Ver todo</button>
        </div>
        <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 space-y-1">
          {RECENT_TRIPS.map((trip) => (
            <div key={trip.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-2xl cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-3 rounded-xl text-gray-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{trip.name}</h4>
                  <p className="text-xs font-medium text-gray-500">{trip.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-green-600">+${trip.amount.toFixed(2)}</span>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}