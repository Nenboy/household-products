import React, { useState } from 'react';
import { Heart, Home, Search, User, ShoppingBag, ArrowLeft, Plus } from "lucide-react";
import "./Wishlist.css"
const mockFurnitureItems = [
  {
    id: 1,
    name: "Slipper Room",
    description: "In shaping future, while being a high quality one.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    price: "$85"
  },
  {
    id: 2,
    name: "Kitchen Storage",
    description: "In shaping future, while being a high quality one.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    price: "$42"
  },
  {
    id: 3,
    name: "Bedroom Dresser",
    description: "In shaping future, while being a high quality one.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    price: "$120"
  },
  {
    id: 4,
    name: "Blue Table Lamp",
    description: "In shaping future, while being a high quality one.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    price: "$25"
  },
  {
    id: 5,
    name: "Cowal Seat",
    description: "In shaping future, while being a high quality one.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
    price: "$78"
  }
];

export default function Wishlist () {
  const [currentScreen, setCurrentScreen] = useState('empty');
  const [activeTab, setActiveTab] = useState('wishlist');

  const renderHeader = (title, showBack = false) => (
    <header className="app-header">
      <div className="header-left">
        {showBack ? (
          <button onClick={() => setCurrentScreen('empty')} className="back-button">
            <ArrowLeft size={20} />
          </button>
        ) : (
          <div className="menu-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <h1 className="header-title">{title}</h1>
      <div className="header-right">
        <div className="profile-circle"></div>
      </div>
    </header>
  );

  const renderBottomNav = () => (
    <nav className="bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <Home size={20} />
      </button>
      <button 
        className={`nav-item ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => setActiveTab('search')}
      >
        <Search size={20} />
      </button>
      <button 
        className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
        onClick={() => setActiveTab('wishlist')}
      >
        <Heart size={20} />
      </button>
      <button 
        className={`nav-item ${activeTab === 'bag' ? 'active' : ''}`}
        onClick={() => setActiveTab('bag')}
      >
        <ShoppingBag size={20} />
      </button>
      <button 
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <User size={20} />
      </button>
    </nav>
  );

  const renderEmptyState = () => (
    <div className="screen">
      {renderHeader("Wishlist")}
      <main className="main-content empty-state">
        <div className="empty-icon">
          <Heart size={120} />
        </div>
        <div className="empty-text">
          <h2>Your Wishlist is</h2>
          <h2>Empty.</h2>
        </div>
        <button 
          className="create-button"
          onClick={() => setCurrentScreen('create')}
        >
          Start Creating
        </button>
      </main>
    </div>
  );


  return (
    <div className="app">
      {currentScreen === 'empty' && renderEmptyState()}
    </div>
  );
}
