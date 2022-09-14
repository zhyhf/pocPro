<template>
  <div>
    <div class="panel-wrapper">
<!--      <div class="panel-item">-->
<!--        <div class="panel-title">运营概况</div>-->
<!--        <div class="panel-item-body">-->
<!--          <div class="panel-item-content condition">-->
<!--            <div-->
<!--              v-for="(item, index) in iconArray"-->
<!--              :key="index"-->
<!--              class="condition-item"-->
<!--            >-->
<!--              <div class="detail-img-wrapper">-->
<!--                <img :src="item.icon" alt="" class="detail-img" />-->
<!--              </div>-->
<!--              <div class="detail-box">-->
<!--                <div class="detail-title">{{ item.title }}</div>-->
<!--                <div class="item-detail">-->
<!--                  <span class="detail-data">{{ item.value }}</span>-->
<!--                  <span class="item-unit">{{ item.unit }}</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="panel-item rank">
        <div class="panel-title">能耗排行</div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content">
            <dv-scroll-board :config="configTable"/>
          </div>
        </div>
      </div>

      <div class="panel-item analysis">
        <div class="panel-title">设备能耗成本分析</div>
        <div class="panel-item-body">
          <div class="panel-item-content"></div>
        </div>
      </div>

      <div class="panel-item ring">
        <div class="panel-title">耗能环比分析</div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content" ref="analysisChart"></div>
        </div>
      </div>

      <div class="panel-item carbon">
        <div class="panel-title">碳排放构成</div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content" ref="carbonChart"></div>
        </div>
      </div>

