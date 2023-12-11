<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';

interface ICollapseItem {
  title: string,
  text: string
}

const collapseItems: ICollapseItem[] = [
  {
    title: 'Есть ли у нас свадебный хештег?',
    text: 'Да, при публикациях в социальных сетях, используйте этот тег #wedinvent',
  },

  {
    title: 'Будет ли дресс-код?',
    text: 'Мы будем рады, если девушки выберут вечерние или коктейльные платья в пастельных тонах, а мужчины — костюм.',
  },

  {
    title: 'Нужно ли дарить цветы?',
    text: 'Просим вас не дарить цветы, так как на следующий день мы улетаем в свадебное путешествие и не успеем насладиться красивыми букетами.',
  },

  {
    title: 'Какие подарки предпочтительны?',
    text: 'Мы составили wish-лист подарков, которые были бы нам особенно приятны или полезны. Но мы будем рады и сюрпризам, а также поздравлениям в конвертах.',
  },

  {
    title: 'Возможно ли приехать на своем автомобиле?',
    text: 'Да, на территории отеля имеется парковка. Для бронирования места просим заранее сообщить марку и номер автомобиля.',
  },
];
</script>

<template>
  <section>
    <u-container>
      <u-title class="text-center">
        Вопросы и ответы
      </u-title>

      <ul v-if="collapseItems.length">
        <li
          v-for="(item, index) in collapseItems"
          :key="index"
          class="mb-8 last:mb-0"
        >
          <h3 class="text-xl md:text-2xl mb-3 md:mb-4 text-primary-400 font-medium">
            {{ item.title }}
          </h3>

          <p class="text-base md:text-lg text-neutral">
            {{ item.text }}
          </p>

          <el-divider />
        </li>
      </ul>
    </u-container>
  </section>
</template>
