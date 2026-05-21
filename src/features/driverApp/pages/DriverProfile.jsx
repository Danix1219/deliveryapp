import { Star, Truck, FileText, Settings, LogOut, ChevronRight } from 'lucide-react';

export default function DriverProfile() {
  const MENU = [
    { icon: Truck, label: 'Mi Vehículo', desc: 'Honda Tool 150cc' },
    { icon: FileText, label: 'Documentos', desc: 'INE y Licencia al día' },
    { icon: Settings, label: 'Configuración', desc: 'Navegación y sonido' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans">
      <div className="bg-white px-5 pt-16 pb-8 shadow-sm border-b border-gray-100 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50 shadow-md mb-4 relative">
          <img 
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80" 
            alt="Repartidor" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-black text-gray-900">Carlos Mendoza</h1>
        <p className="text-sm font-medium text-gray-500 mt-1">Socio Repartidor desde 2024</p>
        
        <div className="flex gap-4 mt-6 w-full">
          <div className="flex-1 bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-auto mb-1" />
            <p className="text-lg font-black text-gray-900">4.9</p>
            <p className="text-[10px] font-bold text-gray-500 uppercase">Calificación</p>
          </div>
          <div className="flex-1 bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
            <FileText className="w-6 h-6 text-blue-500 mx-auto mb-1" />
            <p className="text-lg font-black text-gray-900">1,240</p>
            <p className="text-[10px] font-bold text-gray-500 uppercase">Entregas</p>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 space-y-4">
        <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100">
          {MENU.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center p-3 cursor-pointer hover:bg-gray-50 rounded-2xl">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-bold text-gray-900">{item.label}</h3>
                  <p className="text-xs font-medium text-gray-500">{item.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </div>
            );
          })}
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white border border-red-100 text-red-500 font-bold py-4 rounded-3xl shadow-sm hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Desconectarse
        </button>
      </div>
    </div>
  );
}