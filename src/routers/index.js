import Vue from "vue";
import VueRouter from "vue-router";
import movieRouter from "./movie";
import cinemaRouter from "./cinema";
import mineRouter from "./mine";

import { isLogined } from "@/utils/auth";

Vue.use(VueRouter);

// export default
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    cinemaRouter,
    movieRouter,
    mineRouter,
    {
      path: "/*",
      redirect: "/movie",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({
        path: "/mine/login",
      });
    }
  } else {
    next();
  }
});

export default router;
