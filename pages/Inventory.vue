<template>
  <div v-if="!isLoaded">Loading...</div>
  <div v-else class="inventory">
    <CategoriesContainer />
    <CategoryContent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CharacterService from '~/API/charactersService'
export default {
  name: 'Inventory',
  data() {
    return {
      isLoaded: false,
    }
  },
  async fetch() {
    this.isLoaded = false
    const weapons = await CharacterService.getWeapons()
    this.$store.commit('Inventory/setCategoryContent', [0, weapons])
    this.$store.commit('Inventory/setCategoryContent', [1, weapons])
    this.isLoaded = true
  },
  computed: {
    ...mapGetters('Inventory', ['getCategoryContent']),
  },
}
</script>

<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 930px) {
  .inventory {
    flex-direction: row;
  }
}
@media only screen and (max-height: 620px) and (orientation: landscape) {
  .inventory {
    height: 95vh;
  }
}
</style>