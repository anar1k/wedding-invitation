<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
</script>

<template>
  <section id="calendar">
    <u-container>
      <h2 class="text-center text-primary text-5xl font-caveat font-bold mb-4">
        Когда?
      </h2>

      <el-calendar
        inert
        class="w-full md:w-1/2 mx-auto"
        :range="[new Date(2024, 3, 8), new Date(2024, 4, 3)]"
      >
        <template #header>
          <span class="font-medium text-xl">Апрель: {{ new Date(2024, 3, 20).toLocaleDateString() }}</span>
        </template>

        <template #date-cell="{ data }">
          <div class="relative">
            <span :class="data.day.split('-').slice(1)[1] === '20' ? 'text-primary font-medium md:text-xl' : ''">
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
