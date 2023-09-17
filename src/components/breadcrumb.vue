<template>
  
       <nav>
    <ol class="breadcrumb">
      <li
        v-for="(crumb, ci) in crumbs"
        :key="ci"
        class="breadcrumb align-items-center"
      >
        <h3 class="breadcrumb" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
          {{ crumb }}
        </h3>
      </li>
    </ol>
  </nav>


</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
    methods: {
isLast(index) {
      return index === this.crumbs.length - 1;
    },
    selected(crumb) {
      this.$emit('selected', crumb);
    },
        
    },
    
}
</script>

<style scoped>
.breadcrumb {
 font-size: 32px;
line-height: 37.5px;
 padding-left: 11px;
 color: #23283BCC;
 font-style: Gilroy-Bold;
 font-family: Gilroy-Bold;
}
 @media only screen and (max-width: 650px) {
  .breadcrumb{
    font-size: 18px;
    margin-top: -2.5%;
    margin-left: 0%;
  }
 }
@media only screen and (min-width: 550px) and (max-width: 1230px) {

   .breadcrumb{
    font-size: 23px;
   
  }
}

</style>