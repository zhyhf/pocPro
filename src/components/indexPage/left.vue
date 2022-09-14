<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item zhibiaocontext">
        <div class="panel-title">综合指标</div>
        <div class="panel-item-body contextZhibiao">
          <div class="panel-item-content" ref="radarChart"></div>
          <!-- <div>
            <img
              src="../../assets/img/area.png"
              alt=""
              style="width: 80%; margin-left: 10%; margin-top: 0.6vh"
            />
          </div> -->
        </div>
      </div>
      <div class="panel-item chanyeContent">
        <div class="panel-title">各产业分布情况</div>
        <div class="panel-item-body">
            <Charts />
        </div>
      </div>
      <div class="panel-item panelYuanqu">
        <div class="panel-title">园区运营概况</div>
        <div class="panel-item-body industry-operate">
          <div class="top">
            <div
              class="top-item"
              v-for="(item, index) in industryArray"
              :key="index"
            >
              <div class="item-title">{{ item.title }}</div>
              <div class="item-detail">
                <dv-digital-flop :config="config['config' + (index + 1)]"  style="width:6rem;height:1.7rem;"/>
                <span class="item-unit">{{ item.unit }}</span>
                <!-- <span class="item-value">{{ item.value }}</span>
                <span class="item-unit">{{ item.unit }}</span> -->
              </div>
            </div>
          </div>
          <div class="bottom">
            <div
              class="bottom-item"
              v-for="(item, t) in buildingDetail"
              :key="t"
            >
              <div class="item-title">{{ item.title }}</div>
              <div class="item-detail">
                <!-- <span class="item-value">{{ item.value }}</span> -->
                <dv-digital-flop :config="configBottom['config' + (t + 1)]"  style="width:6rem;height:1.7rem;"/>
                <span class="item-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div class="panel-item">
        <div class="panel-title">园区产值</div>
        <div class="panel-item-body">
          <div class="panel-item-content" ref="outputChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Charts from './charts.vue'
