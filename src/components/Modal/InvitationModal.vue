<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { CloseBold } from '@element-plus/icons-vue';
import UButton from '@/components/UI/UButton.vue';

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

/// /////

const formRef = ref<FormInstance>();

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

  typeDrink: [],
  anotherDrink: '',
  accept: '',
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

  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');

      return true;
    }

    console.log('error submit!');
    return false;
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
      <div class="text-primary font-medium">
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
        label-position="top"
      >
        <el-form-item
          v-for="(guest, index) in dynamicValidateForm.guests"
          :key="guest.key"
          :label="`Гость ${index === 0 ? '' : index}`"
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
          <u-button
            plain
            @click="addGuest"
          >
            Новый гость
          </u-button>
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
            <el-radio
              v-for="label in radios"
              :key="label"
              class="mr-4"
              border
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
          <u-button
            class="w-full"
            round
            @click="submitForm(formRef)"
          >
            Отправить
          </u-button>
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
