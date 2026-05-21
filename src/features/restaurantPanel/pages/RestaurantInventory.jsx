import { Plus, Search, Edit2, Trash2, ToggleRight } from 'lucide-react';

export default function RestaurantInventory() {
  const PRODUCTS = [
    { id: 'P01', name: 'Truffle Bacon Burger', category: 'Hamburguesas', price: 185.00, stock: 45, status: 'Activo', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&q=80' },
    { id: 'P02', name: 'Classic Smash', category: 'Hamburguesas', price: 145.00, stock: 12, status: 'Activo', image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?auto=format&fit=crop&w=100&q=80' },
    { id: 'P03', name: 'Papas Trufadas', category: 'Guarniciones', price: 85.00, stock: 0, status: 'Agotado', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      {/* Barra de herramientas */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <div className="relative w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow"
          />
        </div>
        <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded-xl text-sm shadow-md hover:bg-gray-800 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nuevo Producto
        </button>
      </div>

      {/* Tabla de Productos */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100">
              <th className="px-6 py-4">Producto</th>
              <th className="px-6 py-4">Categoría</th>
              <th className="px-6 py-4">Precio</th>
              <th className="px-6 py-4">Inventario</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {PRODUCTS.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
                  <div>
                    <p className="font-bold text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">ID: {product.id}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-600">{product.category}</td>
                <td className="px-6 py-4 text-sm font-black text-gray-900">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-600">{product.stock} un.</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    product.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}