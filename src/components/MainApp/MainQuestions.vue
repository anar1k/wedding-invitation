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

      <div>
        <el-collapse
          v-for="(item, index) in collapseItems"
          :key="index"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          class="group"
        >
          <el-collapse-item>
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
      </div>
    </u-container>
  </section>
</template>

<style scoped lang="scss">
:deep(.el-collapse) {
  @apply border-b-0;
}

:deep(.el-collapse-item__header) {
  @apply py-4 h-auto border-b-0 group-last:border-b;
}
</style>
