<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item energy-consume">
        <div class="panel-title">能耗统计</div>
        <div class="panel-item-body">
          <div class="time-options">
            <div
              v-for="(item, index) in timeOptions"
              :key="index"
              :class="
                index === activeIndex
                  ? 'time-options-item time-options-active'
                  : 'time-options-item'
              "
              @click="handleIndexChange(index)"
            >
              {{ item }}
            </div>
          </div>
          <div class="panel-item-content" ref="outputChart">
            <el-tabs v-model="activeName" @tab-click="tabClick">
              <el-tab-pane label="水用量" name="first"></el-tab-pane>
              <el-tab-pane label="电用量" name="second"></el-tab-pane>
              <el-tab-pane label="碳排放" name="third"></el-tab-pane>
            </el-tabs>
            <div ref="energyChart" class="energy-chart"></div>
          </div>
        </div>
      </div>

      <div class="panel-item safety">
        <div class="panel-title">园区安全</div>
        <div class="panel-item-body">
          <div class="panel-item-content industry-safety">
            <div
              class="safety-item"
              v-for="(item, index) in safetyArray"
              :key="index"
            >
              <div style="display: flex">
                <div
                    style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <img
                      :src="item.pic"
                      class="pic"
                      v-if="index === 0 || index === 2"
                  />
                  <div class="theme">{{ item.theme }}</div>
                  <div class="item-detail">
                    <dv-digital-flop :config="config['config' + (index + 1)]" />
