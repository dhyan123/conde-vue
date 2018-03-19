import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import iView from 'iview';

Vue.use(iView);
Vue.use(Vuex)

// 定义一个store
let store = new Vuex.Store({
  state: {
    list: [],
    limit:50, 
    tab:'all',
    good:false,
    details:{
      author:{
        loginname:''
      }
    },
    userInfo:{},
    islogin: localStorage.getItem('islogin'),
    
  },
  getters:{
    islogin:(state) => Boolean(state.islogin),
  },
  mutations: {
    changeList (state,payload) { // {list:[]}
      state.list = payload.list;
    },
    changeMenu(state,payload){
      state.tab = payload.tab
    },
    changeItem (state,payload) {
    state.id = payload.id
    state.details = payload.list;
    
  },
  setUserInfo(state, payload) {
    window.location.reload()
},
  },
  actions: {
    getListAction({ commit }, payload={pageNum:1}) {
      iView.LoadingBar.start();
      setTimeout(() => {
        axios.get('/api/v1/topics',{
          params: {
           tab:this.state.tab,
           page:payload.pageNum,
           limit:10,
          
          },
        
      
        })
          .then((prams) => {
            iView.LoadingBar.finish();
            commit('changeList', { list: prams.data.data })
          })
      }, 20);
    },
    getDetailsAction({ commit }, payload) {
      setTimeout(() => {
        axios.get('/api/v1/topic/'+ payload.id)
          .then((res) => {
            commit('changeItem', { list: res.data.data })
          })
      }, 20);
    },
    setUserInfo ({commit}, user) {
      commit('setUserInfo', user)
    }
  },
 
 
})

export default store;