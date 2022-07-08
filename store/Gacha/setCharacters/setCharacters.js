import { getOneCharacter } from "./getOneCharacter"

export const setCharacters = (state, num) => {
    const result = []
    for (let i = 0; i < num; i++) {
      result.push(getOneCharacter(state))
    }
    return result
  }