<template>
  <div class="bagel card col-md-3 p-1 mr-1">
    <img src="../assets/img/bagel-xl.png" alt="Bagels" class="card-img-top img-fluid" />
    <div class="card-body">
      <h6 class="card-title">Price: ${{ bagels.price }}</h6>
      <h5 class="card-title">Bagels in Stock: {{ bagels.qty }}</h5>
      <div v-if="!bagels.unlocked">
        <div class="mb-2">
          Unlock Price:
          <span class="text-success">${{ bagels.unlockPrice }}</span>
        </div>
        <button class="btn btn-sm btn-success" @click="unlockBagels()">Unlock</button>
      </div>
      <div v-if="bagels.unlocked">
        <h6 class="card-title mb-0" v-if="bagels.automated">Manager Automating</h6>
        <div class="mt-0 mb-2 small" v-if="!bagels.automated">Manager Cost: ${{ bagels.salary }}</div>
        <button class="btn btn-sm btn-secondary mr-1" @click="makeBagel()">Make Bagel</button>
        <button
          class="btn btn-sm btn-primary"
          @click="hireBagelManager()"
          v-if="!bagels.automated"
        >Hire Manager</button>
      </div>
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
    unlockBagels() {
      if (this.money >= this.bagels.unlockPrice) {
        this.$store.state.money -= this.bagels.unlockPrice
        this.bagels.unlocked = true;
      }
    },
    hireBagelManager() {
      if (this.money >= this.bagels.salary) {
        this.$store.state.money -= this.bagels.salary;
        this.$store.state.bagels.automated = true;
        let bInterval = setInterval(() => {
          this.$store.commit("addBagel")
        }, this.bagels.autoInterval)
      }
      if (!this.$store.state.coffee.automated) {
        clearInterval(bInterval);
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