import Button from "./components/button";
import Icon from "./components/icon"

const components = [Button, Icon]

const install = (Vue) => {
  //
  components.forEach(component=>{
    Vue.component(component.name, component)
  })
}
if(typeof window.Vue !=='undefined' ){
  install(Vue);
}
export default {
    install,
    Button,
    Icon
}