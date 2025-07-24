import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Home/Home';
import Profile from './pages/Profile/Profile'; // Use only one import for Profile

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} /> {/* ✅ properly closed tag */}
      </Routes>
    </div>
  );
}

export default App;
