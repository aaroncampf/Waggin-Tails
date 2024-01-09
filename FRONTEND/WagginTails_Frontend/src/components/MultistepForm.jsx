import React, { useState } from 'react';
import Step1ContactInfo from './Step1ContactInfo';
import Step2Household from './Step2Household';
import Step3AdditionalQs from './Step3AdditionalQs';
import SubmissionConfirmation from './SubmissionConfirmation';
import SubmissionFailure from './SubmissionFailure';

const MultistepForm = ({dog}) => {
  const [step, setStep] = useState(1);
  console.log("in multistep form",dog)
 // let dog_Stringobject= JSON.stringify(dog);
  console.log(dog)
  const [formData, setFormData] = useState({
    // Fields for Step 1 (Step1ContactInfo)
    fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipcode: '',
  
      homeOwnershipType: '', 
      totalAdults: 0,
      totalChildren: 0,
  
      
      dogStayWhenNobodyHome: '',
      dogStayAloneHours: 0,
      dogSleepingPlace: '',
      isFinanciallyPrepared: '',
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
     
      fullName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      city: '',
      state: '',
      zipcode: '',
  
      homeOwnershipType: '', 
      totalAdults: 0,
      totalChildren: 0,
  
      
      dogStayWhenNobodyHome: '',
      dogStayAloneHours: 0,
      dogSleepingPlace: '',
      isFinanciallyPrepared: '',
      dog: dog,
    });
    setStep(1);
    setSubmitted(false);
    setSubmissionError(false);
  };

  const submitForm = () => {
    console.log("requestbody",JSON.stringify(formData))
    // ***** Here you can send the formData to your server or perform other actions *****
    fetch('http://localhost:8080/api/saveAdoptionApplication', {
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
