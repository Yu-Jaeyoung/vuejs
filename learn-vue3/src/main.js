import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

app.config.globalProperties.msg = 'hello';
app.provide('app-message', 'app message 입니다.');
app.provide('msg', 'hello msg');
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
