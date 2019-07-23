export default {
  addTodo(state, todo) {
    if (todo === '') {
      return;
    } else {
      state.items.push({
        title: todo,
        isfinished: false,
        editable: false
      })
    }
  },

  changeStatus(state, status) {
    state.status = status
  }
}
