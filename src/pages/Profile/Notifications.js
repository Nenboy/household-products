import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newArrivals: true,
    priceDrops: true,
    newsletter: false,
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleToggle = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleSavePreferences = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const notificationSettings = [
    { key: 'orderUpdates', title: 'Order Updates', subtitle: 'Get notified about your order status' },
    { key: 'promotions', title: 'Promotions & Offers', subtitle: 'Receive exclusive deals and discounts' },
    { key: 'newArrivals', title: 'New Arrivals', subtitle: 'Be first to know about new products' },
    { key: 'priceDrops', title: 'Price Drops', subtitle: 'Get alerted when items go on sale' },
    { key: 'newsletter', title: 'Newsletter', subtitle: 'Weekly home decor tips and trends' },
    { key: 'pushNotifications', title: 'Push Notifications', subtitle: 'Receive notifications on your device' },
    { key: 'emailNotifications', title: 'Email Notifications', subtitle: 'Receive notifications via email' },
    { key: 'smsNotifications', title: 'SMS Notifications', subtitle: 'Receive notifications via text message' }
  ];

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-button" onClick={handleBack}>←</button>
        <h1 className="page-title">Notifications</h1>
      </div>

      {showSuccess ? (
        <div className="success-message">
          <div className="success-checkmark"></div>
          <h2 className="success-title">Preferences Saved!</h2>
          <p className="success-subtitle">Your notification settings have been updated</p>
        </div>
      ) : (
        <>
          <div className="notification-settings">
            {notificationSettings.map((setting) => (
              <div key={setting.key} className="setting-item">
                <div className="setting-left">
                  <div className="setting-title">{setting.title}</div>
                  <div className="setting-subtitle">{setting.subtitle}</div>
                </div>
                <div
                  className={`toggle-switch ${notifications[setting.key] ? 'active' : ''}`}
                  onClick={() => handleToggle(setting.key)}
                ></div>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ marginTop: '30px' }} onClick={handleSavePreferences}>
            Save Preferences
          </button>
        </>
      )}
    </div>
  );
};

export default Notifications;
