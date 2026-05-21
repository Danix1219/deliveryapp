import { Shield, MoreHorizontal, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminUsers() {
  const USERS = [
    { id: 'USR-091', name: 'Liliana Granados', role: 'Cliente', status: 'Activo', email: 'lili@email.com', joined: '12 May 2026' },
    { id: 'USR-092', name: 'Sushi Master', role: 'Comercio', status: 'Verificado', email: 'contacto@sushim.com', joined: '10 May 2026' },
    { id: 'USR-093', name: 'Carlos Mendoza', role: 'Repartidor', status: 'Suspendido', email: 'carlos.m@email.com', joined: '01 Mar 2026' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div>
          <h2 className="text-lg font-black text-slate-900">Control de Usuarios</h2>
          <p className="text-sm font-medium text-slate-500">Administra todos los roles de la plataforma.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-slate-200 text-sm font-bold text-slate-700 rounded-xl px-4 py-2 outline-none shadow-sm">
            <option>Todos los roles</option>
            <option>Clientes</option>
            <option>Comercios</option>
            <option>Repartidores</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-xs uppercase tracking-wider text-slate-400 font-black border-b border-slate-100">
              <th className="px-6 py-4">Usuario</th>
              <th className="px-6 py-4">Rol</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4">Registro</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {USERS.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-4">
                  <p className="font-black text-slate-900">{user.name}</p>
                  <p className="text-xs font-medium text-slate-500">{user.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    user.role === 'Comercio' ? 'bg-orange-100 text-orange-700' : 
                    user.role === 'Repartidor' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    {user.status === 'Verificado' || user.status === 'Activo' 
                      ? <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      : <XCircle className="w-4 h-4 text-red-500" />
                    }
                    <span className="text-sm font-bold text-slate-700">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-500">{user.joined}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}