<template>
  <div :class="{ 'show-pop-up': checkPopUp }">
    <div class="pop-up-modal"></div>
    <div class="pop-up">
      <div class="alert-pop-up">
        {{ this.msgPopup }}
      </div>
      <div class="option-pop-up">
        <button class="btn-option-popup" @click="returnDialog">Cancle</button>
        <button class="btn-option-popup" @click="outDialog">Ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkPopUp: Boolean,
    msgPopup: String
  },
  methods: {
    returnDialog() {
      if (this.checkStatus() == "Insert") {
        console.log("dugn r");
        this.$emit("closePopUpAlert", false);
      }
    },
    outDialog() {
      this.$emit("OutPopUpAlert", false);
    },
    checkStatus() {
      if (this.msgPopup.includes("(Lỗi thêm).") == true) return "Insert";
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
