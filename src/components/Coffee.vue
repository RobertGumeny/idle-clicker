<template>
  <div class="coffee">
    Coffee in Stock: {{ coffees }}
    <button @click="pourCoffee()">Pour Coffee</button>
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
      return this.$store.state.coffee
    }
  },
  methods: {
    pourCoffee() {
      this.$store.state.coffee++;
    }
  },
  components: {}
}
</script>


<style scoped>
</style>