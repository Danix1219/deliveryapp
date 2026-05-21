import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider } from './store/GlobalContext';
// 📱 1. APP DEL CLIENTE
import ClientLayout from './features/clientApp/ClientLayout';
import ClientHome from './features/clientApp/pages/ClientHome';
import RestaurantDetail from './features/clientApp/pages/RestaurantDetail';
import ClientCart from './features/clientApp/pages/ClientCart';
import ClientTracking from './features/clientApp/pages/ClientTracking';
import ClientSearch from './features/clientApp/pages/ClientSearch';
import ClientProfile from './features/clientApp/pages/ClientProfile';

// 🛵 2. APP DEL REPARTIDOR
import DriverLayout from './features/driverApp/DriverLayout';
import DriverDashboard from './features/driverApp/pages/DriverDashboard';
import DriverActiveOrder from './features/driverApp/pages/DriverActiveOrder';
import DriverEarnings from './features/driverApp/pages/DriverEarnings';
import DriverProfile from './features/driverApp/pages/DriverProfile';

// 🏪 3. PANEL DEL RESTAURANTE
import RestaurantLayout from './features/restaurantPanel/RestaurantLayout';
import RestaurantOrders from './features/restaurantPanel/pages/RestaurantOrders';
import RestaurantInventory from './features/restaurantPanel/pages/RestaurantInventory';

// 💻 4. PANEL DE ADMINISTRADOR (¡Nuevas importaciones!)
import AdminLayout from './features/adminPanel/AdminLayout';
import AdminDashboard from './features/adminPanel/pages/AdminDashboard';
import AdminUsers from './features/adminPanel/pages/AdminUsers';

export default function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Routes>
        {/* Redirección principal */}
        <Route path="/" element={<Navigate to="/client/home" replace />} />

        {/* 📱 MÓDULO 1: CLIENTE */}
        <Route path="/client" element={<ClientLayout />}>
          <Route path="home" element={<ClientHome />} />
          <Route path="restaurant/:id" element={<RestaurantDetail />} />
          <Route path="cart" element={<ClientCart />} />
          <Route path="tracking" element={<ClientTracking />} />
          <Route path="search" element={<ClientSearch />} />
          <Route path="profile" element={<ClientProfile />} />
        </Route>

        {/* 🛵 MÓDULO 2: REPARTIDOR */}
        <Route path="/driver" element={<DriverLayout />}>
          <Route path="dashboard" element={<DriverDashboard />} />
          <Route path="active-order" element={<DriverActiveOrder />} />
          <Route path="earnings" element={<DriverEarnings />} />
          <Route path="profile" element={<DriverProfile />} />
        </Route>

        {/* 🏪 MÓDULO 3: RESTAURANTE */}
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route path="dashboard" element={<div className="p-8 font-bold text-gray-500">Estadísticas (Pendiente)</div>} />
          <Route path="orders" element={<RestaurantOrders />} />
          <Route path="inventory" element={<RestaurantInventory />} />
          <Route path="settings" element={<div className="p-8 font-bold text-gray-500">Configuración (Pendiente)</div>} />
        </Route>

        {/* 💻 MÓDULO 4: ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="stores" element={<div className="p-8 font-bold text-slate-500">Módulo de Comercios (Pendiente)</div>} />
          <Route path="drivers" element={<div className="p-8 font-bold text-slate-500">Módulo de Repartidores (Pendiente)</div>} />
          <Route path="settings" element={<div className="p-8 font-bold text-slate-500">Configuración Global (Pendiente)</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  );
}