<!--      <div class="panel-item">-->
<!--        <div class="panel-title">节能目标完成情况</div>-->
<!--        <div class="panel-item-body">-->
<!--            <div class="wave-echart" id='waveEchart' ref='waveEchart'></div>-->
<!--            &lt;!&ndash; <div-->
<!--              ref="COChart"-->
<!--              id="COChart"-->
<!--              style="width: 100%; height: 100%"-->
<!--            ></div> &ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="panel-item">-->
<!--        <div class="panel-title">能耗分析</div>-->
<!--        <div class="panel-item-body">-->
<!--          <div class="panel-item-content">-->
<!--            <el-table-->
<!--              :header-cell-class-name="'tableHeaderCell'"-->
<!--              class="box-table"-->
<!--              :data="tableData"-->
<!--              :fit="true"-->
<!--            >-->
<!--              <el-table-column-->
<!--                prop="target"-->
<!--                label="企业"-->
<!--                min-width="20%"-->
<!--                show-overflow-tooltip-->
<!--              />-->
<!--              <el-table-column-->
<!--                prop="waterYear"-->
<!--                label="用水量同比"-->
<!--                min-width="15%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="scope">-->
<!--                  <span v-if="scope.row.waterYear.indexOf('-') !== -1"-->
<!--                    >{{ scope.row.waterYear-->
<!--                    }}<span class="iconRed">↓</span></span-->
<!--                  >-->
<!--                  <span v-else>-->
<!--                    {{ scope.row.waterYear }}<span class="iconGreen">↑</span>-->
<!--                  </span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="waterMonth"-->
<!--                label="用水量环比"-->
<!--                min-width="15%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="scope">-->
<!--                  <span v-if="scope.row.waterMonth.indexOf('-') !== -1"-->
<!--                    >{{ scope.row.waterMonth-->
<!--                    }}<span class="iconRed">↓</span></span-->
<!--                  >-->
<!--                  <span v-else>-->
<!--                    {{ scope.row.waterMonth }}<span class="iconGreen">↑</span>-->
<!--                  </span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="electricYear"-->
<!--                label="用电量同比"-->
<!--                min-width="15%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="scope">-->
<!--                  <span v-if="scope.row.electricYear.indexOf('-') !== -1"-->
<!--                    >{{ scope.row.electricYear-->
<!--                    }}<span class="iconRed">↓</span></span-->
<!--                  >-->
<!--                  <span v-else>-->
<!--                    {{ scope.row.electricYear }}<span class="iconGreen">↑</span>-->
<!--                  </span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="electricMonth"-->
<!--                label="用电量环比"-->
<!--                min-width="15%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="scope">-->
<!--                  <span v-if="scope.row.electricMonth.indexOf('-') !== -1"-->
<!--                    >{{ scope.row.electricMonth-->
<!--                    }}<span class="iconRed">↓</span></span-->
<!--                  >-->
<!--                  <span v-else>-->
<!--                    {{ scope.row.electricMonth-->
<!--                    }}<span class="iconGreen">↑</span>-->
<!--                  </span>-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                label="操作"-->
<!--                min-width="20%"-->
<!--                show-overflow-tooltip-->
<!--              >-->
<!--                <template slot-scope="scope">-->
<!--                  <el-link-->
<!--                    :underline="false"-->
<!--                    :class="{-->
<!--                      line: true,-->
<!--                      operation: true,-->
<!--                      active: activeIndex === scope.row.target,-->
<!--                    }"-->
<!--                    @click="analysisEnergy(scope.row)"-->
<!--                    >分析</el-link-->
<!--                  >-->
<!--                </template>-->
<!--              </el-table-column>-->
<!--            </el-table>-->
<!--            <div class="table-buttons">-->
<!--              <el-pagination-->
<!--                :total="4"-->
<!--                :page-size="5"-->
<!--                @currentChange="currentChange"-->
<!--              />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import ElPagination from "../../components/page/index.vue";
const flyTo = (center) => {
  $viewer.qtum.centerAt(center);
};
export default {
  components: {
    ElPagination,
  },
  data() {
    return {
      waveOptions:{
        title: {// 标题
            text: '能耗使用情况',
            textStyle: {// 标题的样式
              color: '#888', // 字体颜色
              fontSize: 12,
              fontWeight: '400',
              align: 'center', // 文字的水平方式
              baseline: 'middle',
              position: 'inside',
              verticalAlign: 'middle'// 文字的垂直方式
            },
            left: 'center', // 定位
            top: '20%'
          },
          series: [{
            type: 'liquidFill',
            radius: '75%',
            waveAnimation: true,
            data: [{
              value: 0.5,
              direction: 'left',
              itemStyle: {
                normal: {
                  color: '#1890ff'
                }
              }
            }],
            outline: {
              // show: true , //是否显示轮廓 布尔值
              borderDistance: 1, // 外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: '#1890ff', // 边框的颜色
                borderWidth: 3 // 边框的宽度
                // shadowBlur: 5 , //外部轮廓的阴影范围 一旦设置了内外都有阴影
                // shadowColor: '#000' //外部轮廓的阴影颜色
              }
            },
            itemStyle: {
              opacity: 0.9, // 波浪的透明度
              shadowBlur: 0 // 波浪的阴影范围
            },
            backgroundStyle: {
              color: '#fff' // 图表的背景颜色
            },
            label: { // 数据展示样式
              show: true,
              color: '#000',
              insideColor: '#fff',
              fontSize: 20,
              fontWeight: 400,
              align: 'center',
              baseline: 'middle',
              position: 'inside'
            }
          }]
      },
      activeIndex: 100,
      COElementChart: {},
      COElementOptions: {
        color: ["#3888FD", "#60DFF9", "#2DFDDE", "#342DFC", "#2A97DE"],
        legend: {
          data: [
            {
              name: "电力",
              icon: "circle",
            },
            {
              name: "燃料",
              icon: "circle",
            },
            {
              name: "热力",
              icon: "circle",
            },
            {
              name: "生产工艺",
              icon: "circle",
            },
            {
              name: "其他",
              icon: "circle",
            },
          ],
          orient: "vertical", //垂直显示
          y: "center", //延Y轴居中
          x: "right", //居右显示
          padding: [0, 20, 0, 0],
          align: "left",
          textStyle: {
            color: "#C6CFCE",
            fontSize: "12",
          },
          itemStyle: {
            // fontSize: '20'
          },
        },
        tooltip: {
          // show: true,
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.65)",
          color: "#fff",
          textStyle: {
            color: "#fff",
            fontSize: "12px",
          },
          borderWidth: "0",
        },
        series: [
          {
            type: "pie",
            radius: ["20%", "75%"],
            center: ["40%", "55%"],
            roseType: "radius",
            label: {
              show: true,
              textStyle: {
                color: "#C6CFCE",
              },
            },
            labelLine: {
              show: true,
              length: 5,
              length2: 5,
            },
            data: [
              { value: 40, name: "电力" },
              { value: 33, name: "燃料" },
              { value: 28, name: "热力" },
              { value: 22, name: "生产工艺" },
              { value: 20, name: "其他" },
            ],
          },
        ],
      },
      iconArray: [
        {
          icon: require("@/assets/img/energy-customer.png"),
          title: "企业客户",
          value: 150,
          unit: "家",
        },
        {
          icon: require("@/assets/img/energy-location.png"),
          title: "场站",
          value: 320,
          unit: "个",
        },
        {
          icon: require("@/assets/img/energy-profit.png"),
          title: "累计收益",
          value: 350,
          unit: "亿",
        },
        {
          icon: require("@/assets/img/energy-co2.png"),
          title: "碳排放",
          value: 50,
          unit: "吨",
        },
      ],
      tableData: [
        {
          target: "KFC",
          waterYear: "8%",
          waterMonth: "5%",
          electricYear: "10%",
          electricMonth: "6%",
        },
        {
          target: "DXC",
          waterYear: "10%",
          waterMonth: "7%",
          electricYear: "9%",
          electricMonth: "6%",
        },
        {
          target: "博源",
          waterYear: "9%",
          waterMonth: "4%",
          electricYear: "10%",
          electricMonth: "6%",
        },
        // {
        //   target: "中东",
        //   waterYear: "9%",
        //   waterMonth: "5%",
        //   electricYear: "10%",
        //   electricMonth: "5%",
        // },
      ],
      configTable:{
        header: ['区域', '总电量(kW.h)', '功率因素'],
        data: [
          ['华北区域', '12000', '85.5%'],
          ['苏皖区域', '12100', '85.8'],
          ['西南区域', '11000', '83.2%'],
          ['东南区域', '13000', '87.7%'],
          ['西北区域', '12000', '85.5%'],
          ['华东区域', '11000', '83.2%']
        ],
        rowNum: 5,
        headerBGC: 'transparent',
        columnWidth: [110],
        align: ['left'],
        waitTime: 1000
      },
      analysisChart: null,
      analysisOption: {
        legend: {
          right: 0,
          padding: [10, 10, 0, 0],
          itemHeight: 6,
          data: ["2021", "2020"],
          textStyle: {
            color: "#C6CFCE",
            fontSize: "10",
          },
        },
        grid: {
          left: 35,
          top: 35,
          right: 20,
          bottom: 30,
        },
        xAxis: {
          boundaryGap: true,
          nameTextStyle: {
            color: "#C6CFCE",
          },
          nameLocation: "start", // x轴name处于x轴的什么位置
          type: "category",
          data: [
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisTick: {
            interval: 0,
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: 10,
              color: "#C6CFCE",
            }
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
              color: "grey",
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: 10,
              color: "#C6CFCE",
            },
          },
        },
        series: [
          {
            name: "2021",
            data: [23, 25, 38, 32, 22, 35, 36,30],
            type: "line",
            stack: 'Total',
            symbol: 'none',
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(84,251,200,1)'
                },
                  {
                    offset: 0.2,
                    color: 'rgba(84,251,200,0.3)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(84,251,200,0)'
                  }]),
              }
            },
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
                            color: "rgba(96, 224, 249, 0)", // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: "rgba(96, 224, 249, 0.5)", // 60% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "rgb(96, 224, 249)", // 100% 处的颜色
                          },
                        ],
                        false
                ),
              }, // 2DFDBD
            },
            animationDelay: function (idx) {
              return idx * 500;
            }
          },
          {
            name: "2020",
            data: [17, 20, 18, 16, 15, 15, 12, 13],
            type: "line",
            stack: 'Total',
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
                            color: "rgba(42, 150, 222, 0)", // 0% 处的颜色
                          },
                          {
                            offset: 0.6,
                            color: "rgba(42, 150, 222, 0.5)", // 60% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "rgb(42, 150, 222)", // 100% 处的颜色
                          },
                        ],
                        false
                ),
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(56,183,253,1)'
                },
                  {
                    offset: 0.2,
                    color: 'rgba(56,183,253,0.3)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(56,183,253,0)'
                  }]),
              }
            },
            animationDelay: function (idx) {
              return idx * 500;
            }
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 200;
        }
      },
      carbonChart: null,
      carbonOption: {
        color:['#65E1DF','#139AFF','#33FEBF','#FFAE76','#D1DEEE'],
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
              name: '电力',
              icon: 'rect'
            },
            {
              name: '燃料',
              icon: 'rect'
            },
            {
              name: '热力',
              icon: 'rect'
            },
            {
              name: '生产工艺',
              icon: 'rect'
            },
            {
              name: '其他',
              icon: 'rect'
            }
          ],
          orient: 'vertical',  //垂直显示
          right: '10%',
          align: 'left',
          itemHeight: 6,
          itemWidth: 6,
          textStyle: {
            color: '#fff',
            fontSize: '11',
            fontWeight: 300,
          },
          formatter: function (name) {  //图例后添加数值
            let data =  [
              { value: 24.72, name: '电力' },
              { value: 11.39, name: '燃料' },
              { value: 13.61, name: '热力' },
              { value: 13.33, name: '生产工艺' },
              { value: 6.95, name: '其他' }
            ];
            let tarValue;
            for (let i = 0; i < data.length; i++) {
              if (data[i].name === name) {
                tarValue = data[i].value;
              }
            }
            return name  + '  '+ tarValue+ '%';
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '83%'],
            center: ['26.4%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 24.72, name: '电力' },
              { value: 11.39, name: '燃料' },
              { value: 13.61, name: '热力' },
              { value: 13.33, name: '生产工艺' },
              { value: 6.95, name: '其他' }
            ]
          }
        ],
        graphic: {
          id:'image1',
          elements:[
            {
              type: 'image', // 图形元素类型
              z: 40,  // 层叠
              style: {
                image: require('@/assets/img/echarts/nQuan.png'),
                width: 57,
                height: 57
              },
              left: '17.4%',
              top: 'middle'
            },
            {
              type: 'image', // 图形元素类型
              //   z: 40,  // 层叠
              style: {
                image: require('@/assets/img/echarts/wquan.png'),
                width: 100,
                height: 100
              },
              left: '10.5%',
              top: 'middle'
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.analysisChart = this.$echarts.init(this.$refs.analysisChart)
    this.analysisChart.setOption(this.analysisOption)
    this.carbonChart = this.$echarts.init(this.$refs.carbonChart)
    this.carbonChart.setOption(this.carbonOption)
      // this.COElementChart = this.$echarts.init(this.$refs.COChart);
      // this.COElementChart.setOption(this.COElementOptions);
      // this.waveEchart = this.$echarts.init(this.$refs.waveEchart)
      // this.waveEchart.setOption(this.waveOptions)
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.analysisChart.resize()
        // this.COElementChart.resize();
        // this.waveEchart.resize();
      });
    });
  },
  methods: {
    currentChange(current) {},
    analysisEnergy(row) {
      flyTo({
        y: 27.976326,
        x: 120.726344,
        z: 56.67,
        heading: 158.2,
        pitch: -19.2,
        roll: 0,
      });
      this.activeIndex = row.target;
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      this.$store.commit("DigitalTwin/changeEventDetailShow", false);
      this.$store.commit("DigitalTwin/changeEventShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
      this.$store.commit("DigitalTwin/changeParkShow", false);
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);
      this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
      this.$store.commit("DigitalTwin/changeData1ComShow", false);
      this.$store.commit("DigitalTwin/changeData2ComShow", false);
      this.$store.commit("DigitalTwin/changeAnalyseShow", false);

      // 管道和楼栋平面图信息
      this.$store.commit("DigitalTwin/changeConduitShow", false);
      this.$store.commit("DigitalTwin/changePlanImgShow", false);

      this.$store.commit("DigitalTwin/changeEnergyInfo", row);
      this.$store.commit("DigitalTwin/changeLargeScreenShow", false);
      setTimeout(() => {
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", true);
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", true);
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", true);
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", true);
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.wave-echart{
  height: 200px;
  width:200px;
}
.condition {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px 10px;
  .condition-item {
    margin-top: 10px;
    width: 49%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail-img-wrapper {
      width: 3.8vw;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .detail-img {
      width: 3.8vw;
      height: 3.8vw;
    }
    .detail-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 8px;
      .detail-title {
        font-size: 12px;
        color: #c6cfce;
      }
      .item-detail {
        .detail-data {
          font-weight: 700;
          font-size: 19px;
        }
        .item-unit {
          margin-left: 4px;
          font-size: 12px;
          color: #c6cfce;
        }
      }
    }
  }
}
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 0;
}
.iconRed {
  color: #ff4848;
}
.iconGreen {
  color: #33ffc0;
}
.line {
  display: inline;
}
.operation {
  cursor: pointer;
}
.active {
  color: #38b7fd !important;
  text-decoration: underline !important;
}


/deep/ .dv-scroll-board {
  .header{
    color: rgba(255,255,255,0.64) !important;
    font-weight: 400;
    font-size: 12px !important;
  }
}
.rank {
  flex: 1 !important;
}

.analysis {
  flex: 0.8 !important;
}

.ring {
  flex: 1 !important;
}

.carbon {
  flex: 0.8 !important;
}
</style>
