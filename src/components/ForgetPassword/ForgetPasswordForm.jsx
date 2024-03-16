import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fp } from '../../assets';


const ForgetPasswordForm = () => {
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
    <div className='mx-auto '>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <div>
        <img src={fp} className='"w-[90px] md:w-[150px] h-[90px] md:h-[150px] ml-[130px] md:ml-[80px]'/>
        <div className="text-white text-lg md:text-[22.18px]  font-semibold  ml-[60px] md:ml-[40px] mt-[30px] md:mt-[20px] ">No worries! We got you</div>

        </div>
        
        <div className='form-field ml-[70px]'>
          <label htmlFor="OTPcode" className={OTPcode ? 'hidden' : ''}>
            <p className='text-black'> Phone Number</p>
           
          </label>
          <input
            type="text"
            id="OTPcode"
            value={OTPcode}
            onChange={(e) => setOTPcode(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-2 w-[280.82px] h-[34.04px] bg-white rounded-lg"
          />
        </div>
     
        
        <div className='flex justify-center items-center'>
        <button onClick={() => navigate('LoginPage')} type="submit" className='signuppage-layout signup-button'>Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;