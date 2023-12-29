<script setup lang="ts">
import { onMounted, ref } from 'vue';

type TPathForImage = `/images/${string}.webp`;

const backgroundImages: TPathForImage[] = [
  '/images/hero-1.webp',
  '/images/hero-2.webp',
  '/images/hero-3.webp',
  '/images/hero-4.webp',
  '/images/hero-5.webp',
];

const activeImageIndex = ref<number>(0);

const changeImage = (): void => {
  activeImageIndex.value = (activeImageIndex.value + 1) % backgroundImages.length;
};

onMounted(() => {
  setInterval(changeImage, 5000);
});
</script>

<template>
  <transition name="fade">
    <div
      :key="activeImageIndex"
      class="absolute inset-0 -z-10 bg-no-repeat lg:bg-fixed bg-center bg-cover"
      :style="{ backgroundImage: 'url(' + backgroundImages[activeImageIndex] + ')' }"
    />
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
