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
    <progressbar></progressbar>
  <!-- <img class="line-dot" src="../../../assets/img/Group5.png" alt=""> -->
  </div>
  

  <div class="form-head mt-4">
  <p class="f1">Form No. : <strong>A253T5</strong></p>
<p class="f2">Gender : <strong>Male</strong></p>
<p class="f3">Country : <strong>Dubai</strong></p>
</div>


<div class="body-main">
    <div class="table">
        <h3 class="center">একক বহির্গমন ছাড়পত্রের পুটআপশীট ও ডাটাএন্ট্রি ফরম</h3>
  <table class="table table-bordered">
<tbody>
    <tr> 
        <th>নিয়োগকারী দেশের নামঃ</th>
        <td colspan="2"> সৌদি আরব</td> 
        <td>আর এল নং</td>
        <td colspan="2">ভিসার ধরণ</td>
        <th colspan="2">উৎস আয়করের পরিমান জন প্রতি :</th> 
        <td> </td> 
    </tr> 
    <tr> 
        <th rowspan="2">রিক্রুটিং এজেন্সীর নাম : </th> 
        <td rowspan="2" colspan="2">মেসার্স<br>. . . . . . . . . . . . . . .</td>
         <td rowspan="3" class="rowspan">০০০০৫১৩</td> 
         <td rowspan="3" class="rowspan">অসত্যায়িত</td> 
         <td rowspan="3" class="rowspan">সত্যায়িত</td>
         <th colspan="2">কল্যাণ ফি পরিমান জন প্রতি : </th>
         <td colspan="2"></td>
        </tr> 
        <tr> 
         <th colspan="2">স্মার্ট কার্ড ফি : </th>
         <td ></td>
        </tr> 
        <tr> 
         <th>টাকা জমার পারমিট নংঃ</th>
         <td colspan="2">১০০২৪</td>
         <th colspan="2">তারিখ :</th>
         <td ></td>
         <!-- <td ></td> -->
        </tr> 
</tbody>
  <tbody>
    <tr>
      <th class="td">Employee No.</th>
      <td class="td">1</td>
      <td class="td">2</td>
      <td class="td">3</td>
      <td class="td">4</td>
      <td class="td">5</td>
      <td class="td">6</td>
      <td class="td">7</td>
      <td class="td">8</td>

    </tr>
    <tr>
        <th class="td">Worker Sl. No.</th>
      <td class="td">00010</td>
      <td class="td">00010</td>
      <td class="td">00010</td>
      <td class="td">00010</td>
      <td class="td">00010</td>
      <td class="td">00010</td>
      <td class="td">00010</td>
      <td class="td">00010</td>
    </tr>
    <tr>
        <th class="td">Company Name</th>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
      <td class="td">Modern Arab House Group Co. LTD</td>
    </tr>
    <tr>
        <th class="td">Employee Name</th>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
      <td class="td">Md. Mobarok Hossain</td>
    </tr>
    <tr>
        <th class="td">Job Post</th>
      <td class="td">Worker</td>
      <td class="td">Cleaner</td>
      <td class="td">Worker</td>
      <td class="td">Cleaner</td>
      <td class="td">Worker</td>
      <td class="td">Cleaner</td>
      <td class="td">Cleaner</td>
      <td class="td">Cleaner</td>
    </tr>
    <tr>
        <th class="td">Salary</th>
      <td class="td">1000</td>
      <td class="td">1000</td>
      <td class="td">1000</td>
      <td class="td">1000</td>
      <td class="td">1000</td>
      <td class="td">1000</td>
      <td class="td">1000</td>
      <td class="td">1000</td>
    </tr>
    <tr>
        <th class="td">Reg. ID No.</th>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
      <td class="td">TAM 20230257396G</td>
    </tr>
    <tr>
        <th class="td">Visa Number</th>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
      <td class="td">6096508968</td>
    </tr>
    <tr>
        <th class="td">Visa Issue Date</th>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
      <td class="td">31/03/2023</td>
    </tr>
    <tr>
        <th class="td">Visa Expiry Date</th>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
      <td class="td">30/06/2023</td>
    </tr>
    <tr>
        <th class="td">Passport No.</th>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
      <td class="td">A 04558773</td>
    </tr>
    <tr>
        <th class="td">Passport Issue Date</th>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
      <td class="td">04/09/2022</td>
    </tr>
    <tr>
        <th class="td">Passport Expiry Date</th>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
      <td class="td">03/09/2023</td>
    </tr>
    <tr>
        <th class="td">Date of Birth</th>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
      <td class="td">17/08/1999</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<div class="text1">
    বর্ণিত কর্মী গ্রুপ ভিসার অন্তর্ভূক্ত নয়। কর্মীদের পাসপোর্ট ভিসা, চাকুরীর চুক্তি পরতের বর্ণিত বেতন 
        ও শর্তাদি সঠিক আছে। উক্ত বিষয়ে ত্রুটির কারণে কর্মীদের কোন প্রকার সমস্যা হইলে আমার 
        মেসার্স . . . . . . . . . . . . . , লাইসেন্স নম্বরঃ ০০০০০০০০ সম্পূর্ণ দায়-দায়িত্ব গ্রহণ ও 
        কর্মীদের ক্ষতিপূরণ প্রদান করিতে বাধ্য থাকিব।
</div>


<br>
<div class="body-footer">
<div class="grid-container4 mt-4">
<div class="cards1"><p>পে অর্ডার নং : ০০০০০</p></div>
<div class="cards1"><p>তাং : ২৪ / ০৪ / ২০২৩</p></div>
<div class="cards1"><p>টাকা : ০০০০০/= </p></div>
<div class="cards1"><p>চালান নং : ০০০০০</p></div>
<div class="cards2"><p>তাং : ২৪ / ০৪ / ২০২৩</p></div>
<div class="cards2"><p>টাকা : ০০০০০/=</p></div>
  </div>

<div class="grid-container5">
<div class="cards1"><p>........................................................<br>
  প্রধান সহকারী/.................... </p></div>
<div class="cards1"><p>........................................................<br>
সহকারী পরিচালক</p></div>
<div class="cards2"><p>........................................................<br>
উপ-পরিচালক </p></div>
<div class="cards2"><p>........................................................<br>
পরিচালক(বহির্গমন)</p></div>
  </div>
</div>

 

  <!-- <div class="vl"></div> -->
  
  <div class="button">
  
    <div class="btn1">
    <router-link to="/dashboard/registration">
      <button>Approve & Next</button>
    </router-link>
  </div>
  
  <!-- <div class="btn2">
  <router-link to="/dashboard">
  <button><strong>Cancel</strong> </button>
          </router-link>
        </div> -->
  
  </div>
  <br><br><br><br><br><br><br>
   </div>
  
  </div>

  </div>
  
  </template>
  
  <script>
//   import nothiform from "./pendinglists/nothiform.vue"
import info from "../pendinglists/info.vue"
import progressbar from "../../../components/progressbar.vue"
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
  },
  }
  </script>
  
  <style scoped src="../../../assets/css/putupshit.css">

  </style>