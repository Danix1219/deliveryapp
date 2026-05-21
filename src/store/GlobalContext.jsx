import { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalState = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Inicializamos el estado leyendo de localStorage (si existe)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('veltrix_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);

  // Auth ajustada
  const login = (email, password) => {
    if (email && password) {
      const userRole = email.includes('repartidor') ? 'driver' : 'client';
      const userData = { 
        name: userRole === 'driver' ? 'Repartidor Veltrix' : 'Kevin Daniel', 
        email: email, 
        role: userRole 
      };
      
      setUser(userData);
      // Guardamos en localStorage para que persista
      localStorage.setItem('veltrix_user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    // Limpiamos localStorage al cerrar sesión
    localStorage.removeItem('veltrix_user');
  };

  // ... (tus funciones addToCart, updateQuantity, removeFromCart siguen igual)
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + amount;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0)); 
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <GlobalContext.Provider value={{ user, login, logout, cart, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </GlobalContext.Provider>
  );
};