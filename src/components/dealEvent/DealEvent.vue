<template>
  <div
    class="event-container index"
    v-show="$store.state.DigitalTwin.eventListShow"
  >
    <titleToolVue
      :title="title"
      :iconPath="iconPath"
      :type="'eventListShow'"
    ></titleToolVue>
    <div class="content">
      <div class="header rows">
        <span v-for="(item, index) in tableHead" :key="index"> {{ item }}</span>
      </div>
      <div class="rows" v-for="(item, i) in $store.state.DigitalTwin.tableDataWarning" :key="i">
        <div v-for="(v, k, index) in item" :key="index">
          <template v-if="k !== 'perspective'&& k !=='analysis'">
            <i class="redPoint" v-show="item[k] === '报警中'"></i>
            <i
              class="whitePoint"
              v-show="item[k] === '已处理' || item[k] === '已忽略'"
            ></i>
            {{ item[k] }}
          </template>
        </div>
        <span
          :class="{ operation: true, active: activeIndex === i }"
          @click="flyTo(i, $store.state.DigitalTwin.tableDataWarning[i].perspective, item)"
          >查看</span
        >
      </div>
      <div class="table-buttons">
        <el-pagination
          :total="5"
          :page-size="5"
          @currentChange="currentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "../titleTool.vue";
import closeToolVue from "../closeTool.vue";
import List from "../List.vue";
import ElPagination from "../page/index.vue";
import {clearWarningEntities,createEarlyWaring,reseWarningSelectedIcon} from '@/util/createBillboard.js'
export default {
  components: {
    titleToolVue,
    closeToolVue,
    List,
    ElPagination,
  },
  created(){
    this.$bus.$on('changeWarningStyle',()=>{
      this.activeIndex=-1
    })
  },
  data() {
    return {
      activeIndex: -1,
      redColor: "red",
      whiteColor: "white",
      title: "预警事件",
      iconPath: require("../../assets/icon/event-blue.svg"),
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
    currentChange(current) {},
    flyTo(index, position, item) {
      this.$store.commit("DigitalTwin/changeEventDetailShow", false);
      this.activeIndex = index;
      this.$store.state.DigitalTwin.eventListShow = false;
      reseWarningSelectedIcon();
      $viewer.qtum.centerAt(position);
      this.$store.commit("DigitalTwin/changeEventDetail", item);
      setTimeout(() => {
        // 显示详情
        this.$store.commit("DigitalTwin/changeEventDetailShow", true);
      }, 1500);
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
.event-container {
  position: absolute;
  background: url("../../assets/img/list-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  bottom: 14%;
  left: 40.5%;
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
        width: 7rem;
      }
      :nth-child(2) {
        width: 11rem;
      }
      :nth-child(3) {
        width: 15rem;
      }
      :nth-child(4) {
        width: 7rem;
      }
      span {
        width: 30px;
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
