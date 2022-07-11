<template>
  <div class="inventory">
    <CategoriesContainer />
    <CategoryContent />
  </div>
</template>

<script>
export default {
  name: 'Inventory',
}
</script>

<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
}
@media only screen and (max-width: 930px){
  .inventory{
    flex-direction: row;
  }
}
</style>