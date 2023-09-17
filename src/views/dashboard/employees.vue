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
<div class="cards mt-4">
  <div class="grid-container">
<form >
  <label for="Country">Agency : </label>
  <select>
    <option value="Agencies"> All Agencies</option>
    <option value="Agency 1"> Agency 1</option>
    <option value="Agency 2"> Agency 2</option>
    <option value="Agency 3"> Agency 3</option>
  </select>
</form>
<form >
  <label for="Gender">Country: </label>
  <select >
    <option value="Countries"> All Countries</option>
    <option value="Country 1"> Country 1</option>
    <option value="Country 2"> Country 2</option>
  </select>
</form>
<form >
  <label for="Application"> Gender : </label>
  <select>
    <option value="Gender"> All Gender</option>
    <option value="Male"> Male</option>
    <option value="Female"> Female</option>
    <option value="Others"> Group</option>
  </select>
</form>

<div class="search-container">
      <input type="text" placeholder="Type your search" name="search">
      <a href="#"><img class="search-img" src="../../assets/img/btn.png" alt=""></a>
  </div>

</div>
</div>
        <br /><br />

        <!-- <div class="container"> -->
<div class="">
<!-- <div class="overflow"> -->
  <div class="col-12 overflow">
          <table class="table mt-4">
            <thead>
              <tr class="tr">
                <th>Applicants’ Name</th>
                <th>Agency Name</th>
                <th>Passport No.</th>
                <th>DoB</th>
                <th>Visa Country</th>
                <th>Visa Expiry</th>
                <th>Visa Type</th>
              </tr>
            </thead>    
            <tbody>
              <tr>
                 <!-- <router-link to="/dashboard/pendinglist"> -->
          <!-- <router-link to="#"> -->
                <td> <router-link to="/dashboard/employelist"> Md. Akhtaruzzaman Elias </router-link> </td>
                    <!-- </router-link>  -->
                <td>M/S Nova Overseas</td>
                <td>AB-0212356</td>
                <td>30th Dec,1990</td>
                <td>Saudi Arab</td>
                <td > 30th Dec, 2023</td>
                <td>Worker</td>
              </tr>
              
            </tbody>
             
          </table>
         </div>
         </div>
        <!-- </div> -->
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

<style scoped src="../../assets/css/employe.css"></style>
