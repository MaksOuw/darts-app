<template>
  <div id="app">
    <h1>Darts</h1>
    <p>
      <router-link to="/new"><button class="btn btn-primary">Nouvelle partie</button></router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
