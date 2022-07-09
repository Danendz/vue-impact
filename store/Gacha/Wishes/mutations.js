export default {
  add(state, value) {
    state.wishes += value
  },
  remove(state, value) {
    state.wishes -= value
  },
  set(state, value) {
    state.wishes = value
  },
}
