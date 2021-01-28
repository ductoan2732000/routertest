<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style>
.content {
  position: absolute;
  top: 61px;
  right: 0px;
  width: calc(100% - 253px);
  height: calc(100% -60px);
  background-color: #ffffff;
  padding: 16px;
}
</style>
