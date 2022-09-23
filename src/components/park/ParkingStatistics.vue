<template>
  <div class="parking-statistics" id="ParkingStatistics"  v-show="$store.state.DigitalTwin.parkShow">
    <titleToolVue :title="$store.state.DigitalTwin.parkDetails.parkName" :iconPath="iconPath" :type="'parkShow'"></titleToolVue>
    <ParkSpaceVue :chartId="chartId" :option="option"></ParkSpaceVue>
  </div>
</template>
<script>
import ParkSpaceVue from "./ParkSpace.vue";
import titleToolVue from "../titleTool.vue";
import closeToolVue from "../closeTool.vue";
export default {
  components: {
    ParkSpaceVue,
    titleToolVue,
  },
  data() {
    return {
      s: "$store.state.DigitalTwin.parkCamera",
      chartId: "parking",
      iconPath: require("../../assets/icon/park.png"),
      option: {
        series: [
          {
            radius: "100%",
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },

            progress: {
              show: true,
              overlap: false,
              roundCap: false,
              clip: true,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#0B1930",
                color: "#38B7FD",
              },
            },
            axisLine: {
              lineStyle: {
                width: 15,
                color: [[1, "#0B1930"]],
              },
            },

            //刻度
            splitLine: {
              show: false,
              distance: 0,
              length: 1,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 10,
            },
            data: [
              {
                value: 85,
                detail: {
                  valueAnimation: true,
                  offsetCenter: ["0%", "0%"],
                },
              },
            ],
            title: {
              fontSize: 14,
            },
            detail: {
              width: 10,
              height: 10,
              fontSize: 20,
              color: "#fff",
              formatter: "{value}%",
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.parking-statistics {
  // width: 360px;
  background: url("../../assets/img/list-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 14px;
  // height: 192px;
  line-height: 100%;
  position: absolute;
  display: flex;
  left: 23.1%;
  top: 17%;
  flex-direction: column;
  z-index: 120;
  ::v-deep.el-divider--horizontal {
    margin: 12px 0;
    border-top: 1px dashed #DCDFE6;
    background: 0 0;
  }
}
</style>
