<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import ChevronIcon from '@/icons/Chevron.vue';

  const props = defineProps({
    startAutoPlay: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: String,
      default: '5000',
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
  })

  const currentSlide = ref(1);
  const getSlideCount = ref<number | null>(null);
  const autoPlayEnabled = ref<boolean>(props.startAutoPlay);
  const timeoutDuration = ref<number | undefined>(Number(props.timeout));
  const paginationEnabled = ref<boolean>(props.pagination)
  const navigationEnabled = ref<boolean>(props.navigation)
  let intervalId = timeoutDuration.value;

  const nextSlide = () => {
    resetInterval();
    if (currentSlide.value === getSlideCount.value) {
      currentSlide.value = 1;
      return;
    }
    currentSlide.value += 1;
  }
  const prevSlide = () => {
    resetInterval();
    if (currentSlide.value === 1) {
       currentSlide.value = 1;
       return;
    }
    currentSlide.value -= 1;
  }

  const goToSlide = (index: number) => {
    resetInterval();
    currentSlide.value = index + 1;
  }
  const autoPlay = () => {
    intervalId = setInterval(() => nextSlide(), timeoutDuration.value)
  }
  const resetInterval = () => {
    clearInterval(intervalId);
    autoPlayEnabled.value && autoPlay()
  }

  autoPlayEnabled.value && autoPlay();

  onMounted(() => getSlideCount.value = document.querySelectorAll('.slide').length);
</script>

<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div
      class="navigate"
      v-if="navigationEnabled"
    >
      <button class="button button_left">
        <ChevronIcon
          class="icon"
          @click="prevSlide"
        />
      </button>
      <button class="button">
        <ChevronIcon
          class="icon"
          @click="nextSlide"
        />
      </button>
    </div>

    <div
      class="pagination"
      v-if="paginationEnabled"
    >
      <span
        v-for="(slide, index) of getSlideCount"
        :key="index"
        :class="{active: index + 1 === currentSlide }"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '@common';

$color-primary: black;
$color-white: #fff;
$shadow-light: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $color-white;
    box-shadow: $shadow-light;
  }

  .active {
    background-color: $color-primary;
  }
}

.button {
  @extend %reset-button;

  cursor: pointer;

  &_left {
    transform: rotate(180deg);
  }
}

.icon {
  fill: white;
}

</style>