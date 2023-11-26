<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import HeaderNav from '@/components/Header/HeaderNav.vue';
import HeaderMobileNav from '@/components/Header/HeaderMobileNav.vue';

const scrolling = (e:any) => {
  console.log('Yay!', e);
};
</script>

<template>
  <header
    class="shadow-md bg-white py-4 md:py-8"
    @scroll="scrolling"
  >
    <u-container>
      <header-nav class="hidden md:flex items-center justify-center gap-x-4" />

      <header-mobile-nav class="md:hidden" />
    </u-container>
  </header>
</template>
