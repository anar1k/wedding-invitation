<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls, YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer, YandexMapMarker,
  YandexMapZoomControl,
} from 'vue-yandex-maps';
import { CSSProperties, shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import type { TCoordinates } from '@/types/Schedule';

interface IProps {
  location?: TCoordinates
}

withDefaults(defineProps<IProps>(), {
  location: () => [20.510134, 54.710162],
});

const map = shallowRef<null | YMap>(null);

const styleObject: CSSProperties = {
  position: 'relative',
  width: '20px',
  height: '20px',
  backgroundColor: '#ff0000',
  borderRadius: '50%',
  border: '2px solid #ffffff',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
  color: '#ffffff',
  fontWeight: 'bold',
  lineHeight: '20px',
};
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: location,
        zoom: 14,
      },
    }"
    height="300px"
  >
    <yandex-map-default-scheme-layer />

    <yandex-map-default-features-layer />

    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>

    <yandex-map-marker
      :settings="{
        coordinates: location,
      }"
    >
      <template #default>
        <div :style="styleObject" />
      </template>
    </yandex-map-marker>
  </yandex-map>
</template>
