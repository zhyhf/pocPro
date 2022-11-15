<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item conclusion">
        <div class="panel-title">物业概况</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="introduce">
            <div class="intro-building">建筑概况</div>
            <div class="intro-property">物业运营</div>
          </div>
          <div class="panel-item-content property">
            <div
              class="property-item"
              v-for="(item, index) in propertyConclusion"
              :key="index"
            >
              <div
                :class="
                  index > 2
                    ? 'item-title item-title-bottom'
                    : 'item-title item-title-top'
                "
              >
                {{ item.title }}
              </div>
              <div class="item-detail">
                <dv-digital-flop :config="item.config" style="height: 30px; position: relative; left: -12px"/>
<!--                <span class="item-value">{{ item.value }}</span>-->
                <span class="item-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-item parking">
        <div class="panel-title">智慧停车</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="jump-to-login">
            <a :href="loginPage" target="_blank">
              <img src="../../assets/img/jump-arrow.png" />
            </a>
          </div>
          <div class="panel-item-content">
            <img
              src="../../assets/img/intelligent-parking.svg"
              style="width: 85%; margin-left: 7.5%"
            />
          </div>
          <div class="parking-lot">停车场</div>
          <div
              v-for="(item, index) in parkingInfo"
              :key="index"
              :class="item.className"
          >
            <div class="item-detail">
              <dv-digital-flop :config="item.config" style="height: 30px; position: relative; left: -11px; top: 2px;"/>
<!--              <span class="parking-value">{{ item.config.number[0] }}</span>-->
              <span class="item-unit">{{ item.unit }}</span>
            </div>
            <div class="parking-theme">{{ item.title }}</div>
          </div>
        </div>
      </div>

      <div class="pandemic">
        <div class="pandemic-title">
          <div class="pandemic-text">疫情管控</div>
        </div>
        <div
          v-for="(item, index) in pandemicInfo"
          :key="index"
          class="pandemic-item"
        >
          <div class="item-title">{{ item.title }}</div>
          <div class="item-detail">
            <img :src="item.pic" class="item-icon" />
            <dv-digital-flop :config="item.config" style="height: 20px; position: relative; top: 4px;"/>
<!--            <span class="item-data">{{ item.config.number[0]}}</span>-->
            <span class="item-unit">{{ item.unit }}</span>
          </div>
        </div>
      </div>

      <div class="panel-item energy-consume">
        <div class="panel-title">能耗统计</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content">
            <el-tabs v-model="activeName" @tab-click="tabClick">
              <el-tab-pane label="用水量" name="first">
              </el-tab-pane>
              <el-tab-pane label="电用量" name="second"></el-tab-pane>
              <el-tab-pane label="碳排放" name="third"></el-tab-pane>
            </el-tabs>
            <div ref="energyChart" class="energy-chart"></div>
          </div>
        </div>
      </div>

<!--      <div class="panel-item sentiment-alert">-->
<!--        <div class="panel-title">舆情告警情况</div>-->
<!--        <div class="panel-item-body">-->
<!--          <div class="panel-item-content">-->
<!--            <el-table-->
<!--              :header-cell-class-name="'tableHeaderCell'"-->
<!--              class="box-table"-->
<!--              :data="tableData"-->
<!--              :fit="true"-->
<!--            >-->
<!--              <el-table-column-->
<!--                prop="name"-->
<!--                label="事件类型"-->
<!--                min-width="22%"-->
<!--                show-overflow-tooltip-->
<!--              />-->
<!--              <el-table-column-->
<!--                prop="time"-->
<!--                label="发生时间"-->
<!--                min-width="40%"-->
<!--                show-overflow-tooltip-->
<!--              />-->
<!--              <el-table-column-->
<!--                prop="status"-->
<!--                label="当前状态"-->
<!--                min-width="22%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="{ row }">-->
<!--                  <span>{{ row.status }}</span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                label="操作"-->
<!--                min-width="16%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="{ row }">-->
<!--                  <el-link-->
<!--                    :class="{-->
<!--                      line: true,-->
<!--                      operation: true,-->
<!--                      active: activeIndex === row.id,-->
<!--                    }"-->
<!--                    type="primary"-->
<!--                    :underline="false"-->
<!--                    @click="handleFly(row)"-->
<!--                    >查看</el-link-->
<!--                  >-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--            </el-table>-->
<!--            <div class="table-buttons">-->
<!--              <el-pagination :total="4" :page-size="5" @currentChange="currentChange" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import ElPagination from '@/components/page/index.vue'

