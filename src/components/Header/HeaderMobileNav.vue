<script setup lang="ts">
import { ref } from 'vue';
import HeaderNav from '@/components/Header/HeaderNav.vue';

interface IProps {
  isScrolled?: boolean
}

withDefaults(defineProps<IProps>(), {
  isScrolled: false,
});

const drawer = ref<boolean>(false);

const openDrawer = (): void => {
  drawer.value = true;
};
</script>

<template>
  <div class="flex items-center justify-between">
    <a
      href="#"
      aria-label="home"
    >
      <svg
        v-show="isScrolled"
        class="text-secondary"
        width="24"
        height="24"
      >
        <use href="/icons.svg#heart" />
      </svg>
    </a>

    <div
      @click="openDrawer"
      @keydown="openDrawer"
    >
      <svg
        width="24"
        height="24"
      >
        <use href="/icons.svg#burger" />
      </svg>
    </div>

    <el-drawer
      v-model="drawer"
      :with-header="false"
      size="auto"
    >
      <header-nav class="flex flex-col items-end gap-y-4 px-4 text-secondary" />
    </el-drawer>
  </div>
</template>
