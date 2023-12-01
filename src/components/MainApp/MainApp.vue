<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainAboutUs from '@/components/MainApp/MainAboutUs.vue';
import UDivider from '@/components/UI/UDivider.vue';
import MainHero from './MainHero/MainHero.vue';
</script>

<template>
  <main class="pb-24">
    <div class="fixed inset-0 bg-[url('/images/background.webp')] bg-no-repeat bg-cover -z-20" />

    <main-hero />

    <main-calendar class="-mt-12" />

    <u-divider />

    <main-about-us />
  </main>
</template>
