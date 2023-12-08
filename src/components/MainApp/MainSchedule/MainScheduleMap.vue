<script setup lang="ts">
import { YandexMap, YandexMapDefaultSchemeLayer } from 'vue-yandex-maps';
import { shallowRef } from 'vue';

const map = shallowRef(null);
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9,
      },
    }"
    height="300px"
  >
    <yandex-map-default-scheme-layer />
  </yandex-map>
</template>
