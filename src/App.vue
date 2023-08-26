<template>
  <div class="home">
    <ButtonRipple @click="handleClick">
      Hover this text
    </ButtonRipple>
  </div>
</template>

<script setup lang="ts">
import ButtonRipple from '@/lib/Buttons/ButtonRipple.vue';

const handleClick = () => console.log(11111);


</script>

<style lang="scss" scoped>
</style>