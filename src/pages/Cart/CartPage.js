import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { useCartWishlist } from '../../context/CartWishlistContext';
import './Styles.css';

const CartPage = () => {
  const { state, dispatch } = useCartWishlist();
  const { cartItems } = state;

  const navigate = useNavigate();

  const taskFee = 5.0;
  const deliveryFee = 15.0;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const grandTotal = subtotal + taskFee + deliveryFee;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
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
            {cartItems.map((item) => (
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
