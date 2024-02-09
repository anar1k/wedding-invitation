<script setup lang="ts">
import UContainer from '@/components/UI/UContainer.vue';
import UTitle from '@/components/UI/UTitle.vue';
import { computed } from 'vue';
import { useInvitationStore } from '@/stores/invitation';
import { storeToRefs } from 'pinia';
import type { ButtonType } from 'element-plus';

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

      <p
        class="text-lg mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        Мы стараемся сделать праздник незабываемым,
        поэтому будем рады, если вы подтвердите свое присутствие до 13.04.2024.
      </p>

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
