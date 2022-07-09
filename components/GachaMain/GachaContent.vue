<template>
  <div>
    <transition name="fade" appear>
      <GachaBanners v-show="!getIsGaching" />
    </transition>
    <transition name="fade-wishContent">
      <GachaWishContent v-if="getIsVisible" />
    </transition>
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
.fade-wishContent-enter-active,
.fade-enter-active {
  animation: fade 0.4s;
}
.fade-leave-active {
  animation: fade 0.3s reverse;
}
.fade-wishContent-leave-active {
  animation: fade 0.1s reverse;
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