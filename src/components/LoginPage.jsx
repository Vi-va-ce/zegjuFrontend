import React from "react";
import Signupbar from "./Signupbar";
import WelcomeHero from "./WelcomeHero"

const LoginPage = () => (
<div className="gradient-background  ">

      <div>
        <Signupbar/>
        </div>
        <div className={`md:mt-[-150px] mt-[-10px]`}>
      <WelcomeHero/>
      </div>


 </div>
     

    

);

export default LoginPage;
