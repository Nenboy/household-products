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
        <div
          key={option.id}
          className="payment-option"
          role="radio"
          aria-checked={selectedMethod === option.id}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === ' ' || e.key === 'Enter') {
              onChange(option.id);
              e.preventDefault();
            }
          }}
        >
          <input
            type="radio"
            id={option.id}
            name="payment"
            checked={selectedMethod === option.id}
            onChange={() => onChange(option.id)}
            tabIndex={-1}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
