<template>
  <div class="automation">
    <Manager name="Bob" description="Automatically sells your coffees" salary="250"></Manager>
    <Manager name="Sara" description="Automatically sells your bagels" salary="500"></Manager>
  </div>
</template>


<script>
import Manager from './Manager'
export default {
  name: 'automation',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {
    Manager
  }
}
</script>


<style scoped>
</style>