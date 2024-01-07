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
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',

    // Fields for Step 2 (Step2Household)
    home: '', // This field represents the choice of owning or renting
    adults: '',
    children: '',

    // Fields for Step 3 (Step3AdditionalQs)
    stay: '',
    alone: '',
    night: '',
    vet: '',
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
      // Reset fields as needed for each step
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      home: '',
      adults: '',
      children: '',
      stay: '',
      alone: '',
      night: '',
      vet: '',
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
