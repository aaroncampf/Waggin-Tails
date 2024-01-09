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
          name="dog_stay_when_nobody_home"
          value={formData.dog_stay_when_nobody_home}
          onChange={handleChange}
        />
        
        
    <label>How many hours a day will the dog spend alone?</label>
        <input
          type="number"
          name="dog_stay_alone_hours"
          value={formData.dog_stay_alone_hours}
          onChange={handleChange}
        />

    <label>Where will your dog sleep at night?</label>
        <input
          type="text"
          name="dog_sleeping_place"
          value={formData.dog_sleeping_place}
          onChange={handleChange}
        />

         {/* boolean */}
<label className="vet-fees-question">
  Are you prepared to spend $150-300 per year in veterinary fees for vaccinations and medications?
  <div>
    <input
      type="radio"
      name="is_financially_prepared"
      value="Yes"
      checked={formData.is_financially_prepared === 'Yes'}
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