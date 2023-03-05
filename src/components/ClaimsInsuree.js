import React from 'react'
import { Chart } from "react-google-charts";

export const ClaimsInsuree = () => {
    const data = [
        ["Task", "Total claims sector wise"],
        ["Health Claims", 11],
        ["Homeowner Claims", 2],
        ["Bank Claims", 2],
        ["Fire Claims", 2],
        ["Car Claims", 7], 
      ];
      const options = {
        title: "Total claims sector wise",
        pieHole: 0.4,
        is3D: false,
      };
  return (
    <div><Chart
    chartType="PieChart"
    width="100%"
    height="300px"
    data={data}
    options={options}
  /></div>
  )
}
