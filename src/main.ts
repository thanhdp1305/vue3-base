import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "./App.vue";

import router from "./router";
import ElementPlus from "element-plus";

import "./assets/css/adminlte.min.css";
import "./assets/main.css";
import "./assets/css/input.css";

import ConsoleLayout from "./layout/ConsoleLayout/ConsoleLayout.vue";
import GuestLayout from "./layout/GuestLayout/GuestLayout.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.component("ConsoleLayout", ConsoleLayout);
app.component("GuestLayout", GuestLayout);

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.mount("#app");
