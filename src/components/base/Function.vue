<template>
  <div class="select-function">
    <div class="select-functionall" @click="isHideDrop()">
      <div class="img-selectfunction"></div>
    </div>
    <div class="dropup-listfunction" :class="{ dropdownhind: selectHide }">
      <div
        class="dropdown-list-item"
        v-for="(item, index) in Datas.items"
        :key="index"
        @click="ClickAnItem(index)"
        :class="{ choosed: isChoose[index] }"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Function",
  data() {
    return {
      selectHide: true,
      itemIsChoose: this.Datas.selectItems,
      isChoose: new Array(this.Datas.items.length).fill(false)
    };
  },
  methods: {
    isHideDrop() {
      this.selectHide = !this.selectHide;
    },
    ClickAnItem(index) {
      this.itemIsChoose = this.Datas.items[index];
      this.selectHide = !this.selectHide;
      for (let i = 0; i < this.isChoose.length; i++) {
        if (i == index) this.isChoose[i] = true;
        else this.isChoose[i] = false;
      }
      this.$emit("ClickAnItemChoose", this.itemIsChoose);
    }
  },
  props: {
    Datas: Object,
    dataId: String
  }
};
</script>