export default {
  components: {
    ElPagination
  },
  data() {
    return {
      activeIndex: 100,
      tableData: [
        {
          id: 1,
          name: "吸烟",
          time: "2022.08.01 16:22:02",
          position: "企业东门1号口",
          status: "未处理",
        },
        {
          id: 2,
          name: "打架",
          time: "2022.08.01 16:22:02",
          position: "企业东门2号口",
          status: "未处理",
        },
        {
          id: 3,
          name: "吸烟",
          time: "2022.08.01 16:22:02",
          position: "企业东门3号口",
          status: "已处理",
        },
        {
          id: 4,
          name: "吸烟",
          time: "2022.08.01 16:22:02",
          position: "2楼办公区",
          status: "未处理",
        },
      ],
      propertyConclusion: [
        {
          title: "楼宇数量",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          title: "企业数量",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "家",
        },
        {
          title: "物业人员数",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          title: "已入驻企业",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "家",
        },
        {
          title: "物业收入",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "亿元",
        },
        {
          title: "待建项目",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
      ],
      parkingInfo: [
        {
          title: '停车场数量',
          className: 'parking-num',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          unit: '个'
        },
        {
          title: '车位总数',
          className: 'carport',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          unit: '个'
        },
        {
          title: '充电桩总数',
          className: 'charger',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          unit: '个'
        },
        {
          title: '已用充电桩',
          className: 'used-charger',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          unit: '个'
        },
        {
          title: '临时车辆数',
          className: 'temp-car',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          unit: '个'
        }
      ],
      pandemicInfo: [
        {
          title: '临时隔离点',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          pic: require('@/assets/img/quarantine.png'),
          unit: '个'
        },
        {
          title: '测温点',
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 400,
              fill: '#38b7fd'
            }
          },
          pic: require('@/assets/img/temperature.png'),
          unit: '个'
        }
      ],
      energyChart: null,
      energyOptions: {
        xAxis: {
          type: 'category',
          // name:'2022',
          boundaryGap: true,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          axisTick: {
            length: 3,
            alignWithLabel: true,
            lineStyle: {
              type: 'dash',
            }
          }
        },
        yAxis:
         {
          type: 'value',
          name:'能耗(吨)',
        },
        grid: {
          top: '18%',
          left: '13%',
          right: '7%'
        },
        series: [
          {
            // data: [195, 270, 265, 300, 318, 360, 360, 390, 385, 395, 300, 260],
            data: [195, 270, 265, 300, 300, 360, 360, 390, 385, 395, 300, 258],
            type: 'line',
            // smooth: true,
            showSymbol: false,
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
              )
            }
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
                  ['1', 195],
                  ["2", 270],
                  ["3", 265],
                  ["4", 300],
                  ["5", 318],
                  ["6", 360],
                  ["7", 360],
                  ["8", 390],
                  ["9", 385],
                  ["10", 395],
                  ["11", 300],
                  ["12", 260],
                ],
              },
            ]
          },
        ]
      },
      // 能耗数据
      x_data:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      y_name:'能耗(吨)',
      series_data:[195, 270, 265, 300, 318, 360, 360, 390, 385, 395, 300, 260],
      coords:[['1', 195],
              ["2", 270],
              ["3", 265],
              ["4", 300],
              ["5", 318],
              ["6", 360],
              ["7", 360],
              ["8", 390],
              ["9", 385],
              ["10", 395],
              ["11", 300],
              ["12", 260],
                ],
      activeName: "first",
      names:'能耗(吨)',
      loginPage: "https://park.keytop.cn/unityp/login",
    };
  },
  mounted() {
    this.initFlippers()
    this.$nextTick(() => {
      this.energyChart = this.$echarts.init(this.$refs.energyChart);
      // this.energyChart.setOption(this.energyOptions);
      this.getEnergyChart()
    })
  },
  methods: {
    getEnergyChart(){
      this.energyChart = this.$echarts.init(this.$refs.energyChart);
      let energyOptions={
        xAxis: {
          type: 'category',
           name:'2022',
          nameLocation:'middle',
          boundaryGap: true,
           nameTextStyle: { // x轴name的样式调整
//            color: '#000', 
//            fontSize: 22,
           padding:[-10,323,0,0,0]  // 加上padding可以调整其位置
         },
          boundaryGap: true,
          data: this.x_data,
          axisTick: {
            length: 3,
            alignWithLabel: true,
            lineStyle: {
              type: 'dash',
            }
          }
        },
        yAxis:
         {
          type: 'value',
          name:this.y_name,
        },
        grid: {
          top: '18%',
          left: '13%',
          right: '7%'
        },
        series: [
          {
            data:this.series_data,
            // data: [195, 270, 265, 300, 300, 360, 360, 390, 385, 395, 300, 258],
            type: 'line',
            // smooth: true,
            showSymbol: false,
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
              )
            }
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
                coords: this.coords
              },
            ]
          },
        ]
      }
      this.energyChart.setOption(energyOptions);
      // this.energyChart = this.$echarts.init(this.$refs.energyChart);
    },
    tabClick() {
      if(this.activeName==="first"){
         this.y_name='能耗(吨)'
         this.series_data=[195, 270, 265, 300, 318, 360, 360, 390, 385, 395, 300, 260]
         this.coords=[['1', 195],
              ["2", 270],
              ["3", 265],
              ["4", 300],
              ["5", 318],
              ["6", 360],
              ["7", 360],
              ["8", 390],
              ["9", 385],
              ["10", 395],
              ["11", 300],
              ["12", 260],
                ]
      } else if(this.activeName==="second"){
        this.y_name='能耗(度)'
        this.series_data=[200, 270, 260, 45, 329, 348, 400, 280, 85, 320, 300, 600]
        this.coords=[['1', 200],
              ["2", 270],
              ["3", 260],
              ["4", 45],
              ["5", 329],
              ["6", 348],
              ["7", 400],
              ["8", 280],
              ["9", 85],
              ["10", 320],
              ["11", 300],
              ["12", 600],
                ]
      } else{
        this.y_name='能耗(吨)'
        this.series_data=[300, 270, 260, 450, 100, 320, 400, 280, 85, 320, 300, 600]
        this.coords=[['1', 300],
              ["2", 270],
              ["3", 260],
              ["4", 450],
              ["5", 100],
              ["6", 320],
              ["7", 400],
              ["8", 280],
              ["9", 85],
              ["10", 320],
              ["11", 300],
              ["12", 600],
                ]
      }
       this.getEnergyChart()
       console.log('actinbe',this.activeName,this.energyOptions);
    },
    initFlippers() {
      const propertyVals = [31, 1560, 3642, 310, 15, 25]
      const parkingVals = [15, 1650, 1504, 35, 560]
      const pandemicVals = [26, 500]
      this.setFlipper(propertyVals, this.propertyConclusion)
      this.setFlipper(parkingVals, this.parkingInfo)
      this.setFlipper(pandemicVals, this.pandemicInfo)
    },
    setFlipper(arr, data) {
      setTimeout(() => {
        data.forEach((item, index) => {
          item.config.number[0] = arr[index]
          item.config = {...item.config}
        })
      }, 1500)
    },
    handleFly(item) {
      this.activeIndex = item.id;
      $viewer.qtum.centerAt({
        y: 27.97692,
        x: 120.726029,
        z: 40.46,
        heading: 199.4,
        pitch: -5.8,
        roll: 0.2,
      });
      this.$store.commit("DigitalTwin/changeEventDetail", item);
      this.$store.commit("DigitalTwin/changeEventDetailShow", true);
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      this.$store.commit("DigitalTwin/changeEventShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
      this.$store.commit("DigitalTwin/changeParkShow", false);
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);

      // 管道和楼栋平面图信息
      this.$store.commit("DigitalTwin/changeConduitShow", false);
      this.$store.commit("DigitalTwin/changePlanImgShow", false);
    },
    currentChange(current) {},
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.operation {
  cursor: pointer;
}
.active {
  color: #38b7fd !important;
  text-decoration: underline !important;
}
.line {
  display: inline;
}

