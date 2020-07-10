<template>
  <div class="grid">
    <button v-for="n in 20" :key="n" @click="addTouch(n)">{{ n }}</button>
    <button @click="addTouch(25)">Bulle</button>
  </div>
</template>

<script>
export default {
  name: 'FullGrid',
  methods: {
    addTouch (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  button {
    background-color: green;
  }
</style>
