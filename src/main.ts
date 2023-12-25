import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { dayjs } from 'element-plus';
import 'dayjs/locale/ru';
import { createYmaps } from 'vue-yandex-maps';
import 'aos/dist/aos.css';
import './assets/styles/global.scss';
import axios from 'axios';
import App from './App.vue';

dayjs.locale('ru');

const pinia = createPinia();
const app = createApp(App);

axios.defaults.baseURL = '/.netlify/functions/';

app.use(pinia);

app.use(createYmaps({
  apikey: 'a7c35084-4b12-4d89-b73d-46f82f5f9ae5',
  strictMode: true,
  initializeOn: 'onPluginInit',
}));

app.mount('#app');
