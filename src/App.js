import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Home';
import LivingRoom from './pages/Categories/LivingRoom';
import Kitchen from './pages/Categories/Kitchen';
import DiningRoom from './pages/Categories/DiningRoom';
import Office from './pages/Categories/Office';
import Bedroom from './pages/Categories/Bedroom';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import Settings from './pages/Profile/Settings';
import MyOrders from './pages/Profile/MyOrders';
import Notifications from './pages/Profile/Notifications';
import PaymentMethods from './pages/Profile/PaymentMethods';
import Logout from './pages/Profile/Logout';
import Wishlist from './pages/Wishlist/Wishlist';
import CartPage from './pages/Cart/CartPage';
import Categories from './pages/Categories/Categories';
import AuthForm from './pages/Setup/Login';

function App() {
  // ✅ Global cart and wishlist state
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // ✅ Toggle wishlist
  const handleToggleWishlist = (product) => {
    const alreadyInWishlist = wishlistItems.find((item) => item.name === product.name);
    if (alreadyInWishlist) {
      setWishlistItems((prev) => prev.filter((item) => item.name !== product.name));
    } else {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<AuthForm />} />
        
        {/* ✅ Pass the shared state & handlers to each category */}
        <Route
          path="/assets/Categories/livingroom"
          element={
            <LivingRoom
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistItems={wishlistItems}
            />
          }
        />
        <Route
          path="/assets/Categories/diningroom"
          element={
            <DiningRoom
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistItems={wishlistItems}
            />
          }
        />
        <Route
          path="/assets/Categories/office"
          element={
            <Office
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistItems={wishlistItems}
            />
          }
        />

        {/* You can leave these as is if they're not using shared logic */}
        <Route path="/assets/Categories/kitchen" element={<Kitchen />} />
        <Route path="/assets/Categories/bedroom" element={<Bedroom />} />

        {/* Pass wishlistItems if needed in Wishlist page too */}
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/wishlist" element={<Wishlist />} />

        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/myorders" element={<MyOrders />} />
        <Route path="/profile/notification" element={<Notifications />} />
        <Route path="/profile/payment-methods" element={<PaymentMethods />} />
        <Route path="/profile/logout" element={<Logout />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
