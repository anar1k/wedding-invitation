<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import AdventureBegins from '@/components/Icons/AdventureBegins.vue';
import UTitle from '@/components/UI/UTitle.vue';

const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
</script>

<template>
  <section
    class="about-us"
    id="about"
  >
    <u-container class="flex flex-col items-center text-center">
      <u-title>Карина & Анар</u-title>

      <ul class="text-lg font-light flex flex-col gap-y-3 mb-8">
        <li>Дорогие друзья!</li>

        <li>
          Жить, любить, чувствовать. Однажды мы поняли, что нет ничего важнее этого.
          И что идти дальше мы хотим только вместе.
          А теперь мечтаем, чтобы день нашей свадьбы стал красивым
          и ярким событием на этом увлекательном пути.
        </li>

        <li>
          Мы будем очень рады, если вы разделите этот счастливый день с нами.
        </li>

        <li>
          Увидимся на нашей свадьбе!
        </li>
      </ul>

      <div class="flex justify-center items-center gap-x-6 md:gap-x-12 mb-12 md:mb-16">
        <el-avatar
          class="about-us__avatar"
          :src="circleUrl"
        />

        <svg
          width="24"
          height="24"
          class="text-secondary -scale-x-100"
        >
          <use href="/images/icons.svg#heart" />
        </svg>

        <el-avatar
          class="about-us__avatar"
          :src="circleUrl"
        />
      </div>

      <adventure-begins class="text-secondary" />
    </u-container>
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
