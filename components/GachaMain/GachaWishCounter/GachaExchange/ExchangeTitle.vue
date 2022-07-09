<template>
  <div class="exchangeTitle">
    <h1>Reedem Primogems</h1>
    <div class="reedem">
      <div>
        <img alt="crystal icon" src="/GachaIcons/crystal.webp" />
        <h2>Genesis Crystal x1</h2>
      </div>
      <div>
        <img alt="primogem" src="/GachaIcons/wish_Primogem.png" />
        <h2>Primogem x1</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeTitle',
}
</script>

<style lang="scss" >
.exchangeTitle {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    width: 100%;
    text-align: center;
    color: #34495e;
    border-bottom: 1px solid #34495e;
    font-weight: 600;
  }
  .reedem {
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
    background-color: #d2cabd;
    width: 100%;

    &::after {
      content: '=>';
      position: absolute;
      font-size: 35px;
      font-weight: 600;
    }

    h2 {
      font-size: 20px;
      text-align: center;
      font-weight: 600;
      user-select: none;
      color: #34495e;
    }
    img {
      width: 90px;
      height: 90px;
      user-select: none;
      -webkit-user-drag: none;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 10px;
      width: 100%;
    }
    div:last-child {
      background-color: #ebd6a1;
    }
  }
}

@media only screen and (max-width: 960px) {
  .exchangeTitle {
    .reedem {
      img {
        width: 50px;
        height: 50px;
      }
      h2 {
        font-size: 15px;
      }
    }
  }
}
</style>