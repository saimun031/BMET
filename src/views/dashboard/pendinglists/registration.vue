<template>
  
          <div class="dashboard">
      <div class="dashboard-left">
     <the-sidebar/>
      </div>
      <div class="dashboard-right">
  <div class="dashboard-top">
    <TheHeader/>
    <breadcrumb class="hedder mt-4" :crumbs="crumbs" @selected="selected" />
  </div>

    <div class="dashboard-main">
      
    <hr>
    <div class="name-head">
      <info></info>
  
    </div>
  <hr class="line">
  
  
  <div class="cards mt-4">
  <div class="grid-container">
  <!-- <div class="cards1"><img src="../../../assets/img/Group4.png" alt=""><p></p></div> -->
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p>নথি ফর্ম</p></div>
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p>আবেদন ফর্ম</p></div>  
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p> নোটশীট</p></div>
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p>অঙ্গীকারনামা</p></div>
  <div class="cards11"><img src="../../../assets/img/Group4.png" alt=""><p>রেজিস্ট্রেশন ক্লিয়ারেন্স ফর্ম</p></div>
</div>
  </div>
<div class="head mt-4">
    <p class="mt-4">Registration, Clearance and Card Check</p>

  <div class="button1 mt-4">
      <button class="btn4">Print All &nbsp;<img src="../../../assets/img/printer1.png" alt=""></button>
      <button class="btn5">Download All &nbsp;<img src="../../../assets/img/download.png" alt=""></button>
  </div>

    <div class="checkbox">
    <input type="checkbox">
  <label> Passport Number <span>:</span></label><br>
  <input type="checkbox" checked>
  <label> Reg. Number <span>:</span></label><br>
  <input type="checkbox" >
  <label> Job ID <span>:</span></label>
</div>
</div>

<div class="body" id='print'>
<p>1. Passport Number</p>
<h5>Employee Reg. ID : <span>CMM20230219479G</span></h5>
<h5>Employee’s Name : <span>Md Abdul Mannan</span></h5>
<h5>Father’s Name : <span>Arob Ali Munshi</span></h5>

<p class="mt-4">2. Clearance Information</p>
<h5>Clearance Id : <span>SA-I-2023-0396565</span></h5>
<h5>Clearance Date : <span>27-04-2023 02:04:24 PM</span></h5>
<h5>Agent Name : <span>M/S. The Asmaacs (RL0868)</span></h5>
<h5>Passport Number : <span>Passport Number</span></h5>
<h5>Job ID : <span>IC-2023-0868-00270</span></h5>

<p class="mt-4">3. Employee Card Information</p>
<h5>Print Date : <span>11th July, 2022</span></h5>
<h5>Write Date : <span>7th January, 2022</span></h5>
</div>
<br>
<div class="qr">
  <img src="../../../assets/img/qr.png" alt="">
</div>
<br>
  <div class="button mt-4">
    <div class="btn1">
    <router-link to="/dashboard">
      <button>Approved All</button>
    </router-link>
  </div>
      <div class="btn3">
      <button flat @click.native="print">Print This Form &nbsp;<img src="../../../assets/img/printer1.png" alt=""></button>
  </div>
  </div>
<br><br><br><br><br><br>
  </div>
  
  </div>
  
  </div>

  
  </template>
  
  <script>
  // import nothiform from "./pendinglists/nothiform.vue"
  import progressbar from "../../../components/progressbar.vue";
