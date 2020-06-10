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
      unlocked: true,
      unlockPrice: 0,
      salary: 50,
      autoInterval: 1000
    },
    bagels: {
      price: 3,
      qty: 0,
      perClick: 1,
      automated: false,
      unlocked: false,
      unlockPrice: 150,
      salary: 150,
      autoInterval: 3000
    },
    pancakes: {
      price: 5,
      qty: 0,
      perClick: 1,
      automated: false,
      unlocked: false,
      unlockPrice: 500,
      salary: 250,
      autoInterval: 5000
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
    },
    resetGame(state) {
      state.money = 0;
      state.coffee.qty = 0;
      state.coffee.perClick = 1;
      state.coffee.automated = false;
      state.coffee.salary = 50;
      state.bagels.qty = 0;
      state.bagels.perClick = 1;
      state.bagels.automated = false;
      state.bagels.unlocked = false;
      state.bagels.salary = 150;
      state.pancakes.qty = 0;
      state.pancakes.perClick = 1;
      state.pancakes.automated = false;
      state.pancakes.unlocked = false;
      state.pancakes.salary = 250;
    }
  },
  actions: {

  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
