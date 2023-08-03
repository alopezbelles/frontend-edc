// index.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Importa el enrutador desde la carpeta src/router
import NavbarWeb from './src/components/NavbarWeb/NavbarWeb.vue'; // Importa el componente NavbarWeb
import HomePage from './src/components/HomePage/HomePage.vue'; // Importa el componente HomePage

const app = createApp(App);

app.use(router); // Usa el enrutador en la aplicación

app.component('NavbarWeb', NavbarWeb);
app.component('HomePage', HomePage);

app.mount('#app');


