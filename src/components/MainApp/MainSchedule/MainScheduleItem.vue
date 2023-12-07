<script setup lang="ts">
import { Star } from '@element-plus/icons-vue';
</script>

<template>
  <li
    class="flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-20 pb-3 last:pb-0 group text-center md:text-left">
    <h4 class="text-xl md:text-2xl text-primary">09:00</h4>

    <div class="hidden md:flex flex-col items-center gap-y-2">
      <svg class="w-6 h-6">
        <use
          href="/images/icons.svg#heart"
          class="w-6 h-6 text-secondary"
        />
      </svg>

      <el-divider
        direction="vertical"
        class="flex-1"
      />
    </div>

    <div class="md:pb-10 md:group-last:pb-0 space-y-2 md:space-y-4">
      <h4 class="text-xl md:text-2xl text-primary">Утро невесты</h4>

      <p class="text-primary-400">Фотосессия в отеле Radisson Collection Hotel</p>

      <button
        type="button"
        class="border-b border-primary-400 hover:border-secondary focus:border-secondary text-primary-400 hover:text-secondary focus:text-secondary text-left transition"
      >
        Россия, Москва, Певческий переулок, 4с1
      </button>
    </div>

    <el-icon class="w-6 h-6 group-last:hidden md:!hidden !text-secondary my-4">
      <star />
    </el-icon>
  </li>
</template>

<style scoped lang="scss">
:deep(.el-divider) {
  --el-border-color: theme('colors.secondary.DEFAULT')
}

:deep(.el-button) {
  @apply p-0 whitespace-normal text-left;
}
</style>
