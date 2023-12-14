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
    class="py-4 md:py-8 fixed top-0 inset-x-0 z-50 transition duration-300 md:rounded-b-3xl"
    :class="isScrolled ? 'md:shadow md:bg-white/95' : ''"
  >
    <u-container>
      <header-nav
        class="text-white hidden md:flex items-center justify-center gap-x-6"
        :class="{
          '!text-neutral': isScrolled,
        }"
      />

      <header-mobile-nav class="md:hidden" />
    </u-container>
  </header>
</template>
