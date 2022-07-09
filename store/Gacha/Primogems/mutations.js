export default {
  add(state, value) {
    state.primogems += value
  },
  remove(state, value) {
    state.primogems -= value
  },
  set(state, value) {
    state.primogems = value
  },
}
