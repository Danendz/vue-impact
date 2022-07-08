<template>
  <div>
    <transition name="fade">
      <GachaBanners v-show="!getIsGaching" />
    </transition>
    <GachaWishContent v-show="getIsVisible" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GachaContent',
  computed: {
    ...mapGetters('Gacha/Gaching', ['getIsGaching']),
    ...mapGetters('Gacha/GachaWishContent', ['getIsVisible']),
  },
}
</script>

<style lang="scss">
.fade-enter-active {
  animation: fade 0.3s;
}
.fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>