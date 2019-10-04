import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/reset.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: () => {
    return {
      app: "msg in root vue"
    };
  },
  methods: {
    print() {
      console.log("print");
    }
  },
  render: h => h(App)
}).$mount("#app");
