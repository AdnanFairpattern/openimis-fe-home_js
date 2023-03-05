import React from 'react'
import { Chart } from "react-google-charts"
export const BarChartTwo = () => {
    const data = [
        [
          "Month",
          "Dhaka",
          "Chittagong",
          "Barisal",
          "Mymensingh",
          "Comilla",
          "Average",
        ],
        ["2004/05", 165, 938, 522, 998, 450, 614.6],
        ["2005/06", 135, 1120, 599, 1268, 288, 682],
        ["2006/07", 157, 1167, 587, 807, 397, 623],
        ["2007/08", 139, 1110, 615, 968, 215, 609.4],
        ["2008/09", 136, 691, 629, 1026, 366, 569.6],
      ];
      
      const options = {
        title: "Total claims Percentage sector wise ",
        vAxis: { title: "Total" },
        hAxis: { title: "Month" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
      };
      
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  )
}
