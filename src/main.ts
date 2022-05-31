import { createApp, } from "vue";
import App from "./app.vue";
import router from "@/router/router";

const app = createApp(App);

import registerComponents from "@/register-components"
import ElementPlus from 'element-plus'
import "element-plus/theme-chalk/index.css"
registerComponents(app);
app.use(ElementPlus)
app.use(router);
app.mount("#app");
