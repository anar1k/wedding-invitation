<script setup lang="ts">
import { ref } from 'vue';
import HeaderNav from '@/components/Header/HeaderNav.vue';

const drawer = ref<boolean>(false);

const openDrawer = (): void => {
  drawer.value = true;
};
</script>

<template>
  <div>
    <div
      @click="openDrawer"
      @keydown="openDrawer"
    >
      <svg
        width="24"
        height="24"
      >
        <use
          href="/icons.svg#burger"
          color="pink"
        />
      </svg>
    </div>

    <el-drawer
      v-model="drawer"
      :with-header="false"
      size="auto"
    >
      <header-nav class="flex flex-col gap-y-4 px-4" />
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">

</style>
