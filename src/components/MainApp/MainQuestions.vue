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
];
</script>

<template>
  <section id="questions">
    <u-container>
      <u-title class="text-center">
        Вопросы и ответы
      </u-title>

      <el-collapse accordion>
        <el-collapse-item
          v-for="(item, index) in collapseItems"
          :key="index"
        >
          <template #title>
            <span class="text-left text-lg md:text-xl text-neutral-500">{{ item.title }}</span>
          </template>

          <template #default>
            <p class="text-base md:text-lg font-light text-neutral-500">
              {{ item.text }}
            </p>
          </template>
        </el-collapse-item>
      </el-collapse>
    </u-container>
  </section>
</template>

<style scoped lang="scss">
:deep(.el-collapse-item__header) {
  @apply py-4 h-auto;
}
</style>
