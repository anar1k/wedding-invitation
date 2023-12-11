<script setup lang="ts">
import { computed } from 'vue';
import MainScheduleMap from '@/components/MainApp/MainSchedule/MainScheduleMap.vue';
import type { ISchedule } from '@/types/Schedule';

interface IProps {
  modelValue?: boolean,
  selectedSchedule: ISchedule | null
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  selectedSchedule: null,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>();

const dialogVisible = computed<boolean>({
  get() {
    return props.modelValue;
  },

  set(value: boolean) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    center
    top="10svh"
    width="100%"
    class="schedule-modal max-w-[700px] !rounded-2xl"
  >
    <template #header>
      <div class="text-primary font-medium">
        <h3 class="text-xl">
          {{ selectedSchedule?.title }}
        </h3>

        <h4 class="text-lg">
          {{ selectedSchedule?.time }}
        </h4>
      </div>
    </template>

    <template #default>
      <p class="text-neutral text-base pb-3 text-center">
        {{ selectedSchedule?.address?.text }}
      </p>

      <main-schedule-map :location="selectedSchedule?.address?.coordinates" />
    </template>
  </el-dialog>
</template>

<style lang="scss">
.schedule-modal .el-dialog__body {
  @apply pt-0 #{!important};
}
</style>
