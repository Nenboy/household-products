// src/components/PaymentMethods.js
import React from 'react';

const PaymentMethods = ({ selectedMethod, onChange }) => {
  const paymentOptions = [
    { id: 'credit', label: 'Credit/Debit Card' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'bank', label: 'Bank Transfer' }
  ];
  
  return (
    <div className="payment-methods">
      <h3>Payment Method</h3>
      {paymentOptions.map(option => (
        <div key={option.id} className="payment-option">
          <input
            type="radio"
            id={option.id}
            name="payment"
            checked={selectedMethod === option.id}
            onChange={() => onChange(option.id)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;