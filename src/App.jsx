import React from "react";
import styles from "./style";
import TestNav from "./components/TestNav";
import TestBodyTwo from "./components/DiagnosticTest,Evidencebased/TestBodyTwo"
import SignupPage from "./components/SignupPage";
import Payment from "./components/Payment";

const App = () => (
  <div className="unscroll ">

    <div className={`gradient-backgroundtwo ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
        <div className="">
          <TestNav />
        </div>
      </div>
    </div>
    <div className="test-background ">
      <div className={`mr-36 ${styles.boxWidth}`}>
        <div className="">
          <TestBodyTwo />
          {/* <Payment /> */}
        </div>
      </div>
    </div>

  </div>




);

export default App