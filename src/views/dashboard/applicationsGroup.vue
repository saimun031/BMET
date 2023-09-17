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

      
    <div class="row mt-2">
        <div class="col-4 link" >
          <router-link class="card-link" to="/dashboard/pendingapproval">
            <OverviewCard 
            ></OverviewCard>
          </router-link>
        </div>
        <a class="breack"></a>
        <div class="col-4 link">
          <router-link class="card-link" to="/dashboard/approvedlist">
            <OverviewCard1
            ></OverviewCard1>
          </router-link>
        </div>
        <a class="breack"></a>
        <div class="col-4">
          <router-link class="card-link" to="/dashboard/rejectedlist">
            <OverviewCard2
            ></OverviewCard2>
          </router-link>
        </div>
      </div>
<br>
      <div class="search mt-4">  
  <!-- <input class="form-control border" type="search" value="search" id="example-search-input"> -->
  <!-- <input class="form-control border" type="" value="Search by Agency, RL, Passport" id="example-search-input"> -->
  
  <div class="search-container">
      <input type="text" placeholder="Search by Agency, RL, Passport" name="search">
      <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
      <a href="#"><img class="search-img" src="../../assets/img/btn.png" alt=""></a>
  </div>
  
  </div>
 <br><br><br>

  <div class="">
    <h3 class="mt-4">Appliction List</h3>
    <div class="option"> 
              <select class="option" name="format" id="format" v-on:change="changeRoute($event)">
                <option>Select Application</option>
            <option value="/applications">Single Application</option>
    <option value="/applicationsGroup">Group Application</option>
  </select>
   <p class="list">List:</p>
  </div>

  <div class="">
    <div class="col-12 overflow">
      <!-- <table class="table table-bordered mt-4"> -->
      <table class="table mt-4">
        <!-- <thead> -->
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
            <th scope="col">Action</th>
          </tr>
        <!-- </thead> -->
        <tbody>
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
            <td class="pending"><button >Pending</button>
            </td>
            <td class="approve1">
              <!-- <router-link to="/dashboard/pendinglist">
          <div
            class="avatar-overflow-link"
            @click="
              $router.push('/dashboard/pendinglist');
            "
          > -->

  <select class="approve">
    <option value="Approve">Select</option>
    <option value="Approve"> Approve</option>
    <option value="pending">Pending</option>
    <option value="Rejected">Rejected</option>
  </select>

          <!-- <button><strong>Approve</strong> </button> -->
          <!-- </div>
        </router-link> -->
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
            <td class="pending1"><button>Approved</button></td>
            <td class="approve1">
              <!-- <router-link to="/dashboard/pendinglist">
          <div
            class="avatar-overflow-link"
            @click="
              $router.push('/dashboard/pendinglist');
            "
          > -->
          <select class="approve">
            <option value="Approve">Select</option>
    <option value="Approve">Approve</option>
    <option value="pending">Pending</option>
    <option value="Rejected">Rejected</option>
  </select>
          <!-- <button><strong>Approve</strong></button> -->
          <!-- </div>
        </router-link> -->
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
            <td class="pending2"><button>Rejected</button></td>
            <td class="approve1">
              <!-- <router-link to="/dashboard/pendinglist">
          <div
            class="avatar-overflow-link"
            @click="
              $router.push('/dashboard/pendinglist');
            "
          > -->
          <select class="approve">
            <option value="Approve">Select</option>
    <option value="Approve">Approve</option>
    <option value="pending">Pending</option>
    <option value="Rejected">Rejected</option>
  </select>
          <!-- <button><strong>Approve</strong></button> -->
          <!-- </div>
        </router-link> -->
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
            <td class="pending"><button>Pending</button></td>
            <td class="approve1">
              <!-- <router-link to="/dashboard/pendinglist">
          <div
            class="avatar-overflow-link"
            @click="
              $router.push('/dashboard/pendinglist');
            "
          > -->
          <select class="approve">
            <option value="Approve">Select</option>
    <option value="Approve">Approve</option>
    <option value="pending">Pending</option>
    <option value="Rejected">Rejected</option>
  </select>
          <!-- <button><strong>Approve</strong></button> -->
          <!-- </div>
        </router-link> -->
      </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
     
  </div>
      </div>
    </div>
 
 
      

  </template>
  
  <script>
  import OverviewCard from "../../components/OverviewCard.vue";
import OverviewCard1 from "../../components/OverviewCard1.vue";
import OverviewCard2 from "../../components/OverviewCard2.vue";
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
      crumbs: ['Dashboard'],
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
  
  <style scoped src="../../assets/css/applications.css">
  .hedder{
    font-size: 30px;
  }
  </style>