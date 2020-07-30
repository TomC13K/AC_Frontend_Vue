<template>
<div class="containerForm">
  <div class="viewport form">

    <md-toolbar :md-elevation="1">
        <span class="md-title">Pridaj novy olej</span>
    </md-toolbar>

    <md-field>
      <label>Vyrobca Oleja</label>
      <md-input v-model="vyrobcaOlej"></md-input>
      <span class="md-helper-text">Castrol,Helix...</span>
    </md-field>
      
    <md-field>
      <label>Typ Oleja</label>
      <md-input v-model="typOlej"></md-input>
      <span class="md-helper-text">Typ...</span>
    </md-field>

    <md-field>
      <label>Cena za 1L</label>
      <md-input v-model="cenaOlej"></md-input>
      <span class="md-helper-text">Eur</span>
    </md-field>

    <md-field>
      <label>Poznamky</label>
      <md-textarea v-model="poznamkaOlej"></md-textarea>
    </md-field>

    <md-button 
    class="md-raised md-accent"
    @click="addOilToDB">Pridaj</md-button>
  </div>
</div>
</template>

<script>
export default {
    name:"OilAdd",
    data() {
      return{
        vyrobcaOlej:"",
        typOlej:"",
        cenaOlej:"",
        poznamkaOlej:"",
        dataWrite:null,
        SERVER_API : 'http://localhost:3100'

      }
    },
    methods:{
      async addOilToDB(e) {
        //console.log(this.vyrobcaOlej + " " + this.typOlej + " " + this.cenaOlej);
            e.preventDefault();
            if (!this.vyrobcaOlej || !this.typOlej)
                alert("Musis zadat vyrobcu aj typ oleja");
            else {
              if(isNaN(this.cenaOlej))
                alert("Cena musi byt cislo");
              else {
                  try {
                      this.dataWrite = await fetch(`${this.SERVER_API}/oils/`, {
                          method: 'POST',
                          mode: 'cors',
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json;charset=UTF-8',
                              "Access-control-allow-origin": "*"
                          },
                          body: JSON.stringify({
                              vyrobcaOlej: this.vyrobcaOlej,
                              typOlej: this.typOlej,
                              cenaOlej: this.cenaOlej,
                              poznamkaOlej: this.poznamkaOlej
                          })
                      });
                  } catch (err) {
                      console.error(err);
                  }
              }
              this.setValuesEmpty();
            }
          },

          setValuesEmpty() {
            this.vyrobcaOlej = "",
            this.typOlej = "",
            this.cenaOlej = "",
            this.poznamkaOlej=""
          }
       
      }
      
}
</script>

<style scoped>
  .containerForm {
    margin:20px;
    display:flex;
    flex-direction: row;

  }
  .form{
    min-width: 300px;
    align-items: flex-start;
    padding: 10px;
    border: 1px solid lightgray;

  }
</style>