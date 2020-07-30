<template>
    <tr :id="player.name">
        <td>{{ player.name }}</td>
        <td>{{ this.displayScore(15) }}</td>
        <td>{{ this.displayScore(16) }}</td>
        <td>{{ this.displayScore(17) }}</td>
        <td>{{ this.displayScore(18) }}</td>
        <td>{{ this.displayScore(19) }}</td>
        <td>{{ this.displayScore(20) }}</td>
        <td>{{ this.displayScore(25) }}</td>
        <td>{{ player.score }}</td>
    </tr>
</template>

<script>
    export default {
        name: "Player",
        props: ['player'],
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
