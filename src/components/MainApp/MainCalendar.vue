<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import { ref } from 'vue';
import { dayjs } from 'element-plus';
import type { Dayjs } from 'dayjs';

const countdown = ref<Dayjs>(dayjs('2024-04-20').startOf('seconds'));
interface TDataCell {
  type: 'prev-month' | 'current-month' | 'next-month',
  isSelected: boolean,
  day: string,
}

const getClassForCell = (data: TDataCell): string => {
  if (data.day.split('-').slice(1)[1] === '20') return 'text-primary font-medium md:text-xl';

  if (data.type !== 'current-month') return 'opacity-25';

  return '';
};
</script>

<template>
  <section id="calendar">
    <u-container>
      <el-calendar
        inert
        class="w-full md:w-1/2 mx-auto rounded-2xl"
        :range="[new Date(2024, 3, 8), new Date(2024, 4, 3)]"
      >
        <template #header>
          <div class="font-medium text-xl text-neutral">
            Апрель
          </div>

          <el-countdown
            class="text-neutral"
            format="DD [дней] HH:mm:ss"
            :value="countdown"
          />
        </template>

        <template #date-cell="{ data }">
          <div class="relative">
            <span :class="getClassForCell(data)">
              {{ data.day.split('-').slice(1)[1] }}
            </span>

            <img
              v-if="data.day.split('-').slice(1)[1] === '20'"
              data-aos="zoom-in"
              loading="lazy"
              src="/images/heart.webp"
              alt=""
              class="absolute inset-0 z-0"
            >
          </div>
        </template>
      </el-calendar>
    </u-container>
  </section>
</template>

<style lang="scss" scoped>
:deep(.el-calendar__header) {
  @apply border-none
}

:deep(.el-statistic__content) {
  @apply text-neutral
}

[data-aos^=zoom][data-aos^=zoom].aos-animate {
 transform: translateZ(0) scale(3.5)
}
</style>
