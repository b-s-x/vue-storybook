import { ref, onMounted } from 'vue'

type SliderProp = {
  startAutoPlay: boolean,
  timeout: number | undefined,
  pagination: boolean,
  navigation: boolean,
  nextSlide?: () => void,
  prevSlide?: () => void,
  goToSlide?: () => void,
}

export const useSlider = ({
  startAutoPlay,
  timeout,
  pagination,
  navigation,
}: SliderProp) => {
  const currentSlide = ref(1);
  const slideCount = ref<number | null>(null);
  const autoPlayEnabled = ref<boolean>(startAutoPlay);
  const timeoutDuration = ref<number | undefined>(timeout);
  const paginationEnabled = ref<boolean>(pagination)
  const navigationEnabled = ref<boolean>(navigation)
  let intervalId: any = timeoutDuration.value;

  const nextSlide = () => {
    resetInterval();
    if (currentSlide.value === slideCount.value) {
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

  const getSlideCount = () => {
    slideCount.value = document.querySelectorAll('.slide').length;
  }

  onMounted(() => {
    getSlideCount();
    if (autoPlayEnabled.value) autoPlay();
  });


  return {
    currentSlide,
    slideCount,
    paginationEnabled,
    navigationEnabled,
    nextSlide,
    prevSlide,
    goToSlide,
  }
}