import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      name: "main",
      component: (resolve) => require(["@/views/main.vue"], resolve),
    },
    {
      path: "/test",
      name: "test",
      component: (resolve) =>
        require(["../components/park/CarDetail.vue"], resolve),
    },
  ],
});