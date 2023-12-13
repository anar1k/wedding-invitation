<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import DoubleHeartIcon from '@/components/Icon/DoubleHeartIcon.vue';
</script>

<template>
  <footer class="bg-primary text-white">
    <u-container
      class="py-12 flex flex-col justify-center items-center"
      data-aos="zoom-in"
    >
      <h3 class="text-5xl font-caveat">
        Карина и Анар
      </h3>

      <p class="my-6">
        Сайт-приглашение на свадьбу
      </p>

      <double-heart-icon class="mx-auto" />
    </u-container>
  </footer>
</template>
