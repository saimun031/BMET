<template>
    <div class="overview-card">
      <div class="overview-card-left"><img src="../assets/img/Group2.png" alt=""></div>
      <div class="overview-card-right">Application Approved
        
        <div class="overview-card-bottom"><strong>89</strong></div>
      </div>
      <div class="overview-card-logo"><img src="../assets/img/Frame3.png" alt=""></div>
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
    margin-left:-25%;
  
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
  
  }
  .overview-card-bottom {
    margin-top: 12%;
    margin-left: -83%;
    font-size: 20px;
    line-height: 28.13px;
    /* text-align: center; */
  }
  /* .overview-card-logo{
    margin-top: -24%;
    margin-left: 20%;
  } */
  @media only screen and (max-width: 650px) {
  .overview-card{
   margin-left: 5%;
  }
}
@media only screen and (min-width: 2020px) {
  .overview-card{
   margin-left: -50%;
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