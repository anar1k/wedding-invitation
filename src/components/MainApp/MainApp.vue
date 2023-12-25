<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainAboutUs from '@/components/MainApp/MainAboutUs.vue';
import UDivider from '@/components/UI/UDivider.vue';
import MainSchedule from '@/components/MainApp/MainSchedule/MainSchedule.vue';
import MainQuestions from '@/components/MainApp/MainQuestions.vue';
import MainInvitation from '@/components/MainApp/MainInvitation.vue';
import MainHero from './MainHero.vue';
</script>

<template>
  <main class="pb-24">
    <main-hero />

    <main-invitation />

    <main-calendar class="-mt-12" />

    <u-divider />

    <main-about-us />

    <u-divider />

    <main-schedule />

    <u-divider />

    <main-questions />
  </main>
</template>
