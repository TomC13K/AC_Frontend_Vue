<template>
  <div>
    <div class="home">
      <h1>HOOME</h1>
      <md-autocomplete v-model="vybratPrevodovku" :md-options="prevodovky">
        <label>Prevodovka</label>
      </md-autocomplete>
    </div>
    <div class="dataContainer">
      <div class="gearboxInfoContainer"></div>
      <div class="oilInfoContainer">
        <div class="oilItems oilList">
        </div>
        <div class="oilItems oilPrices">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
    vybratPrevodovku: null,
    prevodovky: ['Ab-1', 'Ab-fd-4', 'A4-f5-tt', 'B5555', 'B4444'],
  }),
};
</script>

<style scoped>
.dataContainer {
  display: flex;
  flex-direction: column;
  margin: 5px;
  border: 1px solid red;
}
.gearboxInfoContainer {
  height: 250px;
  margin:5px;
  border:1px solid green;

}
.oilInfoContainer {
  height: 500px;
  margin:5px;
  border: 1px solid blue;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  /* justify-items: center; */
  
}
.oilItems {
  width:300px;
  margin:10px;
  border: 1px solid orange;
  
}
.oilPrices{
  border: 1px solid orange;
}
</style>
