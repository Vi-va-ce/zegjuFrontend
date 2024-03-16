import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationFormTwo = () => {
  const navigate=useNavigate();

  const [OTPcode, setOTPcode] = useState('');
  const [Transactionid, setTransactionid] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.previousElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form field values using the state variables (OTPcode, Transactionid, phoneNumber)
  };

  return (
    <div className='mx-auto'>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight create-account-style'>Create Account</h1>
        <div className='form-field'>
          <label htmlFor="OTPcode" className={OTPcode ? 'hidden' : ''}>
            OTP code
          </label>
          <input
            type="text"
            id="OTPcode"
            value={OTPcode}
            onChange={(e) => setOTPcode(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-2 registration-width border-gradient"
          />
        </div>
        <div className='form-field'>
          <label htmlFor="Transactionid" className={Transactionid ? 'hidden' : ''}>
            Transaction ID
          </label>
          <input
            type="text"
            id="Transactionid"
            value={Transactionid}
            onChange={(e) => setTransactionid(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-2 registration-width border-gradient"
          />
        </div>
        <div className='payment-field'>
          <label htmlFor="" className="">
            Pay according to the following information<br />
            weldgebrial Belete<br />
            +251924786718
          </label>
          <input
            id="confirmPassword"
            value={phoneNumber}
            
            
            className="p-2 confirm-width border-gradient"
          />
        </div>
        <div className='flex justify-center items-center'>
        <button onClick={() => navigate('LoginPage')} type="submit" className='signuppage-layout signup-button'>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormTwo;