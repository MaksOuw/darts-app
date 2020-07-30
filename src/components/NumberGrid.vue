<template>
  <div class="numberGrid">
    <table>
      <tr>
        <td @click="addNumber(15)">15</td>
        <td @click="addNumber(16)">16</td>
        <td @click="addNumber(17)">17</td>
      </tr>
      <tr>
        <td @click="addNumber(18)">18</td>
        <td @click="addNumber(19)">19</td>
        <td @click="addNumber(20)">20</td>
      </tr>
      <tr>
        <td @click="cancel">Annuler</td>
        <td @click="addNumber(25)">Bulle</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "NumberGrid",
        props: [ 'players', 'activePlayer' ],
        methods: {
            addNumber(number) {
                let touches = this.getTouches(number)
                if(touches >= 3) {
                    this.activePlayer.score += number
                }

                return this.activePlayer.darts.push(number)
            },
            cancel() {
                let touches = this.getTouches(this.activePlayer.darts[this.activePlayer.darts.length - 1])
                if(touches > 3) {
                    this.activePlayer.score -= this.activePlayer.darts[this.activePlayer.darts.length - 1]
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
  td {
    cursor: pointer;
  }
</style>
