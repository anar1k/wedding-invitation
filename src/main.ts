import './assets/styles/global.scss';
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import { dayjs } from 'element-plus';
import 'dayjs/locale/ru';
import App from './App.vue';

dayjs.locale('ru');

const app = createApp(App);

app.mount('#app');
