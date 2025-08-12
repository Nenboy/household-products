import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartWishlistProvider } from './context/CartWishlistContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartWishlistProvider>
        <App />
      </CartWishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
