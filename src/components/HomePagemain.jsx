import React, { useEffect, useState } from 'react';
import HomeNavbar from './Homepage/HomeNavbar';
import Homepage1 from "./Homepage/Homepage1";
import Homepage2 from "./Homepage/Homepage2";
import Homepage3 from "./Homepage/Homepage3";
import Footer from "./Homepage/Footer";
import axios from 'axios';


function HomePagemain() {
  const [SatData, setSatData] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('v4/student/getHomePageData', {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '6024',
          }
        });
        const { data } = response;
        setSatData(data.satData.buttonStatus);
        console.log(data.satData.buttonStatus);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="homepage-background unscroll">
        <div className="">
          <HomeNavbar />
        </div>
        <div className="">
          <Homepage1 />
        </div>
      </div>
      <div className="pb-16">
        <Homepage3 SatData={SatData}/>
      </div>
      <div className="homepage-background2 pb-8">
        <Homepage2 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePagemain;