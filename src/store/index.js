import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: []
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        commit('SET_POSTS', response.data)
      })
    }
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  modules: {
  }
})

