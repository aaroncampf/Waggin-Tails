import React from 'react';
import './Steps.css';

const Step3AdditionalQs = ({ formData, setFormData, prevStep, submitForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
      // Convert string to boolean
  const booleanValue = value === 'true';
    setFormData((prevData) => ({
      ...prevData,
    [name]: booleanValue,
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
    <div>
      <h2>Additional Questions</h2>

      <label>When no one is home, where will your dog stay?</label>
        <input
          type="text"
          name="stay"
          value={formData.stay}
          onChange={handleChange}
        />
        
        
    <label>How many hours a day will the dog spend alone?</label>
        <input
          type="text"
          name="alone"
          value={formData.alone}
          onChange={handleChange}
        />

    <label>Where will your dog sleep at night?</label>
        <input
          type="text"
          name="night"
          value={formData.night}
          onChange={handleChange}
        />


{/* boolean */}
<label className="vet-fees-question">
  Are you prepared to spend $150-300 per year in veterinary fees for vaccinations and medications?
  <div>
    <input
      type="radio"
      name="vet"
      value={true}
      checked={formData.vet === true}
      onChange={handleChange}
    />
    Yes
  </div>
  <div>
    <input
      type="radio"
      name="vet"
      value={false}
      checked={formData.vet === false}
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