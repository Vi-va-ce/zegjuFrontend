import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigates, setNavigate] = useState(false); // Changed the initial value to false

  const navigate = useNavigate(); // Added the navigate constant using the useNavigate hook

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.previousElementSibling.style.display = 'block';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { data } = await axios.post('v1/student/logIn',
    {
      email,
      password,
    },
 
    );
  
    // Set refresh_token in cookies using Cookies.set()
    Cookies.set('refresh_token', data.refresh_token);
  
  
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
    setNavigate(true);
  };
  
  if (navigates) {
    navigate('/HomePagemain');
  }
  return (
    <>
    
    <div className='mx-auto'>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <div className='mb-16'>
          <h1 className='mt-6 ml-[-120px] md:mt-10 md:ml-[0px] text-center text-2xl font-bold leading-9 tracking-tight create-account-style'>Login</h1>
        </div>
        <div className='form-field'>
          <div className='mb-16'>
            <label htmlFor="email" className={email ? 'hidden' : ''}>
              email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="p-2 registration-width md:w-[350px] h-[10px] w-[290px] h-[10px] md:h-[38px] blank-form"
            />
          </div>
        </div>
        <div className='form-field'>
          <div className='mb-16'>
            <label htmlFor="password" className={password ? 'hidden' : ''}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
              className="p-2 registration-width md:w-[350px] h-[10px] w-[290px] h-[10px] md:h-[38px] blank-form"
            />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button type="submit" className='signuppage-layout signup-button'>Login</button>
        </div>
      </form>
    </div>
    </>
    
  );
};


export default LoginForm;