import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

// import VConsole from "vconsole";

// const vConsole = new VConsole();

import "normalize.css";
import "./assets/css/index.css";

createApp(App).use(router).use(pinia).mount("#app");
