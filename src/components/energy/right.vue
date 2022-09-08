<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">光伏充能</div>
        <div class="panel-item-body">
          <div class="panel-item-content light-charger">
            <div class="light-pic">
            </div>
            <div class="light-flex-info">
              <div class="light-data" style="margin-left: -8rem">
                <div class="light-total light-flex">
                  <div class="light-value">260GWp</div>
                  <div class="light-theme">光伏装机量</div>
                </div>
                <div class="transform-light light-flex">
                  <div class="light-value">1GWh</div>
                  <div class="light-theme">储能装机量</div>
                </div>
                <div class="light-fix light-flex">
                  <div class="light-value">25%</div>
                  <div class="light-theme">绿电占比</div>
                </div>
              </div>
              <div class="light-data" style="margin-left: 1.2rem">
                <div class="light-total light-flex">
                  <div class="light-value">50.2Gwh</div>
                  <div class="light-theme">累计发电量</div>
                </div>
                <div class="transform-light light-flex">
                  <div class="light-value">1.5GWh</div>
                  <div class="light-theme">累积转移电量</div>
                </div>
                <div class="light-fix light-flex">
                  <div class="light-value">10%</div>
                  <div class="light-theme">绿电设备维修率</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-item">
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
          <div class="panel-item-content">
            <el-tabs v-model="activeName" @tab-click="tabClick">
              <el-tab-pane label="用水量" name="first"></el-tab-pane>
              <el-tab-pane label="用电量" name="second"></el-tab-pane>
              <el-tab-pane label="碳排放" name="third"></el-tab-pane>
            </el-tabs>
            <div ref="energyChart" class="energy-chart"></div>
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">故障设备统计</div>
        <div class="panel-item-body">
          <div class="panel-item-content" ref="brokenChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: 'first',
                brokenChart: {},
                brokenOptions: {
                    color:['#3888FD','#60DFF9','#2DFDDE','#342DFC','#2A97DE'],
                    tooltip: {
                        trigger:"item",
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        color:'#fff',
                        textStyle:{
                        color:'#fff',
                        fontSize:'12px'
                        },
                        borderWidth:"0",
                    },
                    legend: {
                        data: [
                            {
                                name: '光伏站',
                                icon: 'circle'
                            },
                            {
                                name: '储能站',
                                icon: 'circle'
                            },
                            {
                                name: '光储站',
                                icon: 'circle'
                            },
                            {
                                name: '光储充能',
                                icon: 'circle'
                            },
                            {
                                name: '储充站',
                                icon: 'circle'
                            }
                        ],
                        orient: 'vertical',  //垂直显示
                        y: 'center',    //延Y轴居中
                        x: 'right', //居右显示
                        padding: [0, 10, 0, 0],
                        align: 'left',
                        textStyle: {
                            color: '#C6CFCE',
                            fontSize: '12'
                        },
                        itemStyle: {

                        }
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['35%', '65%'],
                            center: ['37%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#C6CFCE'
                                }
                            },
                            labelLine: {
                                show: true,
                                length: 10,
                                length2: 4
                            },
                            data: [
                                { value: 1048, name: '光伏站' },
                                { value: 735, name: '储能站' },
                                { value: 580, name: '光储站' },
                                { value: 484, name: '光储充能' },
                                { value: 300, name: '储充站' }
                            ]
                        }
                    ]
                },

                energyChart: {},
                energyOptions: {
                    xAxis: {
                        type: 'category',
                        data: ['2021.10', '2021.11', '2021.12', '2022.1', '2022.2', '2022.3'],
                        axisTick: {
                            interval: 0
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                fontSize: 10,
                                color: '#C6CFCE'
                            }
                        }
                    },
                    yAxis: {
                        name: '能耗(吨)',
                        nameTextStyle: {
                            color: '#C6CFCE'
                        },
                        type: 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#C6CFCE'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: 'grey'
                            }
                        }
                    },
                    grid: {
                        left: 43,
                        top: 30,
                        right: 11,
                        bottom: 25
                    },
                    series: [
                        {
                            data: [1630, 1800, 2150, 2600, 2930, 3215],
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: "rgba(56,183,253, 0)" // 0% 处的颜色
                                    }, {
                                        offset: 0.6,
                                        color: "rgba(56,183,253, 0.5)" // 60% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: "rgb(56,183,253)" // 100% 处的颜色
                                    }], false),
                                    label: {
                                        show: true,
                                        position: 'top',
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 12
                                        }
                                    }
                                }
                            },
                            animationDelay: function (idx) {
                              return idx * 500;
                            }
                        }
                    ],
                  animationEasing: 'elasticOut',
                  animationDelayUpdate: function (idx) {
                    return idx * 200;
                  }
                },
                // timeOptions: ['月', '季度', '半年', '年'],
                timeOptions: ['半年'],
                activeIndex: 2
            }
        },
        mounted() {
            this.energyChart = this.$echarts.init(this.$refs.energyChart)
            this.energyChart.setOption(this.energyOptions)

            this.brokenChart = this.$echarts.init(this.$refs.brokenChart)
            this.brokenChart.setOption(this.brokenOptions)

            window.addEventListener('resize', () => {
                this.energyChart.resize()
                this.brokenChart.resize()
            })

          // setInterval(() => {
          //   const data = this.brokenOptions.series[0].data.slice()
          //   this.brokenOptions.series[0].data = []
          //   this.brokenChart.setOption(this.brokenOptions)
          //   this.brokenOptions.series[0].data = data
          //   this.brokenChart.setOption(this.brokenOptions)
          // }, 4000)
        },
        methods: {
            handleIndexChange(index) {
                this.activeIndex = index
            },
            tabClick(node) {
                if (node.index === '0') {
                    this.energyOptions.series[0].data = [1630, 1800, 2150, 2600, 2930, 3215]
                    this.energyOptions.grid = {
                        left: 43,
                        top: 30,
                        right: 11,
                        bottom: 25
                    }
                    this.energyOptions.yAxis.name = '能耗(吨)'
                    this.energyChart.setOption(this.energyOptions)
                } else if (node.index === '1') {
                    this.energyOptions.series[0].data = [19520, 21560, 26500, 31985, 36500, 48000]
                    this.energyOptions.grid = {
                        left: 50,
                        top: 30,
                        right: 11,
                        bottom: 25
                    }
                    this.energyOptions.yAxis.name = '能耗(瓦)'
                    this.energyChart.setOption(this.energyOptions)
                } else if (node.index === '2') {
                    this.energyOptions.series[0].data = [70, 64, 54, 14, 26, 50]
                    this.energyOptions.grid = {
                        left: 27,
                        top: 30,
                        right: 11,
                        bottom: 25
                    }
                    this.energyOptions.yAxis.name = 'tCO2'
                    this.energyChart.setOption(this.energyOptions)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.light-charger {
  display: flex;
  .light-value {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #38b7fd;
  }
  .light-theme {
    font-size: 12px;
    color: #c6cfce;
  }
  .light-pic {
    flex: 2;
    background-image: url("../../assets/img/light-charger.svg");
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .light-flex-info {
    flex: 1;
    display: flex;
    //flex-direction: column;
    .light-data {
      display: flex;
      flex-direction: column;
      padding: 5px 0 10px;
      .light-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .light-total {
        flex: 1;
      }
      .transform-light {
        flex: 1;
      }
      .light-fix {
        flex: 1;
      }
    }
  }
}
.energy-chart {
  width: 100%;
  height: calc(100% - 35px);
  margin-top: -5px;
}
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
</style>
