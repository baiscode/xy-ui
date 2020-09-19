import Vue from 'vue';
export function AddInstall(constructor: Function) {
  (constructor as any).install = function(vue: typeof Vue) {
    Vue.component(constructor.name, constructor);
  }
}