<template>
  <div class="detail">
    <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
    <div class="detail-content" v-for="(item, index) in formData" :key="index">
      <div class="left-item">{{ item.name }}</div>
      <div class="right-item">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "./titleTool.vue";
export default {
  props: ["formData", "title"],
  components: {
    titleToolVue,
  },
  data() {
    return {
      iconPath: require("../assets/icon/car.svg"),
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../assets/css/globe.css");
.detail {
  width: 36.8rem;
  font-size: 1.4rem;
  background: url(../assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .line {
    width: 80%;
    height: 1px;
    margin: 5px 0;
  }
  .detail-content {
    width: 32rem;
    height: 2.4rem;
    margin: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left-item {
      background-color: rgba(56, 183, 253, 0.64);
      color: #fff;
      width: 30%;
      padding: 0 10px;
    }
    .right-item {
      background-color: #0b304f;
      color: #fff;
      flex: 1;
      text-align: left;
      padding-left: 10px;
    }
  }
}
.closeTool {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: url(../assets/icon/close.png) no-repeat;
  background-size: 100% 100%;
  z-index: 210;
}
</style>
