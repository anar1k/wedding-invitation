<script setup lang="ts">
import { computed } from 'vue';
import UMap from '@/components/UI/UMap.vue';
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

    <template
      v-if="selectedSchedule?.address"
      #default
    >
      <p class="text-neutral-500 text-base pb-3 text-center">
        {{ selectedSchedule.address?.text }}
      </p>

      <u-map :location="selectedSchedule.address?.coordinates" />
    </template>
  </el-dialog>
</template>
