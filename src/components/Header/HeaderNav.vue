<script setup lang="ts">
interface ILink {
  name: string,
  link: `#${string}`,
}

const links: ILink[] = [
  {
    name: 'Приглашение',
    link: '#calendar',
  },
  {
    name: 'О нас',
    link: '#',
  },
  {
    name: 'Программа дня',
    link: '#calendar',
  },
  {
    name: 'F.A.Q.',
    link: '#calendar',
  },
];
</script>

<template>
  <nav>
    <a
      v-for="(item, index) in links"
      :key="item.name + index"
      :href="item.link"
      class="hover:underline text-current font-serif text-sm uppercase"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
