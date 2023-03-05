import React ,{useEffect} from 'react'
import { Chart } from "react-google-charts";
import { App, FatalError, baseApiUrl, apiHeaders } from "@openimis/fe-core";
export const Piecahrtmain = () => {


  const [family,SetFamily]=React.useState([])
  const mapdatafamily=family?.families?.edges
  const loadinsuree= async () => {
    const response = await fetch(`${baseApiUrl}/graphql`, {
      method: "post",
      headers: apiHeaders(),
      body: JSON.stringify({ "query": "{ families {edges{node{address,validityFrom}}}}" }),
    });
    if (!response.ok) {
      throw response;
  
    
      
    } else {
      const { data } = await response.json();
      SetFamily(data);
      
    
     
    }
  
  
  
  };
  


// all insuree //
const [piedata,SetPaydata]=React.useState([]) 
const mapdata=piedata?.insurees?.edges
const loadinsureeall= async () => {
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



console.log(mapdata,"health search data")


useEffect(() => {

loadinsuree()
loadinsureeall()
},[]);





 
const lengthOfMapDataFamily = mapdatafamily?.length || 0;
console.log(lengthOfMapDataFamily,"family length");


const leninsuree=mapdata?.length || 0;
console.log(leninsuree,"insuree length");

const total_health_insuree=leninsuree-lengthOfMapDataFamily
console.log(total_health_insuree,"total health insuree");
// new code start hear

const bardata = mapdatafamily?.map((vardata) => {
  const storeyear = vardata?.node?.validityFrom;
  const newyear = storeyear.split("-")[0];
  return newyear;
});






   const data = [
    ["Task", "Sector wise insuree in percentage"],
    ["Health Insurance", total_health_insuree],

    ["Group Insurance ", lengthOfMapDataFamily],

  ];
  const options = {
    title: "Sector wise insuree in percentage",
  };





  return (

    <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"300px"}
  />
  )
}
