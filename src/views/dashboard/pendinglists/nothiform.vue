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
  <div class="cards11"><img src="../../../assets/img/Group4.png" alt=""><p>নথি ফর্ম</p></div>
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p>আবেদন ফর্ম</p></div>  
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p> নোটশীট</p></div>
  <div class="cards3"><img src="../../../assets/img/Group41.png" alt=""><p>অঙ্গীকারনামা</p></div>
  <div class="cards2"><img src="../../../assets/img/Group41.png" alt=""><p>রেজিস্ট্রেশন ক্লিয়ারেন্স ফর্ম</p></div>
</div>
<!-- <img class="line-dot" src="../../../assets/img/Group6.png" alt=""> -->
<!-- <div class="rental">
  <div class="c1"></div>
  <div class="c2"></div>
  <div class="c3"></div>
  <div class="c4"></div>
  <div class="c5"></div>
</div> -->

</div>

<div class="form-head mt-4">
  <p class="f1">Form No. : <strong>A253T5</strong></p>
<p class="f2">Gender : <strong>Male</strong></p>
<p class="f3">Country : <strong>Dubai</strong></p>
</div>


<div class="form-body">
  <h5>Nothi Form (নথি ফর্ম)</h5>
  <p class="p">পৃষ্টা নং.....................</p>

  <p class="box"></p>
  <p class="text">
  নোট অনুচ্ছেদ ................................................
    এর বর্ণিত ............... হতে .................পর্যন্ত দাখিতকৃত কাগজপত্রাদি 
    পরীক্ষান্তে সঠিক পাওয়া গিয়েছে
  </p>
</div>
<div class="body-table mt-4">
  <h5>উপস্থাপিত তথ্যাদি নিম্নরূপঃ</h5>
  <div class="table mt-4 overflow">
  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">ক্র.নং. </th>
      <th scope="col" colspan="2">বিবরণ</th>
      <th scope="col">মন্তব্য</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="td">০১।</td>
      <td>দেশের নাম</td>
      <td class="td">দুবাই</td>
      <td class="td">-/-</td>
    </tr>
    <tr>
      <td class="td">০২।</td>
      <td>মোট ভিসার সংখ্যা</td>
      <td class="td">১৫</td>
      <td class="td">-/-</td>
    </tr>
    <tr>
      <td class="td">০৩।</td>
      <td>ভিসার ধরণ</td>
      <td class="td">লেবার</td>
      <td class="td">-/-</td>
    </tr>
    <tr>
      <td class="td">০৪।</td>
      <td>ভিসাগুলো একক (একই কোং অনাধিক ২৫)</td>
      <td class="td">০০০০০০</td>
      <td class="td">-/-</td>
    </tr>
    <tr>
      <td class="td">০৫।</td>
      <td>ডিমান্ডলেটার সত্যায়িত/অসত্যায়িত</td>
      <td class="td">সত্যায়িত</td>
      <td class="td">-/-</td>
    </tr>
    <tr>
      <td class="td">০৬।</td>
      <td>ভিসা সত্যায়িত/অসত্যায়িত</td>
      <td class="td">সত্যায়িত</td>
      <td class="td">-/-</td>
    </tr>
    <tr>
      <td class="td">০৭।</td>
      <td>ভিসাগুলো স্ট্যাম্পিংকৃত</td>
      <td class="td">সত্যায়িত</td>
      <td class="td">-/-</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<div class="body-footer mt-4">
  <p class="box"></p>
  <p class="text">
    রিক্রুটিং এজেন্সি কর্তৃক আবেদনকৃত .............................. কর্মীর দাখিলকৃত ভিসাগুলো চাকরির।
  </p>
<br>
  <p class="box"></p>
  <p class="text">
    এমতাবস্থায় রিক্রুটিং এজেন্ট .........................................................
     আরএর (RL) ...............কর্তৃক আবেদনকৃত .................................
     (মহিলা/পুরুষ) কর্মীর বহির্গমন ছাড়পত্র সদহ অনুমোদন দেয়া যেতে পারে।
  </p>

  <div class="grid-container1 mt-4">
<div class="cards1"><p>দাখিলকৃত তথ্য যাচাই করে 
সঠিক পাওয়া গিয়েছে </p></div>
<div class="cards1"><p>দাখিলকৃত তথ্য যাচাই করে 
সঠিক পাওয়া গিয়েছে </p></div>
<div class="cards1"><p>দাখিলকৃত তথ্য যাচাই করে 
সঠিক পাওয়া গিয়েছে </p></div>
  </div>

<div class="grid-container2 mt-4">
<div class="cards1"><p>........................................................<br>
  প্রধান সহকারী/.................... </p></div>
<div class="cards1"><p>........................................................<br>
সহকারী পরিচালক</p></div>
<div class="cards1"><p>........................................................<br>
উপ-পরিচালক </p></div>
<div class="cards1"><p>........................................................<br>
পরিচালক(বহির্গমন)</p></div>
<div class="cards1"><p>........................................................<br>
অতিরিক্ত মহাপরিচালক </p></div>
<div class="cards1"><p>........................................................<br>
মহাপরিচালক</p></div>

  </div>
</div>



<div class="button">

  <div class="btn1">
  <router-link to="/dashboard/pendinglist">
    <button>Approve & Next</button>
  </router-link>
</div>

<div class="btn2">
<router-link to="/dashboard">
<button><strong>Cancel</strong> </button>
        </router-link>
      </div>
       <div class="btn3">
  <router-link to="/dashboard/pendinglist">
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
import info from "../pendinglists/info.vue"
import breadcrumb from '../../../components/breadcrumb.vue';

export default {
  components: {
    info,
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

<style scoped src="../../../assets/css/nothiform.css">

</style>