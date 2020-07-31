import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        game: {
            players: [],
            mode: 'cricket',
        }
    },
    getters: {
        players: state => {
            return state.game.players
        },
        gameMode: state => {
            return state.game.mode
        }
    },
    mutations: {
        setGame(state, payload) {
            state.game.players = payload.players
            state.game.mode = payload.mode
        }
    },
    actions: {}
});
