<template>
  <div class="name-head-right">
    <p> <strong>Agency Name</strong>  <span class="s1">:&nbsp; M/S Nova Overseas</span></p>
    <p><strong>Application Type</strong>  <span class="s2">:&nbsp; Single Clearance Application</span></p>
    <p><strong>Visa Type</strong>  <span class="s3">:&nbsp; Working</span></p>
  </div>
  
  <div class="name-head-left">
    <p> <strong>Apply For</strong>  <span class="s4">:&nbsp; Saudi Arab</span></p>
    <p><strong>Visa Application</strong>  <span class="s5">:&nbsp; 37</span></p>
    <p><strong>Gender</strong>  <span class="s6">:&nbsp; Male</span></p>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
*{
    font-family: Poppins;
  }
  .name-head-right{
    float: left;
    font-size: 18px;
  }
  .name-head-left{
    font-size: 18px;
    float: right;
    
  }
  .s1{
    padding: 0px 26px;
  }
  .s3{
    padding: 0px 58px;
  }
  .s4{
    padding: 0px 47px;
  }
  .s6{
    padding: 0px 70px;
  }
  @media only screen and (max-width: 650px) {

.name-head-left {
    font-size: 18px;
    float: none;
}
}
@media only screen and (min-width: 550px) and (max-width: 1230px) {
.name-head-right{
    float: left;
    font-size: 15px;
}
  }
</style>