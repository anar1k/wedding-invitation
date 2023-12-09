<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
} from 'vue-yandex-maps';
import { shallowRef, inject } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';

const defaultCoordinates: [number, number] = [20.510134, 54.710162];

const coordinatesInject = inject<[number, number]>('coordinates');

const currentCoordinates = coordinatesInject || defaultCoordinates;

const map = shallowRef<null | YMap>(null);
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: currentCoordinates,
        zoom: 14,
      },
    }"
    height="300px"
  >
    <yandex-map-default-scheme-layer />

    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>
  </yandex-map>
</template>
