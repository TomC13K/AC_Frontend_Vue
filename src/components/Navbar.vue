<template>
    <nav>
        <div class="nav_container">
            <div class="divGap"></div>
            <div class="divMenu">
                <div class="navLink" ><router-link active-class="activeLink" to="/" exact>Cennik</router-link></div>
                <div class="navLink" ><router-link active-class="activeLink" to="/oleje" >Oleje</router-link></div>
                <div class="navLink" ><router-link active-class="activeLink" to="/prevodovky" >Prevodovky</router-link></div>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    name: 'Navbar'       //this is the name of the component
}
</script>


<style scoped>
.nav_container {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

main {
  margin: auto;
  width: 90vw;
}

.divGap {
  max-width: 300px;
  justify-items: flex-start;
}

.divMenu {
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-items: flex-end;
}

.navLink {
  margin-inline: 5px;
  padding: 10px;
  background-color: #ffffff;
  color: #9399a4;
  font-size: 1.2em;
}

a,
a:visited {
  color: #9399a4;
  padding: 10px;
  text-decoration: none;
}

a:hover {
  color: #ff0046;
  border-bottom: 4px solid #ff0046;
}

.activeLink {
  padding: 10px;
  border: 1px solid #ff0046;
}

</style>