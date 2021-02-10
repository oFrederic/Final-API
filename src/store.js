import Vue from 'vue';
import Vuex from 'vuex';
const axios = require('axios');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allGames: [],
    displayedGames: [],
    platforms: [],
  },
  mutations: {
    setAllGames(state, payload) {
      state.allGames = payload;
    },
    setDisplayedGames(state, payload) {
      state.displayedGames = payload;
    },
    setPlatforms(state, payload) {
      state.platforms = payload;
    },
  },
  actions: {
    async loadGames() {
      try {
        const { data: res } = await axios.get('api/games');

        const games = res.data.games;
        const platforms = ['All'];

        for (let index = 0; index < games.length; index++) {
          const game = games[index];
          if (!platforms.includes(game.platforme))
            platforms.push(game.platforme);
        }

        this.commit('setAllGames', games);
        this.commit('setDisplayedGames', games);
        this.commit('setPlatforms', platforms);
      } catch (err) {
        console.log(err);
      }
    },
    clearFilter({ state }) {
      this.commit('setDisplayedGames', state.allGames);
    },
    setFilter({ state }, platform) {
      const displayedGames = [];
      for (let index = 0; index < state.allGames.length; index++) {
        const element = state.allGames[index];
        if (element.platforme === platform) {
          displayedGames.push(element);
        }
      }
      this.commit('setDisplayedGames', displayedGames);
    },
  },
  getters: {
    getGames(state) {
      return state.games;
    },
  },
});
