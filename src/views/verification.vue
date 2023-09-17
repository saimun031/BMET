<template>
 
    <div class="wpr">
   <!-- <img src="/img/login_bg.png" alt="" class="bg"> -->
   <div class="hdr">
              <div class="logo">
                  <a href="#"> <img src="../assets/img/frame1.png" alt=""> </a>
                  <h4>The People Republic of Bangladesh</h4>
              </div>

          </div>
          <div class="body">
              <div class="box">
                  <h2>Verification</h2>
                  <p class="log-text">An One Time Password (OTP) has been sent to your <br>number. Please use that to verify your identity.</p>
                  <form action="/dashboard">
                      <div class="wrap">
                          <label>OTP Code</label>
                          <input type="otp" placeholder="Type the OTP code here" >
                      </div>
                      <div class="wrap">
                          <button style="text-align: center;"><strong>Sign In</strong> </button>
                      </div>
                      <br>
                      <p class="pa">Didn't get the code? <strong><span><a href="#">Resend</a></span></strong> </p>
                      <p class="phone">Need help?<br><span class="glyphicon glyphicon-earphone"> &#xe182;16113</span></p>
                       
                  </form>
              </div>
          </div>
                        <div class="logo1">
                  <a href="#"><img src="../assets/img/image11.png" alt=""></a>
                  <h4><strong> Bureau of Manpower, <br>Employment and Training (BMET)</strong></h4>
                  <br>
                  <p>89/2 Kakrail, Dhaka 1000,</p>
              </div>
  </div>
  </template>
  
  <script>
  // import verification from '../views/verification.vue'
  
  export default {
      components: {
          // verification
      }
  };
  </script>
  
  <style scoped>
  *{
    font-family: Poppins;
  }
  .logo img {
      position: absolute;
      width: 90px;
      height: 90px;
      display: grid;
      margin-top: 2.5%;
      margin-left: 21.4%;
  }
  .logo h4 {
      position: absolute;
      display: grid;
      margin-top: 10%;
      margin-left: 13%;
      color: #515B60;
  }
  .logo1 img {
      position: absolute;
      width: 270px;
      height: 290px;
      display: grid;
      margin-top: 14%;
      margin-left: 15%;
  }
  .logo1 h4 {
      position: absolute;
      display: grid;
      text-align: center;
      margin-top: 35.5%;
      margin-left: 12%;
      color: #1B4493;
  }
  .logo1 p {
      position: absolute;
      display: grid;
      margin-top: 39.5%;
      margin-left: 17%;
      font-size: 20px;
      color: #515B60;
  }
  .wpr {
      background-image: url(../assets/img/login_bg.png);
     width:100%;
     height: 100%;
      position: absolute;
  }
  .body {
      padding-top: 40px;
      padding-left: 55px;
      padding-right: 26px;
      position: relative;
      width: auto;
      /* height: 768px; */
      float: right;
      margin-right: 15%;
      margin-top: 70px;
      background: #fff;
      border-radius: 12px;
      margin-bottom: 40px;
      color: #333339;
      border: none;
  }
  .box h2{
    Line-height: 60px;
    font-size: 40px;
    font-weight: 700;
    color: #263238CC;
}
  .box p {
    font-family: Poppins;
      font-style: normal;
      font-weight: 400;
      color: #26323899;
      /* opacity: 0.65; */
      font-size: 18px;
      line-height: 27px;
  }
  .body input {
      height: 45px;
      width: 400px;
      border-radius: 4px;
      background: #dedddd;
      border: 1px solid #d2caca;
      padding-left: 6px;
      box-sizing: border-box;
      margin-top: 2px;
  
  }
  .wrap label {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #263238CC;
      margin-bottom: 20px;
  
  }
  .wrap input {
      margin-bottom: 13px;
      display: flex;
      position: relative;
      background: transparent;
      border: none;
      padding-left: 15px;
    background-color: #F5F5F5;
  }
  .wrap button{
    border: #1B4493;
    border-radius: 4px;
    background-color: #1B4493;
    color: #fff;
    padding: auto;
    width: 207px;
    height: 42px;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin-left: 23%;
}
  .box .pa {
    font-style: Gilroy-Bold;
      text-align: center;
      margin-bottom: 50px;
      font-size: 18px;
      line-height: 21.09px;
  }
  .pa a{
    color: #FBAB32;
    font-style: Gilroy-Bold;
  }
  .phone {
    text-align: center;
    font-size: 166px;
    margin-top: -5%;
    margin-bottom: 6%;
    font-size: 16px;
    font-style: Gilroy-Regular;
  }
  .phone span{
    font-size: Gilroy-Bold;
font-size: 24px;
line-height: 28.13px;
color: #032497;
  }
