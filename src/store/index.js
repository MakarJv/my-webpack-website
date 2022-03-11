import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    async fetchCard() {
      const  res = await fetch (`https://jsonplaceholder.typicode.com/todos`)
      return await res.json()
    }
  },
  modules: {
    auth, info
  }
})
