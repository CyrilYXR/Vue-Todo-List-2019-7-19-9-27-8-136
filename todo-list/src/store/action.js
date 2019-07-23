import axios from 'axios'

export default {
  addTodo({
    commit
  }, todo) {
    axios.post('http://localhost:8084/todos', {
      "title": todo,
      "isfinished": 0,
      "editable": 0
    }).then(function (response) {
      commit('addTodo', response.data.title);
    }).catch(function (error) {

    });

  },

  changeStatus({
    commit
  }, status) {
    commit('changeStatus', status);
  },

  loadItems({commit}){
    axios.get('http://localhost:8084/todos')
        .then(function(response) {
            commit('loadItems', response.data)
        })
  }
}
