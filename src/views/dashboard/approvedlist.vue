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
<layoutheader/>

<!-- <div class="container"> -->
<div class="">


  <h3 class="mt-4">Approved List</h3>
      
<div class="row">
  <div class="col-14 overflow">
    <table class="table mt-4">
        <tbody>
        <tr>
          <th scope="col">
              <input type="checkbox" class="custom-control-input" id="customCheck3">
          </th>
          <th scope="col">Form No.</th>
          <th scope="col">Clearance Type</th>
          <th scope="col">Applied Country</th>
          <th scope="col">Employer Name</th>
          <th scope="col">No. of Candidates</th>
          <th scope="col">Gender</th>
          <th scope="col">Action</th>
        </tr>
    
        <tr>
          <td>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1"></label>
            </div>
          </td>
          <td>SA-00922</td>
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
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
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
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
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
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
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
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
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
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
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
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
          <td>Signle</td>
          <td>Saudi Arabia</td>
          <td>Shama Alisshi</td>
          <td>60</td>
          <td>Female</td>
          <td class="pending">
          <!-- <router-link to="/dashboard/pendinglist"> -->
          <router-link to="#">
                 <button >View</button>
  </router-link>      
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
import OverviewCard from "../../components/OverviewCard.vue"
import OverviewCard1 from "../../components/OverviewCard1.vue"
import OverviewCard2 from "../../components/OverviewCard2.vue"
import breadcrumb from '../../components/breadcrumb.vue';
import Layoutheader from '@/components/layoutheader.vue';

export default {
  components: {
    OverviewCard,
    OverviewCard1,
    OverviewCard2,
    breadcrumb,
    Layoutheader,

  },
   name: 'App',
  data() {
    return {
      crumbs: ['Applications List'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
 
};
</script>

<style scoped src="../../assets/css/approvedlist.css">
/* @import '../../assets/css/pendingapproval.css'; */

</style>