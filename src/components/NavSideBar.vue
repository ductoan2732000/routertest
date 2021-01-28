<template>
  <div class="nav-side-bar">
    <div class="logo-bar">
      <div class="logo-bar-logo"></div>
      <div class="logo-bar-icon"></div>
    </div>
    <div href="" class="menu-bar">
      <div class="menu-icon tq-icon"></div>
      <div class="menu-text">Tổng quan</div>
    </div>
    <div href="" class="menu-bar">
      <div class="menu-icon tq-icon"></div>
      <div class="menu-text">Tổng quan</div>
    </div>
    <div href="" class="menu-bar">
      <div class="menu-icon tq-icon"></div>
      <div class="menu-text">Tổng quan</div>
    </div>
    <router-link to="/employee" href="" class="menu-bar">
      <div class="menu-icon empoyee-icon"></div>
      <div class="menu-text">Danh mục nhân viên</div>
    </router-link>
    <router-link to="/customer" href="" class="menu-bar">
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

<style>
.nav-side-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #bbbbbb;
}
.logo-bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  cursor: pointer;
}
.logo-bar-logo {
  width: 30px;
  height: 30px;
  background-image: url("../assets/img/toggle.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 24px;
}
.logo-bar-icon {
  width: 100%;
  height: 30px;
  margin-left: 10px;
  background-image: url("../assets/img/cukcuk-logo.png");
  background-position: 0 center;
  background-repeat: no-repeat;
  background-size: contain;
}
.menu-bar {
  display: flex;
  padding-left: 24px;
  height: 44px;
  cursor: pointer;
  line-height: 44px;
}
.menu-bar:hover {
  background-color: #e5e5e5;
}
.menu-icon {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-right: 10px;
  background-size: contain;
}
.tq-icon {
  background-image: url("../assets/icon/dashboard.png");
}
.empoyee-icon {
  background-image: url("../assets/icon/dic-employee.png");
}
.customer-icon {
  background-image: url("../assets/icon/dic-employee.png");
}
.menu-text {
  color: black;
  text-decoration-line: none;
}
</style>
