<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import MainScheduleItem from '@/components/MainApp/MainSchedule/MainScheduleItem.vue';
import ScheduleModal from '@/components/Modal/ScheduleModal.vue';
import type { ISchedule } from '@/types/Schedule';
import { vIntersectionObserver } from '@vueuse/components';
import { initYmaps } from 'vue-yandex-maps';
import { ref } from 'vue';

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
      coordinates: [20.517167810901118, 54.710346737896856],
    },
  },

  {
    time: '16:30',
    title: 'Сбор гостей в ресторане, праздничный фуршет',
    address: {
      text: 'пр-т. Мира, 105, 1 этаж, Калининград, Калининградская обл., 236010',
      coordinates: [20.45570241298354, 54.720808582785594],
    },
  },
];

const dialogVisible = ref<boolean>(false);
const selectedSchedule = ref<ISchedule | null>(null);

const handleClick = (schedule: ISchedule): void => {
  const { address } = schedule;

  if (address && address.coordinates) {
    dialogVisible.value = true;
    selectedSchedule.value = schedule;
  }
};

const isVisible = ref<boolean>(false);
function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
  if (isVisible.value || !isIntersecting) return;

  isVisible.value = true;
  initYmaps();
}
</script>

<template>
  <section v-intersection-observer="onIntersectionObserver">
    <u-container>
      <u-title class="text-center">
        Программа дня
      </u-title>

      <h3
        class="text-center text-xl md:text-2xl pb-8 md:pb-14"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        20 апреля 2024 г.
      </h3>

      <ul>
        <main-schedule-item
          v-for="(item, index) in schedules"
          :key="index"
          :schedule="item"
          @click="handleClick"
        />
      </ul>
    </u-container>

    <schedule-modal
      v-model="dialogVisible"
      :selected-schedule="selectedSchedule"
    />
  </section>
</template>
