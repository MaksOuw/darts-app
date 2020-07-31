<template>
    <tr :id="player.name">
        <td>{{ player.name }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(15) }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(16) }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(17) }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(18) }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(19) }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(20) }}</td>
        <td v-if="this.mode === 'cricket' || this.mode === 'cutThroat'">{{ this.displayScore(25) }}</td>
        <td>{{ player.score }}</td>
    </tr>
</template>

<script>
    export default {
        name: "Player",
        props: ['player', 'mode'],
        methods: {
            displayScore(number) {
                let touches = 0
                this.player.darts.forEach(function(dart) {
                    if(dart === number) {
                        touches++
                    }
                })

                if(touches > 3) {
                    return 3
                }

                return touches
            }
        }
    }
</script>

<style scoped>
</style>
