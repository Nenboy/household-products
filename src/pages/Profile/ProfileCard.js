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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ProfileCard() {
  const profileImage =
    'https://images.unsplash.com/photo-1494790108755-2616b612b567?w=150&h=150&fit=crop&crop=face';

  const menuItems = [
    { icon: Shield, label: 'Privacy Policy', path: '/profile/privacy-policy' },
    { icon: CreditCard, label: 'Payment Methods', path: '/profile/payment-methods' },
    { icon: Bell, label: 'Notification', path: '/profile/notification' },
    { icon: Settings, label: 'Settings', path: '/profile/settings' },
    { icon: HelpCircle, label: 'Help', path: '/profile/help' },
    { icon: LogOut, label: 'Logout', path: '/profile/logout' },
  ];
  const navigate = useNavigate();

const handleBack = () => {
  navigate('/'); 
};

  return (
    <div className="">
      <div className="profile-container">
        <div className="header">
          <div className="top-nav">
            <Link to="/" className="nav-button back-button" onClick={handleBack}>
              <ArrowLeft size={20} />
            </Link>
            {/* <h1>My Profile</h1> */}
          </div>

          <div className="profile-photo">
            <ImageWithFallback
              src={profileImage}
              alt="Profile"
              className="photo"
            />
            
          </div>
          <Link to="/profile/edit" className="nav-button edit-button">
              <Edit size={20} />
            </Link>
          {/* <h2>Madison Smith</h2>
          <p>ID: 200-000</p> */}
        </div>

        <div className="action-buttons">
          <div className="button-grid">
            <Link to="/profile/edit" className="action-button">
              <User className="icon" />
              <span>Profile</span>
            </Link>
            <Link to="/wishlist" className="action-button">
              <Heart className="icon" />
              <span>Wishlist</span>
            </Link>
            <Link to="/profile/myorders" className="action-button">
              <ShoppingBag className="icon" />
              <span>My Orders</span>
            </Link>
          </div>
        </div>

        <div className="menu">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.path} className="menu-item">
                <div className="icon-circle">
                  <Icon className="menu-icon" />
                </div>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
