<template>
  <div class="coffee card col-md-3 p-1 mr-1">
    <img src="../assets/img/coffee-xl.png" alt class="card-img-top img-fluid" />
    <div class="card-body">
      <h6 class="card-title">Price: ${{ coffees.price }}</h6>
      <h5 class="card-title">Coffee in Stock: {{ coffees.qty }}</h5>
      <h6 class="card-title mb-0" v-if="coffees.automated">Manager Automating</h6>
      <div class="mt-0 mb-2 small" v-if="!coffees.automated">Manager Cost: ${{ coffees.salary }}</div>
      <button class="btn btn-sm btn-secondary mr-1" @click="pourCoffee()">Pour Coffee</button>
      <button
        class="btn btn-sm btn-primary"
        @click="hireCoffeeManager()"
        v-if="!coffees.automated"
      >Hire Manager</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'coffee',
  data() {
    return {}
  },
  computed: {
    coffees() {
      return this.$store.state.coffee;
    },
    money() {
      return this.$store.state.money;
    }
  },
  methods: {
    pourCoffee() {
      this.$store.commit("addCoffee")
    },
    hireCoffeeManager() {
      if (this.money >= this.coffees.salary) {
        this.$store.state.money -= this.coffees.salary;
        this.$store.state.coffee.automated = true;
        let cInterval = setInterval(() => {
          this.$store.commit("addCoffee")
        }, this.coffees.autoInterval)
      }
      if (!this.$store.state.coffee.automated) {
        clearInterval(cInterval);
      }
    }
  },
  components: {}
}
</script>


<style scoped>
.card-img-top {
  width: 50%;
  margin: 25px auto;
}
</style>