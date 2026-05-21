import { useState, useEffect } from 'react';
import { ArrowLeft, Star, Clock, Info, Plus, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../../store/GlobalContext';

const RESTAURANT = {
  name: 'The Burger Joint', rating: 4.8, reviews: '+1k', deliveryTime: '25-35 min', deliveryFee: '$25.00',
  coverImg: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
};

const MENU_CATEGORIES = ['Populares', 'Hamburguesas', 'Bebidas', 'Extras'];

const MENU_ITEMS = [
  { id: 1, category: 'Hamburguesas', name: 'Truffle Bacon Burger', description: 'Carne Angus 200g, tocino ahumado, queso suizo.', price: 185.00, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80', popular: true },
  { id: 2, category: 'Hamburguesas', name: 'Classic Smash', description: 'Doble carne smash, queso americano, pepinillos.', price: 145.00, image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?auto=format&fit=crop&w=300&q=80', popular: true },
  { id: 3, category: 'Extras', name: 'Papas Trufadas', description: 'Papas corte delgado con aceite de trufa y parmesano.', price: 85.00, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=300&q=80', popular: false },
  { id: 4, category: 'Bebidas', name: 'Refresco Artesanal', description: 'Bebida de cola sin azúcar de 355ml.', price: 35.00, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80', popular: true },
];

export default function RestaurantDetail() {
  const { addToCart } = useGlobalState();
  const [activeCategory, setActiveCategory] = useState('Populares');
  const [toastMessage, setToastMessage] = useState(null);

  // Filtro Dinámico
  const filteredItems = activeCategory === 'Populares' 
    ? MENU_ITEMS.filter(item => item.popular) 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Función que añade y dispara la alerta visual
  const handleAddToCart = (item) => {
    addToCart(item);
    setToastMessage(`Añadido: ${item.name}`);
  };

  // Efecto para ocultar la alerta después de 3 segundos
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24 relative">
      {/* Portada */}
      <div className="relative h-64 md:h-80 w-full">
        <img src={RESTAURANT.coverImg} alt={RESTAURANT.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <Link to="/client/home" className="absolute top-12 left-5 md:left-8 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </Link>
      </div>

      {/* Info */}
      <div className="relative -mt-16 px-5 md:px-8 z-10">
        <div className="bg-white rounded-3xl p-5 md:p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{RESTAURANT.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 mb-4 md:mb-6">
            <div className="flex items-center gap-1"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><span className="text-gray-900 font-bold">{RESTAURANT.rating}</span></div>
            <div className="flex items-center gap-1"><Clock className="w-5 h-5 text-gray-400" /><span>{RESTAURANT.deliveryTime}</span></div>
          </div>
        </div>
      </div>

      {/* Categorías */}
      <div className="px-5 md:px-8 mt-6 sticky top-0 bg-gray-50/95 backdrop-blur-md py-3 z-20">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide max-w-7xl mx-auto">
          {MENU_CATEGORIES.map((cat) => (
            <button 
              key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-xl text-sm md:text-base font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 shadow-sm hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Productos */}
      <div className="px-5 mt-6 mb-8 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">{item.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-3">{item.description}</p>
                </div>
                <div className="mt-4 font-black text-gray-900 text-lg">${item.price.toFixed(2)}</div>
              </div>
              <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <button 
                  onClick={() => handleAddToCart(item)}
                  className="absolute -bottom-1 -right-1 bg-orange-600 text-white p-2.5 rounded-tl-2xl rounded-br-xl shadow-lg hover:bg-orange-700 active:scale-90 transition-all"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          {filteredItems.length === 0 && <p className="col-span-full text-center text-gray-500 font-bold py-10">No hay productos en esta categoría.</p>}
        </div>
      </div>

      {/* Toast Notification (Confirmación visual) */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="font-bold text-sm">{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}