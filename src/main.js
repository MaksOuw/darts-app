import Vue from 'vue'
import VueRouter from 'vue-router'
import GameSetup from "./components/GameSetup"
import App from "./App"
import Game from "./components/Game"
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/new',
    name: 'new',
    component: GameSetup
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
