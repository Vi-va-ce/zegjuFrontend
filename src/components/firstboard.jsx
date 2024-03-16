import React, { useEffect, useState } from 'react';
import {babu, reading, maths, calculator } from "../assets";

function Firstboard() {
    const [scores, setScores] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://1394f3d0-c8c4-4e74-a369-929931203834.mock.pstmn.io//api/v2/student/testResult/?user_id="demenaBitch1"');
            const data = await response.json();
            setScores(data.subSections);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      

  return (
    <div className='grid grid-cols-2 hover:grid-cols-2 gap-4 absolute mt-8 ml-2   '>
      
    <div className="md:w-[200px] md:h-[120px] w-[146px] h-[120px]   bg-white md:rounded-[20px] rounded-xl  shadow" >
            <div style={{ display: "flex" }} className=''>
              <p className="ml-3 mt-2 text-sm">Evidence <br /> based reading</p>

              <div className=''>
                <img src={reading} alt="reading" className="inside-element mt-2 md:ml-[20px] ml-1"/>
              </div>
              
            </div>
            <p className="inside-element ml-10 Result-style ">{scores.evidence_based_reading?.score}/15</p>
            
          </div>


          <div className=" md:w-[200px] md:h-[120px] w-[146px] h-[120px]   bg-white md:rounded-[20px] rounded-xl  shadow" >
            <div style={{ display: "flex" }}>
              <p className='ml-4 mt-2 text-sm'>Writing & <br />language</p>
              <img src={babu} alt="babu" className="inside-element mt-2 md:ml-[40px] ml-2  " />
            </div>
            <p className="inside-element ml-10 Result-style">{scores.writting_language?.score}/15</p>
          </div>


          <div className="md:w-[200px] md:h-[120px] w-[146px] h-[120px]   bg-white md:rounded-[20px] rounded-xl  shadow" >
            <div style={{ display: "flex" }}>
                <p className='ml-4 mt-2 text-sm'>Math with <br />calculator</p>
                <img src={calculator} alt="calculator" className="inside-element mt-2 md:ml-[40px] ml-2"  />
            </div>
            <p className="inside-element ml-10 Result-style ">{scores.math_calculator?.score}/15</p>
          </div>  
              
          <div className='md:w-[200px] md:h-[120px] w-[146px] h-[120px]   bg-white md:rounded-[20px] rounded-xl  shadow '>
          <div style={{ display: "flex" }}>
            <p className='ml-4 mt-2 text-sm'>Math without <br />calculator</p>
            <img src={maths} alt="maths" className="inside-element mt-2 md:ml-[25px]" />
          </div>
          <p className="inside-element ml-10 Result-style">{scores.math_no_calculator?.score}/15</p>
          </div>
    </div>

   
  )
}

export default Firstboard