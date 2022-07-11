<template>
  <div class="categories-container">
    <div class="title">
      <img
        src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/"
        alt="inventory"
      />
      <h3>Weapons</h3>
    </div>
    <div class="categories">
      <CategoryButton
        v-for="(link, index) in $options.categories"
        :id="index"
        :key="index"
        :current-active="currentActive"
        :link="link"
        @setCurrent="setCurentCategory"
      />
    </div>
    <div class="itemCounter">
      <h3 class="title">Weapons</h3>
      <span>50/2000</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesContainer',
  categories: [
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
    'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/',
  ],
  data() {
    return {
      currentActive: 0,
    }
  },
  methods: {
    setCurentCategory(id) {
      this.currentActive = id
    },
  },
}
</script>

<style lang="scss">
.categories-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.308);
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 45px;
    h3 {
      color: #d4bd91;
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
  }
  .categories {
    display: flex;
    transition: 0.3s;

    .active {
      border-bottom: 1px solid #d4bd91;

      img {
        background: white;
      }
    }
  }

  .itemCounter {
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 15px;
    color: #d4bd91;
    h3 {
      color: #d4bd91;
    }
    span {
      margin-left: 15px;
    }
  }
}
</style>