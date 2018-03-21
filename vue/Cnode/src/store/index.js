import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: [],
    contentNum: 0
  },
  mutations: {
    addContent (state, content) {
      state.content = content
    },
    addContentNum (state) {
      state.contentNum += 10
    }
  },
  actions: {
    getContent (context) {
      context.commit('addContentNum')

      axios({
        method: 'get',
        url: 'https://cnodejs.org/api/v1/topics',
        params: {
          page: 1,
          limit: context.state.contentNum,
          mdrender: 'false'
        }
      }).then((res) => {
        if (res.data.success) {
          context.commit('addContent', res.data.data)
        } else {
          console.log('Main.vue', res)
        }
      }).catch((res) => {
        console.log('Main.vue', res)
      })
    }
  }
})
