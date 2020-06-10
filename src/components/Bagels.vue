<template>
  <div class="bagel card col-md-3 p-1 mr-1">
    <img src="../assets/img/bagel-xl.png" alt="Bagels" class="card-img-top img-fluid" />
    <div class="card-body">
      <h6 class="card-title">Price: ${{ bagels.price }}</h6>
      <h5 class="card-title">Bagels in Stock: {{ bagels.qty }}</h5>
      <h6 class="card-title mb-0" v-if="bagels.automated">Manager Automating</h6>
      <div class="mt-0 mb-2 small" v-if="!bagels.automated">Manager Cost: ${{ bagels.salary }}</div>
      <button class="btn btn-sm btn-secondary mr-1" @click="makeBagel()">Make Bagel</button>
      <button class="btn btn-sm btn-danger" @click="hireBagelManager()">Hire Manager</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'bagel',
  data() {
    return {}
  },
  computed: {
    bagels() {
      return this.$store.state.bagels
    },
    money() {
      return this.$store.state.money;
    }
  },
  methods: {
    makeBagel() {
      this.$store.commit("addBagel");
    },
    hireBagelManager() {
      if (this.money >= this.bagels.salary) {
        this.$store.state.money -= this.bagels.salary;
        this.$store.state.bagels.automated = true;
        setInterval(() => {
          this.$store.commit("addBagel")
        }, this.bagels.autoInterval)
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