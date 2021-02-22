<template>
  <div :class="{ 'show-pop-up': checkPopUp }">
    <div class="pop-up-modal"></div>
    <div class="pop-up">
      <div class="alert-pop-up">
        {{ this.msgPopup }}
      </div>
      <div
        class="option-pop-up"
        v-if="
          this.checkStatus() == 'InsertErr' ||
            this.checkStatus() == 'UpdateErr' ||
            this.msgPopup.includes('xóa tài khoản ngân hàng') == true ||
            this.msgPopup.includes('xóa nhân viên') == true
        "
      >
        <button class="btn-option-popup" @click="returnDialog">Cancle</button>
        <button class="btn-option-popup" @click="outDialog">Ok</button>
      </div>
      <div class="option2-pop-up" v-else>
        <button class="btn-option-popup" @click="outDialog">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkPopUp: Boolean,
    msgPopup: String,
    indexDelete: String
  },
  methods: {
    returnDialog() {
      if (
        this.checkStatus() == "InsertErr" ||
        this.checkStatus() == "UpdateErr"
      ) {
        this.$emit("closePopUpAlert", false);
      } else if (
        this.msgPopup.includes("xóa tài khoản ngân hàng") == true ||
        this.msgPopup.includes("xóa nhân viên") == true
      ) {
        this.$emit("notDeletBank", "No");
      }
    },
    outDialog() {
      if (
        this.msgPopup.includes("xóa tài khoản ngân hàng") == true ||
        this.msgPopup.includes("xóa nhân viên") == true
      ) {
        this.$emit("deleteBankYes", this.indexDelete);
      } else this.$emit("OutPopUpAlert", false);
    },
    checkStatus() {
      if (this.msgPopup.includes("(Lỗi thêm).") == true) {
        return "InsertErr";
      } else if (this.msgPopup.includes("(Thêm thành công).") == true) {
        return "InsertOk";
      } else if (this.msgPopup.includes("(Lỗi cập nhật).") == true) {
        return "UpdateErr";
      } else if (this.msgPopup.includes("(Sửa thành công).") == true) {
        return "UpdateOk";
      }
    }
  }
};
</script>

<style scoped>
.pop-up {
  width: 400px;
  height: 200px;
  background-color: white;
  z-index: 999;
  position: absolute;
  top: 25%;
  left: 25%;
  border: 3px solid #ccc;
  border-radius: 4px;
  display: block;
  justify-content: center;
}
.show-pop-up {
  display: none;
}
.alert-pop-up {
  width: 80%;
  height: 35%;
  margin-top: 13%;
  margin-left: 10%;
  border-bottom: 3px solid #ccc;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 15px;
}
.option-pop-up {
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  align-items: center;
}
.option2-pop-up {
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: center;
  margin-left: 10%;
  align-items: center;
}
.btn-option-popup {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.btn-option-popup:hover {
  background-color: #2fbe8e;
}
.pop-up-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
}
</style>
