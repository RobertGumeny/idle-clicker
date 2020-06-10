<template>
  <div class="cashRegister">
    <div class="row justify-content-center align-items-center mt-4">
      <h3>Cash Register</h3>
      <div class="ml-2 mb-1">
        <button class="btn btn-sm btn-secondary" @click="sellAll()">Sell All</button>
      </div>
    </div>
    <div class="row justify-content-center my-3">
      <div class="col-md-2 d-flex flex-column align-items-center justify-content-center">
        <div>
          <img src="../assets/img/coffee-sm.png" class="img-fluid" />
          <span class="ml-2">{{ coffees.qty }}</span>
        </div>
        <button class="btn btn-sm btn-secondary d-block mt-2" @click="sellCoffee()">Sell Coffee</button>
      </div>
      <div class="col-md-2 d-flex flex-column align-items-center justify-content-center">
        <div>
          <img src="../assets/img/bagel-sm.png" class="img-fluid" />
          <span class="ml-2">{{ bagels.qty }}</span>
        </div>
        <button class="btn btn-sm btn-secondary d-block mt-2" @click="sellBagels()">Sell Bagels</button>
      </div>
      <div class="col-md-2 d-flex flex-column align-items-center justify-content-center">
        <div>
          <img src="../assets/img/pancakes-sm.png" class="img-fluid" />
          <span class="ml-2">{{ pancakes.qty }}</span>
        </div>
        <button class="btn btn-sm btn-secondary d-block mt-2" @click="sellPancakes()">Sell Pancakes</button>
      </div>
    </div>
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
    },
    pancakes() {
      return this.$store.state.pancakes
    }
  },
  methods: {
    sellCoffee() {
      if (this.coffees.qty > 0) {
        this.$store.state.money += this.coffees.qty * this.coffees.price;
        this.$store.state.coffee.qty = 0;
      }
    },
    sellBagels() {
      if (this.bagels.qty > 0) {
        this.$store.state.money += this.bagels.qty * this.bagels.price;
        this.$store.state.bagels.qty = 0;
      }
    },
    sellPancakes() {
      if (this.pancakes.qty > 0) {
        this.$store.state.money += this.pancakes.qty * this.pancakes.price;
        this.$store.state.pancakes.qty = 0;
      }
    },
    sellAll() {
      this.sellCoffee()
      this.sellBagels()
      this.sellPancakes()
    }
  },
  components: {}
}
</script>


<style scoped>
</style>