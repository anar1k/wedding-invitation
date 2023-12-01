<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import MainHeroBackground from '@/components/MainApp/MainHero/MainHeroBackground.vue';
</script>

<template>
  <section class="relative">
    <main-hero-background />

    <u-container class="h-[85svh] text-center text-white py-16 md:py-24">
      <h1 class="font-caveat flex justify-center items-center gap-x-4 text-5xl md:text-7xl">
        <span>Карина</span>

        <svg class="w-11 h-11 animate-pulse">
          <use
            href="/images/icons.svg#heart"
            width="44"
            height="44"
          />
        </svg>

        <span>Анар</span>
      </h1>

      <h4 class="text-xl md:text-3xl my-4">
        Приглашаем на нашу свадьбу!
      </h4>
    </u-container>
  </section>
</template>
