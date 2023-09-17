<template>
  <div class="dashboard">
    <div class="dashboard-left">
      <the-sidebar />
    </div>
    <div class="dashboard-right">
      <div class="dashboard-top">
        <TheHeader />
        <breadcrumb class="hedder mt-4" :crumbs="crumbs" @selected="selected" />
      </div>

      <div class="dashboard-main"> 

         <div class="search mt-4">
          <div class="search-container">
            <input type="text" placeholder="Type your search" name="search" />
            <a href="#"
              ><img class="search-img" src="../../assets/img/btn.png" alt=""
            /></a>
          </div>
        </div>

        <br />
        <div class="list1">
<p class="text1">
    Employment: 1 &nbsp;<img src="../../assets/img/Polygon2.png">
</p>
<p class="listhead">Country: Malyesia <span>Gender: Male</span></p>
<br>
  <div class="grid-container1">
    <div class="img"><img src="../../assets/img/image.png"></div>
    <div class="bar">
       <p class="p">Basic Information</p> 
       <p><span class="span">Md. Akhtaruzzaman Elias</span></p> 
       <p>BMET Reg No: <span class="span">SLF4534858439</span></p> 
       <p>Mobile : <span class="span">01732521359</span></p> 
       <p>Date of Birth: <span class="span">Jan 08, 1995</span></p> 
<p>Gender: <span class="span">Female</span></p> 
<p>Present Address: <span class="span">32/3, Pirerbag, Mirpur, Dhaka</span></p> 
<p>Permanent Address: <span class="span"> Rawjan, Chattogram, Bangladesh</span></p> 
        </div>
    <div class="bar1">
        <p class="p1">Passport & Employment Info</p>
       <p>Passport Number: <span class="span">145605845</span></p> 
       <p>Issue Date: <span class="span">Jan 25, 2024 </span></p> 
       <p>Expiry Date: <span class="span">Jan 08, 1995</span></p> 
<p>Country : <span class="span">Malyasia</span></p> 
<p>Job: <span class="span">Domestic Helper</span></p> 
<p>Employer Name: <span class="span">Fatima Ahmed</span></p> 
<p>Salary:  <span class="span">40000</span></p> 
        </div>
<br><br>
        <div class="grid bar2">
        <p class="p1">Visa Information</p>
       <p>Number: <span class="span">123567889</span></p> 
       <p>Issue Date: <span class="span">Jan 25, 2024 </span></p> 
       <p>Ref No: <span class="span">344343</span></p> 
<p>Expiry date: <span class="span">Jan 08, 1995</span></p> 
<p>Sponsor ID :   <span class="span">4348932434</span></p> 
<p>Sticker Number: <span class="span"></span></p> 
        </div>

        <div class="grid bar3">
        <p class="p1">Sender Info (Agency)</p>
       <p>Agency: <span class="span">Nova Overseas (RL- 234567)</span></p> 
       <p>Address: <span class="span">234 Kakrail, Dhaka</span></p> 
       <p>Phone : <span class="span">0184734733</span></p> 
<p>Owner Name: <span class="span">Mr. Kamrul</span></p> 
<p>Status : <span class="span1">Valid</span></p> 
        </div>

  </div>
        </div>
          <hr>


   <!-- <div class="list1">
<p class="text1">
    Employment: 2 &nbsp;<img src="../../assets/img/Polygon.png">
</p>

<p class="listhead">Country: Dubai <span>Gender: Male</span></p>
<br>
  <div class="grid-container1">
    <div class="img"><img src="../../assets/img/image.png"></div>
    <div class="bar">
       <p class="p">Basic Information</p> 
       <p><span class="span">Md. Akhtaruzzaman Elias</span></p> 
       <p>BMET Reg No: <span class="span">SLF4534858439</span></p> 
       <p>Mobile : <span class="span">01732521359</span></p> 
       <p>Date of Birth: <span class="span">Jan 08, 1995</span></p> 
<p>Gender: <span class="span">Female</span></p> 
<p>Present Address: <span class="span">32/3, Pirerbag, Mirpur, Dhaka</span></p> 
<p>Permanent Address: <span class="span"> Rawjan, Chattogram, Bangladesh</span></p> 
        </div>
    <div class="bar1">
        <p class="p1">Passport & Employment Info</p>
       <p>Passport Number: <span class="span">145605845</span></p> 
       <p>Issue Date: <span class="span">Jan 25, 2024 </span></p> 
       <p>Expiry Date: <span class="span">Jan 08, 1995</span></p> 
<p>Country : <span class="span">Malyasia</span></p> 
<p>Job: <span class="span">Domestic Helper</span></p> 
<p>Employer Name: <span class="span">Fatima Ahmed</span></p> 
<p>Salary:  <span class="span">40000</span></p> 
        </div>
<br><br>
        <div class="grid bar2">
        <p class="p1">Visa Information</p>
       <p>Number: <span class="span">123567889</span></p> 
       <p>Issue Date: <span class="span">Jan 25, 2024 </span></p> 
       <p>Ref No: <span class="span">344343</span></p> 
<p>Expiry date: <span class="span">Jan 08, 1995</span></p> 
<p>Sponsor ID :   <span class="span">4348932434</span></p> 
<p>Sticker Number: <span class="span"></span></p> 
        </div>

        <div class="grid bar3">
        <p class="p1">Sender Info (Agency)</p>
       <p>Agency: <span class="span">Nova Overseas (RL- 234567)</span></p> 
       <p>Address: <span class="span">234 Kakrail, Dhaka</span></p> 
       <p>Phone : <span class="span">0184734733</span></p> 
<p>Owner Name: <span class="span">Mr. Kamrul</span></p> 
<p>Status : <span class="span1">Valid</span></p> 
        </div>

  </div>
        </div> -->


      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from "../../components/breadcrumb.vue";
export default {
  components: {
    breadcrumb,
  },
  name: "App",
  data() {
    return {
      crumbs: ["Employees"],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },

    changeRoute(e) {
      this.$router.push("/dashboard" + e.target.value);
      // this.$router.push("/" + e.target.value); not working....
    },
  },
};
</script>

<style scoped src="../../assets/css/employelist.css"></style>
