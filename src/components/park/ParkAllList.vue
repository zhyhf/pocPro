<template>
  <div :id="tableid" class="event-container3">
    <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
    <div class="content">
      <div class="header rows">
        <span v-for="(item, index) in tableHead" :key="index"> {{ item }}</span>
      </div>
      <div class="rows" v-for="(item, i) in tableData" :key="i">
        <div v-for="(v, k, index) in item" :key="index">
          <template v-if="k !== 'perspective'">
            {{ item[k] }}
          </template>
        </div>
      </div>
      <div class="page-group flex">
        <div class="pre"></div>
        <div class="next"></div>
      </div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "../titleTool.vue";
import closeToolVue from "../closeTool.vue";
import List from "../List.vue";
export default {
  components: {
    titleToolVue,
    closeToolVue,
    List,
  },
  props: ["tableid"],
  data() {
    return {
      activeIndex: 100,
      redColor: "red",
      whiteColor: "white",
      title: "停车场",
      iconPath: require("../../assets/icon/car.svg"),
      tableData: [
        {
          name: "创客小镇一层",
          position: "60",
          time: "35",
          superName: "1元/小时",
          status: "24小时",
        },
        {
          name: "创客小镇负一层",
          position: "75",
          time: "36",
          superName: "1元/小时",
          status: "24小时",
        },
        {
          name: "北航大厦负一层",
          position: "95",
          time: "74",
          superName: "1元/小时",
          status: "24小时",
        },
        {
          name: "北航大厦负二层",
          position: "74",
          time: "54",
          superName: "1元/小时",
          status: "24小时",
        },
      ],
      tableHead: ["名称", "总车位", "空余车位", "收费标准", "营业时间"],
      warningArr: [true, true, true],
      time1: 0,
      time2: 0,
      time3: 0,
    };
  },
  computed: {
    eastGate() {
      return this.$store.state.DigitalTwin.eastGateWarning;
    },
    southGate() {
      return this.$store.state.DigitalTwin.southGateWarning;
    },
    secondFloor() {
      return this.$store.state.DigitalTwin.secondFloorWarning;
    },
  },
  watch: {
    eastGate(newVal) {
      this.tableData[0].status = "已处理";
      this.warningArr[0] = false;
    },
    southGate(newVal) {
      this.tableData[1].status = "已处理";
      this.warningArr[1] = false;
    },
    secondFloor(newVal) {
      this.tableData[2].status = "已处理";
      this.warningArr[2] = false;
    },
  },
  methods: {
    flyTo(index, position) {
      this.activeIndex = index;
      // 显示详情
      this.$store.commit("DigitalTwin/changeParkEventDetail", true);
      // $viewer.qtum.centerAt(position);
    },
    showEventContainer() {
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.event-container3 {
  background: url(../../assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
  padding: 10px 20px;
  position: absolute;
  font-size: 20px;
  .title {
    padding-left: 10px;
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 8px;
    color: #fff;
    .rows {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
      white-space: nowrap;
      background-color: #0516306e;
      :nth-child(1) {
        width: 16rem;
      }
      :nth-child(2) {
        width: 8rem;
      }
      :nth-child(3) {
        width: 9rem;
      }
      :nth-child(4) {
        width: 11rem;
      }
      :nth-child(5) {
        width: 8.5rem;
      }
      span {
        width: 60px;
      }
    }
    .header {
      background-color: transparent !important;
      color: rgb(206, 206, 206);
    }
    .redPoint {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        left: -1rem;
        top: 35%;
        width: 7px;
        height: 7px;
        background-color: #ff4848;
        border-radius: 4px;
      }
    }
    .greenPoint {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        left: -1rem;
        top: 35%;
        width: 7px;
        height: 7px;
        background-color: #2affaa;
        border-radius: 4px;
      }
    }
    .page-group {
      // width:100%;
      justify-content: flex-end;
      .pre {
        width: 1.6rem;
        height: 1.6rem;
        background: url("../../assets/icon/left.svg") no-repeat;
        background-size: 100% 100%;
        margin-right: 0.5rem;
      }
      .next {
        width: 1.6rem;
        height: 1.6rem;
        background: url("../../assets/icon/right.svg") no-repeat;
        background-size: 100% 100%;
        margin-left: 0.5rem;
      }
    }
  }
  .operation {
    cursor: pointer;
  }
  .active {
    color: #38b7fd;
    text-decoration: underline;
  }
  .closeTool {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0.9rem;
    right: 0.7rem;
    background: url(../../assets/icon/close.png) no-repeat;
    background-size: 100% 100%;
    z-index: 210;
  }
}
</style>
