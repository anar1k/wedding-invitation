<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ruLang from 'element-plus/dist/locale/ru';
import HeaderApp from '@/components/Header/HeaderApp.vue';
import MainApp from '@/components/MainApp/MainApp.vue';
import FooterApp from '@/components/Footer/FooterApp.vue';
import AOS from 'aos';

const showApp = ref<boolean>(false);

onMounted(() => {
  showApp.value = true;

  AOS.init({
    anchorPlacement: 'center-bottom',
    once: true,
  });
});
</script>

<template>
  <el-config-provider :locale="ruLang">
    <Transition name="fade">
      <div v-if="showApp">
        <header-app />

        <main-app />

        <footer-app />

        <el-backtop
          class="!text-secondary"
          :right="30"
          :bottom="30"
        />
      </div>
    </Transition>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
