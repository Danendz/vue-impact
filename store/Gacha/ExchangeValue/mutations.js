export default {
  increment(state, value) {
    state.exchangeValue += value
  },
  decrement(state, value) {
    if (state.exchangeValue - value>0) {
      state.exchangeValue -= value
    } else {
      state.exchangeValue -= state.exchangeValue
    }
  },
  set(state, value) {
    state.exchangeValue = value
  },
}
