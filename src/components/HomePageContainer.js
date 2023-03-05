import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Contributions, useUserQuery } from "@openimis/fe-core";
import React from 'react';

import LinkBox from "./LinkBox";
import ReportBox from "./ReportBox";
import Demo from "./BarChart";
import DemoLine from "./LineChart";
import DemoPie from "./PieChart";
import PieChart from 'react-pie-graph-chart';
import {Helmet} from "react-helmet";
import { App, FatalError, baseApiUrl, apiHeaders } from "@openimis/fe-core";

import { Chart, ArgumentAxis, ValueAxis, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Piecahrtmain } from "./Piecahrtmain";
import { ClaimsInsuree } from "./ClaimsInsuree";
import { BarChartOne } from "./BarChartOne";
import { BarChartTwo } from "./BarChartTwo";
const useStyles = makeStyles((theme) => ({
  container: theme.page,
}));

const container = {marginTop:"10px"}

const HomePageContainer = (props) => {

  const data = [
    { year: '2018', population: 18 },
    { year: '2019', population: 23 },
    { year: '2020', population: 30 },
    { year: '2021', population: 47 },
    { year: '2022', population: 100 },
  ];
  
  const { user } = useUserQuery();
  const classes = useStyles();

  if (!user) {
    return null;
  }


 


  return <>
        
        <section>
   <h3 className="welcome_text">
      Welcome Admin
   </h3>
   <Grid container className={classes.container} spacing={2}>
      <Box
      sx={{
      width: 15,
      height: 15,
      backgroundColor: 'primary.dark',
      '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
      },
      }}>
      </Box>
      <Contributions contributionKey="home.HomePage.Blocks" user={user} />
   </Grid>
