<template>
  <div :class="['navbar', { show: active }]">
    <div class="icons">
      <NuxtLink to="/events">
        <img alt="event" src="/NavbarIcons/icon_Eventse.webp" />
      </NuxtLink>
      <NuxtLink to="/gacha">
        <img alt="wish" src="/NavbarIcons/icon_Wishe.webp" />
      </NuxtLink>
      <NuxtLink to="/inventory">
        <img alt="inventory" src="/NavbarIcons/icon_Inventorye.webp" />
      </NuxtLink>
      <NuxtLink to="/characters">
        <img alt="character" src="/NavbarIcons/icon_Character.webp" />
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
    transition: .3s;
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