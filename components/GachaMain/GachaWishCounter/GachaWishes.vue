<template>
  <div class="wishes">
    <img alt="wish" class="wishIcon" :src="wishIcons[getBannerType]" />
    <span>{{ getWishes }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GachaWishes',
  data() {
    return {
      wishIcons: {
        event: '/GachaIcons/eventWish.webp',
        standart: '/GachaIcons/standardWish.webp',
      },
    }
  },
  computed: {
    ...mapGetters('Gacha/Wishes', ['getWishes']),
    ...mapGetters('Gacha', ['getBannerType']),
  },
}
</script>

<style lang="scss" scoped>
.wishIcon {
  width: 25px;
  height: 25px;
}
.wishes {
  padding: 0px 7px;
  text-align: end;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.411);
  user-select: none;
}
</style>