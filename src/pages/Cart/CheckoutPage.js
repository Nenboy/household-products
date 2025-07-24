// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../../components/OrderSummary';
import ShippingAddress from '../../components/ShippingAddress';
import PaymentMethods from '../../components/PaymentMethods';
import './Styles.css';

const CheckoutPage = () => {
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });
  
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    // For demo, we'll randomly succeed or fail
    const isSuccess = Math.random() > 0.3;
    
    if (isSuccess) {
      navigate('/payment-success');
    } else {
      navigate('/payment-error');
    }
  };
  
  const deliveryOptions = [
    { id: 'standard', label: 'Standard Delivery (3-5 days)', price: 15.00 },
    { id: 'express', label: 'Express Delivery (1-2 days)', price: 25.00 },
    { id: 'same-day', label: 'Same Day Delivery', price: 40.00 }
  ];
  
  return (
    <div className="checkout-page">
      <h1>Check Out</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="checkout-sections">
          <div className="shipping-section">
            <ShippingAddress 
              address={shippingAddress}
              onChange={setShippingAddress}
            />
            
            <div className="delivery-options">
              <h3>Delivery Options</h3>
              {deliveryOptions.map(option => (
                <div key={option.id} className="delivery-option">
                  <input
                    type="radio"
                    id={option.id}
                    name="delivery"
                    checked={deliveryOption === option.id}
                    onChange={() => setDeliveryOption(option.id)}
                  />
                  <label htmlFor={option.id}>
                    {option.label} - ${option.price.toFixed(2)}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="payment-section">
            <PaymentMethods 
              selectedMethod={paymentMethod}
              onChange={setPaymentMethod}
            />
            
            <OrderSummary 
              deliveryPrice={
                deliveryOptions.find(o => o.id === deliveryOption)?.price || 0
              }
            />
            
            <button type="submit" className="pay-now-btn">
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;