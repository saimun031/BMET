<template>
    <div class="overview-card">
    <span class="dot"></span>
      
      <div class="overview-card-left">
        <img src="../assets/img/Group1.png" alt="">
        
      </div>
      <div class="overview-card-right">Approval Pending
       
        <div class="overview-card-bottom"><strong>263</strong></div>
      
      </div>
       <div class="overview-card-logo"><img src="../assets/img/Frame3.png" alt="">
        
      </div>
    </div>
    
    
  </template>
  
  <script>
  
  export default {

  };
  </script>
  
  <style scoped>
  *{
    font-family: Gilroy-Bold;
  }
   .overview-card .dot {
  height: 14px;
  width: 14px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
/* margin-left: 10%; */
}
  .overview-card {
    display: flex;
   /* background-color: #f6f9ff;*/
    background-color: white;
    width: 256px;
    height: 120px;
   /* border: 1px solid #ebe7e7;*/
    background-color: white;
    cursor: pointer;
    border-radius: 8px;
    
  }
  
  .overview-card:hover {
    box-shadow: 0 0 6px 3px #a9a9a9;
  }
  
  .overview-card-left {
    padding: 5px ;
margin-top: 10%;
  }
  
  .overview-card-right {
    font-family: Gilroy-Bold;
    padding: 5px;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    margin-top: 13%;
    flex: 1;
    font-size: 14px;
    /* color: #26323899; */
  
  }
  .overview-card-bottom {
    margin-top: 12%;
    margin-left: -68%;
    font-size: 20px;
    line-height: 28.13px;
    /* text-align: center; */
  }
  /* .overview-card-logo{
    margin-top: -2%;
    margin-left: 30%;
  } */


@media only screen and (max-width: 650px) {
  .overview-card{
    line-break: strict;
  }
}
 @media only screen and (min-width: 550px) and (max-width: 1230px) {
    .overview-card{
    width: 200px;
     height: 100px; 
    margin-left: 0%; 
}
.overview-card-bottom {
    margin-left: -125%;
    margin-top: 20%;
}
  }
  </style>