<template>
  <div class="park-space bg">
    <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
    <div class="title"></div>
    <div class="detail">
      <div class="item left">
        <span class="mb" v-for="(title, index) in head" :key="index">{{
          title
        }}</span>
      </div>
      <div class="item right">
        <span class="mb" v-for="(item, index) in inputData.data" :key="index">{{
          item
        }}</span>
      </div>
    </div>
    <div class="closeTool"></div>
  </div>
</template>
<script>
import titleToolVue from "./titleTool.vue";
export default {
  props: ["inputData"],
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6],
      head: [
        "具体位置",
        "租赁面积",
        "租赁租约",
        "物业费",
        "人员数量",
        "总用电量",
      ],
      iconPath: require("../assets/icon/flag.png"),
    };
  },
  computed: {
    title() {
      return `入驻企业-${this.inputData.title}`;
    },
  },
  components: {
    titleToolVue,
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/globe.css";
.park-space {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .detail {
    display: flex;
    color: #fff;
    .left {
      text-align: center;
      span {
        background: rgba(56, 183, 253, 0.64);
      }
    }
    .right {
      flex: 1;
      text-align: left;
      span {
        background-color: #1d4f7786;
        padding-left: 10px;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
    .mb {
      margin: 5px 0;
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
