<template>
  <div class="bagel">
    Bagels in Stock: {{ bagels }}
    <button @click="makeBagel()">Make Bagel</button>
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
    }
  },
  methods: {
    makeBagel() {
      this.$store.state.bagels++;
    }
  },
  components: {}
}
</script>


<style scoped>
</style>