export default {
  add(state, value) {
    state.crystals += value
  },
  remove(state, value) {
    state.crystals -= value
  },
  set(state, value) {
    state.crystals = value
  },
}
