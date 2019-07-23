import axios from 'axios'
import getter from './getter';

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
      console.log(error);
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
        }).catch(function (error) {
          console.log(error);
        });
  },

  updateItem({commit}, item){
    axios({
        method: "PUT",
        url: 'http://localhost:8084/todos/' + item.id,
        data: item
    })
    .then(function(response){
        
    }).catch(function (error) {
      console.log(error);
    })
  },

  deleteItem({commit}, id){
    axios.delete('http://localhost:8084/todos/'+ id)
      .then(function(response){
        // dispatch(loadItems(commit));
      }).catch(function (error) {
        console.log(error);
      })
    window.location.reload()
  }
}
