<template>
  <div class="select-box">
    <div class="select-drop">
      <span class="select">Select item</span>
    </div>
    <div class="dropdown-list">
      <div class="dropdown-list-item">Nhà hàng biển đông</div>
      <div class="dropdown-list-item">Nhà hàng ngân hà</div>
      <div class="dropdown-list-item">Nhà hàng sa mạc</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.select-box {
  height: 40px;
  width: 200px;
  cursor: pointer;
  position: relative;
  display: block;
}
.select-drop {
  padding: 15px;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid #bbbbbb;
  height: 100%;
  box-sizing: border-box;
}
.dropdown-list {
  height: 140px;
  width: 200px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
}
.dropdown-list-item {
  height: 40px;
  width: 200px;
  border: 1px solid #fff;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  border: 1px solid #bbbbbb;
  background-color: #fff;
  border-radius: 4px;
  padding-left: 15px;
}
</style>
