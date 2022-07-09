<template>
  <div>
    <!--     <img
      class="gachaVideo"
      src="/GachaImages/backgroundHolder.png"
      alt="holder"
    /> -->
    <video
      :key="video"
      style="background-image: url('/GachaImages/backgroundHolder.png')"
      :muted="!getIsGaching"
      :loop="!getIsGaching"
      autoplay="autoplay"
      class="gachaVideo"
      @ended="setBgVideo"
    >
      <source :src="video" type="video/mp4" />
      <p>{{ getIsGaching }}</p>
    </video>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GachaVideo',

  props: {
    video: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters('Gacha/Gaching', ['getIsGaching']),
  },

  methods: {
    setBgVideo() {
      this.$store.commit('Gacha/GachaVideo/setVideo', 'bg')
      this.$store.commit('Gacha/GachaWishContent/setIsVisible', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.gachaVideo {
  position: relative;
  width: 100%;

  border-radius: 15px;
  background-size: cover;
}
@media only screen and (max-width: 960px) {
  .gachaVideo {
    border-radius: 0;
    height: 100vh;
  }
}
</style>