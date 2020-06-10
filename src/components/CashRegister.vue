<template>
  <div class="cashRegister">
    Coffee: {{ coffees }}
    <button @click="sellCoffee()">Sell Coffee</button>
    Bagels: {{ bagels }}
    <button @click="sellBagels()">Sell Bagels</button>
    <button @click="sellAll()">Sell All</button>
  </div>
</template>


<script>
export default {
  name: 'cashRegister',
  data() {
    return {}
  },
  computed: {
    coffees() {
      return this.$store.state.coffee
    },
    bagels() {
      return this.$store.state.bagels
    }
  },
  methods: {
    sellCoffee() {
      if (this.coffees > 0) {
        this.$store.state.money += this.coffees;
        this.$store.state.coffee = 0;
      }
    },
    sellBagels() {
      if (this.bagels > 0) {
        this.$store.state.money += this.bagels;
        this.$store.state.bagels = 0;
      }
    }
  },
  components: {}
}
</script>


<style scoped>
</style>