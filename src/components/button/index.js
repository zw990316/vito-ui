import Button from './src/button';

//给button组件单独暴露个install方法，方便单独引用button组件
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
  };

export default Button;