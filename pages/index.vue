<template>
 <div>
  Home page
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters('Gacha', ['getCharacters', 'getBannerType'])
  },
  methods: {
    summon(){
      this.$store.commit('Gacha/summonCharacters', 10)
    }
  }
}
</script>