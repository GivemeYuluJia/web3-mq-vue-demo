import { createApp } from "vue";
import App from "./App.vue";
import { Button } from "web3-mq-vue";
import "web3-mq-vue/dist/css/index.css";
import "./assets/main.css";

createApp(App).use(Button).mount("#app");
