import Vue from 'vue';
import Xybutton from './button/index';

const components = {
  Xybutton
}

function install(vue: typeof Vue) {
  Object.keys(components).forEach(function(component: any) {
    vue.component(component.name, component);
  })
}

export default {
  ...components,
  install
}