import info from "../pendinglists/info.vue";
import breadcrumb from '../../../components/breadcrumb.vue';
  export default {
    components: {
      // nothiform,
      info,
      progressbar,
      breadcrumb
    },
  name: 'App',
  data() {
    return {
      crumbs: ['Pending Application for Approval // Home'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
print() {
      var prtContent = document.getElementById("print");
      var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write(prtContent.innerHTML);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    }
  },
  
  }
  </script>
  
  <style scoped>
  *{
    font-family: Poppins;
  }
.head p{
  font-family: Poppins;
font-size: 24px;
font-weight: 600;
line-height: 36px;
letter-spacing: 0px;
color: #23283BCC;
}
  .center{
    text-align: center;
  }
  .line-dot{
    margin-left: 6%;
  }
    .cards{
    padding: 30px;
    border-radius: 5px;
    background-color: rgb(250, 247, 247);
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 10px;
  }
  
  .grid-container div {
    font-family: Poppins;
font-size: 15px;
font-weight: 600;
line-height: 18px;

    Width:155px;
    Height:56px;
    border-radius: 4px;
    padding: 10px;
  }
  .grid-container .cards11 p{
  text-align: justify;
  margin-top: -18%;
  margin-left: 20%;
  }

   .grid-container .cards3 p{
  text-align: justify;
  margin-top: -13%;
  margin-left: 20%;
  }
  .grid-container .cards11 img{
  margin-top: 6%;
  }

    .cards3 img{
    margin-top: 6%;
 
  }
    .cards3{
    border: 2px solid #032497;
    color: #032497;
   font-size: 15px;
    padding: 10px;
  }
    .cards11{
    background-color:  #032497;
    color: white;
   font-size: 15px;
    padding: 10px;
  }
  .line{
  margin-top: 12%; 
  }
  .head p{
font-size: 24px;
font-weight: 600;
line-height: 36px;
  }
  .checkbox{
           margin-top:7%;
    font-size: 16px;
font-weight: 600;
line-height: 24px;
padding-left: 40px;
padding-bottom: 40px;
padding-top: 10px;
  }
  .checkbox label{
    margin-left: 2%;
    padding: 5px;
  }
  input[type=checkbox] {
          accent-color: #032497;
        }
  .checkbox input[type="checkbox"]:checked+label {
            color: #032497;    
        }
        .body{
            border: 1px solid #26323833;
            padding: 25px;
            /* opacity: 0.5; */
        }
        .body p{
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            color: #617986;
        }
.body h5{
    font-size: 16px;
            font-weight: 600;
            line-height: 24px; 
            padding-left: 20px;
}  
.body span{
    font-size: 16px;
            font-weight: 400;
            line-height: 24px; 
            color:#485860;
            padding-left: 10px;
}     
.qr{
  margin-left: 3%;
} 
  .btn1 button{
    width: 201px;
    height: 48px;
    font-size: 16px;
    color: white;
    border-radius: 4px;
    background-color: #032497;
    border: none;
    font-family: Poppins;
  }
  .btn3 button{
    width: 243px;
    margin-top: -4%;
    float: right;
    height: 48px;
 font-family: Poppins;
font-size: 16px;
font-weight: 700;
line-height: 24px;
    color: #032497;
    border-radius: 4px;
    background-color: white;
    border: 2px solid #032497;
  }
  .button1{
    float: right;
    
  }
.btn4{
margin-left: -6%;
        width: 184px;
    height: 48px;
 font-family: Poppins;
font-size: 16px;
font-weight: 700;
line-height: 24px;
    color: #032497;
    border-radius: 4px;
    background-color: white;
    border: 2px solid #032497;
  }
.btn5 {
margin-left: 6%;
     width: 228px;
    height: 48px;
 font-family: Poppins;
font-size: 16px;
font-weight: 700;
line-height: 24px;
    color: #29A74A;
    border-radius: 4px;
    background-color: white;
    border: 2px solid #29A74A;
  }
  @media only screen and (max-width: 650px) {
        .grid-container{
      grid-template-columns: auto;
      padding:35px;
      margin-top: -20%;
      margin-left: 7%;
     }
      .btn3 button{
    margin-top: 4%;
    margin-left: 1%;
float: left;
}
     .btn2 button{
    margin-top: 4%;

}
.btn4[data-v-033d2565] {
    margin-left: 6%;
    margin-bottom: 6%;
}
.btn1 button{

    height: 40px;
    width:auto;
    font-size: 12px;
 font-size: 12px;
}

     .btn3 button{
      float:right;
    margin-top: -13%;
     width: auto;
    height: 40px;
font-size: 12px;
}
     
  }
  @media only screen and (min-width: 550px) and (max-width: 1230px) {
    .grid-container div {
    font-size: 10px;
    width:auto;
}
.grid-container .cards3 p{
    text-align: justify;
    margin-top: -18%;
    margin-left: 36%;
}
.line{
  margin-top: 25%; 
  }
.grid-container .cards11 p {
    text-align: justify;
       margin-top: -21%;
    margin-left: 32%;
}
.grid-container .cards2 p{
    text-align: justify;
    margin-top: -13%;
    margin-left: 20%;
}
  .button1{
    margin-right: 17%;
    
  }
.checkbox {
    margin-top: 15%;
  
}
.btn2 button {
    margin-right: 38%;
}
.btn3 button {
    margin-top: -7%;
}
  }
       @media only screen and (min-width: 2010px){

.line{
  margin-top: 10%; 
  }
}
  </style>