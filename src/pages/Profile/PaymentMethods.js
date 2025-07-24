import React, { useState } from 'react';
import './Profile.css';
const PaymentMethods = ({ onNavigate }) => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'VISA',
      number: '**** **** **** 1234',
      expiry: '12/25',
      isDefault: true
    },
    {
      id: 2,
      type: 'MASTERCARD',
      number: '**** **** **** 5678',
      expiry: '08/26',
      isDefault: false
    },
    {
      id: 3,
      type: 'PAYPAL',
      number: 'madison.smith@email.com',
      expiry: '',
      isDefault: false
    }
  ]);

  const handleDelete = (id) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit payment method ${id}`);
  };

  const addNewPaymentMethod = () => {
    const newMethod = {
      id: Date.now(),
      type: 'VISA',
      number: '**** **** **** 9999',
      expiry: '01/28',
      isDefault: false
    };
    setPaymentMethods([...paymentMethods, newMethod]);
  };

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('profile')}>
          ←
        </button>
        <h1 className="page-title">Payment Methods</h1>
      </div>

      <div className="payment-methods-list">
        {paymentMethods.map((method) => (
          <div key={method.id} className="payment-card">
            <div className="payment-info">
              <div className="payment-icon">
                {method.type === 'PAYPAL' ? 'PP' : method.type.slice(0, 2)}
              </div>
              <div className="payment-details">
                <h4>{method.number}</h4>
                <p>
                  {method.expiry && `Expires ${method.expiry}`} {method.isDefault && '• Default'}
                </p>
              </div>
            </div>
            <div className="payment-actions">
              <button 
                className="btn-small btn-edit"
                onClick={() => handleEdit(method.id)}
              >
                Edit
              </button>
              <button 
                className="btn-small btn-delete"
                onClick={() => handleDelete(method.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={addNewPaymentMethod}>
        Add New Payment Method
      </button>

      {paymentMethods.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
          <p>No payment methods added</p>
          <p>Add a payment method to make purchases easier!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
