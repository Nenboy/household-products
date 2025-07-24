// src/pages/PaymentErrorPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const PaymentErrorPage = () => {
  const navigate = useNavigate();
  
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