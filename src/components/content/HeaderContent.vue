<template>
  <div class="header-content">
    <div class="title-header">Danh sachs khách hàng</div>
    <div class="add-header">
      <button class="btn-add">
        <div class="btn-add-icon"></div>
        <div class="btn-add-text">Thêm khách hàng</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContent',
  data () {
    return {

    }
  }
}
</script>

<style>
.header-content {
  padding: 8px 0 16px 0;
  display: flex;
  align-items: center;
}
.title-header {
  font-size: 20px;
  font-weight: bold;
}
.add-header {
  position: absolute;
  right: 16px;
}
.btn-add {
  display: flex;
  align-items: center;
  background-color: #019160;
  border-radius: 4px;
  height: 40px;
  font-size: 13px;
  color: #ffffff;
  font-family: GoogleSans-Regular;
  padding-left: 16px;
  padding-right: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  min-width: 100px;
  justify-content: center;
}
.btn-add-icon {
  background-position: center;
  width: 16px;
  height: 16px;
  background-image: url("../../assets/icon/add.png");

}
.btn-add-text {
  margin-left: 8px;
}
</style>
