<template>
  <div class="cards mt-4">
  <div class="grid-container">
  <div class="cards1"><img src="../assets/img/Group4.png" alt=""><p></p></div>
  <div class="cards1"><img src="../assets/img/Group4.png" alt=""><p>নথি ফর্ম</p></div>
  <div class="cards1"><img src="../assets/img/Group4.png" alt=""><p>আবেদন ফর্ম</p></div>  
  <div class="cards1"><img src="../assets/img/Group4.png" alt=""><p>অঙ্গীকারনামা</p></div>
  <div class="cards2"><img src="../assets/img/Group4.png" alt=""><p>পুট আপ শীট ও<br> ডাটা এন্ট্রি</p></div>
  <div class="cards2"><img src="../assets/img/Group4.png" alt=""><p>রেজিস্ট্রেশন ক্লিয়ারেন্স ফর্ম</p></div>
</div>
<!-- <img class="line-dot" src="../assets/img/Group5.png" alt=""> -->
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
  background-color: #f8f1f1;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 10px;
}

.grid-container div {
  Width:155px;
Height:56px;
  background-color: #032497;
  color: white;
  border-radius: 4px;
  /* text-align: center; */
  padding: 10px;
  font-size: 15px;
}
.grid-container .cards1 p{
text-align: justify;
margin-top: -15%;
margin-left: 20%;
}
.grid-container .cards2 p{
text-align: justify;
margin-top: -20%;
margin-left: 20%;
}
.grid-container .cards1 img{
margin-top: 6%;
}
.cards2 img{
  margin-top: 6%;
}
</style>