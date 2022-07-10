<template>
  <div class="Gacha">
    <h1 class="notInLandscape">
      Пожалуйста перевени свой телефон чтобы все заработало!
    </h1>

    <p v-show="!isLoaded">Loading</p>

    <GachaMain v-show="isLoaded" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CharacterService from '../API/charactersService'
export default {
  name: 'GachaSystem',
  data() {
    return {
      isLoaded: false,
    }
  },
  videos: [
    'https://vue-impact.herokuapp.com/gachaVideos/backgroundCropped.mp4',
    'https://vue-impact.herokuapp.com/gachaVideos/3star1comp.mp4',
    'https://vue-impact.herokuapp.com/gachaVideos/4star1comp.mp4',
    'https://vue-impact.herokuapp.com/gachaVideos/4star10comp.mp4',
    'https://vue-impact.herokuapp.com/gachaVideos/5star1comp.mp4',
    'https://vue-impact.herokuapp.com/gachaVideos/5star10comp.mp4',
  ],
  async fetch() {
    this.isLoaded = false
    const characterData = await CharacterService.getCharacters()
    const weaponData = await CharacterService.getWeapons()
    this.$store.commit('Characters/setCharacters', characterData)
    this.$store.commit('Weapons/setWeapons', weaponData)
    this.isLoaded = true
  },
  computed: {
    ...mapGetters('Gacha/GachaVideo', ['getVideo']),
  },
  methods: {},
}
</script>

<style lang="scss">
.Gacha {
  width: 100%;
  display: flex;
  justify-content: center;
}
.notInLandscape {
  text-align: center;
  display: none;
}
@media screen and (orientation: portrait) {
  .notInLandscape {
    display: block;
  }
}
</style>