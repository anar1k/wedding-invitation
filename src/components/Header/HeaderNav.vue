<script setup lang="ts">
interface ILink {
  name: string,
  link: `#${string}`,
}

const links: ILink[] = [
  {
    name: 'ПРОГРАММА ДНЯ',
    link: '#',
  },
  {
    name: 'ПРОГРАММА ДНЯ',
    link: '#calendar',
  },
  {
    name: 'ПРОГРАММА ДНЯ',
    link: '#calendar',
  },
  {
    name: 'ПРОГРАММА ДНЯ',
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
      class="hover:underline hover:text-primary font-serif text-sm"
    >
      {{ item.name }}
    </a>
  </nav>
</template>
