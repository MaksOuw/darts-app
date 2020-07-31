<template>
  <div>
    <label for="playerName">Ajoutez des joueurs</label><br/>
    <label v-for="(player, index) in players" :key="index">{{ player.name }}, </label><br/>
    <input type="text" id="playerName" name="playerName" placeholder="Jean-michel"/>
    <button @click="addPlayer">Ajouter</button>
    <br/>
    <br/>
    <button @click="start">Démarrer</button>
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
                this.players.push({
                    name: playerSelector.val(),
                    darts: [],
                    score: 0
                })

                return playerSelector.val('')
            },
            start() {
                if(this.players.length <= 1) {
                    alert('Il faut au moins deux joueurs pour démarrer une partie')

                    return
                }
                this.$store.commit("setPlayers", {players: this.players})
                return this.$router.push({
                    name: 'game'
                })
            }
        }
    }
</script>

<style scoped>

</style>
