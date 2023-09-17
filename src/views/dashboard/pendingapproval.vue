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
    <div class="search">  

<div class="search-container">
    <input type="text" placeholder="Search by Agency, RL, Passport" name="search">
    <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
    <a href="#"><img class="search-img" src="../../assets/img/btn.png" alt=""></a>
</div>

</div>
<br><br>

<!-- <div class="container">
   -->
<div class="">

  <h3 class="mt-4">Pending for Approval  </h3>
      

<div class="row">
  <div class="col-14 overflow">
    <table class="table mt-4">
        <tbody>
        <tr>
          <th scope="col">
              <input type="checkbox" class="custom-control-input" id="customCheck3">
          </th>
          <th scope="col">Application ID</th>
          <th scope="col">Recruiting Agency</th>
          <th scope="col">Clearance Type</th>
          <th scope="col">Applying Country</th>
          <th scope="col">Employer Name</th>
          <th scope="col">Applied Candidates</th>
          <th scope="col">Gender</th>
          <th scope="col">Application Date</th>
          <th scope="col">Status</th>
        </tr>
    
        <tr>
          <td>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1"></label>
            </div>
          </td>
          <td>SA-00922</td>
          <td>Nova Overseas(RL0212356)</td>
          <td>Indivisual</td>
          <td>Baharain</td>
          <td>Shama Alisshi</td>
          <td>08</td>
          <td>Male</td>
          <td>a day ago</td>

          <td class="p">
            <router-link to="/dashboard/nothiform">
                <img src="../../assets/img/Vector.png" alt="">
  </router-link>
          <router-link to="/dashboard/pendinglist">
                 <button >Pending</button>
  </router-link>
           
          </td>

        </tr>
        <tr>
          <td>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label" for="customCheck2"></label>
            </div>
          </td>
          <td>SA-00922</td>
          <td>Nova Overseas(RL0212356)</td>
          <td>Indivisual</td>
          <td>Baharain</td>
          <td>Shama Alisshi</td>
          <td>08</td>
          <td>Male</td>
          <td>a day ago</td>
          <td class="p">
            <router-link to="/dashboard/nothiform">
                <img src="../../assets/img/Vector.png" alt="">
  </router-link>
  
            <router-link to="/dashboard/pendinglist">
        <button >Pending</button>
  </router-link>
           
          </td>
         
        </tr>
        <tr>
          <td>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck3">
                <label class="custom-control-label" for="customCheck3"></label>
            </div>
          </td>
          <td>SA-00922</td>
          <td>Nova Overseas(RL0212356)</td>
          <td>Indivisual</td>
          <td>Baharain</td>
          <td>Shama Alisshi</td>
          <td>08</td>
          <td>Male</td>
          <td>a day ago</td>
          <td class="p">
            <router-link to="/dashboard/nothiform">
                <img src="../../assets/img/Vector.png" alt="">
  </router-link>
   
            <router-link to="/dashboard/pendinglist">
        <button >Pending</button>
  </router-link>
           
          </td>
         
        </tr>
        <tr>
          <td>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1"></label>
            </div>
          </td>
          <td>SA-00922</td>
          <td>Nova Overseas(RL0212356)</td>
          <td>Indivisual</td>
          <td>Baharain</td>
          <td>Shama Alisshi</td>
          <td>08</td>
          <td>Male</td>
          <td>a day ago</td>
          <!-- <td class="pending"> -->
            <td class="p">
            <router-link to="/dashboard/nothiform">
                <img src="../../assets/img/Vector.png" alt="">
  </router-link>
 
            <router-link to="/dashboard/pendinglist">
        <button >Pending</button>
  </router-link>
           
          </td>
        
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>

  <!-- <div class="option"> 
              <select class="option" name="format" id="format" v-on:change="changeRoute($event)">
                  <option>Select Application</option>
            <option value="/applications">Single Application</option>
    <option value="/applicationsGroup">Group Application</option>
  </select>
   <p class="list">List:</p>
  </div> -->

  </div>
      </div>
    </div>

</template>

<script>
import OverviewCard from "../../components/OverviewCard.vue"
import OverviewCard1 from "../../components/OverviewCard1.vue"
import OverviewCard2 from "../../components/OverviewCard2.vue"
import breadcrumb from '../../components/breadcrumb.vue';

export default {
  components: {
    OverviewCard,
    OverviewCard1,
    OverviewCard2,
    breadcrumb,

  },
   name: 'App',
  data() {
    return {
      crumbs: ['Pending List'],
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

<style scoped src="../../assets/css/pendingapproval.css">
/* @import '../../assets/css/pendingapproval.css'; */

</style>