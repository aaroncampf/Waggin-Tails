import React from 'react';
import './Steps.css'; // Import the CSS file for styling

const Step1ContactInfo = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Contact Information</h2>

      <div className="form-grid">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label>Phone Number</label>
        </div>

        <div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <label>Street Address</label>
        </div>

        <div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <label>City</label>
        </div>

        <div>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <label>State</label>
        </div>

      </div>

      <div className="button-container">
        <button onClick={handleNext}>Next</button>
      </div>      
      </div>
  );
};

export default Step1ContactInfo;