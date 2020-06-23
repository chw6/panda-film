export default {
  path: "/mine",
  component: () => import("@/views/Mine"),
  // isLogin: true,
  children: [
    {
      path: "center",
      component: () => import("@/views/Mine/center.vue"),
      meta: {
        needLogin: true,
      },
    },
    {
      path: "login",
      component: () => import("@/components/Login"),
    },
    {
      path: "register",
      component: () => import("@/components/Register"),
    },
    {
      path: "findPassword",
      component: () => import("@/components/FindPassword"),
    },
    {
      path: "/mine",
      redirect: "center",
    },
  ],
};