.park {
  flex: 0.7 !important;
}

.conclusion {
  flex: 2.3 !important;
  .small-panel-center {
    height: 102% !important;
  }
  .introduce {
    width: 60%;
    display: flex;
    justify-content: right;
    height: 3vh;
    position: absolute;
    top: 1vh;
    right: 10px;
    font-size: 12px;
    color: #c6cfce;

    .intro-building {
      height: 3vh;
    }
    .intro-building::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      // top:-3px;
      border-radius: 50%;
      background-color: #38b7fd;
      margin: 1.5px 3px;
    }
    .intro-property {
      height: 3vh;
    }
    .intro-property::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2dffbf;
      margin: 1.5px 3px;
    }
  }
  .property {
    padding: 5px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .property-item {
      width: 32%;
      height: 48%;
      margin-top: 1%;
      box-sizing: border-box;
      background-image: url("../../assets/img/index-samll-bg.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .item-title {
        font-size: 12px;
        color: #c6cfce;
      }
      .item-title-top::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #38b7fd;
        margin: 2px 4px;
      }
      .item-title-bottom::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #2dffbf;
        margin: 2px 4px;
      }
      .item-detail {
        display: flex;
        margin-left: 6px;
        position: relative;
        .item-value {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
        }
        .item-unit {
          position: absolute;
          right: 0;
          bottom: 7px;
          font-size: 12px;
          color: #c6cfce;
          line-height: 0.9rem;
        }
      }
    }
  }
}
.parking {
  flex: 2.78 !important;
  position: relative;
  .jump-to-login {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 7%;
    top: 5px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .parking-lot {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    top: 32%;
    left: 44%;
  }
  .item-detail {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    .parking-value {
      line-height: normal;
      font-size: 19px;
      font-weight: 700;
      color: #38b7fd;
    }
    .item-unit {
      position: absolute;
      right: 2px;
      bottom: 6px;
      /*margin-left: 4px;*/
      font-size: 12px;
      color: #c6cfce;
    }
  }
  .parking-theme {
    font-size: 12px;
  }
  .parking-num {
    position: absolute;
    left: 9%;
    top: 26%;
  }
  .carport {
    position: absolute;
    left: 17%;
    top: 58%;
  }
  .charger {
    position: absolute;
    left: 47%;
    top: 65%;
  }
  .used-charger {
    position: absolute;
    left: 70%;
    top: 49%;
  }
  .temp-car {
    position: absolute;
    left: 62%;
    top: 16%;
  }
}
.pandemic {
  flex: 1 !important;
  width: 100%;
  margin-bottom: 2vh;
  background-image: url("../../assets/img/pandemic-bg.png");
  background-size: 100% 100%;
  display: flex;
  .pandemic-title {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    color: #38b7fd;
    display: flex;
    align-items: center;
    justify-content: center;
    .pandemic-text {
      width: 36px;
    }
  }
  .pandemic-item {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    border-left: 2px dashed grey;
    .item-title {
      font-size: 12px;
      margin-top: -5px;
      color: #c6cfce;
    }
    .item-detail {
      margin-top: 4px;
      display: flex;
      position: relative;
      .item-icon {
        width: 25px;
        height: 25px;
      }
      .item-data {
        font-size: 19px;
        font-weight: 700;
        color: #38b7fd;
        position: relative;
        left: 5px;
        top: 5px;
      }
      .item-unit {
        font-size: 12px;
        color: #c6cfce;
        position: relative;
        right: 2px;
        top: 4px;
      }
    }
  }
}
.energy-consume {
  flex: 3 !important;
  .energy-chart {
    width: 100%;
    /*height: calc(100% - 35px);*/
    height: 240px;
    margin-top: -5px;
  }
}
/*.sentiment-alert {*/
/*  flex: 2.78 !important;*/
/*  .table-buttons {*/
/*    position: absolute;*/
/*    right: 10px;*/
/*    bottom: 0;*/
/*  }*/
/*}*/
.state::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: red;
  margin-right: 2px;
}
</style>
