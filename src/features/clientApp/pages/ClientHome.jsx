import { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Star, Clock, Plus, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../../store/GlobalContext';

// --- DATOS SIMULADOS AMPLIADOS ---
const CATEGORIES = [
  { id: 1, name: 'Todos', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Hamburguesas', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Asiática', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Saludable', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Postres', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=300&q=80' },
];

const FEATURED_RESTAURANTS = [
  { id: 'R1', name: 'The Burger Joint', filterCat: 'Hamburguesas', category: 'Hamburguesas', rating: 4.8, deliveryTime: '25-35 min', deliveryFee: 'Envío $25', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', badge: 'Promo' },
  { id: 'R2', name: 'Sushi Master', filterCat: 'Asiática', category: 'Asiática', rating: 4.9, deliveryTime: '40-55 min', deliveryFee: 'Envío Gratis', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', badge: 'Popular' },
  { id: 'R3', name: 'Green Bowl', filterCat: 'Saludable', category: 'Saludable', rating: 4.7, deliveryTime: '15-25 min', deliveryFee: 'Envío $15', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', badge: 'Nuevo' },
  { id: 'R4', name: 'Napoli Pizza', filterCat: 'Pizza', category: 'Pizza', rating: 4.6, deliveryTime: '30-45 min', deliveryFee: 'Envío $20', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', badge: 'Top Ventas' },
];

const QUICK_ITEMS = [
  { id: 101, name: 'Truffle Bacon Burger', restaurant: 'The Burger Joint', price: 185.00, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
  { id: 103, name: 'Sushi Dragon Roll', restaurant: 'Sushi Master', price: 210.00, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80' },
  { id: 104, name: 'Ensalada César', restaurant: 'Green Bowl', price: 120.00, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' },
  { id: 105, name: 'Pizza Pepperoni', restaurant: 'Napoli Pizza', price: 195.00, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=300&q=80' },
];

export default function ClientHome() {
  const { user, addToCart } = useGlobalState();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const filteredRestaurants = activeFilter === 'Todos' 
    ? FEATURED_RESTAURANTS 
    : FEATURED_RESTAURANTS.filter(r => r.filterCat === activeFilter);

  const handleQuickAdd = (item) => {
    addToCart(item);
    setToastMessage(`¡Añadido: ${item.name}!`);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-24 font-sans relative">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 sm:py-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              ¡Hola, {user?.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">¿Qué se te antoja hoy?</p>
          </div>
          <Link to="/client/profile" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-orange-100 flex items-center justify-center bg-orange-50 text-orange-600 font-black text-lg transition-transform hover:scale-105 shadow-sm">
            {user?.name.charAt(0)}
          </Link>
        </div>
      </header>

      {/* TOAST NOTIFICACIÓN (Posición superior para visibilidad constante) */}
      <div className={`fixed top-24 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none px-4 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
        <div className="bg-gray-900/95 backdrop-blur-sm text-white px-5 sm:px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border border-gray-800 max-w-md w-max">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
          <span className="font-bold text-sm truncate">{toastMessage}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-10 mt-6 sm:mt-8 animate-slide-up">
        {/* ... resto del contenido (Categorías, Recomendados, Restaurantes) ... */}
        
        {/* CATEGORÍAS */}
        <section>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {CATEGORIES.map(cat => (
              <div key={cat.id} onClick={() => setActiveFilter(cat.name)} className="snap-start flex flex-col items-center gap-3 cursor-pointer group shrink-0">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-sm relative transition-all duration-300 ${activeFilter === cat.name ? 'ring-4 ring-orange-500 ring-offset-2 scale-105 shadow-orange-500/20' : 'group-hover:scale-105'}`}>
                  <div className={`absolute inset-0 z-10 transition-colors ${activeFilter === cat.name ? 'bg-transparent' : 'bg-black/10'}`}></div>
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className={`font-bold text-xs sm:text-sm ${activeFilter === cat.name ? 'text-orange-600' : 'text-gray-700'}`}>{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMENDADOS */}
        <section>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">Recomendados para ti</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {QUICK_ITEMS.map((item) => (
              <div key={item.id} className="snap-start min-w-[260px] sm:min-w-[280px] bg-white rounded-[2rem] p-3 shadow-sm border border-gray-100 hover:shadow-lg transition-all flex gap-4 group">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-[1.5rem]">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1 overflow-hidden">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">{item.name}</h3>
                    <p className="text-[11px] text-gray-500 font-medium mt-1 truncate">{item.restaurant}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-black text-gray-900 text-sm sm:text-base">${item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => handleQuickAdd(item)} 
                      className="bg-gray-100 text-gray-900 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors active:scale-90"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESTAURANTES */}
        <section>
          <div className="flex justify-between items-end mb-4 sm:mb-6">
             <h2 className="text-lg sm:text-xl font-black text-gray-900 flex flex-col">
              Restaurantes populares
             </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredRestaurants.map(r => (
              <Link key={r.id} to={`/client/restaurant/${r.id}`} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="h-40 sm:h-48 relative overflow-hidden">
                  <img src={r.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-black shadow-sm">
                     {r.deliveryTime}
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md uppercase">{r.badge}</div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-black text-gray-900 text-lg mb-1">{r.name}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{r.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}