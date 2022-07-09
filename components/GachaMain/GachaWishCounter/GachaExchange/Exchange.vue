<template>
  <div class="btnsContainer">
    <ExchangeTitle />
    <ExchangeSystem />
    <div class="consume">
      <h3>Consume:</h3>
      <img alt="crystal" src="/GachaIcons/crystal.webp" />
      <span>{{ getExchangeValue }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExchangeTitle from './ExchangeTitle.vue'
import ExchangeSystem from './ExchangeSystem.vue'
export default {
  name: 'GachaExchange',
  components: { ExchangeTitle, ExchangeSystem },
  computed: {
    ...mapGetters('Gacha/ExchangeValue', ['getExchangeValue']),
  },
}
</script>

<style lang="scss" scoped>
.btnsContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  gap: 20px;
  align-items: center;
  .consume {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    span {
      color: #e74c3c;
    }
    h3 {
      color: #34495e;
    }
  }
}
@media only screen and (max-width: 960px) {
  .btnsContainer {
    gap: 10px;
  }
}
</style>