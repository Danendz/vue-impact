<template>
  <div v-if="data === null" class="content-container">
    Здесь ничегошеньки нет
  </div>

  <div v-else class="content-container">
    <transition appear name="fade" mode="out-in">
      <div :key="getCategoryNumber" class="items-container">
        <InventoryItems
          v-for="({ icon, name }, index) in data"
          :id="index"
          :key="name"
          :icon="icon"
          @setSelected="setSelected"
        />
      </div>
    </transition>
    <transition appear name="fade" mode="out-in">
    <InventoryItem :key="getCategoryNumber" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CategoryContent',
  computed: {
    ...mapGetters('Inventory', [
      'getCategoryNumber',
      'getCategoryContent',
      'getSelectedItem',
    ]),
    data() {
      const data = this.getCategoryContent[this.getCategoryNumber].data
      if (data.length === 0) {
        return null
      }
      this.setSelected(0)
      return data
    },
  },
  methods: {
    setSelected(id) {
      this.$store.commit('Inventory/setCategoryItemSelected', id)
    },
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 15px;
  button {
    width: 50px;
    height: 80%;
  }
  .items-container {
    padding: 15px 0 15px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 830px;
    height: 85vh;
    overflow-y: scroll;
    margin-left: 20px;
  }
}
@media only screen and (max-width: 930px) {
  .content-container {
    .items-container {
      gap: 10px;
      width: 100%;
      height: 90vh;
    }
  }
}

@media only screen and (max-height: 620px) and (orientation: landscape) {
  .content-container {
    margin-top: 10px;
    .items-container {
      width: 70%;
      margin-left: 0px;
    }
  }
}
</style>