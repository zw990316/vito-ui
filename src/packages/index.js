import Button from "./button.vue";
import Icon from "./icon.vue";
const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
}
if(typeof window.Vue !=='undefined' ){
  install(Vue);
}
export default {
    install
}