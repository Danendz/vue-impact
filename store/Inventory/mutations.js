export default {
  nextCategory(state) {
    if (state.category !== 8) {
      state.category++
    }
  },
  prevCategory(state) {
    if (state.category !== 0) {
      state.category--
    }
  },
  setCategory(state, value) {
    state.category = value
  },
}
