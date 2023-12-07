<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainAboutUs from '@/components/MainApp/MainAboutUs.vue';
import UDivider from '@/components/UI/UDivider.vue';
import MainSchedule from '@/components/MainApp/MainSchedule/MainSchedule.vue';
import MainHero from './MainHero/MainHero.vue';
</script>

<template>
  <main class="pb-24">
    <div class="fixed inset-0 -z-20 h-[100svh] bg-[url('/images/background.webp')] bg-no-repeat bg-cover bg-center" />

    <main-hero />

    <main-calendar class="-mt-12" />

    <u-divider />

    <main-about-us />

    <u-divider />

    <main-schedule />
  </main>
</template>
