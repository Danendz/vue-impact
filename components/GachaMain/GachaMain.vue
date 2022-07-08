<template>
  <div class="contentContainer">
    <div style="postiion: relative, height: 100%">
      <GachaVideo :video="getVideo" />
      <GachaContent />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GachaMain',

  computed: {
    ...mapGetters('Gacha/GachaVideo', ['getVideo']),
  },
}
</script>

<style lang="scss" scoped>
.contentContainer {
  width: 1200px;
  position: relative;
  overflow: hidden;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 43%);
  padding: 10px;
}
@media only screen and (max-width: 960px) {
  .contentContainer {
    border-radius: 0;
    box-shadow: unset;
    padding: 0;
  }
}

@media screen and (orientation: portrait) {
  .contentContainer {
    display: none;
  }
}
</style>