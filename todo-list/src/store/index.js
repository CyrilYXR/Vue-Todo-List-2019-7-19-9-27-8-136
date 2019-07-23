import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import actions from './action.js'
import getters from './getter.js'
import mutations from './mutation.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store; 