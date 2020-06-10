import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'idle-clicker',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    money: 0,
    coffee: {
      price: 1,
      qty: 0,
      perClick: 1,
      automated: false,
      salary: 100,
      autoInterval: 2500
    },
    bagels: {
      price: 3,
      qty: 0,
      perClick: 1,
      automated: false,
      salary: 300,
      autoInterval: 5000
    },
    pancakes: {
      price: 5,
      qty: 0,
      perClick: 1,
      automated: false,
      salary: 500,
      autoInterval: 7500
    }
  },
  mutations: {
    addMoney(state, qty) {
      state.money += qty;
    },
    addCoffee(state) {
      state.coffee.qty += state.coffee.perClick;
    },
    addBagel(state) {
      state.bagels.qty += state.bagels.perClick;
    },
    addPancake(state) {
      state.pancakes.qty += state.pancakes.perClick;
    }
  },
  actions: {

  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
