<script setup lang="ts">
import { Cursor } from './index';

new Cursor();

</script>

<template>
  <div id="cursor"/>
</template>

<style lang="scss">

$size: 20px;
$cursor-x: var(--cursor-x);
$cursor-y: var(--cursor-y);

#cursor {
  position: fixed;
  top: 0;
  left: 0;
  height: $size;
  width: $size;
  background-color: #000;
  border-radius: 50%;
  transform: translate3d(
    calc(100vw * $cursor-x - $size / 2),
    calc(100vh * $cursor-y - $size / 2),
    0
  );
  pointer-events: none;
}
</style>