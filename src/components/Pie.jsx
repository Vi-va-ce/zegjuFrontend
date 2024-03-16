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


function Pie() {
  return (
    <div className="">
    <div className="rounded-tl-fullborder-double">
    </div>
    <Chart
      chartType="PieChart"  
      width="68.5%"
      height="270px"
      data={data}
      options={options}
      
  />
  </div>
  );
}

export default Pie;