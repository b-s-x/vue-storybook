<template>
  <div class="home">
    <Carousel
      class="carousel"
      navigation
      pagination
      startAutoPlay
      timeout="3000"
      v-slot="{ currentSlide }"
    >
      <Slide
        v-for="{ id, name, extension } of carouselSlides"
        :key="id"
      >
        <div
          class="slide_info"
          v-show="currentSlide === id"
        >
          <img
            :src="`./images/${name}.${extension}`"
            alt="slide"
          >
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import Carousel from './lib/Sliders/SliderOne/Carousel.vue';
import Slide from './lib/Sliders/SliderOne/Slide.vue';
import { carouselSlides } from './lib/Sliders/SliderOne/mock.js';
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;

  .slide_info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;

    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>