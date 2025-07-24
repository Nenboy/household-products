// src/pages/TrackOrderPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const TrackOrderPage = () => {
  const navigate = useNavigate();
  
  // In a real app, this would come from your state or API
  const orderDetails = {
    address: '123 Main St, Anytown, AN 12345',
    deliveryTime: 'Tomorrow by 9:00 PM',
    status: 'On the way'
  };
  
  return (
    <div className="track-order-page">
      <h1>Track Your Order</h1>
      
      <div className="order-status">
        <p><strong>Status:</strong> {orderDetails.status}</p>
        <p><strong>Estimated Delivery:</strong> {orderDetails.deliveryTime}</p>
      </div>
      
      <div className="map-container">
        {/* In a real app, you would integrate with Google Maps or similar */}
        <div className="map-placeholder">
          <p>Map would show here</p>
          <p>Address: {orderDetails.address}</p>
        </div>
      </div>
      
      <button 
        className="home-btn"
        onClick={() => navigate('/')}
      >
        Return to Home
      </button>
    </div>
  );
};

export default TrackOrderPage;