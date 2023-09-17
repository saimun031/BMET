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
  <div class="cards3"><img src="../../assets/img/Group41.png" alt=""><p>নথি ফর্ম</p></div>
  <div class="cards11"><img src="../../assets/img/Group4.png" alt=""><p>আবেদন ফর্ম</p></div>  
  <div class="cards3"><img src="../../assets/img/Group41.png" alt=""><p> নোটশীট</p></div>
  <div class="cards3"><img src="../../assets/img/Group41.png" alt=""><p>অঙ্গীকারনামা</p></div>
  <div class="cards2"><img src="../../assets/img/Group41.png" alt=""><p>রেজিস্ট্রেশন ক্লিয়ারেন্স ফর্ম</p></div>
</div>
</div>

<br>
<div class="ongikar mt-4">

  <p class="form">Form No-123456</p>

<p class="latter">
বরাবর<br>
মহাপরিচালক<br>
জনশক্তি, কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো ।<br>
৮৯/২, কাকরাইল, ঢাকা-১০০০।<br><br>
দৃষ্টি আকর্ষণ- পরিচালক (বহির্গমণ)<br><br>
বিষয়ঃ আমার রিক্রুটিং এজেন্সির মাধ্যমে সংগৃহীত ............(সৌদি আরবগামী) .........(৩৬) জন কর্মীর একক বহির্গমন ছাড়পত্র প্রদানের আবেদন।
</p>

<p class="latter">
  জনাব<br>
বিনীত নিবেদন এই যে, আমি............(এজেন্সির মালিকের নাম) রিক্রুটিং এজেন্সি ............(এজেন্সির না।।) 
(আরএল ...) এর স্বত্বাধিকারী। সোদি আরবের বিভিন্ন কোম্পানী হতে আমার রিক্রুটিং এজেন্সির মাধ্যমে 
নিম্নেবর্ণিত.........(৩৬) জন বাংলাদেশী কর্মীর কাজের ভিসা সংগ্রহ করা হয়েছে। বর্ণিত কর্মীদের ভিসা, 
Contact Paper, পাসপোর্ট এবং প্রশিক্ষণ সনদ সংক্রান্ত তথ্যাদি নিম্নরূপ;
</p>

</div>


<div class="table overflow">

  <table class="table table-bordered mt-4">

        <!-- <thead> -->
          <tr>
            <th scope="col">SL</th>
            <th scope="col">বিদেশগামী কর্মীর নাম</th>
            <th scope="col">পাসপোর্ট নং</th>
            <th scope="col">ভিসা নম্বর</th>
            <th scope="col">কোম্পানির নাম</th>
            <th scope="col">জন্ম তারিখ</th>
            <th scope="col">ভিসার ধরণ</th>
            <th scope="col">ভিসার মেয়াদ</th>
          </tr>
        <!-- </thead> -->

        <tbody>
          <tr>
            <td> 01</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>T705SH021561</td>
            <td>30th Dec, 2023</td>
            <td>Student</td>
            <td>30th Dec, 2023 <button><img src="../../assets/img/trash.png"></button></td>
          </tr>
          <tr>
            <td> 02</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>T705SH021561</td>
            <td>30th Dec, 2023</td>
            <td>Student</td>
            <td>30th Dec, 2023 <button><img src="../../assets/img/trash.png"></button></td>
          </tr>
          <tr>
            <td> 03</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>T705SH021561</td>
            <td>30th Dec, 2023</td>
            <td>Student</td>
            <td>30th Dec, 2023 <button><img src="../../assets/img/trash.png"></button></td>
          </tr>
          <tr>
            <td> 04</td>
            <td>Md. Akhtaruzzaman Elias</td>
            <td>AB-0212356</td>
            <td>BL12345678</td>
            <td>T705SH021561</td>
            <td>30th Dec, 2023</td>
            <td>Student</td>
            <td>30th Dec, 2023 <button><img src="../../assets/img/trash.png"></button></td>
          </tr>
        </tbody>
      </table>

</div>


<div class="body-para">

  <p  class="body-para1">উল্লিখিত কর্মীদের ভিসা আমার রিক্রুটিং এজেন্সির মাধ্যেমে সংগৃহীত এবং ভিসাগুলো employment ভিসা যাহার মেয়াদ ২(দুই) বছর । কর্মীদের ভিসা আমার রিক্রুটিং এজেন্সির মাধ্যেমে সংগৃহীত হওয়ায় কর্মীগণের বেতন-ভাতাদি, সামাজিক নিরাপত্তা বা অন্য কোন অসিবিধার কারণে কর্মীরা কাজ না পেয়ে দেশে ফেরত আসলে কর্মীদের সকল দায়-দায়িত্ব গ্রহণ করতে  বাধ্য থাকিব।</p>

  <p  class="body-para2">অতএব, মহোদয়ের সমীপে বিনীত আবেদন আমার রিক্রুটিং এজেন্সির মাধ্যেমে সংগৃহীত .........(৩৬) জন পুরুষ একক কর্মীর<br> অনুকূলে বহির্গমন ছাড়পত্র প্রদানে সদয় মর্জি হয়। 
  </p>

</div>


<div class="body-para-botom">

 <p class="body-para-botom-sign">
  সংযুক্তিঃ<br>
  <pre>
১। আয়কর চালান, পে অর্ডার কল্যাণ ও বিমা এবং স্মার্টকার্ড ফি।
২। পুট-আপ লিস্ট
৩। ৩০০ টাকার নন- জুডিশিয়াল স্টাম্পে অঙ্গীকারনামা।
৪। ভিসা কপি, পাসপোর্ট, চুক্তিপত্র এবং প্রশিক্ষণ সনদের কপি
৫। কর্মীর ডাটা শীট।
</pre>
 </p>

  <pre class="body-para-botom-sign1">
    বিনীত নিবেদক <br>
    .........................................................(এজেন্সির মালিকের নাম)
    স্বত্বাধিকারী
    এজেন্সির নাম ........................................................(আরএল..................)
    মোবাইল নং...............................................................
  </pre>

</div>


<div class="button">

  <div class="btn1">
  <router-link to="/dashboard/notice">
    <!-- <router-link to="/pendinglist/nothiform"> -->
    <button>Approve & Next</button>
  </router-link>
</div>

<div class="btn2">
<router-link to="/dashboard">
<button><strong>Cancel</strong> </button>
        </router-link>
      </div>
             <div class="btn3">
  <router-link to="/dashboard/notice">
    <button>Approve All</button>
  </router-link>
</div>

</div>
  </div><br><br>
      </div>
 
    </div>
    
<!-- <br><br><br><br> -->
</template>

<script>
import info from "../dashboard/pendinglists/info.vue"
import progressbar from "../../components/progressbar.vue"
import breadcrumb from '../../components/breadcrumb.vue';


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

<style scoped src="../../assets/css/pendinglist.css">

</style>