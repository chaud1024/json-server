import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { AxiosKeys } from "@/libs/symbols";
import http from "@/libs/http";

const app = createApp(App);

app.use(router);
// app.provide(key, value)
app.provide(AxiosKeys, http);
app.mount("#app");
