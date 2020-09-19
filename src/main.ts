import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n';
import enMessage from './language/en_US';
import cnMessage from './language/zh_CN';
Vue.use(VueI18n);

const messages = {
    en: enMessage,
    cn: cnMessage
}
const i18n = new VueI18n({
    locale: navigator.language === 'zh-CN' ? 'cn' : 'en',
    messages
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
