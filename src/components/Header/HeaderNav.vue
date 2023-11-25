<script setup lang="ts">
interface ILink {
  name: string,
  link: `#${string}`,
}

const links: ILink[] = [
  {
    name: 'Программа дня',
    link: '#',
  },
  {
    name: 'Программа дня',
    link: '#calendar',
  },
  {
    name: 'Программа дня',
    link: '#calendar',
  },
  {
    name: 'Программа дня',
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
      class="font-semibold text-primary hover:underline"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
