import React from 'react'
<<<<<<< Updated upstream
import Profile from './pages/Profile';
=======
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
>>>>>>> Stashed changes
import './App.css'

function App() {
  return (
    <div>
<<<<<<< Updated upstream
=======
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
>>>>>>> Stashed changes
      <Profile/>
    </div>
  )
}

export default App
