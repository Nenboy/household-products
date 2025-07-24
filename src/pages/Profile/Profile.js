import React from 'react';

import './Profile.css';

import '../../App.css';

import {
  User,
  Heart,
  ShoppingBag,
  Shield,
  CreditCard,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  ArrowLeft,
  Edit,
} from 'lucide-react';
import { ImageWithFallback } from '../../components/ImageWithFallback';

export default function Profile() {
  const profileImage = 'https://images.unsplash.com/photo-1494790108755-2616b612b567?w=150&h=150&fit=crop&crop=face';

  const menuItems = [
    { icon: Shield, label: 'Privacy Policy' },
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: Bell, label: 'Notification' },
    { icon: Settings, label: 'Settings' },
    { icon: HelpCircle, label: 'Help' },
    { icon: LogOut, label: 'Logout' },
  ];

  const handleBack = () => {
    // Handle back navigation
    console.log('Back button clicked');
  };

  const handleEdit = () => {
    // Handle edit profile
    console.log('Edit button clicked');
  };

  return (
    <div className="app">
      <div className="profile-container">
        <div className="header">
          {/* Top Navigation */}
          <div className="top-nav">
            <button className="nav-button back-button" onClick={handleBack}>
              <ArrowLeft size={20} />
            </button>
            <h1>My Profile</h1>
            <button className="nav-button edit-button" onClick={handleEdit}>
              <Edit size={20} />
            </button>
          </div>
          
          {/* Profile Section */}
          <div className="profile-photo">
            <ImageWithFallback
              src={profileImage}
              alt="Profile"
              className="photo"
            />
          </div>
          <h2>Madison Smith</h2>
          <p>ID: 200-000</p>
        </div>

        <div className="action-buttons">
          <div className="button-grid">
            <button className="action-button">
              <User className="icon" />
              <span>Profile</span>
            </button>
            <button className="action-button">
              <Heart className="icon" />
              <span>Wishlist</span>
            </button>
            <button className="action-button">
              <ShoppingBag className="icon" />
              <span>My Orders</span>
            </button>
          </div>
        </div>

        <div className="menu">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button key={index} className="menu-item">
                <div className="icon-circle">
                  <Icon className="menu-icon" />
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}