<template>
  <div class="header">
    <div class="name-store">
      <DropDown :Datas="selectRestaurant"/>
      <!-- <select name="" id="" class="select-store">
        <option value="">Nhà hàng biển đông</option>
        <option value="">Nhà hàng biển đông</option>
        <option value="">Nhà hàng biển đông</option>
        <option value="">Nhà hàng biển đông</option>
      </select> -->
    </div>
    <div class="account-info">
      <div class="account-image"></div>
      <div class="account-name">Trần Đức Toản</div>
      <div class="account-option"></div>
    </div>
  </div>
</template>

<script>
import DropDown from "./base/DropDown";
export default {
  name: 'Header',
  data () {
    return {
      selectRestaurant:{
        selectItems: "Chọn nhà hàng",
        items: ["Nhà hàng biển đông", "Nhà hàng sa mạc", "Nhà hàng chợ lớn"]
      }

    }
  },
  components: {
    DropDown
  }
}
</script>

<style>
.header {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 221px);
  height: 60px;
  border-bottom: 1px solid #bbbbbb;
}
.name-store {
  padding: 16px;
  font-size: 16px;
}
.select-store {
  height: 40px;
  width: 200px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}
.account-info {
  position: absolute;
  right: 24px;
  display: flex;
  align-items: center;
}
.account-image {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-image: url("../assets/icon/avatar-default.png");
  background-size: contain;
}
.account-name {
  padding: 10px;
}
.account-option {
  height: 16px;
  width: 16px;
  cursor: pointer;
  background-image: url("../assets/icon/option.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 center;
}
</style>
