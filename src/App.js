import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Home';
import Profile from './pages/Profile/Profile'; // Use only one import for Profile
import EditProfile from './pages/Profile/EditProfile';
import Settings from './pages/Profile/Settings';
import MyOrders from './pages/Profile/MyOrders';
import Notifications from './pages/Profile/Notifications';
import PaymentMethods from './pages/Profile/PaymentMethods';
import Logout from './pages/Profile/Logout';
import Wishlist from './pages/Wishlist/Wishlist';
import CartPage from './pages/Cart/CartPage';
import Categories from './pages/Categories/Categories'; // Import Categories page


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} /> {/* ✅ properly closed tag */}
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/myorders" element={<MyOrders />} />
        <Route path="/profile/wishlist" element={<Wishlist />} />
        <Route path="/profile/notifications" element={<Notifications />} />
        <Route path="/profile/paymentmethods" element={<PaymentMethods />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/logout" element={<Logout />} />
        <Route path="/categories" element={<Categories />} /> {/* ✅ properly closed tag */}
        <Route path="/cart" element={<CartPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
