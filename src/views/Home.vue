<template>
  <div class="home">
    <h1>HOOME</h1>
    <md-autocomplete v-model="vybratPrevodovku" :md-options="prevodovky">
      <label>Prevodovka</label>
    </md-autocomplete>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
   data: () => ({
      vybratPrevodovku: null,
      prevodovky:["Ab-1", "Ab-fd-4", "A4-f5-tt","B5555","B4444"]
   })
};
</script>
