<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item panelZhaoshang">
        <div class="panel-title">招商企业</div>
          <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content">
            <dv-scroll-board :config="config" ref="scrollBoard" />
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">当月招商趋势分析</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
           <div class="panel-item-content" ref="enterpriseChart"></div>
        </div>
      </div>
      <div class="panel-item mainCharts">
        <div class="panel-title">招商流程</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content">
            <img
              src="../../assets/img/echarts/funnelContent.png"
              alt=""
              style="height: 96%; display: block; margin-top: 1.5vh;margin-left: 3vh"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElPagination from "../../components/page/index.vue";
import * as echarts from "echarts";
export default {
  components: {
    ElPagination,
  },
  data() {
    return {
      enterpriseChart: {},
      enterpriseOptions: {
        legend: {
          right: 0,
          padding: [10, 10, 0, 0],
          itemHeight: 6,
          data: ["意向数", "签约数"],
          textStyle: {
            color: "#C6CFCE",
            fontSize: "10",
          },
        },
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
        grid: {
          left: 35,
          top: 35,
          right: 20,
          bottom: 30,
        },
        xAxis: {
          name: "9月",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          padding:[2,3],
          nameLocation: "start", // x轴name处于x轴的什么位置
          type: "category",
          data: [
            "1",
            "4",
            "7",
            "10",
            "13",
            "16",
            "19",
            "22",
            "25",
            "28",
            "30"
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
            name: "签约数",
            data: [10, 12, 9, 16, 15, 15, 12, 13,16,9,12],
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
                      color: "rgba(84,251,200,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(84,251,200,1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
            animationDelay: function (idx) {
              return idx * 500;
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
                  ['1', 10],
                  ["4", 12],
                  ["7", 9],
                  ["10", 16],
                  ["13", 15],
                  ["16", 15],
                  ["19", 12],
                  ["22", 13],
                  ["25", 16],
                  ["28", 9],
                  ["30", 12],
                ],
              },
            ]
          },
          {
            name: "意向数",
            data: [6, 9, 11, 5, 6, 8, 10,12, 4,9, 7],
            type: "line",
            stack: 'Total',
            symbol: 'none',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
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
                      color: "rgba(56,183,253,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(56,183,253,1)", // 100% 处的颜色
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
            showSymbol: false,
            type: "lines",
            stack: 'Total',
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
                  ['1', 16],
                  ["4", 21],
                  ["7", 20],
                  ["10", 21],
                  ["13", 21],
                  ["16", 23],
                  ["19", 22],
                  ["22", 25],
                  ["25", 20],
                  ["28", 18],
                  ["30", 19],
                ],
              },
            ]
          },
        ],
        animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 200;
        }
      },
        config:{
          // header: ['企业', '招商状态', '时间'],
          data: [
            ['中东科技有限公司', '完成资产合同', '2022.08.02'],
            ['DXC Technology', '完成物业合同', '2022.08.02'],
            ['KFC', '完成资产合同', '2022.09.02'],
            ['温州才华智能网络', '已入驻', '2022.04.02'],
            ['龙湾农村商业银行', '完成物业合同', '2022.05.02'],
            ['农村商业银行', '完成物业合同', '2022.02.02']
          ],
          rowNum: 5,
          headerBGC: 'transparent',
          columnWidth: [120],
          align: ['center'],
          waitTime: 1000
      },
      advertising: [
        require("../../../public/static/video/propaganda.mp4"),
        require("../../assets/img/policy1.jpg"),
        require("../../assets/img/propagate-img.jpg"),
      ],
      policy: [
        require("../../assets/img/policy3.png"),
        require("../../assets/img/policy1.jpg"),
        require("../../assets/img/policy2.jpg"),
      ],
      chosenPic: null,
      chosenPolicy: null,
      loginPage: "http://117.149.209.178:8092/login",
    };
  },
  created() {
    this.chosenPic = this.advertising[0];
    this.chosenPolicy = this.policy[0];
  },
  mounted() {
    this.$nextTick(() => {
      this.enterpriseChart = this.$echarts.init(this.$refs.enterpriseChart);
      this.enterpriseChart.setOption(this.enterpriseOptions);
      window.addEventListener("resize", () => {
        this.enterpriseChart.resize();
      });
    });
  },
  methods: {
    currentPicChange(current) {
      this.chosenPic = this.advertising[current - 1];
    },
    currentPolicyChange(current) {
      this.chosenPolicy = this.policy[current - 1];
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.panelZhaoshang{
  flex: 0.9 !important
}
.mainCharts{
  flex: 1.4 !important
}
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
.advertising-video {
  padding: 5px 10px;
  .video {
    width: 100%;
    height: 85%;
  }
}
.el-pagination {
  position: absolute;
  right: 4px;
  bottom: 2px;
}
</style>
