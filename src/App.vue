<template>
  <div id="app">
    <NavSideBar></NavSideBar>
    <Header />
    <Content></Content>
  </div>
</template>

<script>
import NavSideBar from "./components/NavSideBar.vue";
import Header from "./components/header.vue";
import Content from "./components/Content.vue";

export default {
  name: "App",
  components: {
    NavSideBar,
    Header,
    Content
  },
  data() {
    return {};
  }
};
</script>

<style>
@import url("./assets/style/main.css");
#app {
  font-family: GoogleSans-Regular;
  font-size: 13px;
  margin: 0px;
}
</style>
