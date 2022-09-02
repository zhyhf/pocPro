<template>
  <div
    class="event-container index"
    v-show="$store.state.DigitalTwin.houseListShow"
  >
    <div class="closeTool" @click="showEventContainer"></div>
    <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
    <div class="content">
      <div class="header rows">
        <span v-for="(item, index) in tableHead" :key="index"> {{ item }}</span>
      </div>
      <div class="rows" v-for="(item, i) in tableData" :key="i">
        <div v-for="(v, k, index) in item" :key="index">
          <template v-if="k !== 'perspective'">
            <i
              class="redPoint"
              v-show="item[k] === '报警中' && warningArr[i]"
            ></i>
            <i
              class="whitePoint"
              v-show="item[k] === '已处理' && !warningArr[i]"
            ></i>
            {{ item[k] }}
          </template>
        </div>
        <span
          :class="{ operation: true, active: activeIndex === i }"
          @click="flyTo(i, tableData[i].perspective)"
          >查看</span
        >
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
  data() {
    return {
      activeIndex: 100,
      redColor: "red",
      whiteColor: "white",
      title: "事件处理",
      iconPath: require("../../assets/icon/event-blue.svg"),
      tableData: [
        {
          name: "吸烟",
          position: "企业东门1号口",
          time: "",
          status: "报警中",
          perspective: {
            y: 27.974582,
            x: 120.725823,
            z: 91.01,
            heading: 60.2,
            pitch: -23.2,
            roll: 0.3,
          },
        },
      ],
      tableHead: ["报警事件", "报警位置", "报警时间", "当前状态", "操作"],
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
      if (index === 0) {
        this.$store.commit("DigitalTwin/changeEastGateShow", true);
      } else if (index === 1) {
        this.$store.commit("DigitalTwin/changeSouthGateShow", true);
      } else {
        this.$store.commit("DigitalTwin/changeSecondFloorShow", true);
      }
      this.activeIndex = index;
      $viewer.qtum.centerAt(position);
    },
    showEventContainer() {
      this.$store.commit("DigitalTwin/changeEventShow", false);
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      this.$store.commit("DigitalTwin/changeCheckBtnNum", 0);
    },
  },
  mounted() {
    let time = new Date().format("hh");
    let date = new Date().format("yyyy.MM.dd");
    this.tableData[0].time = `${date} ${time - 1}:47:32`;
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.event-container {
  position: absolute;
  background: url("../../assets/img/list-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  bottom: 14%;
  left: 50%;
  transform: translateX(-50%);
  .content {
    width: 100%;
    height: 100%;
    padding: 12px;
    color: #fff;
    .rows {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
      white-space: nowrap;
      background-color: #0516306e;
      :nth-child(1) {
        width: 9rem;
      }
      :nth-child(2) {
        width: 15rem;
      }
      :nth-child(3) {
        width: 16rem;
      }
      :nth-child(4) {
        width: 8rem;
      }

      span {
        width: 50px;
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
    .whitePoint {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        left: -1rem;
        top: 35%;
        width: 7px;
        height: 7px;
        background-color: #fff;
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
  }
  .closeTool {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0.5rem;
    right: 0.7rem;
    background: url(../../assets/icon/close.png) no-repeat;
    background-size: 100% 100%;
    z-index: 210;
  }
}
</style>
