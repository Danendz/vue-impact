<template>
  <div>
    <TempModal :modal="modal">У вас недостаточно средств!</TempModal>
    <div class="wishBtns">
      <button @click="summonPreCalculate(1)">Использовать 1</button>
      <button @click="summonPreCalculate(10)">Использовать 10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WishBtns',
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    ...mapGetters('Gacha', ['getItems']),
    ...mapGetters('Gacha/Primogems', ['getPrimogems']),
    ...mapGetters('Gacha/Wishes', ['getWishes']),
  },
  methods: {
    summonPreCalculate(value) {
      const totalWishes = this.getWishes
      const totalPrimogems = this.getPrimogems
      if (totalWishes < value) {
        const cost = totalPrimogems - (value - totalWishes) * 160
        if (cost < 0) {
          this.modal = true
          setTimeout(() => {
            this.modal = false
          }, 2000)
          return
        }
      }
      this.summon(value)
    },
    summon(value) {
      this.calculate(value)
      this.$store.commit('Gacha/summonCharacters', value)
      const items = this.getItems
      const itemsRarity = items.map((item) => item[0])
      const maxRarity = Math.max(...itemsRarity)
      const videoType = maxRarity + 'star' + value
      this.$store.commit('Gacha/GachaVideo/setVideo', videoType)
      this.$store.commit('Gacha/Gaching/setIsGaching', true)
    },
    calculate(value) {
      const totalWishes = this.getWishes
      if (value > totalWishes) {
        value -= totalWishes
        this.$store.commit('Gacha/Primogems/remove', value * 160)
        this.$store.commit('Gacha/Wishes/remove', totalWishes)
      } else {
        this.$store.commit('Gacha/Wishes/remove', value)
      }
    },
  },
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