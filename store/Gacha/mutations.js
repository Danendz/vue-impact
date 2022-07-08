import { setCharacters } from "./setCharacters/setCharacters"

export default {
  summonCharacters(state, num) {
    state.obtainCharacters = setCharacters(state, num)
  },
  setBanner(state, banner) {
    state.bannerType = banner
  },
}
