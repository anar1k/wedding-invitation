<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
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

      <div class="relative w-48 h-14">
        <img
          loading="lazy"
          class="absolute inset-0 h-full mx-auto"
          src="/heart.webp"
          alt=""
        >
      </div>
    </u-container>
  </footer>
</template>
