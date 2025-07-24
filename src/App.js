import React from 'react'

// import Profile from './pages/Profile';
import Profile from './pages/Profile';

import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import './App.css'
import Homepage from './pages/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />}
      </Routes>
    </div>
  )
}

export default App
