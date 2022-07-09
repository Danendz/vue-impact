<template>
  <div class="exchangeBtnsContainer">
    <div class="exchangeBtns">
      <button @click="decrement(1)">-</button>
      <span>{{ getExchangeValue }}</span>
      <button @click="increment(1)">+</button>
    </div>
    <div class="addMore">
      <button @click="set(0)">Min</button>
      <button @click="decrement(100)">- 100</button>
      <button @click="increment(100)">+ 100</button>
      <button @click="increment(getCrystals)">Max</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ExchangeSystem',
  computed: {
    ...mapGetters('Gacha/ExchangeValue', ['getExchangeValue']),
    ...mapGetters('Gacha/Crystals', ['getCrystals']),
  },
  methods: {
    increment(value) {
      if (this.getExchangeValue + value <= this.getCrystals) {
        this.$store.commit('Gacha/ExchangeValue/increment', value)
      } else if (
        this.getExchangeValue + (this.getCrystals - this.getExchangeValue) <=
        this.getCrystals
      ) {
        this.$store.commit(
          'Gacha/ExchangeValue/increment',
          this.getCrystals - this.getExchangeValue
        )
      }
    },

    decrement(value) {
      this.$store.commit('Gacha/ExchangeValue/decrement', value)
    },
    set(value) {
      this.$store.commit('Gacha/ExchangeValue/set', value)
    },
  },
}
</script>

<style lang="scss">
.exchangeBtnsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .exchangeBtns {
    width: fit-content;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    gap: 3px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.288);
    button {
      font-size: 17px;
      color: white;
      background-color: #34495e;
      border: 0;
      cursor: pointer;
      user-select: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      padding-left: 10px;
      padding-right: 10px;
      transition: 0.3s;
      &:hover {
        background-color: rgba(52, 73, 94, 0.451);
        color: white;
      }
    }
    span {
      text-align: center;
      user-select: none;
      color: white;
      width: 70px;
      height: 20px;
    }
  }

  .addMore {
    display: flex;
    gap: 10px;
    button {
      font-size: 17px;
      color: white;
      background-color: #34495e;
      border: 0;
      cursor: pointer;
      user-select: none;
      transition: 0.3s;
      padding: 5px 10px;
      width: 90px;
      border-radius: 15px;
      &:hover {
        background-color: rgba(52, 73, 94, 0.451);
        color: white;
      }
    }
  }
}
</style>