import Vue from "vue";
import App from "./App.vue";
import veUi from "./packages/index"
Vue.config.productionTip = false;
Vue.use(veUi)
new Vue({
  render: (h) => h(App),
}).$mount("#app");
