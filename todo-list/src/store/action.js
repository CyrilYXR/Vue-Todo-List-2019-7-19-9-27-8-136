import axios from 'axios'

export default {
  addTodo({
    commit
  }, todo) {
    if (todo === '') {
        return;
    } 
    axios.post('http://localhost:8084/todos', {
      "title": todo,
      "isfinished": 0
    }).then(function (response) {
      commit('addTodo', response.data);
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
  },

  updateItem({commit}, item){
    axios({
        method: "PUT",
        url: 'http://localhost:8084/todos/' + item.id,
        data: item
    })
    .then(function(response){
        
    })
  }
}
