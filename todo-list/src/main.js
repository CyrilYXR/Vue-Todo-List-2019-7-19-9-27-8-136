import Vue from 'vue'
import App from './App.vue'
// import Vuex from 'vuex'
import store from './store/index.js'
import VueRouter from 'vue-router'
import Welcome from './views/welcome.vue'
import Home from './views/home.vue'
import Todoapp from './components/todoapp.vue'
import Profile from './views/profile.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Welcome
  },
  {
    path: '/welcome',
    component: Welcome
  },
  {
    path: '/home/:name',
    name: 'home',
    component: Home,
    props: true,
    children:[
      {
        path: 'todo',
        name: 'todo',
        component: Todoapp
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
