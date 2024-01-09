import React from 'react';

const Step2Household = ({ formData, setFormData, prevStep, nextStep, submitForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePrev = () => {
    prevStep();
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className='step-container'>
      <h2>Household</h2>

      {/* Adding a radio button for a choice */}
      {/* string */}
      <label>
        Do you own or rent?
        <div >
          <input
            type="radio"
            name="homeOwnershipType"
            value="own"
            checked={formData.homeOwnershipType === 'own'}
            onChange={handleChange}
          />
          Own
        </div>
        <div>
          <input
            type="radio"
            name="homeOwnershipType"
            value="rent"
            checked={formData.homeOwnershipType === 'rent'}
            onChange={handleChange}
          />
          Rent
        </div>
      </label>
      
    <label>How many adults live at this address?</label>
        <input
          type="number"
          name="totalAdults"
          value={formData.totalAdults}
          onChange={handleChange}
        />
        
        
    <label>How many children live at this address?</label>
        <input
          type="number"
          name="totalChildren"
          value={formData.totalChildren}
          onChange={handleChange}
        />
      

      <div className="button-container">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Step2Household;
