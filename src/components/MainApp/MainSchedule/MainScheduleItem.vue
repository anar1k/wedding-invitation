<script setup lang="ts">
import type { ISchedule } from '@/types/Schedule';

defineProps<ISchedule>();

const emit = defineEmits<{
  click: [id: string]
}>();

const handleButton = (coordinates: string): void => {
  emit('click', coordinates);
};
</script>

<template>
  <li class="group flex gap-4 md:gap-10 pb-3 last:pb-0">
    <h4 class="text-xl md:text-2xl text-secondary">{{ time }}</h4>

    <div class="flex flex-col items-center gap-y-2">
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

    <div class="pb-4 md:pb-8 md:group-last:pb-0 space-y-2 md:space-y-4">
      <h4 class="text-xl md:text-2xl text-secondary">{{ title }}</h4>

      <p
        v-if="!!description"
        class="text-primary">{{ description }}
      </p>

      <button
        v-if="!!address"
        @click="handleButton(address.coordinates)"
        type="button"
        class="underline
               md:no-underline
               md:border-b
               border-primary
               hover:border-secondary
               focus:border-secondary
               text-primary
               hover:text-secondary
               focus:text-secondary
               text-left
               transition
        "
      >
        {{ address.text }}
      </button>
    </div>
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
