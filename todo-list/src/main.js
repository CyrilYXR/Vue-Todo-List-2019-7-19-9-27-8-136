import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state:{
    items: [],
    // filterItems: [],
    status: 1
  },
  getters:{
    filterItems: state => {
      if(state.status === 2){
        return state.items.filter(item => !item.isfinished)
      } else if(state.status === 3){
        return state.items.filter(item => item.isfinished)
      } else {
        return state.items
      }
    }
  },
  mutations: {
    addTodo(state, todo){
      if(todo === '') {
        return;
      }else{
        state.items.push({
          title: todo,
          isfinished: false,
          editable: false
        })
      }
    },
    
    changeStatus(state, status){
      state.status = status
    },
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
