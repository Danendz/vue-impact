<template>
  <div class="contentContainer">
    <div style="position: relative; height: 100%">
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
  width: 100%;
  position: relative;
  overflow: hidden;
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 100;
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