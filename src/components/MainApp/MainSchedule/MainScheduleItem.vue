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
    <h4 class="text-xl md:text-2xl text-primary">
      {{ schedule.time }}
    </h4>

    <div class="flex flex-col items-center gap-y-2">
      <svg class="w-6 h-6">
        <use
          href="/images/icons.svg#heart"
          class="w-6 h-6 text-primary"
        />
      </svg>

      <el-divider
        direction="vertical"
        class="flex-1"
      />
    </div>

    <div class="pb-4 md:pb-8 md:group-last:pb-0 space-y-2 md:space-y-4">
      <h4 class="text-xl md:text-2xl text-primary">
        {{ schedule.title }}
      </h4>

      <p v-if="!!schedule.description">
        {{ schedule.description }}
      </p>

      <button
        v-if="!!schedule.address && !!schedule.address.coordinates && !!schedule.address.text"
        type="button"
        class="underline
               md:no-underline
               md:border-b
               border-neutral
               hover:border-primary
               focus:border-primary
               text-neutral
               hover:text-primary
               focus:text-primary
               text-left
               transition
        "
        @click="handleButton"
      >
        {{ schedule.address.text }}
      </button>
    </div>
  </li>
</template>

<style scoped lang="scss">
:deep(.el-divider) {
  --el-border-color: theme('colors.primary.DEFAULT')
}
</style>
