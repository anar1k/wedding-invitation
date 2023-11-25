<script setup lang="ts">
import { onMounted } from 'vue';
import ruLang from 'element-plus/dist/locale/ru';
import HeaderApp from '@/components/HeaderApp.vue';
import MainApp from '@/components/MainApp/MainApp.vue';
import FooterApp from '@/components/FooterApp.vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <el-config-provider :locale="ruLang">
    <header-app />

    <main-app />

    <footer-app />

    <el-backtop
      class="!text-primary"
      :right="50"
      :bottom="50"
    />
  </el-config-provider>
</template>
