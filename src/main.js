import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight, faSeedling } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = Vue.createApp(App);

library.add(faArrowRight);
library.add(faSeedling);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