export default {
  data() {
    return {
      outputChart: {},
      isHighLight: false,
      radarOptions: {
        radar: {
          center: ['50%', '54%'],
          name: {
            color: 'rgba(255,255,255,0.8)',
            fontSize: 10,
            formatter: (value, indicator) => {
              if (value === '创新能力和创业活跃度') return value
              const arr = value.split('')
              arr.splice(5, 0, '\n')
              return arr.join('')
            }
          },
          nameGap: 7,
          indicator: [
            { name: '创新能力和创业活跃度', max: 6500 },
            { name: '结构优化和产业价值链', max: 16000 },
            { name: '绿色发展和宜居包容性', max: 30000 },
            { name: '开放创新和国际竞争力', max: 33000 },
            { name: '综合质效和持续创新力', max: 12000 }
          ],
          splitLine: {
            lineStyle: {
              color: ['rgba(255, 255, 255, 0.4)']
            }
          },
          splitArea: {
            areaStyle: {
              color: ['transparent', 'rgba(255, 255, 255, 0.1)']
            }
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        series: [
          {
            type: 'radar',
            // tooltip: 
            //   {
            //     trigger: 'item',
            //     confine: true
            //  },
            symbol: 'image://http://localhost:8080/rardar-default.png',
            symbolSize: 50,
            data: [
              {
                value: [4200, 12000, 23800, 18000, 8700],
              }
            ],
            lineStyle: {
              color: '#38B7FD'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(0, 47, 74, 0.7)'},
                {offset: 1, color: 'rgba(0, 47, 74, 0.15)'}
              ]
           )
            }
          }
        ]
      },
      outputOptions: {
         tooltip: {
            trigger: "axis",
            backgroundColor: 'rgba(0,0,0,0.65)',
            color: '#fff',
            textStyle:{
              color: '#fff',
              fontSize: '12px'
            },
            borderWidth: "0",
        },
        xAxis: {
          type: "category",
          data: ["2013","2014","2015", "2016", "2017", "2018", "2019", "2020", "2021","2022"],
          axisLabel: {
            interval:1,
            textStyle: {
              color: "#C6CFCE",
            },
          },
        },
        yAxis: {
          name: "产值(亿元)",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#C6CFCE",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#C6CFCE",
            },
          },
        },
        grid: {
          left: 36,
          top: 37,
          right: 20,
          bottom: 25,
        },
        series: [
          {
            data: [200, 240, 230, 290, 360,250,200,270,340,300],
            type: "line",
            showSymbol: false,
            areaStyle: {
                 color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(2,247,183,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.7,
                      color: "rgba(148,67,252,0.2)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(148,67,252,0.6)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
            },
            symbol: 'none',
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
                      color: "rgba(2,247,183,1)", // 0% 处的颜色
                    },
                    {
                      offset: 0.4,
                      color: "rgba(19,154,255,1)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(148,67,252,1)", // 100% 处的颜色
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
            {
            showSymbol: false,
            type: "lines",
            polyline: true,
            smooth: false,
            coordinateSystem: "cartesian2d",
            zlevel: 1,
            effect: {
              show: true,
              smooth: true,
              period: 6,
              symbolSize: 4,
            },
            lineStyle: {
              color: "#fff",
              width: 1,
              opacity: 0,
              curveness: 0,
              cap: "round",
            },
            data: [
              {
                coords: [
                  ['2013', 200],
                  ["2014", 240],
                  ["2015", 230],
                  ["2016", 290],
                  ["2017", 360],
                  ["2018", 250],
                  ["2019", 200],
                  ["2020", 270],
                  ["2021", 340],
                  ["2022", 300],
                ],
              },
            ]
          },
        ],
      },
      industryArray: [
        {
          title: "已入驻企业",
          value: "1503",
          unit: "家",
        },
        {
          title: "500强企业",
          value: "23",
          unit: "家",
        },
        {
          title: "企业员工数",
          value: "3642",
          unit: "个",
        },
      ],
      buildingDetail: [
        {
          title: "园区产值",
          value: "95",
          unit: "亿",
        },
        {
          title: "租金单价",
          value: "2000",
          unit: "元/m²",
        },
        {
          title: "建筑数量",
          value: "350",
          unit: "幢",
        },
        {
          title: "待建项目",
          value: "25",
          unit: "个",
        },
      ],
      config: {
        config1: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fontWeight: 700,
            fill: '#FFFFFF'
          }
        },
        config2: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fill: '#FFFFFF',
            fontWeight: 700,
          }
        },
        config3: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fill: '#FFFFFF',
            fontWeight: 700,
          }
        }
      },
      configBottom: {
        config1: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fontWeight: 700,
            fill: '#FFFFFF'
          }
        },
         config2: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fill: '#FFFFFF',
            fontWeight: 700,
          }
        },
         config3: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fill: '#FFFFFF',
            fontWeight: 700,
          }
        },
        config4: {
          number:[0],
          animationFrame: 90,
          style: {
            fontSize: 17,
            fill: '#FFFFFF',
            fontWeight: 700,
          }
        }
      }
    };
  },
  components:{ Charts },
  mounted() {
    this.radarChart = this.$echarts.init(this.$refs.radarChart)
    this.radarChart.setOption(this.radarOptions)
    setInterval(() => {
      this.radarOptions.series[0].symbol = `image://http://localhost:8080/rardar-${this.isHighLight ? 'default' : 'active'}.png`
      this.isHighLight = !this.isHighLight
      this.radarChart.setOption(this.radarOptions)
    }, 500)
    setTimeout(() => {
      this.config.config1.number[0] = 1503
      this.config.config2.number[0] = 23
      this.config.config3.number[0] = 3642
      this.config.config1 = {...this.config.config1}
      this.config.config2 = {...this.config.config2}
      this.config.config3 = {...this.config.config3}
      this.configBottom.config1.number[0] = 95
      this.configBottom.config2.number[0] = 2000
      this.configBottom.config3.number[0] = 350
      this.configBottom.config4.number[0] = 25
      this.configBottom.config1 = {...this.configBottom.config1}
      this.configBottom.config2 = {...this.configBottom.config2}
      this.configBottom.config3 = {...this.configBottom.config3}
      this.configBottom.config4 = {...this.configBottom.config4}
    }, 1000)
    this.$nextTick(() => {
      this.outputChart = this.$echarts.init(this.$refs.outputChart);
      this.outputChart.setOption(this.outputOptions);

      window.addEventListener("resize", () => {
        this.outputChart.resize();
      });
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
.contextZhibiao{
    height: calc(100% - 2vh) !important;
    .panel-item-content{
       height: calc(100% - 2vh) !important;
    }
}
.zhibiaocontext{
  margin-bottom: 0vh !important;
}
.chanyeContent{
  margin-top: 3vh;
}
.panelYuanqu{
    margin-top: 2px !important;
    margin-bottom: -18px !important;
}
.industry-operate {
  display: flex;
  padding: 5px 10px;
  padding-left: 6px;
  flex-direction: column;
  height: calc(100% - 7vh) !important;
  .top {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .top-item {
      width: 32%;
      padding: 2px;
      box-sizing: border-box;
      /*border: 1px solid red;*/
      background-image: url("../../assets/img/index-samll-bg.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .item-title {
    font-size: 12px;
    color: #c6cfce;
  }
  .item-title::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #38b7fd;
    margin: 2px 4px;
  }
    .item-detail {
    display: inline-flex;
    margin-left: 1px;
    margin-top: 5px;
    position: relative;
    .item-value {
      font-size: 19px;
      font-weight: 700;
      color: #fff;
    }
    .item-unit {
      margin-left: 0px;
      font-size: 8px;
      color: #c6cfce;
    }
  }
  .bottom {
    flex: 2;
    margin-top: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .bottom-item {
      width: 23.5%;
      height: 93%;
      /*margin-top: 1%;*/
      box-sizing: border-box;
      background-image: url("../../assets/img/indedx-big-bg.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .bottom-item:nth-child(1),
    .bottom-item:nth-child(2) {
      margin-top: 2px;
    }
     .bottom-item:nth-child(2) {
       width: 27.5%;
    }
    .bottom-item:nth-child(4) {
       width: 22%;
    }
  }
}
</style>
