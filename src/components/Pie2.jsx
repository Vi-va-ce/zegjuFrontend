import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "total answers"],
  ["right answer", 8],
  ["Wrong Answers", 11],
 
];

const options = {
  title: "Total answer assesment",
  pieHole: 0.6,
  is3D: false,
};


function Pie2() {
  return (
    <div className="">
    <div className="">
    </div>
    <Chart
      chartType="PieChart"  
      width="95%"
      height="260px"
      data={data}
      options={options}
      
  />
  </div>
  );
}

export default Pie2;