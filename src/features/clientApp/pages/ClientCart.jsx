import { useState } from 'react';
import { ArrowLeft, Trash2, MapPin, CreditCard, Banknote, ShoppingBag, CheckCircle2, ReceiptText, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../../store/GlobalContext';

export default function ClientCart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useGlobalState();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); 
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 25.00 : 0;
  const serviceFee = cart.length > 0 ? 15.00 : 0;
  const total = subtotal + deliveryFee + serviceFee;

  const handleCheckout = () => {
    setIsOrderComplete(true);
  };

  const finishOrder = () => {
    clearCart();
    navigate('/client/tracking');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-36 font-sans relative animate-slide-up">
      
      {/* MODAL DE ÉXITO */}
      {isOrderComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl animate-slide-up relative">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-green-100">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">¡Pedido confirmado!</h2>
            <p className="text-sm text-gray-500 font-medium mb-8 leading-relaxed">
              El restaurante ya está preparando tu comida. Prepárate para disfrutar.
            </p>
            <button 
              onClick={finishOrder} 
              className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl shadow-xl shadow-gray-900/20 hover:bg-orange-600 transition-all active:scale-95"
            >
              Rastrear mi pedido
            </button>
          </div>
        </div>
      )}

      {/* HEADER LIMPIO CON ÍCONO */}
      <header className="bg-white px-5 pt-10 pb-5 sticky top-0 z-10 shadow-sm flex items-center justify-between">
        <Link to="/client/home" className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </Link>
        <div className="flex items-center gap-2">
          <ReceiptText className="w-5 h-5 text-orange-600" />
          <h1 className="text-lg font-black text-gray-900 tracking-tight">Tu Pedido</h1>
        </div>
        <div className="w-10"></div>
      </header>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-32 px-5 text-center">
          <div className="bg-gray-100 p-8 rounded-full text-gray-300 mb-6 shadow-inner">
            <ShoppingBag className="w-16 h-16" />
          </div>
          <h2 className="text-xl font-black text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-sm text-gray-500 font-medium mb-8">Descubre los mejores platillos cerca de ti.</p>
          <Link to="/client/home" className="bg-orange-600 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-all active:scale-95">
            Explorar restaurantes
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6">
          <div className="bg-white p-4 mt-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 group cursor-pointer hover:shadow-md transition-shadow">
            <div className="bg-orange-50 p-3.5 rounded-2xl text-orange-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Entregar en</p>
              <p className="text-sm font-bold text-gray-900 truncate">Av. Universidad Tecnológica 123</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4 px-2 tracking-tight">Resumen de compra</h3>
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white p-3.5 rounded-[2rem] shadow-sm border border-gray-100">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden shadow-inner">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1 pr-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight line-clamp-2">{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className="bg-gray-50 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors p-2 rounded-xl">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-black text-gray-900 sm:text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                      <div className="flex items-center gap-1 bg-gray-50 rounded-xl p-1 border border-gray-100">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-500 font-black text-lg hover:text-orange-600 transition-colors">-</button>
                        <span className="text-sm font-black text-gray-900 w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-orange-600 font-black text-lg hover:bg-orange-50 rounded-lg transition-colors">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4 px-2 tracking-tight">Método de pago</h3>
            <div className="bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-2">
              <div onClick={() => setPaymentMethod('card')} className={`flex items-center gap-4 p-4 rounded-3xl cursor-pointer transition-all border-2 ${paymentMethod === 'card' ? 'border-orange-500 bg-orange-50/30' : 'border-transparent hover:bg-gray-50'}`}>
                <div className={`p-3 rounded-2xl ${paymentMethod === 'card' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}><CreditCard className="w-6 h-6" /></div>
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-sm">Visa •••• 4242</p>
                  <p className="text-[11px] font-medium text-gray-500 mt-0.5">Vencimiento 12/28</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}>
                  {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                </div>
              </div>
              <div onClick={() => setPaymentMethod('cash')} className={`flex items-center gap-4 p-4 rounded-3xl cursor-pointer transition-all border-2 ${paymentMethod === 'cash' ? 'border-orange-500 bg-orange-50/30' : 'border-transparent hover:bg-gray-50'}`}>
                <div className={`p-3 rounded-2xl ${paymentMethod === 'cash' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}><Banknote className="w-6 h-6" /></div>
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-sm">Efectivo</p>
                  <p className="text-[11px] font-medium text-gray-500 mt-0.5">Pago al repartidor</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}>
                  {paymentMethod === 'cash' && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 mt-8 rounded-[2rem] shadow-sm border border-gray-100 mb-10">
            <div className="space-y-4 text-sm font-medium text-gray-500">
              <div className="flex justify-between"><span>Subtotal</span><span className="text-gray-900 font-bold">${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Envío</span><span className="text-gray-900 font-bold">${deliveryFee.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Tarifa de servicio</span><span className="text-gray-900 font-bold">${serviceFee.toFixed(2)}</span></div>
            </div>
            <div className="border-t border-dashed border-gray-200 mt-5 pt-5 flex justify-between items-center">
              <span className="text-lg font-black text-gray-900">Total a pagar</span>
              <span className="text-2xl font-black text-orange-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="fixed bottom-[80px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
          {/* FIX: DEL-42 Validación añadida para evitar cierre por total indefinido */}
          <button 
            onClick={() => {
              if (total >= 0) handleCheckout();
            }} 
            className="w-full max-w-sm md:max-w-md bg-gray-900 text-white py-4 px-6 rounded-full shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] hover:bg-orange-600 transition-all active:scale-95 pointer-events-auto flex items-center justify-between group"
          >
            <span className="font-black text-sm tracking-wide">Confirmar pedido</span>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
              <span className="font-black">${total >= 0 ? total.toFixed(2) : '0.00'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}