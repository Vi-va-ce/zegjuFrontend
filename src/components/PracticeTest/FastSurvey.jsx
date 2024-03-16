import React from 'react'
import BarC from './BarC.jsx'
import BarI from './BarI.jsx'
import BarProgress from './Progress.jsx'
import PassingProbability from './PassingProbability.jsx'
import Topscorer2 from './TopScorer2.jsx'

function FastSurvey() {
  return (
    <>
    <div className='ml-36 '>
      <div className='fastsurvey-background rounded-t-3xl'>
        <div className='p-1'><BarC/></div>
        <BarI/> <div className='p-1'><BarProgress/></div>
      </div>
        <div class="w-[228px] h-[0px] shadow border-2 border-black border-opacity-30"></div>
      <div className='fastsurvey-background'>
        <PassingProbability/>
      </div>
      <div class="w-[228px] h-[0px] shadow border-2 border-black border-opacity-30"></div>
      <div className='fastsurvey-background rounded-b-3xl p-1'>
        <Topscorer2/>
      </div>
  
    </div>
   
  
    </>
  )
}

export default FastSurvey