@media only screen and (max-width: 320px) and (min-width: 200px) {
    .logo img[data-v-2260fdb5] {
  
    margin-left: 35%;
}
.logo h4[data-v-2260fdb5] {
    font-size: 15px;
    margin-top: 42%;
    margin-left: 11%;
}
.wrap button[data-v-2260fdb5] {

    margin-left: 16%;
}
.logo1 img[data-v-2260fdb5] {
    margin-top: 205%;
    margin-left: 36%;
}
.logo1 p[data-v-2260fdb5]{
    margin-top: 250%;
 margin-left: 21%;
}
.logo1 h4[data-v-2260fdb5]{
    margin-top: 240%;
   margin-left: 1%;
}
}
  @media only screen and (min-width: 250px) and (max-width: 370px){
.wpr {
          background-image: none;

        width: 100%;
        height: auto;
      
    }
    .logo img {
        position: absolute;
        width:85px;
        height: 85px;
        text-align: center;
        margin-top: 30px;
        margin-left: 135px;
    }
    .logo h4 {
       font-size: 15px;
        margin-top: 32%;
        margin-left: 20%;
    }
 .body {
        position: absolute;
        width: 100%;
        font-size: 10px;
        font-weight: bold;
        margin-left: 4%;
        margin-top: 150px;
        padding-top: 20px;
        padding-left: 10px;
        /* padding-right: 10px; */

    }
    .body h2 {
        font-size: 14px;
        color: #333339;
        font-family: 'Nikosh';
        margin-bottom: -10px;
    }
    .box p {
        margin-bottom: 1px;
    }

    .wrap label {
        font-size: 10px;
        font-weight: bold;
    }
    .wrap input {
        margin-bottom: 2px;
    }
    .body input {
        height: 50px;
        width: 100%;
        margin-top: -10px;
    }
    .wrap button{
    border: blue;
    border-radius: 4px;
    background-color: blue;
    color: #fff;
    padding: auto;
    width: 170px;
    height: 40px;
    font-size: 18px;
    margin-top: 3%;
    /* margin-left: 20%; */
}
.box .pa {
    text-align: center;
    font-size: 50px;
    margin-bottom: 50px;
    font-size: 12px;
    margin-left: 0%;
}

    .logo1 img {
        position: absolute;
        width: 80px;
        height: 90px;
        display: grid;
        margin-top: 167%;
        margin-left: 39%;
    }
    .logo1 h4{
        position: absolute;
        display: grid;
        margin-top: 193%;
        margin-left: 15%;
        font-size: 18px;
    }
    .logo1 p{
        position: absolute;
        display: grid;
        margin-top: 197%;
        margin-left: 26%;
        font-size: 17px;
    }
    .phone{
        margin-right:0%;
        margin-top:-15%;
    }
    /* .part {
        margin-top:10%;
    } */
}

