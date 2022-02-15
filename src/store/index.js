import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage.js'

Vue.use(Vuex)

const USERTOKEN = 'user_token'

export default new Vuex.Store({
  state: {
    token: getItem(USERTOKEN)
  },
  mutations: {
    setToken (state, data) {
      state.token = data
      // 模拟将token保存到本地存储中
      setItem(USERTOKEN, data)
      // window.localStorage.setItem(USERTOKEN, JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
