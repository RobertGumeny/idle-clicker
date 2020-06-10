<template>
  <div id="app">
    <div class="main container-fluid">
      <div class="row justify-content-center">
        <h2>Bob's Bagels</h2>
      </div>
      <div class="row justify-content-center">
        <h5>Total Cash: ${{ money }}</h5>
      </div>
      <CashRegister />
      <div class="row justify-content-center">
        <Coffee />
        <Bagels />
        <Pancakes />
      </div>
    </div>
    <div class="footer">
      Icons made by
      <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import Coffee from './components/Coffee'
import Bagels from './components/Bagels'
import Pancakes from './components/Pancakes'
import CashRegister from './components/CashRegister'
export default {
  name: 'App',
  computed: {
    money() {
      return this.$store.state.money
    }
  },
  components: {
    Coffee,
    Bagels,
    Pancakes,
    CashRegister,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fffaf1;
}
.main {
  height: 95vh;
}
</style>
