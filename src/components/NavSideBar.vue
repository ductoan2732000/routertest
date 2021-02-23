<template>
  <div class="nav-side-bar">
    <div class="logo-bar">
      <div class="logo-bar-logo"></div>
      <div class="logo-bar-icon"></div>
      <div class="logo-bar-text">Kế toán</div>
    </div>
    <div class="menu-bar">
      <div class="menu-icon tq-icon"></div>
      <div class="menu-text">Tổng quan</div>
    </div>
    <div class="menu-bar">
      <div class="menu-icon tq-icon"></div>
      <div class="menu-text">Tổng quan</div>
    </div>
    <div class="menu-bar">
      <div class="menu-icon tq-icon"></div>
      <div class="menu-text">Tổng quan</div>
    </div>
    <router-link to="/employee" class="menu-bar">
      <div class="menu-icon empoyee-icon"></div>
      <div class="menu-text">Danh mục nhân viên</div>
    </router-link>
    <router-link to="/customer" class="menu-bar">
      <div class="menu-icon customer-icon"></div>
      <div class="menu-text">Danh mục khách hàng</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavSideBar",
  data() {
    return {};
  },
  methods: {
    SwitchPage(index) {
      console.log(index);
    }
  }
};
</script>
