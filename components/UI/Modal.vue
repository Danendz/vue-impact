<template>
  <div :class="[modal, { active: modal }]" @click="set">
    <div
      :style="{ backgroundColor: bgColor }"
      class="modal_content"
      @click="$event.stopPropagation()"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    bgColor: {
      type: String,
      required: false,
      default: '#34495e',
    },
    modal: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    set() {
      this.$emit('setModal', false)
    },
  },
}
</script>

<style lang="scss" >
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;

  .modal_content {
    position: relative;
    border-radius: 20px;
    width: 540px;
    height: 85vh;
  }

  .modal.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 730px) {
  .modal_content {
    margin: 0 10px;
    height: 70vh;
    margin-bottom: 100px;
  }
}
</style>