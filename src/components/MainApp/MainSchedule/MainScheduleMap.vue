<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls, YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer, YandexMapMarker,
  YandexMapZoomControl,
} from 'vue-yandex-maps';
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import type { TCoordinates } from '@/types/Schedule';

interface IProps {
  location?: TCoordinates
}

withDefaults(defineProps<IProps>(), {
  location: () => [20.510134, 54.710162],
});

const map = shallowRef<null | YMap>(null);
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: location,
        zoom: 15,
      },
    }"
    height="300px"
  >
    <yandex-map-default-scheme-layer />

    <yandex-map-default-features-layer />

    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>

    <yandex-map-marker :settings="{ coordinates: location }">
      <div
        class="relative
                  w-6
                  h-6
                  rounded-full
                  shadow-lg
                  shadow-indigo-500/50
                  bg-secondary
                  border-2
                  border-white
      "
      />
    </yandex-map-marker>
  </yandex-map>
</template>
