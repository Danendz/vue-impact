<template>
  <div class="Gacha">
    <h1 class="notInLandscape">
      Пожалуйста перевени свой телефон чтобы все заработало!
    </h1>
    <progress v-show="!isLoaded" :value="progress" max="100">
      {{ progress }}
    </progress>
    <GachaMain v-show="isLoaded" />
  </div>
</template>

<script>
/* import axios from 'axios' */
export default {
  name: 'GachaSystem',
  data() {
    return {
      downloadedVideos: [],
      isLoaded: false,
      progress: 0,
    }
  },
  videos: [
    '/gachaVideos/backgroundCropped.mp4',
    '/gachaVideos/3star1comp.mp4',
    '/gachaVideos/4star1comp.mp4',
    '/gachaVideos/4star10comp.mp4',
    '/gachaVideos/5star1comp.mp4',
    '/gachaVideos/5star10comp.mp4',
  ],
  async beforeMount() {
    this.isLoaded = false
    await this.get()
    this.isLoaded = true
  },
  methods: {
    async get() {
      await this.$options.videos.forEach(async (link) => {
        const res = await fetch(link)
        const blob = await res.blob()
        this.progress += 16.6
        console.log(this.progress)
        console.log(URL.createObjectURL(blob))
      })
    },
  },
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