<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';

interface TDataCell {
  type: 'prev-month' | 'current-month' | 'next-month',
  isSelected: boolean,
  day: string,
}

const getClassForCell = (data: TDataCell) => {
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
          <div class="flex-1 font-medium text-xl text-secondary text-center">
            Апрель: {{ new Date(2024, 3, 20).toLocaleDateString() }}
          </div>
        </template>

        <template #date-cell="{ data }">
          <div class="relative">
            <span :class="getClassForCell(data)">
              {{ data.day.split('-').slice(1)[1] }}
            </span>

            <img
              v-if="data.day.split('-').slice(1)[1] === '20'"
              loading="lazy"
              src="/bg-heart.webp"
              alt=""
              class="absolute inset-0 scale-[3.5] z-0"
            >
          </div>
        </template>
      </el-calendar>
    </u-container>
  </section>
</template>

<style lang="scss" scoped>
:deep(.el-calendar__header) {
  border: none;
}
</style>
