<script setup lang="ts">
import ruLang from 'element-plus/dist/locale/ru';
import FooterApp from '@/components/FooterApp.vue';
import HeaderApp from '@/components/HeaderApp.vue';
import MainApp from '@/components/MainApp/MainApp.vue';
</script>

<template>
  <el-config-provider :locale="ruLang">
    <header-app />

    <main-app />

    <footer-app />
  </el-config-provider>
</template>
