<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';

interface ICollapseItem {
  title: string,
  text: string,
  link?: {
    text: string,
    href: string
  }
}

const collapseItems: ICollapseItem[] = [
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
    title: 'Кому можно задать вопросы по организации мероприятия?',
    text: 'Наш свадебный организатор — Анна с радостью ответит на ваши вопросы. Ее номер телефона:',
    link: {
      href: 'tel:+79062657287',
      text: '+7 (906) 265-72-87',
    },
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
          data-aos-anchor-placement="bottom-bottom"
          class="group"
        >
          <el-collapse-item>
            <template #title>
              <span class="text-left text-lg md:text-xl text-neutral-500">{{ item.title }}</span>
            </template>

            <template #default>
              <p class="text-base md:text-lg text-neutral-500">
                {{ item.text }}

                <el-link
                  v-if="item.link"
                  :href="item.link.href"
                >
                  {{ item.link.text }}
                </el-link>
              </p>
            </template>
          </el-collapse-item>
        </el-collapse>
      </div>
    </u-container>
  </section>
</template>

<style scoped lang="scss">
:deep(.el-link) {
  @apply align-baseline;
}

:deep(.el-collapse) {
  @apply border-b-0;
}

:deep(.el-collapse-item__header) {
  @apply py-4 h-auto border-b-0 group-last:border-b;
}
</style>
