<template>
  <div class="wishContent">
    <div class="container">
      <div v-for="({ icon, data }, index) in wishItems" :key="index">
        <div :style="{backgroundColor: color[data.rarity]}" class="wishContent-item">
          <img class="wishImg" alt="wishImg" :src="icon" />
          <p>{{ data.name }}</p>
        </div>
      </div>
    </div>
    <button class="backBtn" @click="back">back</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GachaWishContent',
  data() {
    return{
      color: {
        3: '#3498db',
        4: '#9b59b6',
        5: '#f1c40f'
      }
    }
  },
  computed: {
    ...mapGetters('Gacha', ['getItems']),
    ...mapGetters('Weapons', ['getApiWeapons']),
    ...mapGetters('Characters', ['getApiCharacters']),
    wishItems() {
      const itemNames = this.getItems.map((item) => item[1])

      const chars = itemNames.map((name) =>
        this.getApiCharacters.find((char) => char.name === name)
      )

      const weapons = itemNames.map((name) =>
        this.getApiWeapons.find((weapon) => weapon.name === name)
      )

      const charsResult = chars.filter((char) => char !== undefined)
      const weaponsResult = weapons.filter((char) => char !== undefined)
      
      return [...charsResult, ...weaponsResult]
    },
  },
  methods: {
    back() {
      this.$store.commit('Gacha/GachaWishContent/setIsVisible', false)
      this.$store.commit('Gacha/Gaching/setIsGaching', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.wishImg {
  width: 100px;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-user-drag: none;
  user-select: none;
}
.wishContent {
  position: absolute;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  left: 0;
  padding: 20px;
}
.wishContent-item {
  background-color: rgba(0, 0, 0, 0.205);
  margin: 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 150px;
  font-size: 15px;
  border-radius: 15px;
}

.wishContent-item,
.backBtn {
  transition: 0.3s;
  cursor: pointer;

  user-select: none;
}

.wishContent-item:hover,
.backBtn:hover {
  transform: scale(1.1);
}

.wishContent-item p {
  padding: 10px;
  width: 100%;
  text-align: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #34495e;
}
.backBtn {
  width: 200px;
  padding: 10px;
  color: white;
  transition: 0.5s;
  border: 0;
  border-radius: 15px;
  background-color: #34495e;
  text-align: center;
}

.container {
  display: flex;
  padding: 15px;
  width: 80%;
  height: fit-content;
  margin-top: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
}
</style>