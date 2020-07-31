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
  </div>
</template>

<script>
  import Player from "./Player"
  export default {
      name: "Cricket",
      props: ['players'],
      components: {
          Player
      }
  }
</script>

<style scoped>
  th {
    min-width: 25px;
    padding: 10px;
  }
</style>
