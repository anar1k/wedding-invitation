<script setup lang="ts">
import type { ButtonProps } from 'element-plus';

defineProps<Partial<ButtonProps>>();

const emit = defineEmits<{
  click: [event: Event]
}>();
</script>

<template>
  <el-button
    type="primary"
    round
    @click="emit('click', $event)"
  >
    <slot />
  </el-button>
</template>

<style scoped lang="scss">
:deep(.el-button) {
  --el-button-text-color: theme('colors.primary.DEFAULT');
}
</style>
