<template>
<div>
    <h1>Zoznam Olejov - {{this.amount}} </h1>
    <!-- <OilCard/>     -->
    </div>
</template>

// <script>
// import OilCard from "@/components/OilCard.vue";

export default {
  name: 'OilList', 
  props:['amount'],  
  //  components:{
  //   OilCard
  // }   
}
</script>