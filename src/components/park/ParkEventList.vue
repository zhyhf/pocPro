<template>
  <div
    class="event-container2 index bg"
    v-show="$store.state.DigitalTwin.parkEventListShow"
  >
    <titleToolVue
      :title="title"
      :iconPath="iconPath"
      type="parkEventList"
    ></titleToolVue>
    <div class="content">
      <div class="header rows">
        <span v-for="(item, index) in tableHead" :key="index"> {{ item }}</span>
      </div>
      <div class="rows" v-for="(item, i) in tableData" :key="i">
        <div v-for="(v, k, index) in item" :key="index">
          <template v-if="k !== 'perspective'">
            <i class="redPoint" v-show="item[k] === '故障'"></i>
            <i class="greenPoint" v-show="item[k] === '正常'"></i>
            {{ item[k] }}
          </template>
        </div>
        <span
          :class="{ operation: true, active: activeIndex === i }"
          @click="flyTo(i, tableData[i].perspective, item)"
          >实时监控</span
        >
      </div>
      <div class="table-buttons">
        <el-pagination :total="5" :page-size="5" @currentChange="currentChange" />
      </div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "../titleTool.vue";
import closeToolVue from "../closeTool.vue";
import List from "../List.vue";
import ElPagination from '../../components/page/index.vue'
export default {
  components: {
    titleToolVue,
    closeToolVue,
    List,
    ElPagination
  },
  data() {
    return {
      activeIndex: 100,
      redColor: "red",
      whiteColor: "white",
      title: "摄像头",
      iconPath: require("../../assets/icon/cameraSvg.svg"),
      tableData: [
        {
          name: "NH1472589251",
          position: "17区球型机",
          time: "负一层17区",
          superName: "人员聚集",
          status: "正常",
          perspective: {
            y: 27.976325,
            x: 120.728176,
            z: 42.34,
            heading: 231.2,
            pitch: -12,
            roll: 0.1,
          },
        },
        {
          name: "NH1472589252",
          position: "企业东门2号口",
          time: "负一层28区",
          superName: "人员入侵",
          status: "正常",
          perspective: {
            y: 27.976307,
            x: 120.725234,
            z: 47.92,
            heading: 103.8,
            pitch: -22.2,
            roll: 359.8,
          },
        },
        {
          name: "NH1472589253",
          position: "28区球型机",
          time: "负一层28区",
          superName: "吸烟监测",
          status: "故障",
          perspective: {
            y: 27.975375,
            x: 120.726738,
            z: 33.26,
            heading: 108.6,
            pitch: -20.2,
            roll: 0,
          },
        },
        {
          name: "NH1472589254",
          position: "22区球型机",
          time: "负一层22区",
          superName: "吸烟监测",
          status: "正常",
          perspective: {
            y: 27.975563,
            x: 120.726657,
            z: 42,
            heading: 239.8,
            pitch: -26.6,
            roll: 0,
          },
        },
        {
          name: "NH1472589255",
          position: "28区球型机",
          time: "负一层28区",
          superName: "吸烟监测",
          status: "正常",
          perspective: {
            y: 27.975282,
            x: 120.73021,
            z: 44.18,
            heading: 203,
            pitch: -17.3,
            roll: 0.2,
          },
        },
      ],
      tableHead: ["编号", "摄像头名称", "分布区域", "算法名称", "状态", "操作"],
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
      this.tableData[0].status = "正常";
      this.warningArr[0] = false;
    },
    southGate(newVal) {
      this.tableData[1].status = "正常";
      this.warningArr[1] = false;
    },
    secondFloor(newVal) {
      this.tableData[2].status = "正常";
      this.warningArr[2] = false;
    },
  },
  methods: {
    currentChange(current) {},
    flyTo(index, position, item) {
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);
      this.activeIndex = index;
      $viewer.qtum.centerAt(position);
      setTimeout(() => {
        // 显示详情
        this.$store.commit("DigitalTwin/changeParkEventDetail", true);
        this.$store.commit("DigitalTwin/changeParkDetail", item);
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 5px;
}
.event-container2 {
  position: absolute;
  // background: url("../../assets/img/list-bg.png") no-repeat;
  // background-size: 100% 100%;
  padding: 1rem;
  padding-top: 2rem;
  left: 62%;
  top: 17%;
  font-size: 13px;
  transform: translateX(-50%);
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
        width: 11rem;
      }
      :nth-child(2) {
        width: 10rem;
      }
      :nth-child(3) {
        width: 8.5rem;
      }
      :nth-child(4) {
        width: 7.5rem;
      }
      :nth-child(5) {
        width: 4rem;
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
  }
  .operation {
    cursor: pointer;
  }
  .active {
    color: #38b7fd;
    text-decoration: underline;
  }
  .operation {
    cursor: pointer;
  }
  .active {
    color: #38b7fd !important;
    text-decoration: underline !important;
  }
}
</style>
