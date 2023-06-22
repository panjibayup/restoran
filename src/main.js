import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/assets/css/main.css";

import ToastPlugin from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";
// You can also use <link> for styles
AOS.init();

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(ToastPlugin);

app.mount("#app");
