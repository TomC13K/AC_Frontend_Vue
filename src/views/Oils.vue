<template>
<div>
    <h1>Oleje</h1>
    <OilAdd/>
    <OilList :amount="this.jsonResponse.length" />
        <div class="oilListContainer ">

            <OilCard 
            v-for="card in jsonResponse"
            :key="card._id"
            :olejID="card._id"
            :olejVyrobca="card.vyrobcaOlej"
            :olejTyp="card.typOlej"
            :olejCena="card.cenaOlej"
            :olejPoznamka="card.poznamkaOlej"
            />

        </div>
    </div>
</template>

<script>

import OilAdd from "./OilAdd.vue";
import OilList from "./OilList.vue";
import OilCard from "@/components/OilCard.vue";

export default {
  name: 'Oils',
  data() {
      return{
        response:null,
        jsonResponse:null,
        poznamkaOlej:"",
        dataWrite:null,
        SERVER_API : 'http://localhost:3100'
      }
    },    
  components:{
    OilAdd,
    OilList,
    OilCard
  },
   methods :{
    async readList() {
            try {
                 this.response = await fetch(`${this.SERVER_API}/oils`, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                this.jsonResponse = await this.response.json(null);

            } catch (err) {
                console.error(err);
            }
        }
  },
  updated() {
    this.readList();
  },
  mounted() {
    this.readList();
  }       
}
</script>

<style scoped>
  .oilListContainer {
    padding:10px;
    display:flex;
    flex-direction: row;
    align-content: space-around;
    overflow: auto;
    white-space: nowrap;
  } 

</style>