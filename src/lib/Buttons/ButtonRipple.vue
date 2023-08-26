<template>
  <button
    type="button"
    class="button"
    :disabled="ripple"
    @click="onClick"
  >

    <Transition
      name="ripple"
      @enter="rippleEnter"
      @after-enter="afterRippleEnter"
    >
      <span v-if="ripple" ref="ripple" class="ripple" />
    </Transition>

    <span class="label">
      <slot>BUTTON LABEL</slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue';

const ripple = ref(false);
const x = ref(0);
const y = ref(0);

const onClick = (e) => {
  x.value = e.layerX;
  y.value = e.layerY;
  ripple.value = !ripple.value;
}

const rippleEnter = (el, done) => {
  el.style.top = `${y.value}px`;
  el.style.left = `${x.value}px`;
  done();
}

const afterRippleEnter = (el) => ripple.value = false;

</script>

<style lang="scss" scoped>
@import '@common';
$button-color: rgb(104, 67, 192);

.button {
  @extend %reset-button;

  cursor: pointer;
  position: relative;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 4px;
  overflow: hidden;
  background-color: $button-color;

  &:hover {
    background-color: darken($button-color, 10%);
  }

  &:disabled {
    background-color: darken($button-color, 10%);
  }
}

.label {
  display: block;
  pointer-events: none;
  color: white;
}

.ripple {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  background-color: rgba(lighten($button-color, 20%), 0.8);
  opacity: 0;
}

.ripple-leave-active {
  animation: ripple-leave 0.4s ease-in-out;
}

@keyframes ripple-leave {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(10);
  }
}
</style>

