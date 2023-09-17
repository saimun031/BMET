<template>
  <div class="cards mt-4">
  <div class="grid-container">
<form >
  <label for="Country">Country : </label>
  <select class="ap1">
    <option value="Countries"> All Countries</option>
    <option value="Country 1"> Country 1</option>
    <option value="Country 2"> Country 2</option>
    <option value="Country 3"> Country 3</option>
  </select>
</form>
<form >
  <label for="Gender">Gender : </label>
  <select class="ap1">
    <option value="Male"> Male</option>
    <option value="Female"> Female</option>
    <option value="Others"> Others</option>
  </select>
</form>
<form >
  <label class="ap" for="Application" > Type : </label>
  <select class="ap">
    <option value="Group"> Group</option>
    <option value="Group 1"> Group 1</option>
    <option value="Group 2"> Group 2</option>
    <option value="Group 3"> Group 3</option>
  </select>
</form>

<div class="search-container">
      <input type="text" placeholder="Type your search" name="search">
      <a href="#"><img class="search-img" src="../assets/img/btn.png" alt=""></a>
  </div>

</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .cards{
    padding: 30px;
    border-radius: 5px;
    /* background-color: rgb(255, 255, 255); */
    
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 0px;
  }
  label{
font-family: Gilroy-Medium;
font-size: 16px;
line-height: 19px;
color: #26323866;
  }
select{
    margin-left: 6%;
    /* width: auto; */
height: 50px;
border-radius: 8px;
border: none;
padding: 15px;
/* padding-right: 10px; */

}
input{
    border: 1px solid white;
    border-radius: 7px;
    width: 200px;
    height: 50px;
    margin-left: 35%;
    }
    
    input[type="text"]:focus {
    outline: none;
    box-shadow: 0 0 0 4px #032497;
    }
    .search-img{
    width: 86px;
    height: 84px;
    margin-top: -21%;
    margin-left: 75%;
    }

@media only screen and (max-width: 650px) {
         .overflow{
     overflow-x:auto;
     }
    .cards {
     padding: 0px; 
  
}
select{
    height: auto;
    width:90px;
    font-size: 10px;
    padding: 12px;
}
label{
  margin-left: 17px;
  font-size:12px;
}
/* .ap{
  margin-top:-10%;
} */
.ap1{
  margin-top:16%;
}
input{
  margin-top:50%;
  margin-left: -120%;
}
.search-img {

    margin-top: 3%;
    margin-left: -35%;
}
.listhead{
    margin-left: 0%;
}
.bar{
  margin-top:250%;
   margin-left:-200%;
}
.bar1{
  margin-top:700%;
   margin-left:-350%;
}
.bar2{
  margin-top:30%;
   margin-left:-200%;
}
.bar3{
  margin-top:400%;
   margin-left:-350%;
}
  }
@media only screen and (min-width: 550px) and (max-width: 1230px)
{
  input{
    margin-left: 15%;
    margin-top: 10%;
}
.search-img {
    margin-top: -31%;
    margin-left: 74%;
}
}
  @media only screen and (min-width: 1900px){
    .search-img[data-v-5decb2c7] {
    width: 86px;
    height: 84px;
    margin-top: -15%;
    margin-left: 67%;
}
.cards{
  /* margin-left: 6%; */
  text-align: center;
}
  }
</style>