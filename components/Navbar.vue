<template>
  <div :class="['navbar', { show: active }]">
    <div class="icons">
      <NuxtLink to="/events">
        <img
          alt="event"
          src="https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Icon_Events.png/"
        />
      </NuxtLink>
      <NuxtLink to="/gacha">
        <img
          alt="wish"
          src="https://static.wikia.nocookie.net/gensin-impact/images/5/59/Icon_Wish.png/"
        />
      </NuxtLink>
      <NuxtLink to="/inventory">
        <img
          alt="inventory"
          src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Icon_Inventory.png/"
        />
      </NuxtLink>
      <NuxtLink to="/characters">
        <img
          alt="character"
          src="https://static.wikia.nocookie.net/gensin-impact/images/1/11/Icon_Character_Aether.png/"
        />
      </NuxtLink>
    </div>
    <i
      :class="['fa-solid', 'fa-chevron-down', 'arrow', { rotateArrow: active }]"
      @click="toggleNav"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggleNav() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  transform: translateY(-100%);
  transition: 0.3s;
  top: 0;
  color: black;
  z-index: 101;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background: #e5e2db96;
  padding: 3px 0;

  .arrow {
    transition: 0.3s;
    cursor: pointer;
    width: 35px;
    text-align: center;
    background: #e5e2dbb4;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    bottom: -20px;
  }
  .icons {
    padding: 5px 0;
    display: flex;
    gap: 15px;
    img {
      width: 40px;
      height: 40px;
      transition: 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
.show {
  transform: translateY(0);
}
.rotateArrow {
  transform: rotate(180deg);
}
@media only screen and (max-width: 960px) {
  .navbar {
    padding: 3px 0;
    .icons {
      padding: 5px 0;
      display: flex;
      gap: 15px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>