<template>
  <div class="wishBtns">
    <button @click="summon(1)">Использовать 1</button>
    <button @click="summon(10)">Использовать 10</button>
  </div>
</template>

<script>
export default {
    name: 'WishBtns',
    methods: {
        summon(value){
            this.$store.commit('Gacha/Gaching/setIsGaching',true)
            this.$store.commit('Gacha/GachaVideo/setVideo', '3star1')
        }
    }
}
</script>

<style lang="scss" scoped>
.wishBtns {
  position: absolute;
  bottom: -80px;
  right: -60px;
  button {
    margin: 0 15px;
    width: 150px;
    border-radius: 10px;
    border: 0;
    color: black;
    padding: 10px;
    transition: 0.3s;
    user-select: none;
    -webkit-user-drag: none;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
  }
}

@media only screen and (max-width: 960px) {
  .wishBtns button {
    width: 170px;
    padding: 8px;
  }
  .wishBtns {
    right: 0;
  }
}
</style>