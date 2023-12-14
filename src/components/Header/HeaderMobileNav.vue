<script setup lang="ts">
import { ref } from 'vue';
import HeaderNav from '@/components/Header/HeaderNav.vue';

const drawer = ref<boolean>(false);

const openDrawer = (): void => {
  drawer.value = true;
};
</script>

<template>
  <div class="flex items-center justify-end">
    <div
      class="bg-white rounded-xl p-2 shadow"
      @click="openDrawer"
      @keydown="openDrawer"
    >
      <svg
        width="24"
        height="24"
        class="text-primary"
      >
        <use href="/images/icons.svg#burger" />
      </svg>
    </div>

    <el-drawer
      v-model="drawer"
      :with-header="false"
      size="auto"
    >
      <header-nav
        class="flex flex-col items-end gap-y-4 px-4 text-neutral"
        @click="drawer = false"
      />
    </el-drawer>
  </div>
</template>
