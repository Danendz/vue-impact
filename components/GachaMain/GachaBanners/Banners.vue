<template>
  <div class="bannerBtns">
    <BannerBtns
      v-for="(image, index) in $options.images"
      :id="index"
      :key="image"
      :src="image"
      :banner-id="bannerId"
      @change="change"
    />
  </div>
</template>

<script>
export default {
  name: 'Banners',
  props: {
    bannerId: {
      type: Number,
      required: true,
    },
  },
  images: [
    '/GachaBannerImages/eventCharacterBanner.png',
    '/GachaBannerImages/eventCharacterWeapon.png',
    '/GachaBannerImages/standartBanner.png',
  ],
  methods: {
    change(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.bannerBtns {
  display: flex;
  position: absolute;
  top: -80px;
}

@media only screen and (max-width: 960px) {
  .bannerBtns {
    top: unset;
    flex-direction: column;
    left: 0px;
  }
}
</style>