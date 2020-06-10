<template>
  <div class="pancake card col-md-3 p-1">
    <img src="../assets/img/pancakes-xl.png" alt class="card-img-top img-fluid" />
    <div class="card-body">
      <h6 class="card-title">Price: ${{ pancakes.price }}</h6>
      <h5 class="card-title">Pancakes in Stock: {{ pancakes.qty }}</h5>
      <div v-if="!pancakes.unlocked">
        <div class="mb-2">
          Unlock Price:
          <span class="text-success">${{ pancakes.unlockPrice }}</span>
        </div>
        <button class="btn btn-sm btn-success">Unlock</button>
      </div>
      <div v-if="pancakes.unlocked">
        <h6 class="card-title mb-0" v-if="pancakes.automated">Manager Automating</h6>
        <div class="mt-0 mb-2 small" v-if="!pancakes.automated">Manager Cost: ${{ pancakes.salary }}</div>
        <button class="btn btn-sm btn-secondary mr-1" @click="makePancake()">Make Pancake</button>
        <button
          class="btn btn-sm btn-primary"
          @click="hirePancakeManager()"
          v-if="!coffees.automated"
        >Hire Manager</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'pancake',
  data() {
    return {}
  },
  computed: {
    pancakes() {
      return this.$store.state.pancakes
    },
    money() {
      return this.$store.state.money;
    }
  },
  methods: {
    makePancake() {
      this.$store.commit("addPancake");
    },
    unlockBagels() {
      if (this.money >= this.pancakes.unlockPrice) {
        this.$store.state.money -= this.pancakes.unlockPrice
        this.pancakes.unlocked = true;
      }
    },
    hirePancakeManager() {
      if (this.money >= this.pancakes.salary) {
        this.$store.state.money -= this.pancakes.salary;
        this.$store.state.pancakes.automated = true;
        let pInterval = setInterval(() => {
          this.$store.commit("addPancake")
        }, this.pancakes.autoInterval)
      }
      if (!this.$store.state.coffee.automated) {
        clearInterval(pInterval);
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