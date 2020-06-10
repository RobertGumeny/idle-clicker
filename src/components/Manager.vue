<template>
  <div class="manager">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <p>${{ salary }}</p>
    <button @click="hireManager()">Hire {{ name }}</button>
  </div>
</template>


<script>
export default {
  name: 'manager',
  props: ["name", "description", "salary"],
  data() {
    return {}
  },
  computed: {},
  methods: {
    hireManager() {
      console.log(this.salary)
    }
  },
  components: {}
}
</script>


<style scoped>
</style>