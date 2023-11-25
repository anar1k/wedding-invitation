<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import HeaderNav from '@/components/Header/HeaderNav.vue';
import HeaderMobileNav from '@/components/Header/HeaderMobileNav.vue';
</script>

<template>
  <header class="fixed top-0 inset-x-0 z-50 shadow-md bg-white py-4">
    <u-container class="flex justify-between items-center gap-x-3">
      <a
        class="flex items-center gap-1.5 font-bold text-xl font-caveat text-primary"
        href="#"
      >
        <svg
          width="24"
          height="24"
        >
          <use
            href="/icons.svg#heart"
            color="pink"
          />
        </svg>

        <span>Карина и Анар</span>
      </a>

      <header-nav class="hidden md:flex items-center gap-x-4" />

      <header-mobile-nav class="md:hidden" />
    </u-container>
  </header>
</template>
