<template>
  <div class="header">
    <div class="name-store">
      <DropDown :Datas="selectRestaurant" />
    </div>
    <div class="account-info">
      <div class="filter-left">
        <input
          type="text"
          class="icon-search input-search"
          placeholder="Nhập từ khóa tìm kiếm"
        />
      </div>
      <div class="account-iconbar"></div>
      <div class="account-setting"></div>
      <div class="account-chat"></div>
      <div class="account-help"></div>
      <div class="account-alert"></div>
      <div class="account-image"></div>
      <div class="account-name">Trần Đức Toản</div>
      <div class="account-option"></div>
    </div>
  </div>
</template>

<script>
import DropDown from "./base/DropDown";
export default {
  name: "Header",
  data() {
    return {
      selectRestaurant: {
        selectItems: "Chọn nhà hàng",
        items: [
          "Tất cả nhà hàng",
          "Nhà hàng biển đông",
          "Nhà hàng sa mạc",
          "Nhà hàng chợ lớn"
        ]
      }
    };
  },
  components: {
    DropDown
  }
};
</script>

