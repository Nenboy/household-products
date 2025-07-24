
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
      
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />}
      
    </div>
  )
}

export default App