</section>
<section className="reports">
   <div className="container-fluid">
      <div className="row">
         <div className="col-md-3 col-sm-6 col-xs-12" >
            <div class="card" >
               <a href="/front/insuree/insurees" class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height={30}
                     viewBox="0 0 256 256"
                     {...props}
                     >
                     <path
                     d="M25 0c-2.453 0-4.523 1.355-7.594 2.938-3.07 1.582-7.191 3.492-13.625 4.906L3 8.03v.781c0 15.32 5.371 25.56 10.75 31.907 5.379 6.347 10.844 8.875 10.844 8.875l.437.218.438-.218S47 38.469 47 8.812v-.78l-.781-.188C39.785 6.43 35.664 4.52 32.594 2.937 29.524 1.355 27.454 0 25 0zm0 2c1.645 0 3.55 1.105 6.688 2.719 2.98 1.531 7.171 3.41 13.25 4.843-.368 27.118-18.684 37.29-19.97 37.97-.62-.302-4.948-2.466-9.718-8.094C10.223 33.504 5.246 23.96 5.062 9.561c6.079-1.433 10.27-3.312 13.25-4.843C21.45 3.105 23.355 2 25 2zm7.688 12.625-.532.844-8.125 12.625-5.375-4.844-.718-.656-1.344 1.468.75.688 6.187 5.625.875.781.657-1 8.78-13.625.532-.843z"
                     transform="scale(5.12)"
                     fill="#eb5436"
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     />
                  </svg>
                  <span>Add Insuree</span>
               </a>
            </div>
         </div>
         {/* next */}
         <div className="col-md-3 col-sm-6 col-xs-12" >
            <div class="card" >
               <a href="/front/admin/products/new" class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height={30}
                     viewBox="0 0 256 256"
                     {...props}
                     >
                     <path
                     d="M26 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10c-.006-5.52-4.48-9.994-10-10zM3.959 6A1 1 0 1 0 4 8h4.4a1 1 0 0 1 .979.777l4.297 18.887c.026.116.06.23.1.342A5 5 0 0 0 14 38h1.537A4 4 0 1 0 23 40a4 4 0 0 0-.54-2h7.077A4 4 0 1 0 37 40a4 4 0 0 0-.54-2H39a1 1 0 0 0 0-2H14a3 3 0 0 1 0-6h21.691a3 3 0 0 0 2.748-1.8l5.862-13.4a2 2 0 0 0-1.83-2.8H40a1 1 0 0 0 0 2h2.47l-5.855 13.4a1 1 0 0 1-.916.6H16.6a1 1 0 0 1-.98-.777L11.323 8.336A2.984 2.984 0 0 0 8.4 6H3.96zm22.07 4A1 1 0 0 1 27 11v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1.03-1zM19 38a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                     transform="scale(5.33333)"
                     fill="#eb5436"
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     />
                  </svg>
                  <span>Add Product </span>
               </a>
            </div>
         </div>
         {/* next */}
         <div className="col-md-3 col-sm-6 col-xs-12" >
            <div class="card" >
               <a href="/front/claim/claim"  class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height={30}
                     viewBox="0 0 256 256"
                     {...props}
                     >
                     <path
                     d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm40 0c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10S57.514 2 52 2zM12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm40 0c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zM10 6a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2V7a1 1 0 0 0-1-1zm41 0v1.184A2.996 2.996 0 0 0 49 10c0 1.654 1.346 3 3 3a1.001 1.001 0 0 1 0 2c-.551 0-1-.448-1-1h-2c0 1.302.839 2.402 2 2.816V18h2v-1.184A2.996 2.996 0 0 0 55 14c0-1.654-1.346-3-3-3a1.001 1.001 0 0 1 0-2c.551 0 1 .448 1 1h2a2.996 2.996 0 0 0-2-2.816V6zm-14.293.293-1.414 1.414L36.586 9H25v2h14a1 1 0 0 0 .707-1.707zM11 8h2v2a1 1 0 0 0 1 1h2v2h-2a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1zm14 5a1 1 0 0 0-.707 1.707l3 3 1.414-1.414L27.414 15H39v-2zm7.002 11.002a.997.997 0 0 0-.682.268l-2.545 2.375a20.428 20.428 0 0 1-6.148 3.939l-6.01 2.492a.998.998 0 0 0-.61 1.035l.563 4.993c1.04 9.207 6.362 17.43 14.604 22.558l.299.188a1 1 0 0 0 1.054 0l.301-.188c8.241-5.128 13.565-13.351 14.604-22.558l.562-4.993a.999.999 0 0 0-.61-1.035l-6.007-2.492a20.428 20.428 0 0 1-6.148-3.94v-.001l-2.545-2.373a.998.998 0 0 0-.682-.268zM32 26.367l1.861 1.738a22.442 22.442 0 0 0 6.748 4.327l5.313 2.203-.479 4.244c-.559 4.957-2.461 9.605-5.443 13.578V47c0-2.309-1.583-4.239-3.713-4.81a5.981 5.981 0 0 0 1.703-4.49A5.996 5.996 0 0 0 32 32c-3.198 0-5.828 2.504-5.986 5.65A3.416 3.416 0 0 0 26 38c0 1.629.656 3.107 1.713 4.19C25.583 42.76 24 44.69 24 47v5.457c-2.983-3.973-4.884-8.62-5.443-13.576l-.479-4.244 5.313-2.205a22.398 22.398 0 0 0 6.748-4.327zM32 34c1.408 0 2.64.737 3.354 1.861A6.982 6.982 0 0 0 32 35c-1.198 0-2.35.31-3.365.867A3.978 3.978 0 0 1 32 34zm0 3c1.53 0 2.956.702 3.895 1.885A4.002 4.002 0 0 1 32 42a4.002 4.002 0 0 1-3.895-3.115A4.967 4.967 0 0 1 32 37zm-3 7h1.719l-1.69 6.758c-.068.273-.017.562.139.797l2 3a1.002 1.002 0 0 0 1.664 0l2-3a.997.997 0 0 0 .139-.797L33.28 44H35c1.654 0 3 1.346 3 3v7.848a30.617 30.617 0 0 1-6 4.974 30.617 30.617 0 0 1-6-4.974V47c0-1.654 1.346-3 3-3zm3 3.123.922 3.69L32 52.197l-.922-1.384z"
                     transform="scale(4)"
                     fill="#eb5436"
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     />
                  </svg>
                  <span> Create Claim</span>
               </a>
            </div>
         </div>
         {/* next */}
         <div className="col-md-3 col-sm-6 col-xs-12">
            <div class="card" >
               <a href="/front/policy/policy"  class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     height="30px"
                     viewBox="0,0,256,256"
                     {...props}
                     >
                     <g
                     fill="#eb5436"
                     fillRule="nonzero"
                     stroke="none"
                     strokeWidth={1}
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit={10}
                     strokeDasharray=""
                     strokeDashoffset={0}
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     >
                     <g transform="scale(5.12,5.12)">
                        <path d="M7,2v46h26.96094c-0.56,-0.59 -1.12016,-1.26 -1.66016,-2h-23.30078v-42h20v12h12v10.07031c0.75,0.08 1.4,0.26977 2,0.50977v-11.99023l-12.58984,-12.58984zM31,5.41016l8.58984,8.58984h-8.58984zM15,24v2h20v-2zM40,28c-1.5,0 -2.49922,0.49961 -3.69922,1.09961c-1.2,0.6 -2.7,1.30039 -5.5,1.90039l-0.80078,0.19922v0.80078c0,13 9.2,17.70039 9.5,17.90039l0.5,0.19922l0.5,-0.19922c0.4,-0.2 9.5,-5.30039 9.5,-17.90039v-0.80078l-0.80078,-0.19922c-2.8,-0.6 -4.3,-1.30039 -5.5,-1.90039c-1.2,-0.6 -2.19922,-1.09961 -3.69922,-1.09961zM15,30v2h13v-2zM40,30c1.1,0 1.70078,0.30039 2.80078,0.90039c1.2,0.5 2.69922,1.30039 5.19922,1.90039c-0.3,9.3 -6.3,13.9 -8,15c-1.8,-1 -7.7,-5.3 -8,-15c2.6,-0.6 4.09922,-1.40039 5.19922,-1.90039c1.1,-0.6 1.70078,-0.90039 2.80078,-0.90039zM15,36v2h13.66992c-0.16,-0.64 -0.28086,-1.31 -0.38086,-2z" />
                     </g>
                     </g>
                  </svg>
                  <span>Create Policy</span>
               </a>
            </div>
         </div>
         <div className="col-md-3 col-sm-6 col-xs-12" >
            <div class="card" >
               <a href="/front/insuree/insurees"  class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height={30}
                     viewBox="0 0 256 256"
                     {...props}
                     >
                     <path
                     d="M45 2a2 2 0 0 0-2 2c0 .293.074.563.188.813l-8 11.187c-.063-.004-.126 0-.188 0-.398 0-.781.11-1.094.313L27 12.874A2.005 2.005 0 0 0 25 11a2 2 0 0 0-2 2c0 .105.016.21.031.313l-7.312 5.812A1.987 1.987 0 0 0 15 19c-1 0-1.82.73-1.969 1.688l-6.812 2.75A1.975 1.975 0 0 0 5 23a1.999 1.999 0 1 0 0 4 1.989 1.989 0 0 0 1.969-1.719l6.812-2.718c.34.265.758.437 1.219.437a2 2 0 0 0 2-2c0-.105-.016-.21-.031-.313l7.312-5.812c.223.086.465.125.719.125.398 0 .781-.11 1.094-.313L33 18.125A2.005 2.005 0 0 0 35 20a2 2 0 0 0 2-2c0-.293-.074-.563-.188-.813l8-11.187c.063.004.126 0 .188 0a1.999 1.999 0 1 0 0-4zm-4 13v35h8V15zm2 2h4v31h-4zm-22 7v26h8V24zm2 2h4v22h-4zm8 3v21h8V29zm2 2h4v17h-4zm-22 1v18h8V32zm2 2h4v14h-4zM1 36v14h8V36zm2 2h4v10H3z"
                     transform="scale(5.12)"
                     fill="#eb5436"
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     />
                  </svg>
                  <span>Insuree Reports</span>
               </a>
            </div>
         </div>
         <div className="col-md-3 col-sm-6 col-xs-12">
            <div class="card" >
               <a href="/front/tools/reports" class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height={30}
                     viewBox="0 0 256 256"
                     {...props}
                     >
                     <path
                     d="M7 2v46h36V14.586L30.414 2zm2 2h20v12h12v30H9zm22 1.414L39.586 14H31zM27 18a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1c0-5.511-4.489-10-10-10zm1 2.201c3.59.466 6.333 3.21 6.799 6.799H28zM23 22c-5.511 0-10 4.489-10 10s4.489 10 10 10 10-4.489 10-10a1 1 0 0 0-1-1h-8v-8a1 1 0 0 0-1-1zm-1 2.201V32a1 1 0 0 0 1 1h7.799c-.51 3.933-3.723 7-7.799 7-4.43 0-8-3.57-8-8 0-4.076 3.067-7.289 7-7.799z"
                     transform="scale(5.12)"
                     fill="#eb5436"
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     />
                  </svg>
                  <span>Claim Reports</span>
               </a>
            </div>
         </div>
         <div className="col-md-3 col-sm-6 col-xs-12" >
            <div class="card" >
               <a href="/front/invoices" class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     height="40px"
                     viewBox="0,0,256,256"
                     {...props}
                     >
                     <g
                     fill="#eb5436"
                     fillRule="nonzero"
                     stroke="none"
                     strokeWidth={1}
                     strokeLinecap="butt"
                     strokeLinejoin="miter"
                     strokeMiterlimit={10}
                     strokeDasharray=""
                     strokeDashoffset={0}
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     >
                     <g transform="scale(5.12,5.12)">
                        <path d="M6,2v46h1h37v-46zM8,4h34v42h-34zM13,11v2h24v-2zM13,25v2h14v-2zM32,25v2h5v-2zM13,31v2h14v-2zM32,31v2h5v-2zM13,37v2h14v-2zM32,37v2h5v-2z" />
                     </g>
                     </g>
                  </svg>
                  <span>Invoices</span>
               </a>
            </div>
         </div>
         <div className="col-md-3 col-sm-6 col-xs-12">
            <div class="card" >
               <a href="/front/claim/reviews"  class="card-body">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height={30}
                     viewBox="0 0 256 256"
                     {...props}
                     >
                     <path
                     d="M9.813 4a.994.994 0 0 0-.532.281L5.437 8.156a.954.954 0 0 0-.156.125.472.472 0 0 0-.125.156.98.98 0 0 0-.156.469 1.024 1.024 0 0 0 0 .219V45c0 .55.45 1 1 1h38c.55 0 1-.45 1-1V9.156c.004-.05.004-.105 0-.156v-.156a1.168 1.168 0 0 0-.031-.125c-.016-.055-.04-.106-.063-.156l-.031-.032a1.204 1.204 0 0 0-.125-.187v-.031l-.031-.032h-.032a.472.472 0 0 0-.062-.062L40.719 4.28A.99.99 0 0 0 40 4H9.812zm.624 2h29.126l2 2H30c-.55 0-1 .45-1 1 0 2.277-1.723 4-4 4s-4-1.723-4-4c0-.55-.45-1-1-1H8.437zM7 10h12.188c.488 2.828 2.843 5 5.812 5 2.969 0 5.324-2.172 5.813-5H43v34H7zm18 9c-5.512 0-10 4.488-10 10s4.488 10 10 10 10-4.488 10-10-4.488-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm-1 2v5.5l-3.594 2.688 1.188 1.625 4-3L26 29.5V23z"
                     transform="scale(5.12)"
                     fill="#eb5436"
                     fontFamily="none"
                     fontWeight="none"
                     fontSize="none"
                     textAnchor="none"
                     style={{
                     mixBlendMode: "normal",
                     }}
                     />
                  </svg>
                  <span> Pending Reports </span>
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
{/* End part towo */}
<section className="pai_chart">
   <div className="container-fluid pc">
      <div className="row">
         <div className="col-md-6" >
            <div className="inner_pie_chart" >
               <Piecahrtmain />
            </div>
         </div>
         <div className="col-md-6">
            <div className="inner_pie_chart" >
               <BarChartOne />
            </div>
         </div>
         <div className="col-md-6 ">
            <div className="inner_pie_chart" >
               <ClaimsInsuree />
            </div>
         </div>
         <div className="col-md-6 "   >
            <div  className="inner_pie_chart" >
               <BarChartTwo />
            </div>
         </div>
      </div>
   </div>
</section>
<style>
   {
   `
   .pc svg{
   border-radius: 8px !important;
   box-shadow: 0px 1px 2px rgba(25,39,52,0.05),0px 0px 4px rgba(25,39,52,0.1);
   margin-bottom: 10px;
   }
   @media screen and (min-device-width: 1024px)
   and (max-device-width: 1400px) {
   body{
   overflow-x:hidden;
   }
   }
   }
   `
   }
</style>

  </>
};

export default HomePageContainer;
