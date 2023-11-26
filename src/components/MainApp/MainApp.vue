<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainHero from './MainHero.vue';
</script>

<template>
  <main>
    <main-hero />

    <el-card class="box-card">
      <main-calendar />
    </el-card>
  </main>
</template>

<style scoped lang="scss">

</style>
