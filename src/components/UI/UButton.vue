<script setup lang="ts">
import type { ButtonProps } from 'element-plus';

withDefaults(defineProps<Partial<ButtonProps>>(), {
  type: 'primary',
  round: false,
  plain: true,
  disabled: false,
});

const emit = defineEmits<{
  click: [event: Event]
}>();
</script>

<template>
  <el-button
    :disabled="disabled"
    :round="round"
    :plain="plain"
    :type="type"
    @click="emit('click', $event)"
  >
    <slot />
  </el-button>
</template>

<style scoped lang="scss">
/*.u-button {
  --el-button-text-color: theme('colors.primary.DEFAULT');
}*/
</style>
