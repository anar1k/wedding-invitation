<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import DoubleHeart from '@/components/Icons/DoubleHeart.vue';
</script>

<template>
  <footer class="bg-white text-neutral">
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

      <double-heart class="mx-auto" />
    </u-container>
  </footer>
</template>
