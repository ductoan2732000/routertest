<template>
  <div class="content">
    <!-- <HeaderContent></HeaderContent>
    <FilterContent></FilterContent>
    <DataContent></DataContent>
    <PaggingContent></PaggingContent> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HeaderContent from './content/HeaderContent.vue'
// import FilterContent from './content/FilterContent.vue'
// import DataContent from './content/DataContent.vue'
// import PaggingContent from './content/PaggingContent.vue'
export default {
  name: 'Content'
  // data () {
  //   return {}
  // },
  // components: {
  //   HeaderContent,
  //   FilterContent,
  //   PaggingContent,
  //   DataContent
  // }
}
</script>

<style>
.content {
  position: absolute;
  top: 61px;
  right: 0px;
  width: calc(100% - 253px);
  height: calc(100% -60px);
  background-color: #ffffff;
  padding: 16px;
}
</style>
