<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import { computed } from 'vue';
import { useInvitationStore } from '@/stores/invitation';
import { storeToRefs } from 'pinia';
import type { ButtonType } from 'element-plus';


const texts: string[] = [
  'Пожалуйста, подтвердите участие.',
  'Мы стараемся сделать праздник незабываемым, поэтому будем рады, если вы подтвердите свое присутствие до 20.04.2024.'
];

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

const emit = defineEmits<{
  click: [event: Event]
}>();
</script>

<template>
  <section class="bg-primary-300 py-8">
    <u-container class="text-center text-white">
      <u-title class="!text-white">
        Приглашение
      </u-title>

      <ul class="text-lg flex flex-col gap-y-3 mb-4">
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
          size="large"
          :type="buttonProps.type"
          plain
          round
          @click="emit('click', $event)"
        >
          {{ buttonProps.text }}
        </el-button>
      </div>
    </u-container>
  </section>
</template>
