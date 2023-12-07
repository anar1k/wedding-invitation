<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import MainScheduleItem from '@/components/MainApp/MainSchedule/MainScheduleItem.vue';
</script>

<template>
  <section id="schedule">
    <u-container>
      <u-title class="text-center">Программа дня</u-title>

      <h3 class="text-center text-xl md:text-2xl text-primary-600 pb-8 md:pb-14">20 апреля 2024 г.</h3>

      <ul class="flex flex-col items-center">
        <main-schedule-item
          v-for="(item, index) in 3"
          :key="index"
        />
      </ul>
    </u-container>
  </section>
</template>
