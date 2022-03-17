import { createApp } from "vue";
import App from "./App.vue";

import MyFirstPlugin from "./MyFirstPlugin";

const app = createApp(App);
app.use(MyFirstPlugin, {
  fontSize: {
    small: 12,
    medium: 24,
    large: 36,
  },
});
app.mount("#app");
