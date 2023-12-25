<script setup lang="ts">
import { onMounted } from 'vue';
import ruLang from 'element-plus/dist/locale/ru';
import HeaderApp from '@/components/Header/HeaderApp.vue';
import MainApp from '@/components/MainApp/MainApp.vue';
import FooterApp from '@/components/Footer/FooterApp.vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 1000,
    /* once: true, */
  });
});
</script>

<template>
  <el-config-provider :locale="ruLang">
    <header-app />

    <main-app />

    <footer-app />

    <el-backtop
      class="!text-primary"
      :right="30"
      :bottom="30"
    />
  </el-config-provider>
</template>
