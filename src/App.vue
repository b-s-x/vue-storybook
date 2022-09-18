<template>
  <div class="home">
    <Carousel
      class="carousel"
      navigation
      pagination
      timeout="3000"
      startAutoPlay
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
            class="slide_img"
            :src="`./images/${name}.${extension}`"
            :alt="`slide-${name}`"
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

.home {
  height: 300px;
  width: 500px;
}

.carousel {
  position: relative;
  max-height: 100%;
  height: 100%;
}

.slide {
  &_info {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>