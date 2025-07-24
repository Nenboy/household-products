import React, { useState } from 'react';
import './Profile.css';
const Settings = ({ onNavigate, isDarkMode, setIsDarkMode }) => {
  const [settings, setSettings] = useState({
    biometricAuth: true,
    autoSync: true,
    dataUsage: false,
    location: true,
    analytics: false
  });

  const handleToggle = (key) => {
    if (key === 'darkMode') {
      setIsDarkMode(!isDarkMode);
    } else {
      setSettings({
        ...settings,
        [key]: !settings[key]
      });
    }
  };

  const handleLanguageChange = () => {
    alert('Language selection would open here');
  };

  const handleCurrencyChange = () => {
    alert('Currency selection would open here');
  };

  const handlePrivacyPolicy = () => {
    alert('Privacy Policy would open here');
  };

  const handleTermsOfService = () => {
    alert('Terms of Service would open here');
  };

  const settingsToggles = [
    {
      key: 'darkMode',
      title: 'Dark Mode',
      subtitle: 'Switch to dark theme',
      value: isDarkMode
    },
    {
      key: 'biometricAuth',
      title: 'Biometric Authentication',
      subtitle: 'Use fingerprint or face ID',
      value: settings.biometricAuth
    },
    {
      key: 'autoSync',
      title: 'Auto Sync',
      subtitle: 'Automatically sync your data',
      value: settings.autoSync
    },
    {
      key: 'dataUsage',
      title: 'Reduce Data Usage',
      subtitle: 'Load images in lower quality',
      value: settings.dataUsage
    },
    {
      key: 'location',
      title: 'Location Services',
      subtitle: 'Allow location access for delivery',
      value: settings.location
    },
    {
      key: 'analytics',
      title: 'Usage Analytics',
      subtitle: 'Help improve the app',
      value: settings.analytics
    }
  ];

  const menuItems = [
    {
      title: 'Language',
      subtitle: 'English',
      action: handleLanguageChange
    },
    {
      title: 'Currency',
      subtitle: 'USD ($)',
      action: handleCurrencyChange
    },
    {
      title: 'Privacy Policy',
      subtitle: 'Read our privacy policy',
      action: handlePrivacyPolicy
    },
    {
      title: 'Terms of Service',
      subtitle: 'Read our terms of service',
      action: handleTermsOfService
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-button" onClick={() => onNavigate('profile')}>
          ←
        </button>
        <h1 className="page-title">Settings</h1>
      </div>

      <div className="settings-section">
        <h3 style={{ marginBottom: '20px', color: 'inherit' }}>Preferences</h3>
        {settingsToggles.map((setting) => (
          <div key={setting.key} className="setting-item">
            <div className="setting-left">
              <div className="setting-title">{setting.title}</div>
              <div className="setting-subtitle">{setting.subtitle}</div>
            </div>
            <div 
              className={`toggle-switch ${setting.value ? 'active' : ''}`}
              onClick={() => handleToggle(setting.key)}
            ></div>
          </div>
        ))}
      </div>

      <div className="settings-section" style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '20px', color: 'inherit' }}>General</h3>
        {menuItems.map((item, index) => (
          <div key={index} className="setting-item" onClick={item.action} style={{ cursor: 'pointer' }}>
            <div className="setting-left">
              <div className="setting-title">{item.title}</div>
              <div className="setting-subtitle">{item.subtitle}</div>
            </div>
            <span className="menu-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
