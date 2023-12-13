<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import InvitationModal from '@/components/Modal/InvitationModal.vue';
import { ref } from 'vue';
import UButton from '@/components/UI/UButton.vue';

const texts: string[] = [
  'Пожалуйста, подтвердите участие.',
  'Мы стараемся сделать праздник незабываемым, поэтому будем рады, если вы подтвердите свое присутствие до 20.04.2024.',
];

const dialogVisible = ref<boolean>(false);
</script>

<template>
  <section id="invitation">
    <u-container class="text-center">
      <u-title>Приглашение</u-title>

      <ul class="text-lg font-light flex flex-col gap-y-3 mb-4">
        <li
          v-for="(text, index) in texts"
          :key="index"
        >
          {{ text }}
        </li>
      </ul>

      <u-button
        round
        plain
        @click="dialogVisible = true"
      >
        Принять приглашение
      </u-button>
    </u-container>

    <invitation-modal v-model="dialogVisible" />
  </section>
</template>
