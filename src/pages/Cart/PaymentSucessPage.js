// src/pages/PaymentSuccessPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../../context/CartWishlistContext'; 
import './Styles.css';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useCartWishlist();

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <div 
      className="payment-status-page success"
      style={{
        backgroundColor: '#fff7e6',  // bright warm background
        color: '#d97706',            // bright amber text
        padding: '40px 20px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(255, 165, 0, 0.3)', // bright orange shadow
        maxWidth: '400px',
        margin: '50px auto',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '1.2rem'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Thank You!</h1>
      <p style={{ marginBottom: '32px', fontSize: '1.1rem' }}>
        Your order is complete.
      </p>

      <div className="action-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button 
          className="track-order-btn"
          onClick={() => navigate('/track-order')}
          style={{
            backgroundColor: '#f59e0b',  // bright amber button
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.6)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#d97706')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#f59e0b')}
        >
          Track Your Order
        </button>

        <button 
          className="home-btn"
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#10b981',  // bright green button
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.6)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.target.style.backgroundColor = '#059669')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#10b981')}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
