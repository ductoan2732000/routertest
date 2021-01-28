import Vue from "vue";
import Router from "vue-router";
import Employee from "../components/employee/ListEmployee.vue";
import Customer from "../components/customer/ListCustomer.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/employee",
      name: "Employee",
      component: Employee
    },
    {
      path: "/customer",
      name: "Customer",
      component: Customer
    }
  ]
});
