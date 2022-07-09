<template>
  <transition name="fade" appear>
    <div v-show="!getIsGaching" class="wishCounterContainer">
      <GachaPrimogems />
      <GachaWishes />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GachaWishCounter',
  computed: {
    ...mapGetters('Gacha/Gaching', ['getIsGaching']),
  },
}
</script>

<style lang="scss">
.wishCounterContainer {
  position: absolute;
  top: 30px;
  right: 60px;
  display: flex;
  font-size: 18px;
  gap: 25px;
}

@media only screen and (max-width: 960px) {
  .wishCounterContainer {
    top: 5px;
    right: 20px;
    font-size: 15px;
  }
}
</style>