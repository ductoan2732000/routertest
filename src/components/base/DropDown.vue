<template>
  <div class="select-box">
    <div class="select-drop" @click="isHideDrop">
      <span>{{ Datas.selectItems }}</span>
      <div class="img-select"></div>
    </div>
    <div class="dropdown-list" :class="{ dropdownhind: selectHide }">
      <div
        class="dropdown-list-item"
        v-for="(item, index) in Datas.items"
        :key="index"
      >
        <span>{{ item }}</span>
      </div>
      <!-- <div class="dropdown-list-item"><span>Nhà hàng ngân hà</span></div>
      <div class="dropdown-list-item"><span>Nhà hàng sa mạc</span></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  data() {
    return {
      selectHide: false
    };
  },
  methods: {
    isHideDrop: () => {
      this.selectHide = !this.selectHide;
      console.log(this.selectHide);
    }
  },
  props: {
    Datas: Object
  }
};
</script>

<style>
.select-box {
  height: 40px;
  width: 200px;
  position: relative;
}
.select-drop {
  padding-left: 15px;
  cursor: pointer;
  display: flex;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bbbbbb;
  height: 100%;
  box-sizing: border-box;
  z-index: 99;
}

.img-select {
  width: 20px;
  height: 100%;
  background-position: center;
  background-image: url("../../assets/icon/dropdown.png");
  padding-right: 15px;
  background-size: 20px;
  background-repeat: no-repeat;
}
.dropdown-list {
  height: 140px;
  width: 100%;
  border: none;
  outline: none;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  margin-top: 4px;
  cursor: pointer;
}
.dropdownhind {
  display: none;
}
.dropdown-list-item {
  height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid #bbbbbb;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.dropdown-list-item:hover {
  background-color: #bbbbbb;
}
</style>
