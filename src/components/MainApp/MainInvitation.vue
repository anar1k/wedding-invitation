<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import InvitationModal from '@/components/Modal/InvitationModal.vue';
import { computed, ref } from 'vue';
import { useInvitationStore } from '@/stores/invitation';
import { storeToRefs } from 'pinia';
import type { ButtonType } from 'element-plus';

const texts: string[] = [
  'Пожалуйста, подтвердите участие.',
  'Мы стараемся сделать праздник незабываемым, поэтому будем рады, если вы подтвердите свое присутствие до 20.04.2024.',
];

const dialogVisible = ref<boolean>(false);

const invitationStore = useInvitationStore();

const { isSuccess, isAccept } = storeToRefs(invitationStore);

interface IButtonProps {
  type: ButtonType,
  text: string,
}

const buttonProps = computed<IButtonProps>(() => {
  if (!isSuccess.value) {
    return {
      type: 'primary',
      text: 'Принять приглашение',
    };
  }

  if (isAccept.value) {
    return {
      type: 'success',
      text: 'Приглашение принято',
    };
  }

  return {
    type: 'info',
    text: 'Приглашение отклонено',
  };
});
</script>

<template>
  <section
    id="invitation"
    class="bg-primary py-8"
  >
    <u-container class="text-center text-white">
      <u-title class="text-white">
        Приглашение
      </u-title>

      <ul class="text-lg font-light flex flex-col gap-y-3 mb-4">
        <li
          v-for="(text, index) in texts"
          :key="index"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {{ text }}
        </li>
      </ul>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <el-button
          :type="buttonProps.type"
          plain
          round
          @click="dialogVisible = true"
        >
          {{ buttonProps.text }}
        </el-button>
      </div>
    </u-container>

    <invitation-modal v-model="dialogVisible" />
  </section>
</template>
