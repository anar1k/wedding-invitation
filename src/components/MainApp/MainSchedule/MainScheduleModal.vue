<script setup lang="ts">
import { computed } from 'vue';
import MainScheduleMap from '@/components/MainApp/MainSchedule/MainScheduleMap.vue';

interface IProps {
  modelValue?: boolean
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
    top="5svh"
    title="Событие на карте"
    width="100%"
    class="max-w-[700px] !rounded-2xl"
  >
    <main-schedule-map />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>

        <el-button
          type="primary"
          @click="dialogVisible = false"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
