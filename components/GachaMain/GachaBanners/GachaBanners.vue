<template>
  <div class="content">
    <div class="banners">
      <Banners :banner-id="bannerId" @change="changeBanner" />
      <transition name="translate" mode="out-in">
        <img
          :key="bannerId"
          class="bannerImage"
          :src="$options.images[bannerId]"
          alt="banner"
        />
      </transition>
      <WishBtns />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GachaBanners',
  data() {
    return {
      bannerId: 0,
    }
  },
  images: [
    '/GachaBannerImages/eventCharacterBanner.png',
    '/GachaBannerImages/eventCharacterWeapon.png',
    '/GachaBannerImages/standartBanner.png',
  ],
  methods: {
    changeBanner(index) {
      this.bannerId = index
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .banners {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    height: 60%;
    justify-content: center;
    .bannerImage {
      width: 100%;
      user-select: none;
      -webkit-user-drag: none;
      border-radius: 10px;
    }
  }
  .translate-enter-active {
    animation: translate-in 0.4s;
  }
  .translate-leave-active {
    animation: translate-out 0.4s;
  }
  @keyframes translate-in {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes translate-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translate(-100px);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 960px) {
    .banners {
      margin-bottom: 50px;
      width: 100%;
      .bannerImage {
        width: 60%;
      }
    }
  }
}
</style>