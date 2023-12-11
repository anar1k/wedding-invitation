<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import HeaderNav from '@/components/Header/HeaderNav.vue';
import HeaderMobileNav from '@/components/Header/HeaderMobileNav.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const isScrolled = ref<boolean>(false);

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="py-4 md:py-8 fixed top-0 inset-x-0 z-50 transition duration-300 text-white md:rounded-b-3xl"
    :class="isScrolled ? 'shadow bg-white/95 !text-neutral' : ''"
  >
    <u-container>
      <header-nav class="hidden md:flex items-center justify-center gap-x-6" />

      <header-mobile-nav
        class="md:hidden"
        :is-scrolled="isScrolled"
      />
    </u-container>
  </header>
</template>
