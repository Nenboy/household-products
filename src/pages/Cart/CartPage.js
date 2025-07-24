// src/pages/CartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import './Styles.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    // Sample data - in a real app, this would come from your state management
    // { id: 1, name: 'Refrigerator', price: 899.99, quantity: 1, image: 'fridge.jpg' },
    // { id: 2, name: 'Microwave', price: 129.99, quantity: 2, image: 'microwave.jpg' }
  ]);
  
  const navigate = useNavigate();
  
  const taskFee = 5.00;
  const deliveryFee = 15.00;
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const grandTotal = subtotal + taskFee + deliveryFee;
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="cart-page">
      <h1>My Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="cart-icon-bg"></div>
          <p>There are no items in your cart</p>
        </div>
      ) : (
        <div className="cart-with-items">
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          
          <div className="cart-summary">
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
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row grand-total">
              <span>Grand Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            
            <button 
              className="checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;