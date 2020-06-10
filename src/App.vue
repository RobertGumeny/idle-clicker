<template>
  <div id="app">
    <h2>Bob's Bagels</h2>
    <h4>${{ money }}</h4>
    <Coffee />
    <Bagels />
    <CashRegister />
    <Automation />
  </div>
</template>

<script>
import Coffee from './components/Coffee'
import Bagels from './components/Bagels'
import CashRegister from './components/CashRegister'
import Automation from './components/Automation'
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
    CashRegister,
    Automation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
