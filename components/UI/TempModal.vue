<template>
  <div :class="[temp_modal, { active: modal }]">
    <div
      style="background-color: rgba(0, 0, 0, 0.44)"
      class="temp_modal_content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TempModalWindow',
  props: {
    modal: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" >
.temp_modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.24);
  z-index: 1;

  .temp_modal_content {
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
  }

  .temp_modal.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 730px) {
  .temp_modal_content {
    width: 450px;
  }
}
</style>