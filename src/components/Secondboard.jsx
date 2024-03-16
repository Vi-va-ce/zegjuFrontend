import React, { useState, useEffect } from 'react';
import { twentymore,zeromore,thirtymore,fourtymore,tenmore } from '../assets';


function Secondboard() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    fetch('https://1394f3d0-c8c4-4e74-a369-929931203834.mock.pstmn.io//api/v2/student/testResult/?user_id="demenaBitch1"')
      .then(res => res.json())
      .then(data => {
        setScores(data);
      });
  }, []);

  const englishScore = scores.twoSections?.sat_english?.score;

  let image;

  if(englishScore > 40) {
    image = fourtymore;
  } else if(englishScore > 30 && englishScore <= 40) {
    image = thirtymore;
  } else if(englishScore > 20 && englishScore <= 30) {  
    image = twentymore;
  } else if(englishScore > 10 && englishScore <= 20) {
    image = tenmore;
  } else {
    image = zeromore;
  }

  return (
    <div className='secondboard-style ml-2 md:w-[220px] md:h-[260px] w-[147.03px] h-[220.38px]  md:rounded-[20px] rounded-xl md:mt-8 md:ml-2 mt-80 ml-4'>

<p className=' animate-pulse  ml-4 pt-2.5 secondboard-result md:text-[35px] text-[23.15px]'>{englishScore}</p> 
    <p className=' ml-4 text-white md:text-[20px] text-'>50</p> 
  
    <p className='mt-6 ml-4 text-white md:text-[28px]'>SAT Math</p>
      <img 
        src={image}
        className='animate-bounce md:ml-20 ml-8 mt-4 md:w-[109px] md:h-[109px] w-[70px] h-[63px] secondboard-image' 
      />

    </div>
  )
}

export default Secondboard;
