import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext'; // Adjust path if needed
import './Styles.css';

const PaymentErrorPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useCartWishlist();

  // Optionally clear cart or wishlist on payment error
  useEffect(() => {
    // Uncomment if you want to clear cart on payment error
    // dispatch({ type: 'CLEAR_CART' });
    // Or clear wishlist if you add this action to your reducer
    // dispatch({ type: 'CLEAR_WISHLIST' });
  }, [dispatch]);

  return (
    <div className="payment-status-page error">
      <h1>Oops!</h1>
      <p>Something went wrong, we are sure your payment could not be processed.</p>

      <div className="action-buttons">
        <button
          className="try-again-btn"
          onClick={() => navigate('/checkout')}
        >
          Try Again
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

export default PaymentErrorPage;
