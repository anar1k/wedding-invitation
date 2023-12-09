import { createApp } from 'vue';
import { dayjs } from 'element-plus';
import 'dayjs/locale/ru';
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue';

import 'aos/dist/aos.css';
import './assets/styles/global.scss';

dayjs.locale('ru');

const app = createApp(App);

app.use(createYmaps({
  apikey: 'a7c35084-4b12-4d89-b73d-46f82f5f9ae5',
  strictMode: true,
}));

app.mount('#app');
