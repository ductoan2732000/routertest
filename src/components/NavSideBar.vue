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

<style>
.nav-side-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: gray;
  border-right: 1px solid #bbbbbb;
  color: white;
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
  background-image: url(/static/img/Sprites.64af8f61.64af8f6.svg);
  background-size: 2000px;
  background-position: -1137px -23px;
  background-repeat: no-repeat;
  margin-left: 24px;
}
.logo-bar-icon {
  width: 38px;
  height: 55px;
  margin-left: 10px;
  background-image: url(/static/img/Sprites.64af8f61.64af8f6.svg);
  background-position: -1038px -514px;
  background-repeat: no-repeat;
  background-size: 1200px;
}
.logo-bar-text {
  height: 16px;
  text-align: center;
  text-transform: uppercase;
}
.menu-bar {
  display: flex;
  padding-left: 24px;
  height: 44px;
  cursor: pointer;
  line-height: 44px;
  text-decoration: none;
}
.menu-bar:hover {
  background-color: #e5e5e5;
}
.menu-icon {
  width: 20px;
  height: 20px;
  align-self: center;
  margin-right: 10px;
}
.tq-icon {
  background-image: url("../assets/icon/Sprites.64af8f61.svg");
  background-size: 1500px;
  background-position: -148px -23px;
}
.empoyee-icon {
  background-image: url("../assets/icon/dic-employee.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
}
.customer-icon {
  background-image: url("../assets/icon/dic-employee.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
}
.menu-text {
  text-decoration-line: none;
  color: white;
}
.router-link-exact-active {
  background-color: #76bda5;
}
</style>
