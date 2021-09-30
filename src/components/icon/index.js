import Icon from './src/icon';

//给Icon组件单独暴露个install方法，方便单独引用button组件
Icon.install = function(Vue) {
    Vue.component(Icon.name, Icon);
  };

export default Icon;