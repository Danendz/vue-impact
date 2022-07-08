import { eventGacha, standardGacha } from "./itemNames"
import { setRandomNum } from "./setRandomNum"
const chanceToWin4Star = 2.55

export const get4Star = (state, random) => {
    state.user4StarPity = 0
    switch (state.bannerType) {
      case 'event':
        return getEvent4Star(state, random)
      case 'standard':
        return getstandard4Star(state)
      default:
        return 'Что то пошло не так!'
    }
  }
  
  const getEvent4Star = (state, random) => {
    if (random <= chanceToWin4Star || state.isEvent4StarGuaruntee) {
      if (state.isEvent4StarGuaruntee) {
        state.isEvent4StarGuaruntee = false
        const event4 = eventGacha.event4
        return event4[setRandomNum(true, event4.length)]
      }
      state.isEvent4StarGuaruntee = true
      return getstandard4Star(state)
    } else {
      state.isEvent4StarGuaruntee = true
      return standardGacha.weaponStandard4[0]
    }
  }
  
  const getstandard4Star = (state) => {
    let standard4
    if (state.bannerType === 'event') {
      standard4 = standardGacha.standard4
    } else {
      standard4 = [...standardGacha.standard4, ...eventGacha.event4]
    }
    return standard4[setRandomNum(true, standard4.length)]
  }
  
  