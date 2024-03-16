import React, { useState } from 'react';
import axios from 'axios';
import { fp } from '../assets';

const PaymentForm = () => {


  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', photo);

    try {
      const response = await axios.post('https://turtle-summary-intensely.ngrok-free.app/api/v1/student/uploadPicture', formData, {

      });

      console.log(response.data);
      // Optionally, perform additional actions after successful submission
      // For example, you can redirect to another page:

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
        <div>
          <img
            src={fp}
            className="w-[90px] md:w-[150px] h-[90px] md:h-[150px] ml-[130px] md:ml-[80px]"
            alt="Logo"
          />
          <div className="text-white text-lg md:text-[22.18px] font-semibold ml-[60px] md:ml-[40px] mt-[30px] md:mt-[20px]">
            Upload your screenshot here
          </div>
        </div>

        <div className="form-field ml-[20px]">
          <div className="relative">
            <input
              className="relative block w-full px-3 py-2 text-base text-neutral-700 transition duration-300 ease-in-out bg-gray-100 border border-neutral-300 rounded focus:border-primary focus:ring-primary focus:outline-none focus:bg-white dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary"
              type="file"
              id="formFile"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
              accept="image/*"
            />
          </div>
        </div>

        <div className="flex justify-center items-center pt-[120px] md:ml-2s">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-primary rounded hover:bg-primary-dark focus:bg-primary-dark focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;