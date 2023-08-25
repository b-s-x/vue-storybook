<template>
  <div class="home">
    <ButtonUnderlineHover @click="handleClick">
      Hover this text
    </ButtonUnderlineHover>
  </div>
</template>

<script setup lang="ts">
import ButtonUnderlineHover from '@/lib/Buttons/ButtonUnderlineHover.vue';

const handleClick = () => console.log(11111);


</script>

<style lang="scss" scoped>
</style>