import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Cart/CheckoutPage';
import PaymentErrorPage from './pages/Cart/PaymentErrorPage';
import PaymentSuccessPage from './pages/Cart/PaymentSuccessPage';
import TrackOrderPage from './pages/Cart/TrackOrderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-error" element={<PaymentErrorPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;

