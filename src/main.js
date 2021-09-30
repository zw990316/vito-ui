import Vue from "vue";
import App from "./App.vue";
import viUi from "./index"
Vue.config.productionTip = false;
Vue.use(viUi)
new Vue({
  render: (h) => h(App),
}).$mount("#app");
