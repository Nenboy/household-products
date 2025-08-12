import React from 'react';

const countries = ['United States', 'Canada', 'United Kingdom', 'Nigeria', 'Other'];
const states = ['Select State', 'California', 'Texas', 'New York', 'Lagos', 'Others'];

const ShippingAddress = ({ address, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...address,
      [name]: value,
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
          minLength={3}
          title="Please enter your full name (at least 3 characters)."
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
          minLength={5}
          title="Please enter your address (at least 5 characters)."
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
          minLength={2}
          title="Please enter your city."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="state">State/Province</label>
        <select
          id="state"
          name="state"
          value={address.state}
          onChange={handleChange}
          required
          title="Please select your state or province."
        >
          {states.map((stateOption) => (
            <option key={stateOption} value={stateOption === 'Select State' ? '' : stateOption}>
              {stateOption}
            </option>
          ))}
        </select>
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
          pattern="^[A-Za-z0-9\s\-]{3,10}$"
          title="Please enter a valid zip or postal code."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={address.country}
          onChange={handleChange}
          required
          title="Please select your country."
        >
          <option value="">Select Country</option>
          {countries.map((countryOption) => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShippingAddress;
