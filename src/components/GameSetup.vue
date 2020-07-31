<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col">
        <label for="playerName">Ajoutez des joueurs</label><br/>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col">
        <label v-for="(player, index) in players" :key="index">{{ player.name }}, </label><br/>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col">
        <input class="form-control" type="text" id="playerName" name="playerName" placeholder="Jean-michel"/>
        <button class="btn btn-primary m-2" @click="addPlayer">Ajouter</button>
      </div>
    </div>
    <div class="row justify-content-md-center mt-2">
      <div class="col">
        <button class="btn btn-primary" @click="start('cricket')">Cricket</button>
        <button class="btn btn-success m-2" @click="start('cutThroat')">Cricket Cut Throat</button>
        <button class="btn btn-danger m-2" @click="start('301')">301</button>
        <button class="btn btn-info m-2" @click="start('501')">501</button>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "GameSetup",
        data() {
            return {
                players: []
            }
        },
        methods: {
            addPlayer() {
                let playerSelector = $("#playerName")
                if(playerSelector.val() === '') {
                    return
                }
                this.players.push({
                    name: playerSelector.val(),
                    darts: [],
                    score: 0
                })

                return playerSelector.val('')
            },
            start(mode) {
                if(this.players.length <= 1) {
                    alert('Il faut au moins deux joueurs pour démarrer une partie')

                    return
                }
                let score = 0
                if(mode === "301") {
                    score = 301
                }
                if(mode === "501") {
                    score = 501
                }
                if(score !== 0) {
                    this.players.forEach(function(player) {
                        player.score = score
                    })
                }
                this.$store.commit("setGame", {
                    players: this.players,
                    mode: mode
                })
                return this.$router.push({
                    name: 'game'
                })
            }
        }
    }
</script>

<style scoped>

</style>
