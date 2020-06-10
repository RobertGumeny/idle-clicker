<template>
  <div class="pancake card col-md-3 p-1">
    <img src="../assets/img/pancakes-xl.png" alt class="card-img-top img-fluid" />
    <div class="card-body">
      <h6 class="card-title">Price: ${{ pancakes.price }}</h6>
      <h5 class="card-title">Pancakes in Stock: {{ pancakes.qty }}</h5>
      <h6 class="card-title mb-0" v-if="pancakes.automated">Manager Automating</h6>
      <div class="mt-0 mb-2 small" v-if="!pancakes.automated">Manager Cost: ${{ pancakes.salary }}</div>
      <button class="btn btn-sm btn-secondary mr-1" @click="makePancake()">Make Pancake</button>
      <button class="btn btn-sm btn-danger" @click="hireManager()">Hire Manager</button>
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
    }
  },
  methods: {
    makePancake() {
      this.$store.commit("addPancake");
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