<!--                    <span class="item-value">{{ item.value }}</span>-->
<!--                    <span class="item-unit">{{ item.unit }}</span>-->
                  </div>
                  <img :src="item.pic" v-if="index === 1" class="pic" />
                </div>
                <div v-show="index===0" class="line"></div>
                <div v-show="index===1" class="lineInfo"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-item equipment">
        <div class="panel-title">设备设施</div>
        <div class="panel-item-body">
          <div class="panel-item-content device">
            <div
              class="device-item"
              :class="deviceActiveNum === index ? 'device-item-active' : ''"
              v-for="(item, index) in deviceArray"
              :key="index"
            >
              <div class="card-head">
                <img :src="item.pic" class="card-icon" />
                <div class="card-title">{{ item.title }}</div>
              </div>
              <div class="card-detail">
                <span class="card-value">{{ item.value }}</span>
                <span class="card-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-item extra-service">
        <div class="panel-title">园区增值服务</div>
        <div class="panel-item-body">
          <div class="panel-item-content service">
            <div
              class="service-item"
              v-for="(item, index) in extraService"
              :key="index"
            >
              <div class="card-head">
                <img :src="item.pic" class="card-icon" />
                <div class="card-title">{{ item.title }}</div>
              </div>
              <div class="card-detail">
                <span class="card-value">{{ item.value }}</span>
                <span class="card-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceActiveNum: 0,
      activeName: "first",
      energyChart: {},
      energyOptions: {
        xAxis: {
          type: "category",
          data: ["2021.10", "2021.11", "2021.12", "2022.1", "2022.2", "2022.3"],
          axisTick: {
            interval: 0,
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: 10,
              color: "#C6CFCE",
            },
          },
        },
        yAxis: {
          name: "能耗(吨)",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#C6CFCE",
            },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#C6CFCE",
            },
          },
        },
        grid: {
          left: 43,
          top: 30,
          right: 11,
          bottom: 25,
        },
        series: [
          {
            data: [1630, 1800, 2150, 2600, 2930, 3215],
            type: "bar",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(56,183,253, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "rgba(56,183,253, 0.5)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgb(56,183,253)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
            },
          },
        ],
      },
      safetyArray: [
        {
          pic: require("@/assets/img/monitor.png"),
          theme: "监控点位",
          value: "1650",
          unit: "个",
        },
        {
          pic: require("@/assets/img/monitor-area.png"),
          theme: "监控覆盖面积",
          value: "45542",
          unit: "m²",
        },
        {
          pic: require("@/assets/img/monitor-alert.png"),
          theme: "告警数量",
          value: "5625",
          unit: "个",
        },
      ],
      deviceArray: [
        {
          pic: require("@/assets/img/elevator.png"),
          title: "电梯",
          value: 50,
          unit: "个",
        },
        {
          pic: require("@/assets/img/AC.png"),
          title: "空调",
          value: 380,
          unit: "个",
        },
        {
          pic: require("@/assets/img/water.png"),
          title: "给排水",
          value: 150,
          unit: "个",
        },
        {
          pic: require("@/assets/img/plant.png"),
          title: "绿化面积",
          value: 15600,
          unit: "m²",
        },
      ],
      extraService: [
        {
          pic: require("@/assets/img/message.png"),
          title: "信息发布",
          value: 165,
          unit: "条",
        },
        {
          pic: require("@/assets/img/laundry.png"),
          title: "智慧洗衣房",
          value: 35,
          unit: "个",
        },
        {
          pic: require("@/assets/img/dinning.png"),
          title: "食堂",
          value: 3,
          unit: "个",
        },
        {
          pic: require("@/assets/img/package.png"),
          title: "快递驿站",
          value: 50,
          unit: "个",
        },
      ],
      // timeOptions: ['月', '季度', '半年', '年'],
      timeOptions: ["半年"],
      activeIndex: 2,
      config: {
        config1: {
          number:[0],
          content:'{nt}个',
          style: {
            fontSize: 20,
            fill: '#FFFFFF'
          }
        },
        config2: {
          number:[0],
          content:'{nt}m²',
          style: {
            fontSize: 20,
            fill: '#FFFFFF'
          }
        },
        config3: {
          number:[0],
          content:'{nt}个',
          style: {
            fontSize: 20,
            fill: '#FFFFFF'
          }
        }
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.config.config1.number[0] = 1650
      this.config.config2.number[0] = 45542
      this.config.config3.number[0] = 5625
      this.config.config1 = {...this.config.config1}
      this.config.config2 = {...this.config.config2}
      this.config.config3 = {...this.config.config3}
    }, 1000)
    // setInterval( ()=>{
    //   this.power(360);
    // },8000);
    setInterval(() => {
      this.deviceActiveNum = (++this.deviceActiveNum) % 4
    }, 2000)
    this.$nextTick(() => {
      this.energyChart = this.$echarts.init(this.$refs.energyChart);
      this.energyChart.setOption(this.energyOptions);

      window.addEventListener("resize", () => {
        this.energyChart.resize();
      });
    });
  },
  methods: {
    // power(n){
    //   for (const key in this.config) {
    //     this.config[key].number[0] = Math.floor((Math.random() * n) + 1);
    //     this.config[key] = {...this.config[key]}
    //   }
    //   // this.config.number[0] = Math.floor((Math.random() * n) + 1);
    //   // this.config=  {...this.config};//对象解构，更新props
    // },
    handleIndexChange(index) {
      this.activeIndex = index;
    },
    tabClick(node) {
      if (node.index === "0") {
        this.energyOptions.series[0].data = [
          1630, 1800, 2150, 2600, 2930, 3215,
        ];
        this.energyOptions.grid = {
          left: 43,
          top: 30,
          right: 11,
          bottom: 25,
        };
        this.energyOptions.yAxis.name = "能耗(吨)";
        this.energyChart.setOption(this.energyOptions);
      } else if (node.index === "1") {
        this.energyOptions.series[0].data = [
          19520, 21560, 26500, 31985, 36500, 48000,
        ];
        this.energyOptions.grid = {
          left: 50,
          top: 30,
          right: 11,
          bottom: 25,
        };
        this.energyOptions.yAxis.name = "能耗(瓦)";
        this.energyChart.setOption(this.energyOptions);
      } else if (node.index === "2") {
        this.energyOptions.series[0].data = [70, 64, 54, 14, 26, 50];
        this.energyOptions.grid = {
          left: 27,
          top: 30,
          right: 11,
          bottom: 25,
        };
        this.energyOptions.yAxis.name = "tCO2";
        this.energyChart.setOption(this.energyOptions);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.energy-consume {
  width: 100%;
  flex: 2.12 !important;
  .time-options {
    height: 3vh;
    line-height: 3vh;
    width: 50%;
    position: absolute;
    right: 0;
    top: 5px;
    display: flex;
    justify-content: right;
    margin-right: 10px;
    .time-options-item {
      box-sizing: border-box;
      font-size: 12px;
      width: 40px;
      color: #a6a8ab;
      background-color: #343a42;
      border: 1px solid #343a42;
      border-radius: 2px;
      margin-right: 5px;
      text-align: center;
    }
    .time-options-active {
      border: 1px solid #38b7fd;
      color: #38b7fd;
    }
    .time-options-item:nth-child(2),
    .time-options-item:nth-child(3) {
      width: 40px;
    }
  }
  .energy-chart {
    width: 100%;
    height: calc(100% - 35px);
    margin-top: -5px;
  }
  .fix-center-bg {
    height: 101.5% !important;
  }
}
.safety {
  flex: 2.12 !important;
}
.equipment {
  flex: 1 !important;
  .small-panel-center {
    height: 103% !important;
  }
}
.extra-service {
  flex: 1 !important;
  .small-panel-center {
    height: 104% !important;
  }
}

.industry-safety {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .safety-item {
    width: 32%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .pic {
      display: block;
      animation: myFloat 4s ease-in-out infinite;
    }
    .theme {
      margin-top: 10px;
      width: 100%;
      font-size: 12px;
      color: #c6cfce;
      text-align: center;
    }
    .item-detail {
      margin-top: 6px;
      margin-left: 6px;
      .item-value {
        font-size: 19px;
        font-weight: 700;
        color: #fff;
      }
      .item-unit {
        margin-left: 4px;
        font-size: 12px;
        color: #c6cfce;
      }
    }
    .line {
      width: 1px;
      height: 64px;
      opacity: 0.4;
      border: 1px dashed #ffffff;
      position: absolute;
      left: 33%;
      top: 30%;
    }
    .lineInfo {
      width: 1px;
      height: 64px;
      opacity: 0.4;
      border: 1px dashed #ffffff;
      position: absolute;
      left: 66%;
      top: 30%;
    }
  }
}

.device {
  display: flex;
  justify-content: space-between;
  padding: 5px 2px;
  .device-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 24%;
    box-sizing: border-box;
    background-image: url("../../assets/img/device-midium-bg.png");
    background-size: 100% 100%;
    margin-left: 4px;
    margin-right: 4px;
  }
  .device-item-active {
    background-image: url("../../assets/img/device-midium-bg-active.png") !important;
    .card-title, .card-value, .card-unit {
      color: #ffd800 !important;
    }
  }
}
.service {
  display: flex;
  justify-content: space-between;
  padding: 9px 2px;
  .service-item {
    flex: 1.5;
    background-image: url("../../assets/img/device-big-bg.png");
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: scaleIn 3s;
  }
  .service-item:nth-child(2) {
    flex: 1.8;
  }
  .service-item:nth-child(3) {
    flex: 1;
    background-image: url("../../assets/img/device-small-bg.png");
    background-size: 100% 100%;
  }
}
.card-head {
  display: flex;
  margin-top: 2px;
  .card-icon {
    width: 12px;
    height: 12px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .card-title {
    font-size: 12px;
    color: #c6cfce;
  }
}
.card-detail {
  margin-left: 7px;
  .card-value {
    font-size: 19px;
    font-weight: 700;
    color: #fff;
  }
  .card-unit {
    margin-left: 2px;
    font-size: 12px;
    color: #c6cfce;
  }
}
  @keyframes myFloat {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes scaleIn {
    0% {
      transform: scale(0.9)
    }
    50% {
      transform: scale(1.1)
    }
    100% {
      transform: scale(1);
    }
  }
</style>
