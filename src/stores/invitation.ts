import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';
import type { IInvitationParams } from '@/types/Invitation';

interface IState {
  isSuccess: boolean,
  isAccept: boolean
}

export const useInvitationStore = defineStore('invitation', {
  state: (): IState => ({
    isSuccess: false,
    isAccept: false,
  }),

  actions: {
    async fetchEmail(params: IInvitationParams): Promise<string> {
      try {
        const { data } = await axios.post<string>('/sendEmail', params);

        this.isAccept = params.accept;
        this.isSuccess = true;

        return data || 'Успешно!';
      } catch (error: unknown) {
        const defaultMessage: string = 'Возникла ошибка. Пожалуйста повторите';

        if (error instanceof AxiosError) {
          throw error.response?.data || defaultMessage;
        }

        throw new Error(defaultMessage);
      }
    },
  },
});
