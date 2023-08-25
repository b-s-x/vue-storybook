<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import '@common';

.button {
  @extend %reset-button;

  cursor: pointer;
  position: relative;
}

.button::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.button:hover::before {
  transform: scaleX(1);
}
</style>