export const setRandomNum = (isFloor, value) => {
  if (isFloor) {
    return Math.floor(Math.random() * value)
  }
  return Math.random() * value
}
