import React from 'react';
import './Steps.css';

const Step3AdditionalQs = ({ formData, setFormData, prevStep, submitForm }) => {

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

  const handleSubmit = () => {
    // Logic to submit the form data is in MultistepForm.jsx
    submitForm();
  };

  return (
    <div className='step-container'>
      <h2>Additional Questions</h2>
  

      <label>When no one is home, where will your dog stay?</label>
        <input
          type="text"
          name="dogStayWhenNobodyHome"
          value={formData.dogStayWhenNobodyHome}
          onChange={handleChange}
        />
        
        
    <label>How many hours a day will the dog spend alone?</label>
        <input
          type="number"
          name="dogStayAloneHours"
          value={formData.dogStayAloneHours}
          onChange={handleChange}
        />

    <label>Where will your dog sleep at night?</label>
        <input
          type="text"
          name="dogSleepingPlace"
          value={formData.dogSleepingPlace}
          onChange={handleChange}
        />

         {/* boolean */}
<label className="vet-fees-question">
  Are you prepared to spend $150-300 per year in veterinary fees for vaccinations and medications?
  <div>
    <input
      type="radio"
      name="isFinanciallyPrepared"
      value="Yes"
      checked={formData.isFinanciallyPrepared === 'Yes'}
      onChange={handleChange}
    />
    Yes
  </div>
  <div>
    <input
      type="radio"
      name="is_financially_prepared"
      value="No"
      checked={formData.is_financially_prepared === 'No'}
      onChange={handleChange}
    />
    No
  </div>
</label>  
   

      <div className="button-container">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Step3AdditionalQs;