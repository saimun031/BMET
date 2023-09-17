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
  <div class="cards11"><img src="../../../assets/img/Group4.png" alt=""><p>অঙ্গীকারনামা</p></div>
  <div class="cards2"><img src="../../../assets/img/Group41.png" alt=""><p>রেজিস্ট্রেশন ক্লিয়ারেন্স ফর্ম</p></div>
</div>
</div>

<br>
<div class="ongikar">
<h5 class="center">অঙ্গীকারনামা(একক)</h5>
<br>
  <p class="form">Form No-123456</p>

<p class="latter">
  আমি............(এজেন্সির মালিকের নাম) রিক্রুটিং এজেন্সি ............(এজেন্সির না।।) 
  (আরএল ...) এর স্বত্বাধিকারী। সোদি আরবের<br> বিভিন্ন কোম্পানী হতে আমার রিক্রুটিং এজেন্সির 
  মাধ্যমে নিম্নেবর্ণিত.........(৩৬) জন বাংলাদেশী কর্মীর কাজের ভিসা সংগ্রহ করা<br> হয়েছে। বর্ণিত 
  কর্মীদের ভিসা, Contanct Paper, পাসপোর্ট এবং প্রশিক্ষণ সনদ সংক্রান্ত তথ্যাদি নিম্নরূপ;
</p>

</div>


<div class="table overflow">

  <table class="table table-bordered mt-4">

    
          <tr>
            <th scope="col">SL</th>
            <th scope="col">কর্মীর নাম</th>
            <th scope="col">পাসপোর্ট নং</th>
            <th scope="col">ভিসা নম্বর</th>
            <th scope="col">কোম্পানির নামও ঠিকানা</th>
            <th scope="col">পদের নাম ও বেতন</th>
            <th scope="col">অভিবাসন ব্যয়</th>
            <th scope="col">প্রশিক্ষণ সনদ নম্বর</th>
            <th scope="col">ব্যাচ নম্বর ও তারিখ</th>
            <th scope="col">টিটিসির নাম</th>
          </tr>
       

        <tbody>
          <tr>
            <td> 01</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>Al-hera Jedda, </td>
            <td>Supervisor 500 Dir</td>
            <td>20,000TK</td>
            <td>T705SH021561</td>
            <td>H021561 07/02/2023</td>
            <td>Cumilla TTC</td>
          </tr>
          <tr>
            <td> 02</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>Al-hera Jedda, </td>
            <td>Supervisor 500 Dir</td>
            <td>20,000TK</td>
            <td>T705SH021561</td>
            <td>H021561 07/02/2023</td>
            <td>Cumilla TTC</td>
          </tr>
          <tr>
            <td> 03</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>Al-hera Jedda, </td>
            <td>Supervisor 500 Dir</td>
            <td>20,000TK</td>
            <td>T705SH021561</td>
            <td>H021561 07/02/2023</td>
            <td>Cumilla TTC</td>
          </tr>
          <tr>
            <td> 04</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>Al-hera Jedda, </td>
            <td>Supervisor 500 Dir</td>
            <td>20,000TK</td>
            <td>T705SH021561</td>
            <td>H021561 07/02/2023</td>
            <td>Cumilla TTC</td>
          </tr>
        </tbody>
      </table>

</div>


<div class="body-para mt-4">

  <p  class="body-para1 mt-4">উল্লিখিত কর্মীদের ভিসা আমার রিক্রুটিং এজেন্সির মাধ্যেমে সংগৃহীত এবং 
    ভিসাগুলো employment ভিসা যাহার মেয়াদ ২(দুই) বছর । কর্মীদের ভিসা আমার রিক্রুটিং এজেন্সির 
    মাধ্যেমে সংগৃহীত হওয়ায় কর্মীগণের বেতন-ভাতাদি, সামাজিক নিরাপত্তা বা অন্য কোন অসিবিধার কারণে 
    কর্মীরা কাজ না পেয়ে দেশে ফেরত আসলে কর্মীদের সকল দায়-দায়িত্ব গ্রহণ করতে  বাধ্য থাকিব। উক্ত 
    কর্মীদের  সোদি আরবের বিমান বন্দর হতে নিয়োগকর্তা বা তার প্রতিনিধি গ্রহণ করবেন এবং বর্ণিত 
    কর্মীগণ সোদি আরব ব্যতীত অন্য কোন দেশে প্রেরণ করবোনা মর্মে  অঙ্গীকার করিতেছি।</p>

  <p  class="body-para2">আমি আরও অঙ্গীকার করছি যে, বর্ণিত কর্মীদের ভিসা, নিয়োগপত্র, চুক্তি পত্র 
    সঠিক আছে। কর্মীগণ সৌদি আরবে যাওয়ার পর সংশ্লিষ্ট নিয়োগকর্তার অধীনে নির্ধারিত পেশায় চাকুরি প্রদানের 
    নিশ্চয়তা করছি এবং কর্মীগণ সৌদি আরবে যাওয়র পর চুক্তি অনুযায়ী বেতন-ভাতাদি এবং অন্যান্য সুযোগ-সুবিধা 
    প্রাপ্ত না হলে তার সকল দায়-দায়িত্ব তার রিক্রুটিং এজেন্সি বহন করিতে বাধ্য থাকিবে। আরও অঙ্গীকার করছি 
    যে, সরকার নির্ধারিত অভিবাসন ব্যয়ের বেশি টাকা কর্মীগণের নিকট হতে গ্রহণ করা হয়নাই। <br>
উপর্যুক্ত অঙ্গীকারনামায় বর্ণিত বিষয়ের কোন ব্যত্যয় ঘটলে বৈদেশিক কর্মসংস্থান ও অভিবাসন আইন ২০১৩ এবং
 সংশ্লিষ্ট বিশিমালা অনুযায়ী জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো বা প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান 
 মন্ত্রণালয় কর্তৃক যে কোন ব্যবস্থা গ্রহণ করিতে পারিবে।<br><br>

আমি সেচ্ছায়, স্বজ্ঞানে এবং কাহারো দ্বারা প্ররোচিত না হয়ে বর্ণিত অঙ্গীকারনামা স্বাক্ষর করিলাম 
  </p>

</div>


<div class="body-para-botom1">
 <p class="body-para-botom-sign">
  স্বাক্ষী
  <pre>
১। 
২। 
৩। 
</pre>
<!-- <br> -->
 </p>

  <pre class="body-para-botom-sign2">
    বিনীত নিবেদক <br>
    .........................................................(এজেন্সির মালিকের নাম)
    স্বত্বাধিকারী
    এজেন্সির নাম ........................................................(আরএল..................)
    মোবাইল নং...............................................................
    
  </pre>
  <br>
</div>

<!-- <div class="vl"></div> -->

<div class="button">

  <div class="btn1">
  <router-link to="/dashboard/registration">
    <button>Approve & Next</button>
  </router-link>
</div>

<div class="btn2">
<router-link to="/dashboard">
<button><strong>Cancel</strong> </button>
        </router-link>
      </div>
      <div class="btn3">
  <router-link to="/dashboard/registration">
    <button>Approve All</button>
  </router-link>
</div>

</div>

 </div>
  </div>
  </div>
<!-- <br><br><br><br> -->
</template>

<script>
// import nothiform from "./pendinglists/nothiform.vue"
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

<style scoped src="../../../assets/css/ongikarnama.css">

</style>