import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Home';
import Profile from './pages/Profile/Profile'; // Use only one import for Profile
import Categories from './pages/Categories/Categories'; // Import Categories page

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} /> {/* ✅ properly closed tag */}
        <Route path="/categories" element={<Categories />} /> {/* ✅ properly closed tag */}
      </Routes>
    </div>
  );
}

export default App;
