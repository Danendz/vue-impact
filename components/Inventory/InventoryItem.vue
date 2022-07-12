<template>
  <div class="item-container">
    <div :style="{backgroundColor: colors[data.rarity.toString()]}" class="title">
      <h2>{{ data.name }}</h2>
    </div>
    <div class="stats">
      <div>
        <p class="weapon-type">{{ data.type }}</p>
        <span>{{ data.subStat }}</span>
        <p class="sub-stat">49.6%</p>
        <span>Base ATK</span>
        <p class="main-stat">{{ data.baseAttack }}</p>
        <p>{{ '*' * data.rarity }}</p>
      </div>
      <img :src="icon" />
    </div>
    <div class="passive">
      <div class="lvl">
        <span class="level">Lv. 1/90</span>
        <span class="stars">*****</span>
        <span class="lock">Lock</span>
      </div>
      <div class="refinment">
        <span class="r-lvl">1</span><span class="r-text">Refinment Rank 1</span>
      </div>
      <div class="passive-description">
        <h4>{{ data.passiveName }}</h4>
        <p>* {{ data.passiveDesc }}</p>
        <p class="additional-description">Adittional description....</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InventoryItem',
  data(){
    return{
        colors: {
        "5": '#bc6a32',
        "4": '#866ea8',
        "3": '#738ca2'
      }
    }
  },
  computed: {
    ...mapGetters('Inventory', [
      'getCategoryNumber',
      'getCategoryContent',
      'getSelectedItem',
    ]),
    data() {
      const data = this.getCategoryContent[this.getCategoryNumber].data
      return data[this.getSelectedItem].data
    },
    icon() {
      return this.getCategoryContent[this.getCategoryNumber].data[
        this.getSelectedItem
      ].icon
    },
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  width: 400px;
  height: 85vh;

  background: #eae0d4;
  border-radius: 5px;
  .title {
    background: #bc6a32;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 8px;
    width: 100%;
    h2 {
      margin-left: 10px;
    }
  }
  .stats {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
    align-items: flex-end;
    background: rgb(113, 85, 82);
    background: linear-gradient(
      90deg,
      rgba(113, 85, 82, 1) 0%,
      rgba(228, 172, 87, 1) 100%
    );
    img {
      width: 150px;
      height: 150px;
    }
    div {
      padding: 15px;
      margin-left: 15px;
      p {
        font-weight: 600;
      }
      span {
        font-weight: 600;
        font-size: 15px;
        color: #9e8984;
      }
      .weapon-type {
        font-size: 19px;
      }
      .sub-stat {
        font-size: 21px;
      }
      .main-stat {
        font-weight: 800;
        font-size: 40px;
      }
    }
  }
  .passive {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 70%;
    .lvl {
      display: flex;
      margin: 15px 15px 0px 15px;
      justify-content: space-between;
      align-items: center;
      .level,
      .lock {
        padding: 5px 6px;
        font-weight: 600;
        border-radius: 4px;
        background: #3f4953;
      }
      .stars {
        font-size: 30px;
      }
    }
  }
  .refinment {
    display: flex;
    margin: 15px;
    align-items: center;

    .r-text {
      margin-left: 5px;
      font-size: 23px;
      font-weight: 600;
      color: #d3b979;
    }
    .r-lvl {
      background: #635e58;
      font-weight: 600;
      color: #c7c7c7;
      font-size: 23px;
      padding: 2px 7px;
    }
  }
  .passive-description {
    height: 100%;
    overflow-y: scroll;
    margin: 0px 15px;
    h4,
    p {
      font-weight: 600;
      font-size: 20px;
      color: #5c5e6d;
    }
    p {
      margin-left: 5px;
    }
    .additional-description {
      color: #818181;
      margin-left: 0;
      margin-top: 10px;
    }
  }
}
@media only screen and (orientation: portrait) {
  .content-container {
    .item-container {
      display: none;
    }
  }
}
@media only screen and (max-height: 820px) and (orientation: landscape) {
  .content-container {
    .item-container {
      overflow-y: scroll;
    }
  }
}

@media only screen and (max-height: 620px) and (orientation: landscape) {
  .item-container {
    height: 95vh;

    .stats {
      align-items: flex-end;
      img {
        width: 120px;
      }
      div {
        padding: 5px;
        margin-left: 10px;
        p {
          font-weight: 600;
        }
        span {
          font-weight: 600;
          font-size: 15px;
          color: #9e8984;
        }
        .weapon-type {
          font-size: 17px;
        }
        .sub-stat {
          font-size: 19px;
        }
        .main-stat {
          font-weight: 800;
          font-size: 30px;
        }
      }
    }
  }
}
</style>