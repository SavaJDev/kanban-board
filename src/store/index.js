import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import boards from './modules/boards.js'

export const store = new Vuex.Store({
  modules: {
		boards
	},
	strict: process.env.NODE_ENV !== 'production'
})
