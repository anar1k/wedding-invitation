<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainAboutUs from '@/components/MainApp/MainAboutUs.vue';
import MainHero from './MainHero/MainHero.vue';
</script>

<template>
  <main>
    <main-hero />

    <main-calendar class="-mt-12" />

    <el-divider />

    <main-about-us />
  </main>
</template>

<style scoped lang="scss">
:deep(.el-divider--horizontal) {
  @apply my-20
}
</style>
