import React, { useState, useEffect } from 'react';
import './Profile.css';
const Logout = ({ onNavigate }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    setShowPopup(true);
  }, []);

  const handleCancel = () => {
    setShowPopup(false);
    setTimeout(() => {
      onNavigate('profile');
    }, 300);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    // Here you would implement actual logout logic
    alert('Logged out successfully!');
    setTimeout(() => {
      onNavigate('profile');
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  if (!showPopup) return null;

  return (
    <div className="logout-overlay" onClick={handleOverlayClick}>
      <div className="logout-popup">
        <h3>Are you sure you want to log out?</h3>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
          You will need to sign in again to access your account.
        </p>
        <div className="logout-buttons">
          <button className="logout-btn logout-btn-cancel" onClick={handleCancel}>
            No
          </button>
          <button className="logout-btn logout-btn-confirm" onClick={handleConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
