<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import MainScheduleItem from '@/components/MainApp/MainSchedule/MainScheduleItem.vue';
import MainScheduleModal from '@/components/MainApp/MainSchedule/MainScheduleModal.vue';
import type { ISchedule } from '@/types/Schedule';
import { ref } from 'vue';

const dialogVisible = ref<boolean>(false);

const handleClick = (): void => {
  dialogVisible.value = true;
};

const schedules: ISchedule[] = [
  {
    time: '13:30',
    title: 'Свадебная прогулка/фотосессия',
  },

  {
    time: '15:00',
    title: 'Регистрация в ЗАГСе',
    description: 'Присутствие по желанию',
    address: {
      text: 'ул. Зарайская, 17, Калининград, Калининградская обл., 236006',
      coordinates: '54.710346737896856, 20.517167810901118',
    },
  },

  {
    time: '16:30',
    title: 'Сбор гостей в ресторане, праздничный фуршет',
    address: {
      text: 'пр-т. Мира, 105, 1 этаж, Калининград, Калининградская обл., 236010',
      coordinates: '54.720808582785594, 20.45570241298354',
    },
  },
];
</script>

<template>
  <section id="schedule">
    <u-container>
      <u-title class="text-center">Программа дня</u-title>

      <h3 class="text-center text-xl md:text-2xl text-primary-500 pb-8 md:pb-14">20 апреля 2024 г.</h3>

      <ul>
        <main-schedule-item
          v-for="(item, index) in schedules"
          @click="handleClick"
          :key="index"
          :time="item.time"
          :title="item.title"
          :description="item.description"
          :address="item.address"
        />
      </ul>
    </u-container>

    <main-schedule-modal v-model="dialogVisible" />
  </section>
</template>
