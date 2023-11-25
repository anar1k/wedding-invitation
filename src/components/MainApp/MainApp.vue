<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainHero from './MainHero.vue';
</script>

<template>
  <main>
    <main-hero />

    <el-divider border-style="dashed" />

    <main-calendar
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    />
  </main>
</template>

<style scoped lang="scss">

</style>
