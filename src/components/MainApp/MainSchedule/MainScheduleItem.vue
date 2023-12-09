<script setup lang="ts">
import type { ISchedule } from '@/types/Schedule';

const props = defineProps<{
  schedule: ISchedule
}>();

const emit = defineEmits<{
  click: [item: ISchedule]
}>();

const handleButton = (): void => {
  emit('click', props.schedule);
};
</script>

<template>
  <li class="group flex gap-4 md:gap-10 pb-3 last:pb-0">
    <h4 class="text-xl md:text-2xl text-secondary">{{ schedule.time }}</h4>

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
      <h4 class="text-xl md:text-2xl text-secondary">{{ schedule.title }}</h4>

      <p
        v-if="!!schedule.description"
        class="text-primary">{{ schedule.description }}
      </p>

      <button
        v-if="!!schedule.address && !!schedule.address.coordinates && !!schedule.address.text"
        @click="handleButton"
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
        {{ schedule.address.text }}
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
