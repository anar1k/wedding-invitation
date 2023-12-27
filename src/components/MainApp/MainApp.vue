<script setup lang="ts">
import MainCalendar from '@/components/MainApp/MainCalendar.vue';
import MainAboutUs from '@/components/MainApp/MainAboutUs.vue';
import UDivider from '@/components/UI/UDivider.vue';
import MainSchedule from '@/components/MainApp/MainSchedule/MainSchedule.vue';
import MainQuestions from '@/components/MainApp/MainQuestions.vue';
import MainInvitation from '@/components/MainApp/MainInvitation.vue';
import MainHero from './MainHero.vue';
import InvitationModal from '@/components/Modal/InvitationModal.vue';
import { ref } from 'vue';

const dialogVisible = ref<boolean>(false);
</script>

<template>
  <main class="pb-24">
    <main-hero />

    <main-calendar
      id="calendar"
      class="-mt-12"
    />

    <main-invitation
      id="invitation"
      class="my-16"
      @click="dialogVisible = true"
    />

    <main-about-us id="about" />

    <u-divider />

    <main-schedule id="schedule" />

    <main-invitation
      class="my-16"
      @click="dialogVisible = true"
    />

    <main-questions id="questions" />

    <invitation-modal v-model="dialogVisible" />
  </main>
</template>
