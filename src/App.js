import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Home';
<<<<<<< HEAD
import Profile from './pages/Profile/Profile'; // Use only one import for Profile
import Wishlist from './pages/Wishlist/Wishlist';
import CartPage from './pages/Cart/CartPage';
import Profile from './pages/Profile/Profile'; // Use only one import for Profile
import Categories from './pages/Categories/Categories'; // Import Categories page 1cb695118cbfcee15d1205b91d510a346149155a
=======

import Profile from './pages/Profile/Profile'; // Use only one import for Profile
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
        <Route path="/profile" element={<Profile />} /> {/* ✅ properly closed tag */}
        <Route path="/categories" element={<Categories />} /> {/* ✅ properly closed tag */}
        <Route path="/cart" element={<CartPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
