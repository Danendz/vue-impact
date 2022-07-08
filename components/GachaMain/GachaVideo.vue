<template>
  <div>
    <img
      v-show="!isLoaded"
      class="gachaVideo"
      src="/GachaImages/backgroundHolder.png"
      alt="holder"
    />
      <video
        v-show="isLoaded"
        :key="video"
        :muted="!getIsGaching"
        :loop="!getIsGaching"
        autoplay="autoplay"
        class="gachaVideo"
        @ended="setBgVideo"
        @loadeddata="setLoaded"
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
  data() {
    return {
      isLoaded: false,
    }
  },
  computed: {
    ...mapGetters('Gacha/Gaching', ['getIsGaching']),
  },
  watch: {
    video: {
      handler() {
        this.isLoaded = false
      },
    },
  },
  methods: {
    setLoaded() {
      this.isLoaded = true
    },
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
}
@media only screen and (max-width: 960px) {
  .gachaVideo {
    border-radius: 0;
  }
}
</style>