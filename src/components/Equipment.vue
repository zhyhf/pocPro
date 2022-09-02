<template>
  <div :id="tableid" class="exhaust-container">
    <!-- <div class="closeTool"></div> -->
    <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
    <div class="charts">
      <div class="chart-item">
        <div class="label">
          <span>x1000r/min</span>
          <span>4</span>
        </div>
        <div class="speed chart-container"></div>
        <span>转速</span>
      </div>
      <div class="chart-item">
        <div class="label">
          <span>℃</span>
          <span>30.47</span>
        </div>
        <div class="temprature chart-container"></div>
        <span>温度</span>
      </div>
      <!-- <div id="chart1"></div>
      <div id="chart2"></div> -->
    </div>
    <div class="status">
      <div class="left flex">
        <div class="rotating">
          <div class="description flex">
            <img src="../assets/icon/weather.svg" alt="" />
            <div>通风效果</div>
          </div>
        </div>
        <div class="temprature-status">良好</div>
      </div>
      <div class="left flex">
        <div class="rotating">
          <div class="description flex">
            <img src="../assets/icon/power.svg" alt="" />
            <div>运行状态</div>
          </div>
        </div>
        <div class="temprature-status">良好</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import titleToolVue from "./titleTool.vue";
import closeToolVue from "./closeTool.vue";
export default {
  props: ["tableid"],
  data() {
    return {
      title: "排风机",
      iconPath: require("../assets/icon/exhaust.svg"),
    };
  },
  components: {
    titleToolVue,
    closeToolVue,
  },
  methods: {
    initialChart1() {
      let option = {
        // backgroundColor: "#0E1327",
        series: [
          {
            radius: "80%",
            type: "gauge",
            z: 0,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [
                  [
                    0.3,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(0, 237, 3,0.1)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(0, 237, 3,0.6)",
                      },
                      {
                        offset: 1,
                        color: "rgba(0, 237, 3,1)",
                      },
                    ]),
                  ],
                  [
                    0.7,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(255, 184, 0,0.1)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(255, 184, 0,0.6)",
                      },
                      {
                        offset: 1,
                        color: "rgba(255, 184, 0,1)",
                      },
                    ]),
                  ],
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(175, 36, 74,0.1)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(255, 36, 74,0.6)",
                      },
                      {
                        offset: 1,
                        color: "rgba(255, 36, 74,1)",
                      },
                    ]),
                  ],
                ],
              },
            },
            pointer: {
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: 0,
              length: 8,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            splitLine: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            // axisLabel: {
            //   color: "white",
            //   distance: 10,
            //   fontSize: 1,
            // },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              color: "white",
              fontSize: 15,
            },
            data: [
              {
                value: 60,
              },
            ],
          },
        ],
      };

      // 基于准备好的dom，初始化echarts实例
      let chartDom = echarts.init(document.getElementById("chart1"));
      // 绘制图表
      chartDom.setOption(option);
    },
    initialChart2() {
      let option = {
        // backgroundColor: "#0E1327",
        series: [
          {
            radius: "80%",
            type: "gauge",
            z: 0,
            axisLine: {
              lineStyle: {
                width: 1,
                color: [
                  [
                    0.3,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(0, 237, 3,0.1)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(0, 237, 3,0.6)",
                      },
                      {
                        offset: 1,
                        color: "rgba(0, 237, 3,1)",
                      },
                    ]),
                  ],
                  [
                    0.7,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(255, 184, 0,0.1)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(255, 184, 0,0.6)",
                      },
                      {
                        offset: 1,
                        color: "rgba(255, 184, 0,1)",
                      },
                    ]),
                  ],
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(175, 36, 74,0.1)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(255, 36, 74,0.6)",
                      },
                      {
                        offset: 1,
                        color: "rgba(255, 36, 74,1)",
                      },
                    ]),
                  ],
                ],
              },
            },
            pointer: {
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: 0,
              length: 8,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            splitLine: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "auto",
                width: 1,
              },
            },
            // axisLabel: {
            //   color: "white",
            //   distance: 10,
            //   fontSize: 1,
            // },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              color: "white",
              fontSize: 15,
            },
            data: [
              {
                value: 60,
              },
            ],
          },
        ],
      };
      // 基于准备好的dom，初始化echarts实例
      let chartDom = echarts.init(document.getElementById("chart2"));
      // 绘制图表
      chartDom.setOption(option);
    },
  },
  mounted() {
    // this.initialChart1();
    // this.initialChart2();
  },
};
</script>
<style lang="less" scoped>
@import "../assets/css/globe.css";
.exhaust-container {
  width: 33rem;
  height: 25rem;
  background: url("../assets/img/equipment-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  .status {
    color: #fff;
    flex: 1;
    display: flex;
    justify-content: space-between;
    .description {
      margin-right: 2rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
      }
    }
    .temprature-status {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        right: 3rem;
        bottom: 30%;
        width: 7px;
        height: 7px;
        background-color: #20f09d;
        border-radius: 4px;
      }
    }
  }
  .charts {
    width: 100%;
    height: 80%;
    display: flex;

    .chart-item {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      .label {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        :nth-child(1) {
          color: #c8c8c8;
        }
        :nth-child(2) {
          font-size: 2.2rem;
        }
      }
      .chart-container {
        width: 100%;
        height: 80%;
      }
      span {
        width: 100%;
        text-align: center;
        color: #fff;
      }
    }
    .speed {
      background: url("../assets/img/speed.svg") no-repeat;
      background-size: 100% 100%;
    }
    .temprature {
      background: url("../assets/img/temprature.svg") no-repeat;
      background-size: 100% 100%;
    }
  }
}
.flex {
  display: flex;
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
