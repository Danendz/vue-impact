<template>
  <div class="Gacha">
    <h1 class="notInLandscape">
      Пожалуйста перевени свой телефон чтобы все заработало!
    </h1>
    <GachaMain />
  </div>
</template>

<script>
/* import axios from 'axios' */
export default {
  name: 'GachaSystem',
}
</script>

<style lang="scss">
.Gacha {
  width: 100%;
  display: flex;
  justify-content: center;
}
.notInLandscape {
  text-align: center;
  display: none;
}
@media screen and (orientation: portrait) {
  .notInLandscape {
    display: block;
  }
}
</style>