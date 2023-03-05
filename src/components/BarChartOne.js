import React, { useEffect } from "react";
import { Chart } from "react-google-charts"
import { App, FatalError, baseApiUrl, apiHeaders } from "@openimis/fe-core";
export const BarChartOne = () => {

  const [piedata,SetPaydata]=React.useState([]) 
  const mapdata=piedata?.insurees?.edges
  const loadinsuree= async () => {
    const response = await fetch(`${baseApiUrl}/graphql`, {
      method: "post",
      headers: apiHeaders(),
      body: JSON.stringify({ "query": "{ insurees {edges {node{ validityFrom ,passport, dob, lastName, otherNames}}}}" }),
    });
    if (!response.ok) {
      throw response;

    
      
    } else {
      const { data } = await response.json();
      SetPaydata(data);
      
    
     
    }
  
  
  
  };
  
  




useEffect(() => {
  loadinsuree()
},[]);



// new code start hear

const bardata = mapdata?.map((vardata) => {
  const storeyear = vardata?.node?.validityFrom;
  const newyear = storeyear.split("-")[0];
  return newyear;
});

let countByYear = [];

if (bardata) {
  countByYear = Object.entries(
    bardata.reduce((acc, item) => {
      const year = item;
      acc[year] = acc[year] ? acc[year] + 1 : 1;
      return acc;
    }, {})
  ).map(([year, count]) => [year, count]);

  countByYear.unshift(["year", "year wise insurance chart "]);

  console.log(countByYear);
} else {
  console.log("bardata is undefined");
}




    const dataOld = [
        ["Name", "Popularity"],
       
        ["2022", 0],
        ["2012", 0],
        ["2021", 0],
      ];
 
      
    const diffdata = {
  old: dataOld,
  new: countByYear,
};

     const options = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };
      



  return (
   
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="300px"
      diffdata={diffdata}
    />
  
  )
}
