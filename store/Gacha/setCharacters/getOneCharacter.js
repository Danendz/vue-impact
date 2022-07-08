import { get5Star } from './get5Star'
import { get4Star } from './get4Star'
import { setRandomNum } from './setRandomNum'
import { standardGacha } from './itemNames'

const star5Pity = 90
const star4Pity = 10

const chanceToWin5StarCharacter = 0.6
const chanceToWin4StarItem = 5.1
const chanceToWin4Star = 2.55

export const getOneCharacter = (state) => {
  const randomNumber = setRandomNum(false, 50)
  state.user4StarPity++
  state.user5StarPity++

  if (state.user5StarPity >= 70) {
    state.userIncreasingChance += 0.1
  }

  if (state.user5StarPity === star5Pity) {
    return ['5', get5Star(state)]
  }

  if (state.user4StarPity === star4Pity) {
    const random = setRandomNum(false, chanceToWin4Star)
    return ['4', get4Star(state, random)]
  }

  if (randomNumber <= chanceToWin5StarCharacter + state.userIncreasingChance) {
    return ['5', get5Star(state)]
  } else if (randomNumber <= chanceToWin4StarItem) {
    return ['4', get4Star(state, randomNumber)]
  } else {
    return ['3', standardGacha.standard3[0]]
  }
}
