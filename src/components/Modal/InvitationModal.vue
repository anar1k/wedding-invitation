<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { CloseBold } from '@element-plus/icons-vue';

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

interface DomainItem {
  key: number
  value: string
}

const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
});

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1);
  }
};

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  });
};

const submitForm = (formEl: FormInstance | undefined) => {
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
    class="schedule-modal max-w-[700px] !rounded-2xl"
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
        label-width="120px"
      >
        <!--        <el-form-item
          prop="email"
          label="Email"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>-->

        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="domain.key"
          :label="'Domain' + index"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true,
            message: 'Заполните поле!',
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="domain.value"
            placeholder="Имя и Фамилия"
          />

          <el-button
            v-if="index !== 0"
            :icon="CloseBold"
            circle
            class="ml-2"
            @click.prevent="removeDomain(domain)"
          />
        </el-form-item>

        <el-form-item>
          <el-button @click="addDomain">
            Новый гость
          </el-button>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(formRef)"
          >
            Отправить
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
</style>
