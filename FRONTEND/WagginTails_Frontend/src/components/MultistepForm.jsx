import React, { useState } from 'react';
import Step1ContactInfo from './Step1ContactInfo';
import Step2Household from './Step2Household';
import Step3AdditionalQs from './Step3AdditionalQs';
import SubmissionConfirmation from './SubmissionConfirmation';
import SubmissionFailure from './SubmissionFailure';

const MultistepForm = ({dog}) => {
  const [step, setStep] = useState(1);
  console.log("in multistep form",dog)
  const [formData, setFormData] = useState({
    // Fields for Step 1 (Step1ContactInfo)
    full_name: '',
    email: '',
    phone_number: '',
    street_address: '',
    city: '',
    state: '',
    zipcode: '',

    // Fields for Step 2 (Step2Household)
    home_ownership_type: '', // This field represents the choice of owning or renting
    total_adults: '',
    total_children: '',

    // Fields for Step 3 (Step3AdditionalQs)
    dog_stay_when_nobody_home: '',
    dog_stay_alone_hours: '',
    dog_sleeping_place: '',
    is_financially_prepared: '',
    dog: dog,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false); // Track submission failure

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData({
     
      full_name: '',
      email: '',
      phone_number: '',
      street_address: '',
      city: '',
      state: '',
      zipcode: '',
  
      home_ownership_type: '', 
      total_adults: 0,
      total_children: 0,
  
      
      dog_stay_when_nobody_home: '',
      dog_stay_alone_hours: '',
      dog_sleeping_place: '',
      is_financially_prepared: '',
      dog: dog,
    });
    setStep(1);
    setSubmitted(false);
    setSubmissionError(false);
  };

  const submitForm = () => {
    // ***** Here you can send the formData to your server or perform other actions *****
    fetch('https://your-api-endpoint.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173/',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Form submission failed');
        }
        return response.json();
      })
      .then(data => {
        console.log('Form submission successful:', data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setSubmissionError(true);
      });
  };

  return (
    <div>
      {submitted ? (
        <>
          <SubmissionConfirmation />
          <div className="button-container">
            <button onClick={resetForm}>Reset Form</button>
          </div>
        </>
      ) : submissionError ? (
        <>
          <SubmissionFailure />
          <div className="button-container">
            <button onClick={resetForm}>Reset Form</button>
          </div>
        </>
      ) : (
        <>
          {step === 1 && (
            <Step1ContactInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />
          )}
          {step === 2 && (
            <Step2Household formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />
          )}
          {step === 3 && (
            <Step3AdditionalQs formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} />
          )}
        </>
      )}
    </div>
  );
};

export default MultistepForm;
