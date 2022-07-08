<template>
  <button
    :class="{ buttons: true, active: id === bannerId }"
    @click="changeBanner"
  >
    <img :src="src" alt="mini bannner" />
  </button>
</template>

<script>
export default {
  name: 'BannerBtns',
  props: {
    src: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    bannerId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeBanner() {
      this.$emit('change', this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.buttons {
  border: 0;
  background-color: transparent;
  width: 110px;
  margin: 0 15px;
  transition: 0.3s;
  user-select: none;
  transform: scale(1);
  -webkit-user-drag: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  img {
    border-radius: 10px;
    width: 100%;
    user-select: none;
    -webkit-user-drag: none;
  }
}
.active {
  transform: scale(1.1);
}
@media only screen and (max-width: 960px) {
  .buttons {
    margin: 10px 15px;
    width: 100px;
    img {
      width: 100%;
    }
  }
}
</style>