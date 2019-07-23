export default {
  addTodo(state, todo) {
    if (todo.title === '') {
      return;
    } else {
      state.items.push(todo)
    }
  },

  changeStatus(state, status) {
    state.status = status
  },

  loadItems(state, items){
      state.items = items;
  }
}
