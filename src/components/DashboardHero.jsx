import React, { useEffect, useState } from 'react';
import { search, research,trigonometry } from "../assets";
import Ebrw from './Dashboard/Ebrw';
import Questionoboard from './Dashboard/Questionoboard';
import FirstGraph from './Dashboard/FirstGraph';
import UpperGraphPart from './Dashboard/UpperGraphPart';
import Mathimaticsboard from './Dashboard/Mathimaticsboard';
import Mboard from './Dashboard/Mboard';
import UpperGraphPart2 from './Dashboard/UpperGraphPart2';
import SecondGraph from './Dashboard/SecondGraph';
import CrossTestBoard from './Dashboard/CrossTestBoard';
import Dashboardbar from './Dashboard/Dashboardbar';
import Dashboardbar2 from './Dashboard/Dashboardbar2';
import PieDash from './Dashboard/PieDash';


function DashboardHero() {
  const [dashboardData, setDashboardData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://b6c46256-fe36-42bf-b135-6275add9f3c2.mock.pstmn.io/api/v2/student/dashboard');
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=' ml-4 mt-3 md:pt-16 md:pl-56'>
        <Ebrw />
      </div>
      <div className="hidden lg:block">
         <img src={search} alt="search" className="absolute w-[110px] h-[110px] ml-28 pb-6" />
      </div>
      <div className='md:mr-32 '>
        <Questionoboard questionData={dashboardData?.Reading_and_Writing_subscores} />
       
      </div>
      <div className='pl-4 pt-4 md:pl-56 '>
        <UpperGraphPart />
        <div className='hidden lg:block'>
        <div className='md:ml-28'>
          <div className='md:ml-96'><img src={research} alt="research" className="absolute w-[110px] h-[110px]  ml-96" /></div>
        </div>
        </div>
      </div>
      <div className='md:ml-52 md:p-4 ml-4 p-2'>
        <FirstGraph questionData={dashboardData?.Reading_and_Writing_subscores}/>
      </div>

      <div className='ml-4 mt-3 md:pt-16 md:pl-56'>
        <Mathimaticsboard />
      </div>
      <div className='md:mr-32'>
        <Mboard questionData={dashboardData?.Math_subscores} />
      </div>
      <div className='pl-4 pt-4 md:pl-56 '>
        <UpperGraphPart2 />
      </div>
      <div className='md:ml-52 md:p-4 ml-4 p-2'>
      <div className='hidden lg:block'>
      <div className='ml-96' style={{marginRight:"390px" }}><img src={trigonometry} alt="trigonometry" className="absolute mt-56 ml-96" /></div>
        </div>
        <SecondGraph questionData={dashboardData?.Math_subscores}/>
        
      </div>
      <div className=' pl-4 pt-4 md:pl-56'>
        <CrossTestBoard />
      </div>
      <div className='md:flex'>
        <div className='p-2 md:pl-56 '>
          <Dashboardbar  questionData={dashboardData?.cross_test?.science_score} />
          <div className='mt-3 mb-3'><Dashboardbar2  questionData={dashboardData?.cross_test?.history_score} /></div>
        </div>
        <div className='md:ml-32 '>
          <PieDash questionData={dashboardData?.cross_test}/>
        </div>
      </div>
    </>
  );
}

export default DashboardHero;