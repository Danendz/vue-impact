<template>
  <div>
    <GachaModal :modal="modal" @setModal="setModal" @confirm="confirm">
      <Exchange />
    </GachaModal>
    <div class="primogems" @click="setModal">
      <img
        class="primogemIcon"
        alt="primogem"
        src="/GachaIcons/wish_Primogem.png"
      />
      <span>{{ getPrimogems }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Exchange from './GachaExchange/Exchange.vue'

export default {
  name: 'GachaPrimogems',
  components: { Exchange },
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    ...mapGetters('Gacha/Primogems', ['getPrimogems']),
    ...mapGetters('Gacha/ExchangeValue', ['getExchangeValue']),
  },
  methods: {
    setModal() {
      this.modal = !this.modal
    },
    confirm() {
      this.$store.commit('Gacha/Crystals/remove', this.getExchangeValue)
      this.$store.commit('Gacha/Primogems/add', this.getExchangeValue)
      this.$store.commit('Gacha/ExchangeValue/set', 0);
      this.setModal()
    },
  },
}
</script>

<style lang="scss" scoped>
.primogems {
  padding: 0px 7px;
  text-align: end;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.411);
  user-select: none;

  & span {
    margin-right: 20px;
  }

  &::after {
    content: '+';
    position: absolute;
    font-weight: 900;
    display: flex;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    right: 2px;
    text-align: center;
    width: 20px;
    top: 3px;
    height: 19px;
    border-radius: 50%;
    color: black;
    background-color: white;
  }
  .primogemIcon {
    width: 25px;
    height: 25px;
  }
}
</style>