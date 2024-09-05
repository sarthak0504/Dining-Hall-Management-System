import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting after login
import axios from 'axios';
import '../pages/styles/payment.css';


const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Logic to handle payment submission
    console.log('Selected Plan:', selectedPlan);
    console.log('Selected Payment Method:', paymentMethod);
  };

  return (
    <div className="payment-container">
      <h2>Select Subscription Plan</h2>
      <div className="plan-options">
        <div className={`plan ${selectedPlan === 'basic' ? 'selected' : ''}`} onClick={() => handlePlanSelect('basic')}>
          <h3>One Plan</h3>
          <p>50Rs/ Day</p>
        </div>
        <div className={`plan ${selectedPlan === 'premium' ? 'selected' : ''}`} onClick={() => handlePlanSelect('premium')}>
          <h3>Monthly Plan</h3>
          <p>1200Rs/30 Days</p>
        </div>
        <div className={`plan ${selectedPlan === 'deluxe' ? 'selected' : ''}`} onClick={() => handlePlanSelect('deluxe')}>
          <h3>Premium Plan</h3>
          <p>2000Rs/60 Days</p>
        </div>
      </div>

      <h2>Select Payment Method</h2>
      <div className="payment-methods">
        <div className={`method ${paymentMethod === 'card' ? 'selected' : ''}`} onClick={() => handlePaymentMethodSelect('card')}>
          <h3>Card</h3>
          <p>Pay with Debit/Credit Card</p>
        </div>
        <div className={`method ${paymentMethod === 'upi' ? 'selected' : ''}`} onClick={() => handlePaymentMethodSelect('upi')}>
          <h3>UPI</h3>
          <p>Pay with UPI</p>
        </div>
      </div>

      <button className="submit-payment" onClick={handlePaymentSubmit} disabled={!selectedPlan || !paymentMethod}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Payment;
