import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import { star,jonly} from "../assets";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section id="home" className={`page-wrapper  flex md:flex-row flex-col `}>
     
      <div className={` py-36 pr-36 flex-col  xl:px-0 sm:px-16 `}>
        

      <div className="relative">
      
  <div className="gradient-text h-full text-[57.36px] md:w-[521px] w-full  font-bold ml-[40px] md:ml-0   md:text-7xl">
    practice leads to <br/> mastery
  </div>
 
</div>
        <p className={`${styles.paragraph} ml-[40px] md:ml-0  max-w-[470px] mt-[100px] md:mt-[0px] `}>
        We created a stress-free strategy to get you ready for the SAT exam without adding extra pressure.
        </p>
        <div className="mt-5">
      <div className="mt-[-250px] md:mt-[0px] ml-[40px] md:ml-0 ">
        <Link to="/SignupPage">
           <button className="button1 text-white px-4 py-2 mr-3"><div className="signup-layout signup-typo">sign up</div></button>
        </Link>
      </div>
      <div className="mt-[180px] md:mt-[-56px] ml-[40px] md:ml-[210px] ">
      <button className="button2 text-white px-4 py-2"><div className="freetrial-typo signuplayout signup-typo" >free trial</div></button>
      </div>
    </div>
      </div>

      <div className={` hidden md:block ml-[110px] flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative unscroll`}>
  <img src={robot} alt="billing" className="object-cover h-screen relative ml-[100px] z-[5]" />
  <img src={star} alt="star" className="md:ml-[160px] absolute z-[0] w-2/3 h-auto top-3 rectangle-gradient" />
</div>

      
    </section>
  );
};

export default Hero;
