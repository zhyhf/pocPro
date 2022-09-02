<template>
  <div class="park-space"  v-show="$store.state.DigitalTwin.EnterPriseShow">
    <!-- <div class="closeTool"></div> -->
    <titleToolVue :title="title" :iconPath="iconPath" :type="'EnterPriseShow'"></titleToolVue>
    <ListVue :tableData="tableData" :tableHead="tableHead" :actionName="actionName"></ListVue>
  </div>
</template>
<script>
import ListVue from "./List.vue";
import titleToolVue from "../titleTool.vue";
export default {
  // props: ["tableid"],
  data() {
    return {
      tableData: [
        {
          name: "1",
          industry: "943.29㎡",
        },
        {
          name: "2",
          industry: "941.29㎡",
        },
        {
          name: "3",
          industry: "922.29㎡",
        },
        {
          name: "4",
           industry: "922.29㎡",
        },
          {
          name: "5",
          industry: "902.29㎡",
        },
      ],
      tableHead: ["楼层号", "楼层面积", "操作"],
      actionName:['入驻详情','详情'],
      title: "北航大厦",
      iconPath: require("../../assets/icon/houseIcon.svg"),
    };
  },
  components: {
    ListVue,
    titleToolVue,
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.park-space {
  position: absolute;
  background: url("../../assets/img/enterprise-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  top: 19%;
  left: 32.5%;
  transform: translateX(-50%);
  z-index: 103;
  .detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    // font-size: 20px;
    font-weight: normal;
    table {
      width: 100%;
      tr {
        margin-bottom: 8px;
      }
    }
  }
}
.closeTool {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: url(../../assets/icon/close.png) no-repeat;
  background-size: 100% 100%;
  z-index: 210;
}
</style>
