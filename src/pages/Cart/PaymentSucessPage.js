import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext'; // adjust path if needed
import './Styles.css';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useCartWishlist();

  // Clear cart on mount (successful payment)
  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <div className="payment-status-page success">
      <h1>Thank You!</h1>
      <p>Your order is complete.</p>

      <div className="action-buttons">
        <button 
          className="track-order-btn"
          onClick={() => navigate('/track-order')}
        >
          Track Your Order
        </button>
        <button 
          className="home-btn"
          onClick={() => navigate('/')}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
