import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Home';
import Profile from './pages/Profile/Profile'; // Use only one import for Profile
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} /> {/* ✅ properly closed tag */}
      </Routes>
    </div>
  );
}

export default App;
