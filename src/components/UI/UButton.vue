<script setup lang="ts">
interface IProps {
  round?: boolean,
  plain?: boolean,
}

withDefaults(defineProps<IProps>(), {
  round: false,
  plain: false,
});

const emit = defineEmits<{
  click: [event: Event]
}>();
</script>

<template>
  <button
    type="button"
    class="transition font-medium py-1 px-4"
    :class="[
      round ? 'rounded-full' : 'rounded',
      plain
        ? 'bg-transparent hover:bg-primary-400 text-primary-600 hover:text-white border border-primary-400'
        : 'bg-primary-400 hover:bg-primary-600 text-white',
    ]"
    @click="emit('click', $event)"
  >
    <slot />
  </button>

<!--  <el-button
    class="u-button"
    :round="round"
    :size="size"
    plain
    type="primary"
    @click="emit('click', $event)"
  >
    <slot />
  </el-button>-->
</template>

<style scoped lang="scss">
/*.u-button {
  --el-button-text-color: theme('colors.primary.DEFAULT');
}*/
</style>