@media only screen and (min-width: 370px) and (max-width: 660px) {
    .wpr {
          background-image: none;
    /* background-image: url(../assets/img/login_bg.png);
        width: 100%;
        height: 100%;
        background-image: cover;
        background-repeat: no-repeat;
        position: relative; */
    }
    .logo img {
        position: absolute;
        width:85px;
        height: 85px;
        text-align: center;
        margin-top: 30px;
        margin-left: 155px;
    }
    .logo h4 {
       font-size: 15px;
        margin-top: 32%;
        margin-left: 21%;
    }
 .body {
        position: absolute;
        width: 100%;
        font-size: 10px;
        font-weight: bold;
        margin-left: 4%;
        margin-top: 150px;
        padding-top: 20px;
        padding-left: 10px;
        /* padding-right: 10px; */

    }
    .body h2 {
        font-size: 14px;
        color: #333339;
        font-family: 'Nikosh';
        margin-bottom: -10px;
    }
    .box p {
        margin-bottom: 1px;
    }

    .wrap label {
        font-size: 10px;
        font-weight: bold;
    }
    .wrap input {
        margin-bottom: 2px;
    }
    .body input {
        height: 50px;
        width: 100%;
        margin-top: -10px;
    }
    .wrap button{
    border: blue;
    border-radius: 4px;
    background-color: blue;
    color: #fff;
    padding: auto;
    width: 170px;
    height: 40px;
    font-size: 18px;
    margin-top: 3%;
    /* margin-left: 20%; */
}
.box .pa {
    text-align: center;
    font-size: 50px;
    margin-bottom: 50px;
    font-size: 12px;
    margin-left: -9%;
}

    .logo1 img {
        position: absolute;
        width: 80px;
        height: 90px;
        display: grid;
        margin-top: 580px;
        margin-left: 38%;
    }
    .logo1 h4{
        position: absolute;
        display: grid;
        margin-top: 176%;
        margin-left: 15%;
        font-size: 18px;
    }
    .logo1 p{
        position: absolute;
        display: grid;
        margin-top: 185%;
        margin-left: 26%;
        font-size: 17px;
    }
    .phone{
        margin-right: 7%;
    }
    /* .part {
        margin-top:10%;
    } */
}
@media only screen and (min-width: 550px) and (max-width: 1130px) {
      .wpr {
          background-image: none;
/* height: auto; */
        /* height: 100px;
        position: relative; */
      }
  
      .logo img {
          position: absolute;
          width:85px;
          height: 85px;
          text-align: center;
          margin-top: 30px;
          margin-left: 43%;
      }
      .logo h4 {
         font-size: 15px;
          margin-top: 17%;
          margin-left: 34%;
         
      }
   .body {
          position: absolute;
          width: 100%;
          height:100%;
          font-size: 10px;
          font-weight: bold;
          margin-left: 4%;
          margin-top: 150px;
          padding-top: 30px;
          padding-left: 10px;
          /* padding-right: 10px; */
  
      }
      .body h2 {
          font-size: 14px;
          color: #333339;
          font-family: 'Nikosh';
          margin-bottom: 15px;
      }
      .box p {
          margin-top: -20px;
      }
  
      .wrap label {
          font-size: 10px;
          font-weight: bold;
      }
      .wrap input {
          margin-bottom: 2px;
      }
      .body input {
          height: 50px;
          width: 90%;
          margin-top: -10px;
      }
      .wrap button{
      border: blue;
      border-radius: 4px;
      background-color: blue;
      color: #fff;
      padding: auto;
      width: 170px;
      height: 40px;
      font-size: 18px;
      margin-top: 3%;
      margin-left: 35%;
  }
  .box .pa {
      text-align: center;
      font-size: 50px;
      margin-top: 10px;
      margin-bottom: 40px;
      font-size: 12px;
      margin-left: -6%;
  }
  .phone{
    margin-left:-40px;
  }
      .logo1 img {
          position: absolute;
          width: 80px;
          height: 90px;
          display: grid;
          text-align: center;
          margin-top: 600px;
          margin-left: 45%;
      }
      .logo1 h4{
          position: absolute;
          display: grid;
          text-align: center;
          margin-top: 96%;
          margin-left: 33%;
          font-size: 18px;
      }
      .logo1 p{
          position: absolute;
          display: grid;
          margin-top: 99%;
          text-align: center;
          margin-left: 39%;
          font-size: 17px;
      }
  }
@media only screen and (max-width: 3020px) and (min-width: 2020px) {
    .logo img {
    margin-top: 4%;
    margin-left: 30%;
}
.logo h4{
    margin-left: 23.5%;
}
.logo1 img{
    margin-left: 25%;
}
.logo1 h4 {
    margin-top: 30%;
    margin-left: 23%;
}
.logo1 p{
    margin-top: 32%;
    margin-left: 26%;
}
.body{

    margin-top: 110px;
 
}
    }
    @media only screen and (min-width: 1800px){
    .logo img {
    margin-top: 4%;
    margin-left: 30%;
}
.logo h4{
    margin-left: 23.5%;
}
.logo1 img{
    margin-left: 25%;
}
.logo1 h4 {
    margin-top: 30%;
    margin-left: 23%;
}
.logo1 p{
    margin-top: 32%;
    margin-left: 26%;
}
.body{

    margin-top: 110px;
 
}
    }
  </style>