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
