<script setup lang="ts">
import { computed } from 'vue';
import MainScheduleMap from '@/components/MainApp/MainSchedule/MainScheduleMap.vue';

interface IProps {
  modelValue?: boolean,
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
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
    class="max-w-[700px] !rounded-2xl"
  >
    <template #header>
      <span class="text-secondary text-xl font-medium">Событие на карте</span>
    </template>

    <template #default>
      <main-schedule-map />
    </template>
  </el-dialog>
</template>
