<template>
  <button :class="{ active: id === currentActive }" @click="setCurrentCategory">
    <img :src="link" alt="category" />
  </button>
</template>

<script>
export default {
  name: 'CategoryButton',
  props: {
    link: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    currentActive: {
      type: Number,
      required: true,
    },
  },
  methods: {
    setCurrentCategory() {
      this.$emit('setCurrent', this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  background: transparent;
  border: 0;
  transition: 0.3s;
  padding: 5px;
}
img {
  border-radius: 50%;
  padding: 6px;
  width: 50px;
  height: 50px;
  transition: 0.3s;
  &:hover {
    background: white;
  }
}
</style>