<template>
    <div
      :class="['item', { activeItem: getSelectedItem === id }]"
      @click="setSelectedItem"
    >
      <img  ref="icon" :src="icon" alt="item" :style="{backgroundColor: colors[rarity]}" />
      <p>1. LvL</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InventoryItems',
  props: {
    icon: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    rarity: {
      type: String, 
      required: true
    }
  },
  data(){
    return{
      colors: {
        "5": '#be8233',
        "4": '#866ea8',
        "3": '#738ca2'
      }
    }
  },
  computed: {
    ...mapGetters('Inventory', ['getSelectedItem']),
  },
  methods: {
    setSelectedItem() {
      this.$emit('setSelected', this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  border-radius: 5px;
  transition: 0.3s;
  background: white;
  width: fit-content;
  cursor: pointer;
  height: fit-content;
  img {
    width: 100px;
    min-width: 100px;
    min-height: 100px;
    height: 100px;
    -webkit-user-drag: none;
    border-radius: 4px;
    border-bottom-right-radius: 25px;
    background-color: #738ca2;
    user-select: none;
  }
  p {
    width: 100%;
    font-weight: 600;
    color: black;
    text-align: center;
    user-select: none;
  }
  &:hover {
    box-shadow: 0px 0px 10px white;
  }
}
.activeItem {
  box-shadow: 0px 0px 15px white;
}
@media only screen and (max-width: 930px) {
  .item {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
@media only screen and (max-width: 420px) {
  .item {
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>