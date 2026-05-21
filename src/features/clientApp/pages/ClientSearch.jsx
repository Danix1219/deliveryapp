import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Clock, X, Plus, Check, CheckCircle2, ShoppingBag, Target } from 'lucide-react';
import { useGlobalState } from '../../../store/GlobalContext';

// Base de datos
const ALL_PRODUCTS = [
  { id: 101, name: 'Truffle Bacon Burger', restaurant: 'The Burger Joint', price: 185.00, category: 'Hamburguesas', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
  { id: 102, name: 'Papas Trufadas', restaurant: 'The Burger Joint', price: 85.00, category: 'Saludable', image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80' },
  { id: 103, name: 'Sushi Dragon Roll', restaurant: 'Sushi Master', price: 210.00, category: 'Asiática', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 104, name: 'Ensalada César', restaurant: 'Green Bowl', price: 120.00, category: 'Saludable', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
];

const TOP_CATEGORIES = [
  { id: 1, name: 'Hamburguesas', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Saludable', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Asiática', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Postres', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=300&q=80' },
];

export default function ClientSearch() {
  const { addToCart, cart } = useGlobalState();
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  const searchResults = query.length > 0 
    ? ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    setRecentSearches(prev => [query, ...prev.filter(item => item !== query)].slice(0, 5));
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setToastMessage(`Añadido: ${item.name}`);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Header con Título e Ícono */}
      <header className="bg-white px-6 pt-12 pb-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-2xl">
            <Search className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Buscar</h1>
        </div>

        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-transparent focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all outline-none font-medium"
            placeholder="¿Qué se te antoja hoy?..."
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </form>
      </header>

      <main className="max-w-3xl mx-auto px-6">
        {query.length > 0 ? (
          <div className="space-y-4 animate-slide-up">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Resultados ({searchResults.length})</h2>
            </div>
            {searchResults.map(item => (
              <div key={item.id} className="flex gap-4 p-3 bg-white border border-gray-100 rounded-3xl items-center hover:shadow-lg transition-all group">
                <img src={item.image} className="w-20 h-20 rounded-2xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{item.restaurant}</p>
                  <p className="font-black text-orange-600 mt-1">${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => handleAddToCart(item)} className="p-3 bg-gray-900 text-white rounded-xl hover:bg-orange-600 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-10 animate-slide-up">
            {recentSearches.length > 0 && (
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Recientes</h2>
                  <button onClick={() => setRecentSearches([])} className="text-xs font-bold text-orange-600">Borrar</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((s, i) => (
                    <button key={i} onClick={() => setQuery(s)} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-700 hover:bg-gray-200">{s}</button>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Categorías principales</h2>
              <div className="grid grid-cols-2 gap-4">
                {TOP_CATEGORIES.map((cat) => (
                  <div key={cat.id} onClick={() => setQuery(cat.name)} className="relative h-32 rounded-3xl overflow-hidden cursor-pointer group shadow-sm">
                    <img src={cat.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <span className="absolute bottom-4 left-4 text-white font-black text-lg">{cat.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Toast Notificación */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 px-6 py-3 bg-gray-900 text-white rounded-full shadow-2xl flex items-center gap-2 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <span className="font-bold text-sm">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}