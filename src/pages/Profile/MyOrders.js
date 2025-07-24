import React, { useState } from 'react';
import './Profile.css';

const MyOrders = ({ onNavigate }) => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      date: '2025-01-20',
      items: 'Modern Sofa, Coffee Table',
      total: '$1,249.99',
      status: 'delivered'
    },
    {
      id: 'ORD-002',
      date: '2025-01-18',
      items: 'Dining Chair Set (4pcs)',
      total: '$599.99',
      status: 'processing'
    },
    {
      id: 'ORD-003',
      date: '2025-01-15',
      items: 'Floor Lamp, Wall Art',
      total: '$299.99',
      status: 'pending'
    },
    {
      id: 'ORD-004',
      date: '2025-01-10',
      items: 'Bookshelf, Desk Organizer',
      total: '$449.99',
      status: 'delivered'
    }
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case 'delivered':
        return 'status-delivered';
      case 'processing':
        return 'status-processing';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('profile')}>
          ←
        </button>
        <h1 className="page-title">My Orders</h1>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span className="order-id">{order.id}</span>
              <span className={`order-status ${getStatusClass(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
            <div className="order-date">Ordered on {order.date}</div>
            <div className="order-items">{order.items}</div>
            <div className="order-total">Total: {order.total}</div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
          <p>No orders found</p>
          <p>Start shopping to see your orders here!</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
