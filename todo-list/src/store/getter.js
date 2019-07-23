export default {
  filterItems: state => {
    if (state.status === 2) {
      return state.items.filter(item => !item.isfinished)
    } else if (state.status === 3) {
      return state.items.filter(item => item.isfinished)
    } else {
      return state.items
    }
  }
}
