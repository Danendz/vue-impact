<template>
  <div class="categories-container">
    <div class="title">
      <img
        src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/"
        alt="inventory"
      />
      <h3>{{getCategoryContent[getCategoryNumber].title}}</h3>
    </div>
    <div class="categories">
      <CategoryButton
        v-for="(link, index) in $options.categories"
        :id="index"
        :key="index"
        :current-active="getCategoryNumber"
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
import { mapGetters } from 'vuex'
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
  ],
  computed: {
    ...mapGetters('Inventory', ['getCategoryNumber', 'getCategoryContent']),
  },
  methods: {
    setCurentCategory(id) {
      this.$store.commit('Inventory/setCategory', id)
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
      cursor: default;
      color: #d4bd91;
    }
    img {
      width: 50px;
      height: 50px;

      user-select: none;
      -webkit-user-drag: none;
      margin-right: 15px;
    }
  }
  .categories {
    display: flex;
    transition: 0.3s;

    button {
      border-bottom: 1px solid transparent;
    }
    .active {
      border-bottom-color: #d4bd91;
      img {
        background: white;
      }
    }

    img {
      width: 50px;
      height: 50px;
    }
  }

  .itemCounter {
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 15px;
    color: #d4bd91;
    h3 {
      cursor: default;
      color: #d4bd91;
    }
    span {
      cursor: default;
      margin-left: 15px;
    }
  }
}
@media only screen and (max-width: 1060px) {
  .categories-container {
    .title {
      margin-left: 0;
    }
  }
}
@media only screen and (max-width: 930px) {
  .categories-container {
    width: fit-content;
    height: 100vh;
    flex-direction: column;
    .title {
      h3 {
        display: none;
      }
      img {
        margin-right: 0;
        width: 40px;
        height: 40px;
      }
    }
    .categories {
      flex-direction: column;
      margin-top: 5px;
      border-right: 1px solid transparent;
      button {
        border-bottom: 0;
      }
      img {
        width: 45px;
        height: 45px;
      }
      .active {
        border-right: 1px solid #d4bd91;
      }
    }
    .itemCounter {
      h3 {
        display: none;
      }
      span {
        display: none;
      }
    }
  }
}
@media only screen and (max-width: 930px) and (orientation: landscape) {
  .categories-container {
    .title {
      img {
        width: 30px;
        height: 30px;
      }
    }
    .categories {
      overflow-y: scroll;
      img {
        width: 35px;
        height: 35px;
      }
    }
  }
}
</style>