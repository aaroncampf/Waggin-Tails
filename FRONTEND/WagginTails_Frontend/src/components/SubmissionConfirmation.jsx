import React from 'react';
import { Link } from 'react-router-dom';
const SubmissionConfirmation = () => {
  return (
    <div>
      <h2>Application Complete!</h2>
      <p>Your adoption application has been successfully submitted.</p>
      <p>You can expect a response in 1-2 days. Please find more details about us here:  <Link to="/about">HERE</Link></p>
      <p>Thank you for your interest in adopting with Waggin' Tails!</p>
    </div>
  );
};

export default SubmissionConfirmation;
