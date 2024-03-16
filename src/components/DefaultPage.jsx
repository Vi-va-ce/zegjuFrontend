import Signupbar from "./Signupbar";
import Hero from "./Hero";
import React from "react";
const App = () => (
<div className="gradient-background unscroll ">

      <div>
        <Signupbar/>
      </div>
      <div className={`mt-[-100px]`}>
            <Hero />
      </div>

 </div>
     

    

);



export default App;