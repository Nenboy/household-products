import React from 'react';

const OrderSummary = ({ cartItems = [], deliveryPrice = 0 }) => {
  const taskFee = 5.00;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const grandTotal = subtotal + taskFee + deliveryPrice;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="summary-row">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Task Fee:</span>
        <span>${taskFee.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Delivery:</span>
        <span>${deliveryPrice.toFixed(2)}</span>
      </div>
      <div className="summary-row grand-total">
        <span>Grand Total:</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
