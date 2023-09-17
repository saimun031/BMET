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
      <div class="search mt-4">  
  <!-- <input class="form-control border" type="search" value="search" id="example-search-input"> -->
  <!-- <input class="form-control border" type="" value="Search by Agency, RL, Passport" id="example-search-input"> -->
  
  <div class="search-container">
      <input type="text" placeholder="Search by Agency, RL, Passport" name="search">
      <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
      <a href="#"><img class="search-img" src="../../assets/img/btn.png" alt=""></a>
  </div>
  
  </div>
 <br><br>

  <!-- <div class="container"> -->
<div class="">

  <div class="">
    <div class="col-12 overflow">
      <!-- <table class="table table-bordered mt-4"> -->
      <table class="table mt-4">
        <thead class="cntr"> 
          <tr>
            <th>Sl.</th>
            <th>RL No.</th>
            <th>Agency Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Contact Person Name</th>
            <th>Signature</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>0212356</td>
            <td>M/S Nova Overseas</td>
            <td>12/b, Jamuna Tower,<br> Banani, Dhaka 1207</td>
            <td>01790901099 </td>
            <td>Md Kamrul Hasan</td>
            <td><img src="../../assets/img/image66.png"></td>
            <td >
              <button class="approvr1" @click.prevent="showModalOne = !showModalOne">Approv</button>
            <button class="delete">Delete</button>
            </td>
          </tr>
           <tr>
            <td>01</td>
            <td>0212356</td>
            <td>M/S Nova Overseas</td>
            <td>12/b, Jamuna Tower,<br> Banani, Dhaka 1207</td>
            <td>01790901099 </td>
            <td>Md Kamrul Hasan</td>
            <td><img src="../../assets/img/image66.png"></td>
            <td ><button v-b-modal.modal-1 class="approvr1" @click.prevent="showModalOne = !showModalOne">Approv</button>
            <button class="delete">Delete</button>
            </td>
          </tr>
           <tr>
            <td>01</td>
            <td>0212356</td>
            <td>M/S Nova Overseas</td>
            <td>12/b, Jamuna Tower,<br> Banani, Dhaka 1207</td>
            <td>01790901099 </td>
            <td>Md Kamrul Hasan</td>
            <td><img src="../../assets/img/image66.png"></td>
            <td ><button class="approvr1" @click.prevent="showModalOne = !showModalOne">Approv</button>
            <button class="delete">Delete</button>
            </td>
          </tr>
           <tr>
            <td>01</td>
            <td>0212356</td>
            <td>M/S Nova Overseas</td>
            <td>12/b, Jamuna Tower,<br> Banani, Dhaka 1207</td>
            <td>01790901099 </td>
            <td>Md Kamrul Hasan</td>
            <td><img src="../../assets/img/image66.png"></td>
            <td ><button class="approvr1" @click.prevent="showModalOne = !showModalOne">Approv</button>
            <button class="delete">Delete</button>
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
 
  <div class="customModal" v-if="showModalOne">
    <div class="customModalTitle">
      <button class="close" @click.prevent="showModalOne = !showModalOne">&times;</button>
    </div>

    <div class="customModalBody">
      <p>Are you confirmed to lock this Agency? If you do, <br>the agency will no longer access to login until you <br>unlock.</p>
    </div>
    <!-- <br><br> -->
    <div class="customModalFooter">
      <button class="btn btn-primary btnp" @click.prevent="showModalOne = !showModalOne">Yes</button>
      <button class="btn btn-danger btnp1" @click.prevent="showModalOne = !showModalOne">No</button>
    </div>
  </div>
      

  </template>
  
  <script>
import breadcrumb from '../../components/breadcrumb.vue';

  export default {
    components: {

      breadcrumb,

    },
    name: 'App',
  data() {
    return {
      crumbs: ['Agensies'],
      text: '',
    showModalOne: false,
    showModalTwo: false
    };
   
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },

  },
   
  };
  </script>
  
  <style scoped src="../../assets/css/applications.css">
  .hedder{
    font-size: 30px;
  }
  </style>