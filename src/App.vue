<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Cricket></Cricket>
    <NumberGrid :players="players" :activePlayer="players[activePlayerIndex]"></NumberGrid>
    <button @click="previousPlayer">Previous</button>
    <button @click="nextPlayer">Next</button>
  </div>
</template>

<script>
  import Cricket from "./components/Cricket"
  import NumberGrid from "./components/NumberGrid"

  export default {
    name: 'App',
    components: {
      NumberGrid,
      Cricket
    },
    data() {
      return {
        players: [
            {
                name: 'Player1',
                score: []
            },
            {
                name: 'Player2',
                score: []
            },
        ],
        activePlayerIndex: 0
      }
    },
    methods: {
      nextPlayer() {
        if (this.players[this.activePlayerIndex + 1]) {
          return this.activePlayerIndex = this.activePlayerIndex + 1
        }

        return this.activePlayerIndex = 0
      },
      previousPlayer() {
        if(this.players[this.activePlayerIndex - 1]) {
            return this.activePlayerIndex = this.activePlayerIndex - 1
        }

        return this.activePlayerIndex = this.players.length
      }
    }
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
