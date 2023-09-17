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
                <h2>Sign in</h2>
                <p>Sign in to get into BMET portal</p>
                <form action="/verification">
                    <div class="wrap">
                        <label>Email</label>
                        <input type="email" placeholder="Type your accurate email" >
                    </div>
                    <div class="wrap">
                        <label>Password</label>
                        <input title="password" placeholder="Enter the correct password" >
                    </div>
                    <div class="wrap">
                        <button>Sign In </button>
                    </div>
                    <br>
                    <p class="pa">An One-Time-Password will be sent to your number.
                        <br>
                        Please use the code to sign into the system.
                    </p>
                    
                </form>
            </div>
        </div>
                    <div class="part">
            <div class="logo1">
                <a href="#"><img src="../assets/img/image11.png" alt=""></a>
                <div>
                <h4><strong> Bureau of Manpower, <br>Employment and Training (BMET)</strong></h4>
                </div>
                <br>
                <p>89/2 Kakrail, Dhaka 1000,</p>
            </div>
            </div>
</div>
</template>

<script>
// import verification from './views/verification.vue'

export default {
    components: {
        // verification
    }
};
</script>

<style scoped>
*{
    font-family: poppins;
}
.logo img {
    position: absolute;
    width: 90px;
    height: 90px;
    display: grid;
    margin-top: 2.5%;
    margin-left: 21%;
}
.logo h4 {
    position: absolute;
    display: grid;
    margin-top: 10%;
    margin-left: 12.5%;
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
    width: 100%;
    /* height: 1060px; */
    /* height:auto; */
    height:100%;
    /* background-image: cover; */
    /* background-repeat: no-repeat; */
    position: absolute;
}
.body {
    padding-top: 40px;
    padding-left: 55px;
    padding-right: 26px;
    position: relative;
    width: auto;
    /* height: 500px; */
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
    Width: 138px;
    Height: 60px;
    color: #263238CC;
}
.box p {
    font-family: poppins;
    font-weight: 400;
    color: #26323899;
    opacity: 0.65;
    font-size: 18px;
    line-height: 27px;
    /* margin-bottom: 55px; */
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

    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #333339;
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
/* input[type="email"]:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.4);
} */
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
    font-family: Gilroy-Medium;
    text-align: center;
    margin-bottom: 45px;
    font-size: 14px;
    color: #26323899;
    color: black;
    Line-height: 16.41px;
}
@media only screen and (max-width: 290px) and (min-width: 200px) {
.logo h4[data-v-7589b93f] {
    font-size: 15px;
    margin-top: 42%;
    margin-left: 16%;
}
.logo1 img[data-v-7589b93f] {

    margin-left: 40%;
}
.logo1 p[data-v-7589b93f] {

    margin-top: 250%;
 
}
.logo1 h4 [data-v-7589b93f]{
    margin-top: 60%;
   
}
}
@media only screen and (max-width: 330px) and (min-width: 300px) {
.logo h4[data-v-7589b93f] {
    font-size: 15px;
    margin-top: 42%;
    margin-left: 18%;
}
.logo1 img[data-v-7589b93f] {

    margin-left: 40%;
}
.logo1 p[data-v-7589b93f] {

    margin-top: 211%;
 
}
.logo1 h4 [data-v-7589b93f]{
    margin-top: 30%;
   
}
}
@media only screen and (max-width: 660px) {
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
        margin-left: 37%;
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
        margin-top: 560px;
        margin-left: 37%;
    }
    .logo1 h4{
        position: absolute;
        display: grid;
        margin-top: 180%;
        margin-left: 10%;
        font-size: 18px;
    }
    .logo1 p{
        position: absolute;
        display: grid;
        margin-top: 185%;
        margin-left: 22%;
        font-size: 17px;
    }
    /* .part {
        margin-top:10%;
    } */
}
@media only screen and (min-width: 550px) and (max-width: 1230px) {
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
          margin-top: 18%;
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
      margin-left: -9%;
  }
  .phone{
    margin-left:-80px;
  }
      .logo1 img {
          position: absolute;
          width: 80px;
          height: 90px;
          display: grid;
          text-align: center;
          margin-top: 600px;
          margin-left: 44%;
      }
      .logo1 h4{
          position: absolute;
          display: grid;
          text-align: center;
          margin-top: 105%;
          margin-left: 31%;
          font-size: 18px;
      }

      .logo1 p{
          position: absolute;
          display: grid;
          margin-top: 108%;
          text-align: center;
          margin-left: 37%;
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