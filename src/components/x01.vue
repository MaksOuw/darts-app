<template>
  <div class="col">
    <table class="table table-bordered table-striped text-center">
      <thead>
      <tr>
        <th>Joueur</th>
        <th>Score</th>
      </tr>
      </thead>
      <tbody>
        <Player v-for="(player, index) in players" :player="player" :key="index" :mode="mode"></Player>
      </tbody>
    </table>
    <div class="row justify-content-md-center">
      <div class="col">
        <button class="btn btn-success" @click="addNumber(1)">1</button>
        <button class="btn btn-danger ml-1" @click="addNumber(2)">2</button>
        <button class="btn btn-success ml-1" @click="addNumber(3)">3</button>
        <button class="btn btn-danger ml-1" @click="addNumber(4)">4</button>
        <button class="btn btn-success ml-1" @click="addNumber(5)">5</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-1">
      <div class="col">
        <button class="btn btn-danger" @click="addNumber(6)">6</button>
        <button class="btn btn-success ml-1" @click="addNumber(7)">7</button>
        <button class="btn btn-danger ml-1" @click="addNumber(8)">8</button>
        <button class="btn btn-success ml-1" @click="addNumber(9)">9</button>
        <button class="btn btn-danger ml-1" @click="addNumber(10)">10</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-1">
      <div class="col">
        <button class="btn btn-success" @click="addNumber(11)">11</button>
        <button class="btn btn-danger ml-1" @click="addNumber(12)">12</button>
        <button class="btn btn-success ml-1" @click="addNumber(13)">13</button>
        <button class="btn btn-danger ml-1" @click="addNumber(14)">14</button>
        <button class="btn btn-success ml-1" @click="addNumber(15)">15</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-1">
      <div class="col">
        <button class="btn btn-danger" @click="addNumber(16)">16</button>
        <button class="btn btn-success ml-1" @click="addNumber(17)">17</button>
        <button class="btn btn-danger ml-1" @click="addNumber(18)">18</button>
        <button class="btn btn-success ml-1" @click="addNumber(19)">19</button>
        <button class="btn btn-danger ml-1" @click="addNumber(20)">20</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-1">
      <div class="col">
        <button class="btn btn-danger" @click="cancel">Annuler</button>
        <button class="btn btn-success ml-1" @click="addNumber(25)">Bulle</button>
      </div>
    </div>
  </div>
</template>

<script>
    import Player from "./Player"
    export default {
        name: "x01",
        components: {
            Player
        },
        props: [ 'players', 'activePlayer', 'mode' ],
        methods: {
            addNumber(number) {
                if(number > this.activePlayer.score) {
                    return
                }

                this.activePlayer.score -= number

                return this.activePlayer.darts.push(number)
            },
            cancel() {
                this.activePlayer.score += this.activePlayer.darts[this.activePlayer.darts.length - 1]

                return this.activePlayer.darts.pop()
            },
        },
        created() {
            return this.activePlayer = this.players[0]
        }
    }
</script>

<style scoped>
  button {
    min-width: 44px;
  }
</style>
