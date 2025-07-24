// src/components/ShippingAddress.js
import React from 'react';

const ShippingAddress = ({ address, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...address,
      [name]: value
    });
  };
  
  return (
    <div className="shipping-address">
      <h3>Shipping Address</h3>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={address.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={address.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State/Province</label>
        <input
          type="text"
          id="state"
          name="state"
          value={address.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="zipCode">Zip/Postal Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={address.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={address.country}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ShippingAddress;