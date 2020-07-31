<template>
  <div class="col">
    <table class="table table-bordered table-striped text-center">
      <thead>
        <tr>
          <th>Joueur</th>
          <th>15</th>
          <th>16</th>
          <th>17</th>
          <th>18</th>
          <th>19</th>
          <th>20</th>
          <th>Bulle</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <Player v-for="(player, index) in players" :player="player" :key="index"></Player>
      </tbody>
    </table>
    <div class="row justify-content-md-center">
      <div class="col">
        <button class="btn btn-success" @click="addNumber(15)">15</button>
        <button class="btn btn-danger ml-1" @click="addNumber(16)">16</button>
        <button class="btn btn-success ml-1" @click="addNumber(17)">17</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-1">
      <div class="col">
        <button class="btn btn-danger" @click="addNumber(18)">18</button>
        <button class="btn btn-success ml-1" @click="addNumber(19)">19</button>
        <button class="btn btn-danger ml-1" @click="addNumber(20)">20</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-1">
      <div class="col">
        <button class="btn btn-success" @click="cancel">Annuler</button>
        <button class="btn btn-danger ml-1" @click="addNumber(25)">Bulle</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Player from "./Player"
  export default {
      name: "Cricket",
      components: {
          Player
      },
      props: [ 'players', 'activePlayer', 'mode' ],
      methods: {
          addNumber(number) {
              let touches = this.getTouches(number)
              if(touches >= 3) {
                  if(this.mode === 'cricket') {
                      this.activePlayer.score += number
                  }
                  else if(this.mode === 'cutThroat') {
                      this.players.forEach(function(player) {
                          if(player !== this.activePlayer) {
                              player.score += number
                          }
                      }, this)
                  }
              }

              return this.activePlayer.darts.push(number)
          },
          cancel() {
              let touches = this.getTouches(this.activePlayer.darts[this.activePlayer.darts.length - 1])
              if(touches > 3) {
                  if(this.mode === 'cricket') {
                      this.activePlayer.score -= this.activePlayer.darts[this.activePlayer.darts.length - 1]
                  }
                  else if(this.mode === 'cutThroat') {
                      this.players.forEach(function(player) {
                          if(player !== this.activePlayer) {
                              player.score -= this.activePlayer.darts[this.activePlayer.darts.length - 1]
                          }
                      }, this)
                  }
              }

              return this.activePlayer.darts.pop()
          },
          getTouches(number) {
              let touches = 0
              this.activePlayer.darts.forEach(function(dart) {
                  if(dart === number) {
                      touches++
                  }
              })

              return touches
          }
      },
      created() {
          return this.activePlayer = this.players[0]
      }
  }
</script>

<style scoped>
  th {
    min-width: 25px;
    padding: 10px;
  }
</style>
