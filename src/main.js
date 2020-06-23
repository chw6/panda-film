import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";

import Vant from "vant";
import "vant/lib/index.css";
import { Popup } from "vant";

Vue.use(Vant);
Vue.use(Popup);

import axios from "axios";
Vue.prototype.axios = axios;

// 全局过滤器，目的是解决图片调接口时，因为图片宽高可自选的格式而无法显示的问题
Vue.filter("setWH", (url, arg) => {
  return url.replace(/w\.h/, arg);
});
import Scroller from "@/components/Scroller";
Vue.component("Scroller", Scroller);

import Loading from "@/components/Loading";
Vue.component("Loading", Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
