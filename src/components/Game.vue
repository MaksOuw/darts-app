<template>
  <div class="container">
    <div id="pyro" class="pyro" style="display: none;">
      <div class="before"></div>
      <div class="after"></div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col">
        <label>C'est au tour de <strong>{{ players[activePlayerIndex].name }}</strong></label>
      </div>
    </div>
    <div class="row justify-content-md-center mt-2">
      <div class="col">
        <Cricket v-if="this.mode === 'cricket' || this.mode === 'cutThroat'" :players="players" :active-player="players[activePlayerIndex]" :mode="this.mode"></Cricket>
        <x01 v-if="this.mode === '301' || this.mode === '501'" :players="players" :active-player="players[activePlayerIndex]" :mode="this.mode"></x01>
      </div>
    </div>
    <div class="row justify-content-md-center mt-2">
      <div class="col">
        <button class="btn btn-secondary mr-1" @click="previousPlayer">Précédent</button>
        <button class="btn btn-primary ml-1" @click="nextPlayer">Suivant</button>
      </div>
    </div>
  </div>
</template>

<script>
    import Cricket from "./Cricket"
    import $ from "jquery"
    import X01 from "./x01"
    export default {
        name: "Game",
        components: {
            X01,
            Cricket
        },
        data() {
            return {
                players: this.$store.getters.players,
                mode: this.$store.getters.gameMode,
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

                return this.activePlayerIndex = this.players.length - 1
            }
        },
        updated() {
            let hasWin = true
            if(this.mode === 'cricket' || this.mode === 'cutThroat') {
                this.players.forEach(function(player) {
                    let darts = {
                        15: 0,
                        16: 0,
                        17: 0,
                        18: 0,
                        19: 0,
                        20: 0,
                        25: 0
                    }
                    player.darts.forEach(function(dart) {
                        darts[dart]++
                    })
                    for (let dart in darts) {
                        if(darts[dart] < 3) {
                            hasWin = false
                        }
                    }
                    if(hasWin) {
                        $("#pyro").show()
                    }
                })
            }
            else if(this.mode === '301' || this.mode === '501') {
                this.players.forEach(function(player) {
                    hasWin = player.score === 0;
                    if(hasWin) {
                        $("#pyro").show()
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .pyro > .before, .pyro > .after {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84, 190px 16.33333px #002bff, -113px -308.66667px #ff009d, -109px -287.66667px #ffb300, -50px -313.66667px #ff006e, 226px -31.66667px #ff4000, 180px -351.66667px #ff00d0, -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00, -69px -27.66667px #ff0400, -111px -339.66667px #6200ff, 155px -237.66667px #00ddff, -152px -380.66667px #00ffd0, -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00, -88px 10.33333px #0d00ff, 112px -309.66667px #005eff, 69px -415.66667px #ff00a6, 168px -100.66667px #ff004c, -244px 24.33333px #ff6600, 97px -325.66667px #ff0066, -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff, 140px -196.66667px #9000ff, 125px -175.66667px #00bbff, 118px -381.66667px #ff002f, 144px -111.66667px #ffae00, 36px -78.66667px #f600ff, -63px -196.66667px #c800ff, -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff, -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2, 91px -278.66667px #000dff, -22px -191.66667px #9dff00, 139px -392.66667px #a6ff00, 56px -2.66667px #0099ff, -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb, -238px -346.66667px #00ff73, 62px -363.66667px #0088ff, 244px -170.66667px #0062ff, 224px -142.66667px #b300ff, 141px -208.66667px #9000ff, 211px -285.66667px #ff6600, 181px -128.66667px #1e00ff, 90px -123.66667px #c800ff, 189px 70.33333px #00ffc8, -18px -383.66667px #00ff33, 100px -6.66667px #ff008c;
    -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; }

  .pyro > .after {
    -moz-animation-delay: 1.25s, 1.25s, 1.25s;
    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
    -o-animation-delay: 1.25s, 1.25s, 1.25s;
    -ms-animation-delay: 1.25s, 1.25s, 1.25s;
    animation-delay: 1.25s, 1.25s, 1.25s;
    -moz-animation-duration: 1.25s, 1.25s, 6.25s;
    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
    -o-animation-duration: 1.25s, 1.25s, 6.25s;
    -ms-animation-duration: 1.25s, 1.25s, 6.25s;
    animation-duration: 1.25s, 1.25s, 6.25s; }

  @-webkit-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
  @-moz-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
  @-o-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
  @-ms-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
  @keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white; } }
  @-webkit-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0; } }
  @-moz-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0; } }
  @-o-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0; } }
  @-ms-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0; } }
  @keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0; } }
  @-webkit-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%; }

    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%; }

    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%; }

    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%; }

    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%; } }
  @-moz-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%; }

    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%; }

    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%; }

    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%; }

    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%; } }
  @-o-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%; }

    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%; }

    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%; }

    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%; }

    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%; } }
  @-ms-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%; }

    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%; }

    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%; }

    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%; }

    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%; } }
  @keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%; }

    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%; }

    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%; }

    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%; }

    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%; }
  }

</style>
