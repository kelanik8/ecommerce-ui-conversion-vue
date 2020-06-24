import Vue from "vue";
import App from "./App.vue";
import Vuesax from "./assets/vuesax/vuesax.common.js";

import "./assets/vuesax/vuesax.css";
import "material-icons/iconfont/material-icons.css";

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: "rgb(205, 226, 1)"
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
