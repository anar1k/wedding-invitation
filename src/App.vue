<script setup lang="ts">
import ruLang from 'element-plus/dist/locale/ru';
import FooterApp from '@/components/FooterApp.vue';
import HeaderApp from '@/components/HeaderApp.vue';
</script>

<template>
  <el-config-provider :locale="ruLang">
    <el-container direction="vertical">
      <header-app />

      <el-main>Main</el-main>

      <footer-app />
    </el-container>
  </el-config-provider>
</template>
