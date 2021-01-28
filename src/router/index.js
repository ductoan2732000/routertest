import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import abc from "@/components/abc.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/employee",
      name: "Employee",
      component: HelloWorld
    },
    {
      path: "/customer",
      name: "Customer",
      component: abc
    }
  ]
});
