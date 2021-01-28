<template>
  <div class="pagging-bar">
    <div class="pagging-info"><b>Hiển thị khách hàng 20/100</b></div>
    <div class="pagging-option">
      <div class="first-page"></div>
      <div class="pre-page"></div>
      <div class="list-page">
        <button class="btn-page select-page">1</button>
        <button class="btn-page">2</button>
        <button class="btn-page">3</button>
        <button class="btn-page">4</button>
      </div>
      <div class="next-page"></div>
      <div class="last-page"></div>
    </div>
    <div class="pagging-recode"><b>10 khách hàng/ trang</b></div>
  </div>
</template>

<script>
export default {
  name: 'PaggingContent',
  data () {
    return {}
  }
}
</script>

<style>
.pagging-bar {
  height: 56px;
  border-top: 2px solid #bbbbbb;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
}
.pagging-info {
  position: absolute;
  left: 16px;
}
.pagging-option {
  display: inline-flex;
}
.pagging-recode {
  position: absolute;
  right: 16px;
}
.first-page {
  opacity: 0.7;
  margin: 0 4px;
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  background-image: url("../../assets/icon/btn-firstpage.svg");
  box-sizing: border-box;
}
.first-page:hover {
  opacity: 0.9;
  background-color: #ffffff;
  border: 1px solid #ccc;
}
.pre-page {
  opacity: 0.7;
  margin: 0 4px;
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  background-image: url("../../assets/icon/btn-prev-page.svg");
}
.pre-page:hover {
  opacity: 0.9;
  background-color: #ffffff;
  border: 1px solid #ccc;
}
.next-page {
  opacity: 0.7;
  margin: 0 4px;
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  background-image: url("../../assets/icon/btn-next-page.svg");
}
.next-page:hover {
  opacity: 0.9;
  background-color: #ffffff;
  border: 1px solid #ccc;
}
.last-page {
  opacity: 0.7;
  margin: 0 4px;
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  background-image: url("../../assets/icon/btn-lastpage.svg");
}
.last-page:hover {
  opacity: 0.9;
  background-color: #ffffff;
  border: 1px solid #ccc;
}
.btn-page {
  width: 30px;
  height: 30px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #e9ebee;
  cursor: pointer !important;
  outline: none;
}
.btn-page:hover {
  background-color: #ffffff;
  color: black;
}
.select-page {
  background-color: #019160;
  color: #ffffff;
}
</style>
