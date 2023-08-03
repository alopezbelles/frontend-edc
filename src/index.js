
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador desde la carpeta src/router
import NavbarWeb from './components/NavbarWeb/NavbarWeb.vue'; // Importa el componente NavbarWeb
import HomePage from './components/HomePage/HomePage.vue'; // Importa el componente HomePage

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



const app = createApp(App);

app.use(router); // Usa el enrutador en la aplicación

app.component('NavbarWeb', NavbarWeb);
app.component('HomePage', HomePage);

app.mount('#app');


