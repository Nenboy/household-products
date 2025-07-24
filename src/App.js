// <<<<<<< feature/carts
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CartPage from './pages/Cart/CartPage';
// import CheckoutPage from './pages/Cart/CheckoutPage';
// import PaymentErrorPage from './pages/Cart/PaymentErrorPage';
// import PaymentSuccessPage from './pages/Cart/PaymentSuccessPage';
// import TrackOrderPage from './pages/Cart/TrackOrderPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/payment-error" element={<PaymentErrorPage />} />
//         <Route path="/payment-success" element={<PaymentSuccessPage />} />
//         <Route path="/track-order" element={<TrackOrderPage />} />
//       </Routes>
//     </Router>
//   );

import React from 'react'

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

export default App;

