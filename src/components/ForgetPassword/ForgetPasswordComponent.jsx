import React from "react";
import { jonly,first1,secondone,forward} from "../../assets"
import ForgetPasswordForm from "./ForgetPasswordForm";




const  ForgetPasswordComponent = () => {
  return (
   
    <div className="flex  ">  
      <div className="mt-[28px] md:mt-[-28px]">
      <img src={jonly} className="hidden  md:block w-[275px] md:w-[194px] h-[700px] md:h[270px] relative  mr-[100px] md:mr-[]  ml-[25px] md:ml-[100px] mt-[-65px] md:mt-[-100px]  " />
       
      </div>
    
    
    <div className=" absolute mt-[120] md:mt-[] ml-1 md:ml-[600px] ">
    
    <div className="mt-[90px] md:mt-[40px]">
    <ForgetPasswordForm/>
     </div>
     <div className="flex mt-[200px] md:hidden">
          <a href="your_first_image_url">
            <img src={first1} className="w-[20px] h-[20px] ml-6" alt="First Image" />
          </a>
          <a href="your_second_image_url">
            <img src={secondone} className="w-[20px] h-[20px] ml-[270px]" alt="Second Image" />
          </a>
        </div>
       
     
     
    </div>
    
    </div>

  );
};

export default ForgetPasswordComponent;