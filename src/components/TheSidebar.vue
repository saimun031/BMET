<template>
<!-- <div class="open">
       <span class="open" style="font-size: 30px; cursor: pointer;" @click="isActive=!isActive" 
        >&#9776; </span>
        </div> -->
    <!-- <div class="sidebar sidenav" id="mySidenav" :class="{openNavClass: isActive}"> -->
        <!-- <a class="closebtn" @click="isActive=!isActive" 
        >&times;</a
      > -->
      <div class="sidebar-top">
        <a href="#" class="logo"><img src="../assets/img/image11.png" alt=""></a>
        <h4 class="text">Bureau of Manpower , <br>Employment and Training (BMET)</h4>
      </div>
      <div class="sidebar-bottom">
      >
          <div class="sidebar-nav pt-5">
            
            <ul>
                <li><router-link to="/dashboard/applications"><img src="../../src/assets/img/Frame5.png" alt=""> &nbsp;Dashboard</router-link>
            <a :style="getStyleObject" @click="changeStyles"
            @mouseover="applyHoverStyles"
      @mouseout="resetStyles"
       href="#" v-on:click="showMessage = !showMessage"><img src="../../src/assets/img/Frame5.png" alt=""> &nbsp;Applications<img class="dp" src="../../src/assets/img/dp.png" alt=""></a>
            <ul>
                <router-link to="/dashboard/pendingapproval" v-if="showMessage"><img src="../../src/assets/img/Frame3.png" alt="">&nbsp;Pending List</router-link>
          <router-link to="/dashboard/approvedlist" v-if="showMessage"><img src="../../src/assets/img/Frame3.png" alt="">&nbsp;Approved List</router-link>
          <router-link to="/dashboard/rejectedlist" v-if="showMessage"><img src="../../src/assets/img/Frame3.png" alt="">&nbsp; Rejected List </router-link>
            </ul>
        </li>    
          <router-link to="/dashboard/employees"><img src="../../src/assets/img/Frame2.png" alt="">&nbsp;Employees</router-link>
         <router-link to="/dashboard/agencies"><img class="img" src="../../src/assets/img/Frame4.png" alt="">&nbsp;Agencies</router-link>
          
        </ul>
        <!-- <p v-if="showMessage">messaggio 1</p>
  <button v-on:click="showMessage = !showMessage">toggle messaggio 1</button> -->
          </div>
          <br>
  <hr>
      </div>
    <!-- </div> -->
  </template>
  
  <script> 

export default {

         data() {
    return {
       //isActive: true,
       isActive: true,
       showMessage: false,
      styles: {
        color: '#6e6963',
        fontSize: '16px'
      },
      defaultStyles: {
        color: '#6e6963',
        borderLeft: '2px solid #032497',
        fontSize: '16px'
      },
      hoverStyles: {
        color: '#032497',
       borderLeft: '4px solid #032497',
        fontSize: '16px'
      }
    };
  },
  computed: {
    getStyleObject() {
      return this.styles;
    }
  },
  methods:{
    changeStyles() {
      this.styles.color = '#032497'; 
      this.styles.borderLeft = '4px solid #032497'; 
      this.styles.fontSize = '16px';
    },
     applyHoverStyles() {
      // Apply hover styles
      Object.assign(this.styles, this.hoverStyles);
    },
    resetStyles() {
      // Reset styles when not hovering
      if (!this.isClicked) {
        Object.assign(this.styles, this.defaultStyles);
      }
    }
  },
 
  computed: {
    isClicked() {
      // Check if the styles have been clicked
      return (
        this.styles.color !== this.defaultStyles.color ||
        this.styles.borderLeft !== this.defaultStyles.borderLeft ||
        this.styles.fontSize !== this.defaultStyles.fontSize
      );
    }
  }
};
  </script>
  
  <style scoped>
  *{
    font-family: Gilroy-Bold;
  }
  .logo img{
    width: 140px;
    margin-left: 10%;
  }
  .text{
    text-align: center;
    font-size: 14px;
    line-height: 16.41px;
    font-style: Gilroy-Bold;
    color: #032497;
    margin-top: 5%;
    margin-right: 14%;
  }
  .sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--brand-color);
    color: #f0faf5;
  }
  
  .sidebar-top {
    padding: 11px 22px;
    color: #c39f9f;
    text-shadow: 0 1px 0 #040404;
  }
  
  .sidebar-bottom {
    flex: 1;
    /* overflow-y: auto; */
    margin-top: -25px;
  }
  
  .sidebar-nav a,
  .sidebar-nav a:visited {
    display: block;
    padding: 9px 5px;
    text-decoration: none;
    border-bottom: 1px solid var(--brand-color);
    color: #6e6963;
    border-left: 4px solid var(--brand-color);
    text-shadow: none;
  }
  .sidebar-nav a:hover,
  .sidebar-nav a.router-link-active {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.09);
    border-left: 4px solid #032497;
    color: #032497;
  }
  a.p-active{
    border-left: 4px solid #032497;
    color: #032497;
  }
  .brand {
    color: #ffab81;
    font-size: 17px;
  }
  .img{
    width: 22px;
    height: 24;
  }
  .dp{
    width:20px;
    margin-left: 30%;
  }




.open{
  /*margin-top: 180%;*/
  margin-top: 25%;
  margin-left: 100%;
}
  .sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width:0
  
}
  .openNavClass {
   width:250px;
  }
  .pushMainContent {
    margin-left:250px;
  }

.sidenav a {

  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #032497;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
  
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}

}
@media only screen and (max-width: 650px) {
  .open{
    margin-top: 150%;
     margin-left: 50%;
  }
  
  }
    @media only screen and (min-width: 700px) and (max-width: 950px) {
  .open{
    margin-top: 170%;
     margin-left: 50%;
  }
  }
    @media only screen and (min-width: 550px) and (max-width: 1230px) {
.open[data-v-46e9fe5b] {
    /* margin-top: 180%; */
    margin-top: 200%;
    margin-left: 60%;
}
  }
  </style>