import React, { useState } from 'react';
import './Profile.css';

const EditProfile = ({ userData = {}, setUserData, onNavigate }) => {
  const avatarOptions = [
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  ];

  const [formData, setFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    phone: userData.phone || '',
    address: userData.address || '',
    avatar: userData.avatar || avatarOptions[0],
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showImageSelection, setShowImageSelection] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAvatarSelect = (avatarUrl) => {
    setFormData({
      ...formData,
      avatar: avatarUrl
    });
    setShowImageSelection(false);
  };

  const handleSave = () => {
    setUserData(formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTimeout(() => {
        onNavigate('profile');
      }, 500);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="page">
        <div className="success-message">
          <div className="success-checkmark"></div>
          <h2 className="success-title">Profile Updated!</h2>
          <p className="success-subtitle">Your changes have been saved successfully</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('profile')}>
          ←
        </button>
        <h1 className="page-title">Edit Profile</h1>
      </div>

      <div className="profile-info">
        <img 
          src={formData.avatar || avatarOptions[0]} 
          alt="Profile" 
          className="profile-avatar"
          onClick={() => setShowImageSelection(!showImageSelection)}
        />
        <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
          Tap image to change
        </p>
      </div>

      {showImageSelection && (
        <div className="form-group">
          <label className="form-label">Choose Profile Picture</label>
          <div className="image-selection">
            {avatarOptions.map((avatarUrl, index) => (
              <div
                key={index}
                className={`image-option ${formData.avatar === avatarUrl ? 'selected' : ''}`}
                onClick={() => handleAvatarSelect(avatarUrl)}
              >
                <img src={avatarUrl} alt={`Avatar option ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Enter your address"
        />
      </div>

      <button className="btn-primary" onClick={handleSave}>
        Save Changes
      </button>

      <button className="btn-secondary" onClick={() => onNavigate('profile')}>
        Cancel
      </button>
    </div>
  );
};

export default EditProfile;
