export default {
  setCategory(state, value) {
    state.category = value
  },
  setCategoryContent(state, [value, content]) {
    state.categories[value].data = content
  },
  setCategoryItemSelected(state, value) {
    state.selectedItem = value
  },
}
