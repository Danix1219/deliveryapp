import { TrendingUp, Users, Store, DollarSign, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const STATS = [
    { label: 'Ingresos Totales (Mes)', value: '$124,500', trend: '+14.5%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Usuarios Activos', value: '12,480', trend: '+5.2%', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Restaurantes', value: '342', trend: '+12', icon: Store, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Pedidos Hoy', value: '1,284', trend: '-2.1%', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-100' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Métricas de la Plataforma</h1>
        <p className="text-sm font-medium text-slate-500">Resumen en tiempo real del ecosistema delivery.</p>
      </div>

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          const isPositive = stat.trend.includes('+');
          return (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.bg} p-3 rounded-2xl`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                }`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Gráfica y Actividad Reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfica Principal (Simulada) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-200 h-96 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-black text-slate-900">Volumen de Transacciones</h2>
            <select className="bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 rounded-xl px-4 py-2 outline-none">
              <option>Últimos 7 días</option>
              <option>Este mes</option>
            </select>
          </div>
          <div className="flex-1 flex items-end gap-2 pb-4">
            {/* Barras de gráfica simuladas */}
            {[40, 70, 45, 90, 60, 100, 30, 80, 50, 75, 40, 65, 85, 55].map((h, i) => (
              <div key={i} className="flex-1 bg-indigo-50 rounded-t-lg relative group">
                <div 
                  className="absolute bottom-0 w-full bg-indigo-500 rounded-t-lg transition-all group-hover:bg-indigo-600" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Actividad en Tiempo Real */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 h-96 flex flex-col">
          <h2 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Live Feed
          </h2>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {[
              { msg: 'Nuevo restaurante registrado', time: 'Hace 2 min', tag: 'ONBOARDING' },
              { msg: 'Pago masivo a repartidores', time: 'Hace 15 min', tag: 'FINANZAS' },
              { msg: 'Pico de pedidos en Zona Sur', time: 'Hace 45 min', tag: 'ALERTA' },
            ].map((feed, i) => (
              <div key={i} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0">
                <div className="w-2 h-2 mt-2 rounded-full bg-slate-300"></div>
                <div>
                  <span className="text-[10px] font-black uppercase text-indigo-500 tracking-wider">{feed.tag}</span>
                  <p className="text-sm font-bold text-slate-800">{feed.msg}</p>
                  <p className="text-xs font-medium text-slate-500">{feed.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}