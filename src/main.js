import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/**
 * config boostrap css, js
 */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
