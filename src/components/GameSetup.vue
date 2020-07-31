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
        <button class="btn btn-primary m-2" @click="start('cutThroat')">Cricket Cut Throat</button>
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
