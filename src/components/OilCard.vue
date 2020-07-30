<template>
<div>
   <md-card class="cardClass" md-with-hover >
      <md-ripple class="container">
        <md-card-header>
          <div class="md-title">{{this.olejVyrobca}}</div>
          <div class="md-subhead">{{this.olejTyp}}</div>
           <div class="md-subhead">{{this.olejCena}}</div>
        </md-card-header>

        <md-card-content>
         {{this.olejPoznamka}}
        </md-card-content>

        <md-card-actions>
          <md-button class="md-raised">Editovat</md-button>
          <md-button 
          class="md-raised md-accent"
          @click="deleteEntry"
          >Vymazat !</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    </div>
</template>

<script>


export default {
  name: 'OilCard',
  props:['olejVyrobca', 'olejTyp','olejCena','olejPoznamka','olejID'],
  data() {
      return{
        id:this.olejID,
        deleteOil:null,
        SERVER_API : 'http://localhost:3100'
      }
  },
  methods:{
    async deleteEntry() {
       this.deleteOil = await fetch(`${this.SERVER_API}/oils/${this.id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-control-allow-origin": "*"
            }
        });

    }
  }
 
}
</script>

<style scoped>
  .cardClass {
    max-width: 300px;
    margin:10px;
  }

  .container {
    display:flex;
    flex-direction: column;
    align-content: space-around;
  }
</style>