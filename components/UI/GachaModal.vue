<template>
  <transition name="fade">
    <div
      :key="modal"
      :class="['gacha_modal', { active: modal }]"
      @click="close"
    >
      <div
        :style="{ backgroundColor: bgColor }"
        class="gacha_modal_content"
        @click="$event.stopPropagation()"
      >
        <div class="customContentContainer">
          <slot> </slot>
          <div class="resultBtns">
            <button @click="close">Cancel</button>
            <button @click="confirm">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GachaModalWindow',
  props: {
    bgColor: {
      type: String,
      required: false,
      default: '#e5e2db',
    },
    modal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('setModal')
    },
    confirm() {
      this.$emit('confirm')
    },
  },
}
</script>

<style lang="scss" >
.gacha_modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.24);
  z-index: 1;

  .gacha_modal_content {
    position: relative;
    background-color: #e5e2db;
    border-radius: 10px;
    width: 640px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding: 20px 0;

    color: white;
    .customContentContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 90%;
      gap: 20px;
      align-items: center;
    }
    .resultBtns {
      display: flex;
      gap: 10px;
      button {
        font-size: 17px;
        color: #e5e2db;
        background-color: #34495e;
        border: 0;
        cursor: pointer;
        user-select: none;
        transition: 0.3s;
        width: 100px;
        border-radius: 10px;
        padding: 5px 2px;
        &:hover {
          background-color: rgba(52, 73, 94, 0.451);
          color: white;
        }
      }
    }
  }
}

.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 960px) {
  .gacha_modal {
    .gacha_modal_content {
      width: 450px;
      .customContentContainer {
        gap: 8px;
      }
    }
  }
}
</style>