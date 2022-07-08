import { standardGacha, eventGacha } from './itemNames'
import { setRandomNum } from './setRandomNum'
export const get5Star = (state) => {
  state.user5StarPity = 0
  switch (state.bannerType) {
    case 'event':
      return getEvent5Star(state)
    case 'standard':
      return getstandard5Star()
    default:
      return 'Что то пошло не так!'
  }
}

const getEvent5Star = (state) => {
  if (state.isEvent5StarGuaruntee) {
    state.isEvent5StarGuaruntee = false
    return eventGacha.event5
  }
  const random50 = setRandomNum(false, 10)
  if (random50 >= 5) {
    state.isEvent5StarGuaruntee = true
    return getstandard5Star(state)
  } else {
    return eventGacha.event5
  }
}

const getstandard5Star = () => {
  const standard5 = standardGacha.standard5
  return standard5[setRandomNum(true, standard5.length)]
}
