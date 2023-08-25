<template>
  <div class="home">
    <ButtonHover @click="handleClick">
      Hover this text
    </ButtonHover>
  </div>
</template>

<script setup lang="ts">
import ButtonHover from '@/lib/Buttons/ButtonHover.vue';

const handleClick = () => console.log(11111);


</script>

<style lang="scss" scoped>
</style>