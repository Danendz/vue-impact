<template>
  <div><button @click="back">back</button></div>
</template>

<script>
export default {
  name: 'GachaWishContent',
  methods: {
    back() {
      this.$store.commit('Gacha/GachaWishContent/setIsVisible', false)
      this.$store.commit('Gacha/Gaching/setIsGaching', false)
    },
  },
}
</script>

<style>
</style>