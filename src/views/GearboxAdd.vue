<template>
<div class="containerForm">
  <div class="viewport form">

    <md-toolbar :md-elevation="1">
        <span class="md-title">Pridaj prevodovku</span>
    </md-toolbar>

    <md-field>
      <label>Vyrobca Prevodovky</label>
      <md-input v-model="vyrobcaPrevodovka"></md-input>
      <span class="md-helper-text">Vyrobca</span>
    </md-field>
      
    <md-field>
      <label>Typ Prevodovky</label>
      <md-input v-model="typPrevodovka"></md-input>
      <span class="md-helper-text">Typ</span>
    </md-field>

    <md-field>
      <label>Pocet Prevodov</label>
      <md-input v-model="pocetPrevodov"></md-input>
      <span class="md-helper-text">cislo</span>
    </md-field>
<!--                CARS               -->
    <md-field>
      <label>ATF_Fluid</label>
      <md-input v-model="fluidATF"></md-input>
      <span class="md-helper-text">ATF normy cisla</span>
    </md-field>
      
    <md-field>
      <label>Kody</label>
      <md-input v-model="kody"></md-input>
      <span class="md-helper-text">Kody z webu</span>
    </md-field>

    <md-field>
      <label>teplota kontroly</label>
      <md-input v-model="teplotaCheck"></md-input>
      <span class="md-helper-text">v st.Celzia</span>
    </md-field>

     <md-field>
      <label>Olej MIN napln</label>
      <md-input v-model="olejMIN"></md-input>
      <span class="md-helper-text">cislo v L</span>
    </md-field>

     <md-field>
      <label>Olej MAX napln</label>
      <md-input v-model="olejMAX"></md-input>
      <span class="md-helper-text">cislo v L</span>
    </md-field>


 <!--                   NOTES                     -->
    <md-field>
      <label>Poznamky</label>
      <md-textarea v-model="poznamkaPrevodovka"></md-textarea>
    </md-field>

    <md-button 
    class="md-raised md-accent"
    @click="addGearboxToDB">Pridaj</md-button>
  </div>

 <div class="viewport form">

    <md-toolbar :md-elevation="1">
        <span class="md-title">Detajly Auta</span>
    </md-toolbar>

<!--                CARS               -->
    <md-field>
      <label>VyrobcaAuta</label>
      <md-input v-model="vyrobcaAuto"></md-input>
      <span class="md-helper-text">AUDI, BMW, SEAT...</span>
    </md-field>
      
    <md-field>
      <label>Typ Auta</label>
      <md-input v-model="typAuto"></md-input>
      <span class="md-helper-text">A3, A6, Corsa, </span>
    </md-field>

    <md-field>
      <label>Typ Motora</label>
      <md-input v-model="typMotor"></md-input>
      <span class="md-helper-text">1,4 TDI , 3.0 bi-Turbo 400hp</span>
    </md-field>

  </div>


 <div class="viewport form">

    <md-toolbar :md-elevation="1">
        <span class="md-title">DATA z WEBU</span>
    </md-toolbar>

    <md-field>
      <label>z WEBU</label>
      <md-textarea v-model="dataJSON"></md-textarea>
    </md-field>

     <md-button 
    class="md-raised md-accent"
    @click="populateFromJSON">Nacitaj !</md-button>

  </div>




</div>

</template>

<script>
export default {
    name:"GearboxAdd",
    data() {
      return{
        data:"",
        vyrobcaPrevodovka:"",
        typPrevodovka:"",
        pocetPrevodov:"",
        vyrobcaAuto:"",
        typAuto:"",
        typMotor:"",
        fluidATF:"",
        kody:"",
        teplotaCheck:"",
        olejMIN:"",
        olejMAX:"",
        olejObsah:"",
        olejID:"1",
        autaList:{
            vyrobcaAuto:    this.vyrobcaAuto, 
            typAuto:        this.typAuto,
            typMotor:       this.typMotor
        },
        poznamkaPrevodovka:"",
        dataJSON:null,
        SERVER_API : 'http://localhost:3100'

      }
    },
    methods:{
      async addGearboxToDB(e) {
        //console.log(this.vyrobcaOlej + " " + this.typOlej + " " + this.cenaOlej);
            e.preventDefault();
            if (!this.vyrobcaPrevodovka || !this.typPrevodovka)
                alert("Musis zadat vyrobcu aj typ prevodovky");
            else {
                  try {
                      this.dataWrite = await fetch(`${this.SERVER_API}/gearbox/`, {
                          method: 'POST',
                          mode: 'cors',
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json;charset=UTF-8',
                              "Access-control-allow-origin": "*"
                          },
                          body: JSON.stringify({
                                vyrobcaPrevodovka:this.vyrobcaPrevodovka,
                                typPrevodovka:this.typPrevodovka,
                                pocetPrevodov:this.pocetPrevodov,
                                ATF_Fluid:this.fluidATF,
                                kod:this.kody,
                                teplotaCheck:this.teplotaCheck,
                                olejMin:this.olejMIN,
                                olejMax:this.olejMAX,
                                olejID:this.olejID,
                                autaList:{
                                    vyrobcaAuto:    this.vyrobcaAuto, 
                                    modelAuto:      this.typAuto,
                                    motorAuto:      this.typMotor
                                },
                                prevodovkaPoznamky:this.poznamkaPrevodovka,
                            })
                        });
                    } catch (err) {
                      console.error(err);
                  
                 }
                this.setValuesEmpty();
             }
            
          },

          setValuesEmpty() {
            this.vyrobcaPrevodovka="",
            this.typPrevodovka="",
            this.pocetPrevodov="",
            this.vyrobcaAuto="",
            this.typAuto="",
            this.typMotor="",
            this.fluidATF="",
            this.kody="",
            this.teplotaCheck="",
            this.olejMIN="",
            this.olejMAX="",
            this.poznamkaPrevodovka="",
            this.olejID = ""
          },

          populateFromJSON(){
            if(this.dataJSON) {
              this.data=JSON.parse(this.dataJSON);

              this.vyrobcaPrevodovka = this.data.gearVyrobca;
              this.typPrevodovka=this.data.gearTyp;
              this.pocetPrevodov = this.data.gearPocetPrevodov;
              this.vyrobcaAuto= this.data.autoVyrobca;
              this.typAuto=this.data.autoModel;
              this.typMotor=this.data.autoTyp;
              this.poznamkaPrevodovka= "Obsah Oleja = " + this.data.olejLitrov + " L";
              this.teplotaCheck= this.data.teplota;
              // this.kody.push(this.createArrayKody(this.data.OEM_kody));
              this.kody = this.data.OEM_kody;
              this.dataJSON=null;
            } else
               alert("Skopiruj Data z Chrome Extensnu");
              
          },
          createArrayKody(string) {
            if(string.includes(','))
               return string.split(',').trim();
               else
                return string;
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
    padding: 20px;
    border: 1px solid lightgray;

  }
</style>