<script setup lang="ts">
interface ILink {
  name: string,
  link: `#${string}`,
}

const links: ILink[] = [
  {
    name: 'Приглашение',
    link: '#',
  },
  {
    name: 'О нас',
    link: '#about',
  },
  {
    name: 'Программа дня',
    link: '#schedule',
  },
  {
    name: 'F.A.Q.',
    link: '#questions',
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
