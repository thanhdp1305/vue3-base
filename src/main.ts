import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "./App.vue";

import router from "./router";
import ElementPlus from "element-plus";

import "./assets/main.css";

import { ConsoleLayout } from "./layout/ConsoleLayout";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.component("ConsoleLayout", ConsoleLayout);

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.mount("#app");
