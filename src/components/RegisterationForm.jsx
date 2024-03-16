import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [educationStatus, setEducationStatus] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleInputChange = (e, setter) => {
    const { value } = e.target;
    setter(value);
  };

  const handleFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none';
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;

    if (id === 'firstName') {
      setFirstNameError(value ? '' : 'First name is required');
    } else if (id === 'lastName') {
      setLastNameError(value ? '' : 'Last name is required');
    } else if (id === 'email') {
      setEmailError(value ? (value.includes('@') ? '' : 'Invalid email address') : 'Email is required');
    } else if (id === 'phoneNumber') {
      setPhoneNumberError(value ? (/^\d+$/.test(value) ? '' : 'Phone number can only contain numbers') : 'Phone number is required');
    } else if (id === 'password') {
      setPasswordError(value ? '' : 'Password is required');
    } else if (id === 'confirmPassword') {
      setConfirmPasswordError(value ? (value === password ? '' : 'Passwords do not match') : 'Confirm password is required');
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstNameError || lastNameError) {
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);

      const formData = {
        firstName,
        lastName,
        // etc
      };

      try {
        const response = await axios.post('https://turtle-summary-intensely.ngrok-free.app/api/v1/student/registerUser', formData);

        console.log(response.data);

        setFirstName('');
        // reset fields

        navigate('otp');

      } catch (error) {
        console.error(error);
      }
    }

  };

  const isSubmitDisabled = password !== confirmPassword;

  return (
    <div className='mx-auto'>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight create-account-style'>Create Account</h1>

        <div className='form-field'>
          <label htmlFor="firstName" className={firstName ? 'hidden' : ''}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {firstNameError && (
            <p className="text-red-500 text-sm">{firstNameError}</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor="lastName" className={lastName ? 'hidden' : ''}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {lastNameError && (
            <p className="text-red-500 text-sm">{lastNameError}</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor="email" className={email ? 'hidden' : ''}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {emailError && (
            <p className="text-red-500 text-sm">{emailError}</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor="phoneNumber" className={phoneNumber ? 'hidden' : ''}>
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, setPhoneNumber)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {phoneNumberError && (
            <p className="text-red-500 text-sm">{phoneNumberError}</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor="educationStatus" className={educationStatus ? 'hidden' : ''}>
            Education Status
          </label>
          <select
            id="educationStatus"
            value={educationStatus}
            onChange={(e) => handleInputChange(e, setEducationStatus)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          > <option value=""></option>
            <option value="High School" className='text-black'>High School</option>
            <option value="College" className='text-black'>College</option>
            <option value="Graduate School" className='text-black'>Graduate School</option>
          </select>
        </div>

        <div className='form-field'>
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
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <div className='form-field'>
          <label htmlFor="confirmPassword" className={confirmPassword ? 'hidden' : ''}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
            className="p-0.5 registration-width border-gradient text-white w-[280px] md:w-[300px] "
          />
          {confirmPasswordError && (
            <p className="text-red-500 text-sm">{confirmPasswordError}</p>
          )}
        </div>

        {passwordMatchError && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}

        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="signuppage-layout signup-button hover:bg-emerald-900"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
``