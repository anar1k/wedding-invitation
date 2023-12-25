<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { CirclePlusFilled, CloseBold, Promotion } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/src/message.scss';
import type { IInvitationParams } from '@/types/Invitation';
import { useInvitationStore } from '@/stores/invitation';
import { storeToRefs } from 'pinia';

interface IProps {
  modelValue?: boolean,
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>();

const dialogVisible = computed<boolean>({
  get() {
    return props.modelValue;
  },

  set(value: boolean) {
    emit('update:modelValue', value);
  },
});

const invitationStore = useInvitationStore();

const { isSuccess } = storeToRefs(invitationStore);

const formRef = ref<FormInstance>();
const isLoading = ref<boolean>(false);

const checkboxes: string[] = [
  'Безалкогольные напитки',
  'Красное вино',
  'Белое вино',
  'Шампанское',
  'Водку',
  'Коньяк',
  'Другое',
];

const radios: string[] = ['Да', 'Нет'];

interface IGuestItem {
  key: number
  value: string
}

interface IForm {
  guests: IGuestItem[],
  accept: string,
  typeDrink: string[],
  anotherDrink: string
}

const dynamicValidateForm = reactive<IForm>({
  guests: [
    {
      key: 1,
      value: '',
    },
  ],
  accept: '',
  typeDrink: [],
  anotherDrink: '',
});

const isShowAnotherDrink = computed<boolean>(() => dynamicValidateForm.typeDrink.some((item) => item === 'Другое'));

const removeGuest = (item: IGuestItem): void => {
  const index: number = dynamicValidateForm.guests.indexOf(item);

  if (index !== -1) {
    dynamicValidateForm.guests.splice(index, 1);
  }
};

const addGuest = (): void => {
  dynamicValidateForm.guests.push({
    key: Date.now(),
    value: '',
  });
};

const submitForm = (formEl: FormInstance | undefined): void => {
  if (!formEl) return;

  formEl.validate(async (valid) => {
    if (!valid) return false;

    const params: IInvitationParams = {
      guests: dynamicValidateForm.guests.map((obj) => obj.value).join(', '),
      accept: dynamicValidateForm.accept === 'Да',
      typeDrink: dynamicValidateForm.typeDrink.join(', '),
      anotherDrink: dynamicValidateForm.anotherDrink,
    };

    try {
      isLoading.value = true;

      const data: string = await invitationStore.fetchEmail(params);

      isLoading.value = false;

      ElMessage({
        message: data,
        type: 'success',
      });
    } catch (error: unknown) {
      if (typeof error === 'string') {
        ElMessage({
          message: error,
          type: 'error',
        });
      }
    } finally {
      isLoading.value = false;
    }

    return true;
  });
};
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    center
    top="10svh"
    width="100%"
    class="schedule-modal max-w-[500px] !rounded-2xl"
  >
    <template #header>
      <div class="text-primary-400 font-medium">
        <h3 class="text-xl">
          Подтверждение присутствия
        </h3>
      </div>
    </template>

    <template #default>
      <el-form
        ref="formRef"
        :model="dynamicValidateForm"
        status-icon
        :disabled="isLoading || isSuccess"
        label-position="top"
      >
        <el-form-item
          v-for="(guest, index) in dynamicValidateForm.guests"
          :key="guest.key"
          :label="`Гость ${ dynamicValidateForm.guests.length === 1 ? '' : index + 1 }`"
          :prop="'guests.' + index + '.value'"
          :rules="{
            required: true,
            message: 'Гость не может быть пустым',
            trigger: 'change',
          }"
        >
          <el-input
            v-model="guest.value"
            placeholder="Имя и Фамилия"
          />

          <el-button
            v-if="index !== 0"
            :icon="CloseBold"
            circle
            class="ml-2"
            @click.prevent="removeGuest(guest)"
          />
        </el-form-item>

        <el-form-item>
          <el-button
            :icon="CirclePlusFilled"
            plain
            @click="addGuest"
          >
            Добавить гостя
          </el-button>
        </el-form-item>

        <el-divider />

        <el-form-item
          :rules="{
            required: true,
            message: 'Нам необходимо знать точно',
            trigger: 'change',
          }"
          label="Планируете свое присутствие?"
          prop="accept"
        >
          <el-radio-group v-model="dynamicValidateForm.accept">
            <el-radio-button
              v-for="label in radios"
              :key="label"
              :label="label"
            />
          </el-radio-group>
        </el-form-item>

        <template v-if="dynamicValidateForm.accept === 'Да'">
          <el-divider />

          <el-form-item
            label="Что планируете пить?"
            prop="typeDrink"
            :rules="{
              required: true,
              message: 'Выберите хотя бы один вариант!',
              trigger: 'change',
            }"
          >
            <el-checkbox-group
              v-model="dynamicValidateForm.typeDrink"
              class="flex flex-col"
            >
              <el-checkbox
                v-for="(item, index) in checkboxes"
                :key="index"
                :label="item"
                name="type"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item
            v-if="isShowAnotherDrink"
            label="Какой напиток вы желаете?"
            prop="anotherDrink"
            :rules="{
              required: true,
              message: 'Поле не может быть пустым',
              trigger: 'change',
            }"
          >
            <el-input
              v-model="dynamicValidateForm.anotherDrink"
              placeholder="Другой напиток"
            />
          </el-form-item>
        </template>

        <el-form-item class="mt-8 mb-0">
          <el-button
            :type="isSuccess ? 'success' : 'primary'"
            :loading="isLoading"
            :icon="isSuccess ? '' : Promotion"
            class="w-full uppercase"
            round
            @click="submitForm(formRef)"
          >
            {{ isSuccess ? 'Отправлено' : 'Отправить' }}
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
:deep(.el-form-item__content) {
  @apply flex-nowrap;
}
</style>
