<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';

const circleUrl: string = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';

const texts: string[] = [
  'Дорогие друзья!',
  'Жить, любить, чувствовать. Однажды мы поняли, что нет ничего важнее этого. И что идти дальше мы хотим только вместе. А теперь мечтаем, чтобы день нашей свадьбы стал красивым и ярким событием на этом увлекательном пути.',
  'Мы будем очень рады, если вы разделите этот счастливый день с нами.',
  'Увидимся на нашей свадьбе!',
];
</script>

<template>
  <section class="about-us relative">
    <u-container class="flex flex-col items-center text-center">
      <u-title>Карина & Анар</u-title>

      <ul
        class="text-lg flex flex-col gap-y-3 mb-8"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <li
          v-for="(text, index) in texts"
          :key="index"
        >
          {{ text }}
        </li>
      </ul>

      <div class="flex justify-center items-center gap-x-6 md:gap-x-12 mb-12 md:mb-16">
        <el-avatar
          class="about-us__avatar"
          :src="circleUrl"
          data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
        />

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="500"
        >
          <svg
            width="24"
            height="24"
            class="text-primary-300 -scale-x-100"
          >
            <use href="/images/icons.svg#heart" />
          </svg>
        </div>

        <el-avatar
          class="about-us__avatar"
          :src="circleUrl"
          data-aos="zoom-in"
          data-aos-anchor-placement="bottom-bottom"
        />
      </div>
    </u-container>

    <img
      src="/images/flowers-2.webp"
      class="hidden md:block absolute left-0 bottom-0 h-64 -z-10 -scale-x-100"
      alt=""
    >

    <img
      src="/images/flowers-3.webp"
      class="hidden md:block absolute right-0 bottom-0 h-80 -z-10"
      alt=""
    >
  </section>
</template>

<style lang="scss" scoped>
.about-us__avatar {
  --el-avatar-size: 33vw;

  @screen md {
    --el-avatar-size: 200px;
  }
}
</style>
