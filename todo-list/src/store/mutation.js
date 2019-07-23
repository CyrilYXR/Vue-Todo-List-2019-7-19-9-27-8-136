export default {
  addTodo(state, todo) {
    if (todo === '') {
      return;
    } else {
      state.items.push({
        title: todo,
        isfinished: 0,
        editable: 0
      })
    }
  },

  changeStatus(state, status) {
    state.status = status
  },

  loadItems(state, items){
      state.items = items;
  }
}
