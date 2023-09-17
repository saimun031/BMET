<template>
    <div class="header-right">
  <h3><breadcrumb/></h3>
</div>

<div class="header-left">
    <div class="hover-text"> 
    <img  class="img" src="../assets/img/Maskgroup.png" alt=""> 

  <span class="tooltip-text" id="left">
    <router-link to="/"  @click="logout">
          <div class="mb-2" id="log">Log out</div>
        </router-link>
        
        <router-link to="/dashboard/settings">
          <div
            class="mt-2"
            @click="
              $router.push('/dashboard/settings');
            "
          >
            Settings 
          </div>
        </router-link>
        </span>

</div>
<p class="texts">Hello Superadmin<br><strong> Director, BMET</strong></p>
</div>

</template>

<script>

import breadcrumb from './breadcrumb.vue';
export default {
  components: {
      breadcrumb,

    },
    
}
</script>

<style scoped>
*{
  font-family: Gilroy-Bold;
}
.header-right{
    padding: 55px 50px;
    color: rgb(90, 90, 90);
    
}
.header-left h3{
  font-size:20px;
}
.header-left{
    float:right;
     margin-top: -1.6%;
   margin-left: 78%;
 
}
.texts{
    color: rgb(65, 65, 65);
    padding: 27px;
    margin-left: -55%;
    margin-top: -72%;
}
.tooltip-text router-link{
  text-decoration: none; 
  text-decoration-line: none;
}
.tooltip-text {
  text-decoration-line: none;
  text-decoration: none;
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 200px;
  color: black;
  font-size: 17px;
  background-color: #f5f8fa;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
}

.hover-text:hover .tooltip-text {
  visibility: visible;
}

#left {
  top: 65px;
  right: -50%;
}

#right {
  top: 65px;
  left: -60%;
}

.hover-text {
  position: relative;
  display: inline-block;
  margin: 40px;
  font-family: Arial;
  text-align: center;
}
.hover-text .img{
  width:60px;
float: right;
   margin-right: -50%;
   margin-top:-10%;
}
    @media only screen and (max-width: 650px) {
      .header-left{
    float:right;
     margin-top: -5%;
   margin-left: 42%;
 
}
.texts{

    margin-left: -87%;
    margin-top: -85%;
}
.hover-text .img[data-v-9a9f6144] {
margin-right: 28%;
margin-top:3%;
}
  }
    @media only screen and (min-width: 700px) and (max-width: 950px) {
.texts{
    color: rgb(65, 65, 65);
    padding: 27px;
    margin-left: -120%;
    margin-top: -85%;
}
.hover-text .img{
    margin-right: 80%;
}
#left{
    top: 65px;
    right: 40%;
}
  }
   @media only screen and (max-width: 1980px) and (min-width: 1700px){

.hover-text .img{
    /* float: right; */
    margin-right: -195%;
}
.texts {
    margin-left: 0%;
    margin-top: -74%;
}
#left {
    top: 65px;
    right: -250%;
}
  }
      @media only screen and (min-width: 2010px){

.hover-text .img{
   
    margin-right: -260%;
}
.texts {
    margin-left: 0%;
    margin-top: -72%;
}
#left {
    top: 70px;
    right: -260%;
}
  }
  @media only screen and (min-width: 550px) and (max-width: 1230px) {
    .hover-text .img{
    margin-top: -20%;
    margin-right: 155%;
}
.texts {
    margin-left: -145%;
    margin-top: -88%;
}
#left {
    top: 65px;
    right: 70%;
}
  }
</style>