<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
</script>

<template>
  <section class="bg-[url('/bg-hero.jpg')] bg-no-repeat lg:bg-fixed bg-center bg-cover">
    <u-container class="h-[100svh] text-center text-white pt-16 md:pt-24">
      <h1 class="font-caveat flex justify-center items-center gap-x-4 text-5xl md:text-7xl">
        <span>Карина</span>

        <svg class="w-11 h-11">
          <use
            href="/icons.svg#heart"
            width="44"
            height="44"
          />
        </svg>

        <span>Анар</span>
      </h1>

      <h4 class="text-xl md:text-3xl mt-4">
        Приглашаем на нашу свадьбу!
        <br>
        20.04.2024
      </h4>
    </u-container>
  </section>
</template>
