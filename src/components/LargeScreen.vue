<template>
  <div>
    <!-- 头部页面 -->
    <HeaderVue></HeaderVue>
    <!-- 导航跳转按钮 首页、资产、物业、能源-->
    <NavVue></NavVue>
    <!-- 左右布局页面 isLargeSreen:是否展示大屏左右侧页面 -->
    <div class="large-screen">
      <div class="left mid index" :class="[isLargeSreen ? '' : leftOut]">
        <IndexLeft v-show="navCheckBtnNum === 'homePage'" />
        <AssetsLeft v-show="navCheckBtnNum === 'assets'" />
        <PropertyLeft v-if="navCheckBtnNum === 'property'" />
        <EnergyLeft v-if="navCheckBtnNum === 'energy'" />
        <!-- <div class="park chart row-1">
          <div class="margin-t">园区概况</div>
          <div class="park-content"></div>
        </div>
        <div class="area chart row-2">
          <div class="title">区域面积</div>
          <div class="content">
            <div id="RegionalArea"></div>
          </div>
        </div>
        <div class="rent chart row-3">
          <div class="title">区域租赁</div>
          <div class="content rent-content">
          </div>
        </div> -->
      </div>
      <div class="right mid index" :class="[isLargeSreen ? '' : rightOut]">
        <IndexRight v-show="navCheckBtnNum === 'homePage'" />
        <AssetsRight v-if="navCheckBtnNum === 'assets'" />
        <PropertyRight v-if="navCheckBtnNum === 'property'" />
        <EnergyRight v-if="navCheckBtnNum === 'energy'" />
        <!-- <div class="car-space chart row-1">
          <div class="margin-t">车位统计</div>
          <div class="content statistics">
          </div>
        </div> -->
        <!-- <div class="area chart row-2">
          <div class="title">车辆进出</div>
          <div class="content">
            <div class="vihecle-count"></div>
          </div>
        </div> -->
        <!-- <div class="equipment chart row-3">
          <div class="title">故障设备统计</div>
          <div class="content">
            <div class="machine"></div>
          </div>
        </div> -->
      </div>
      <Bottom></Bottom>
    </div>
    <!-- 事件处理弹框页面 -->
    <DealEvent />
    <EventDetail />
    <!-- 楼栋信息页面 -->
    <EnterpriseShowVue />
    <EnterpriseVue />
    <plan-img />
    <conduit />
    <!-- 停车告警信息页面 -->
    <ParkingStatisticsVue />
    <!-- 智慧停车-摄像头告警页面 -->
    <ParkEventList />
    <!-- 摄像头监控页面 -->
    <ParkEventDetail />
    <!--能源分析-->
    <data-analysis />
    <energy-analysis />
    <env-analysis />
    <company-analysis />
    <!-- 告警 - 周围环境分析页面 -->
    <Environment />
    <!-- 告警 - 周围资料分析页面 -->
    <DataComponent />
    <DataComponent2 />
    <!-- 告警 - 周围分析结果页面 -->
    <AnalyseCom />
    <!-- 底部页面 -->
    <div class="bottom-mask"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import HeaderVue from "./Header.vue";
import Bottom from "./Bottom.vue";
import ParkSpace from "./park/ParkSpace.vue";
import DealEvent from "./dealEvent/DealEvent.vue";
import EventDetail from "./dealEvent/EventDetail.vue";
import IndexLeft from "./indexPage/left.vue";
import IndexRight from "./indexPage/right.vue";
import NavVue from "./navVue/index.vue";
import AssetsLeft from "./assets/left.vue";
import AssetsRight from "./assets/right.vue";
import PropertyLeft from "./property/left.vue";
import PropertyRight from "./property/right.vue";
import EnergyLeft from "./energy/left.vue";
import EnergyRight from "./energy/right.vue";
import EnterpriseShowVue from "../components/enterprise/EnterpriseShow.vue";
import EnterpriseVue from "../components/enterprise/Enterprise.vue";
import ParkingStatisticsVue from "../components/park/ParkingStatistics.vue";
import ParkEventList from "../components/park/ParkEventList.vue";
import ParkEventDetail from "../components/park/ParkEventDetail.vue";
import DataAnalysis from "../components/energyAnalysis/data/index.vue";
import EnergyAnalysis from '../components/energyAnalysis/energy/index.vue';
import EnvAnalysis from '../components/energyAnalysis/env/index.vue';
import CompanyAnalysis from '../components/energyAnalysis/company/index.vue';
import Environment from "../components/dealEvent/analysisComponent/Environment.vue";
import DataComponent from "../components/dealEvent/analysisComponent/DataComponent.vue";
import DataComponent2 from "../components/dealEvent/analysisComponent/DataComponent2.vue";
import AnalyseCom from "../components/dealEvent/analysisComponent/ResultsComponent.vue";
import PlanImg from  '../components/enterprise/Plan.vue'
import Conduit from '../components/enterprise/Conduit.vue'

export default {
  components: {
    NavVue,
    IndexLeft,
    IndexRight,
    AssetsLeft,
    AssetsRight,
    PropertyLeft,
    PropertyRight,
    EnergyLeft,
    EnergyRight,
    Bottom,
    HeaderVue,
    ParkSpace,
    DealEvent,
    EventDetail,
    EnterpriseShowVue,
    EnterpriseVue,
    ParkingStatisticsVue,
    ParkEventList,
    ParkEventDetail,
    DataAnalysis,
    EnergyAnalysis,
    EnvAnalysis,
    CompanyAnalysis,
    Environment,
    DataComponent,
    DataComponent2,
    AnalyseCom,
    PlanImg,
    Conduit,
  },
  data() {
    return {
      chartId: "largeParking",
      option: {
        series: [
          {
            radius: "60%",
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
                borderWidth: 1,
                borderColor: "#0B1930",
                color: "#38B7FD",
              },
            },
            axisLine: {
              lineStyle: {
                width: 3,
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
                value: 600,
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
              fontSize: 10,
              color: "#fff",
              formatter: "{value}辆",
            },
          },
        ],
      },
      parkData: [
        {
          name: "园区总面积",
          data: "3.12k㎡",
        },
        {
          name: "总用地面积",
          data: "1.2k㎡",
        },
        {
          name: "园区人数",
          data: "4560人",
        },
        {
          name: "园区企业数",
          data: "96家",
        },
      ],
      rentData: [
        {
          name: "园区楼宇",
          data: "3栋",
          icon: require("../assets/icon/rent-district.svg"),
        },
        {
          name: "入驻企业",
          data: "30家",
          icon: require("../assets/icon/rent-district.svg"),
        },
        {
          name: "租赁百分比",
          data: "80%",
          icon: require("../assets/icon/rent-district.svg"),
        },
      ],
      listArray: [
        {
          num: 1,
          time: "2021-10-15",
          event: "入侵检测",
          status: "未确认",
          opration: "处理",
        },
        {
          num: 2,
          time: "2021-10-16",
          event: "烟火识别",
          status: "已处理",
          opration: "处理",
        },
        {
          num: 3,
          time: "2021-10-17",
          event: "打架检测",
          status: "未处理",
          opration: "处理",
        },
        {
          num: 4,
          time: "2021-10-18",
          event: "入侵检测",
          status: "未确认",
          opration: "处理",
        },
        {
          num: 5,
          time: "2021-10-19",
          event: "入侵检测",
          status: "无需处理",
          opration: "处理",
        },
        {
          num: 6,
          time: "2021-10-20",
          event: "摔倒检测",
          status: "未确认",
          opration: "处理",
        },
      ],
      tableData: [],
      tableHead: ["序号", "时间", "事件", "状态", "操作"],
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      regularUsed: 288,
      newEnergyUsed: 120,
      energyTotalNum: 200,
      regularTotalNum: 400,
      leftOut: "leftOut",
      rightOut: "rightOut",
    };
  },
  methods: {
    initChart() {
      let idArray = ["RegionalArea", "car", "machine"];
      let options = [
        {
          tooltip: {
            trigger: "item",
          },
          color: ["#C3A535", "#F6AC2F", "#EBDAAA"],
          series: [
            {
              name: "面积",
              type: "pie",
              radius: "60%",
              data: [
                { value: 1048, name: "A区" },
                { value: 735, name: "B区" },
                { value: 580, name: "C区" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        },
        {
          //  图表距边框的距离,可选值：'百分比'¦ {number}（单位px）
          grid: {
            width: "83%",
            height: "60%",
            left: "12%",
            top: "20%",
          },
          xAxis: {
            // name: "\n\n\n周",
            nameTextStyle: {
              color: "rgba(255,255,255,0.7)",
              padding: [0, 0, 0, -20],
            },
            type: "category",
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                // 设置x轴颜色
                color: "rgba(255,255,255,1)",
              },
            },
            // 设置X轴数据旋转倾斜
            axisLabel: {
              rotate: 0, // 旋转角度
              interval: 0, //设置X轴数据间隔几个显示一个，为0表示都显示
            },
            axisTick: {
              show: true,
            },
            // boundaryGap值为false的时候，折线第一个点在y轴上
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
          yAxis: {
            type: "value",
            name: "次数",
            nameTextStyle: {
              color: "rgba(255,255,255,0.7)",
              padding: [0, 0, 0, -20],
            },
            min: 0, // 设置y轴刻度的最小值
            max: 80, // 设置y轴刻度的最大值
            interval: 10,
            axisLine: {
              lineStyle: {
                // 设置y轴颜色
                color: "rgba(255,255,255,1)",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dotted",
                color: "rgba(255,255,255,0.3)",
              },
            },
          },
          series: [
            {
              data: [10, 13, 25, 30, 35, 35, 40],
              type: "line",
              // 设置折线上圆点大小
              symbolSize: 0,
              itemStyle: {
                normal: {
                  // 拐点上显示数值
                  label: {
                    show: false,
                  },
                  borderColor: "red", // 拐点边框颜色
                  lineStyle: {
                    // width:1,  // 设置线宽
                    type: "solid", //'dotted'虚线 'solid'实线
                    color: "rgba(246,161,11,1)",
                  },
                },
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(246,161,11, 0.9)",
                  },
                  {
                    offset: 1,
                    color: "rgba(246,161,11, 0.1)",
                  },
                ]),
              },
            },
            {
              data: [20, 33, 80, 72, 43, 51, 45],
              type: "line",
              // 设置折线上圆点大小
              symbolSize: 0,
              itemStyle: {
                normal: {
                  // 拐点上显示数值
                  label: {
                    show: false,
                  },
                  borderColor: "red", // 拐点边框颜色
                  lineStyle: {
                    // width:1,  // 设置线宽
                    type: "solid", //'dotted'虚线 'solid'实线
                    color: "rgba(252,208,89,0.27)",
                  },
                },
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(252,208,89,0.27)",
                  },
                  {
                    offset: 1,
                    color: "rgba(252,208,89,0)",
                  },
                ]),
              },
            },
          ],
          //   color: ["#FFEF99", "#F6AC2F"],
        },
        {
          tooltip: {
            trigger: "item",
          },
          color: ["#F6BA2F", "#FFEF99", "#EBDAAA"],
          series: [
            {
              type: "pie",
              radius: ["40%", "60%"],
              data: [
                { value: 1048, name: "防盗警报" },
                { value: 735, name: "门禁" },
                { value: 580, name: "电气设备" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        },
      ];
      for (let index = 0; index < idArray.length; index++) {
        // 基于准备好的dom，初始化echarts实例
        let chartDom = echarts.init(document.getElementById(idArray[index]));

        // 绘制图表
        chartDom.setOption(options[index]);
      }
    },
    initDate() {
      let myDate = new Date();
      this.year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      this.month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      this.day = myDate.getDate(); //获取当前日(1-31)
      this.hour = myDate.getHours() - 1; //获取当前小时数(0-23)

      let data = [
        {
          id: 1,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "扬尘报警",
          state: "已处理",
        },
        {
          id: 2,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "未处理",
        },
        {
          id: 3,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "未处理",
        },
        {
          id: 4,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "已处理",
        },
        {
          id: 5,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "已处理",
        },
        {
          id: 6,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "已处理",
        },
        {
          id: 7,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "已处理",
        },
        {
          id: 8,
          date: `${this.year}.${this.month}.${this.day} ${this.hour}:40:00`,
          name: "边坡移位",
          state: "已处理",
        },
      ];
      this.tableData = data;
    },
    // changeCarNum() {
    //   timer = setInterval(() => {
    //     if (this.regularUsed > 395) {
    //       clearInterval(timer);
    //     }
    //     this.regularUsed++;
    //   }, 7000);
    // },
  },
  computed: {
    isLargeSreen() {
      return this.$store.state.DigitalTwin.largeScreenShow;
    },
    navCheckBtnNum() {
      return this.$store.state.DigitalTwin.navCheckBtnNum;
    },
  },
  mounted() {
    // this.initChart();
    this.initDate();
    // this.changeCarNum();
  },
  beforeDestroy() {
    // clearInterval(timer);
  },
};
</script>
<style lang="less" scoped>
@primary-color: #38b7fd;
@green-color: #20f09d;
.primary-color {
  color: @primary-color;
}
.large-screen {
  color: #fff;
}

.mid {
  width: 22vw;
  height: 90%;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
}
.left {
  left: 0;
  margin-left: 20px;
  transition: all 0.5s ease-in-out;
}
.leftOut {
  left: -50%;
}
.rightOut {
  right: -50% !important;
}
.chart {
  background: url(../assets/img/large-bg.png) no-repeat;
  background-size: 100% 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.row-1 {
  width: 100%;
  height: 35%;
}
.row-2 {
  width: 100%;
  height: 27%;
}
.row-3 {
  width: 100%;
  height: 30%;
}
.park {
  .park-content {
    flex: 1;
    background: url(../assets/img/park-content.svg) no-repeat;
    background-size: 100% 100%;
  }
}
.title {
  color: #fff;
  text-align: left;
  font-size: 1.4rem;
  margin: 3% 0 0 10%;
}
.margin-t {
  color: #fff;
  text-align: left;
  font-size: 1.4rem;
  margin: 4% 0 0 10%;
}
.content {
  flex: 1;
  padding: 10px;
}

.index {
  z-index: 100;
}
#RegionalArea {
  width: 100%;
  height: 100%;
  background: url(../assets/img/pie.svg) no-repeat;
  background-size: contain;
}
.rent-content {
  background: url(../assets/img/rent-district.svg) no-repeat;
  background-size: contain;
  margin: 0 0.8rem;
  // display: flex;
  // .map {
  //   width: 60%;
  //   height: 100%;
  //   background: url(../assets/img/map.svg) no-repeat;
  //   background-size: 100% 100%;
  // }
  // .rent {
  //   flex: 1;
  //   margin-left: 10px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   .rent-item {
  //     display: flex;
  //     flex-direction: column;

  //     margin: 5px 0;
  //     img {
  //       width: 1.5rem;
  //       height: 1.5rem;
  //     }
  //   }
  // }
}
.padding-left {
  padding-left: 20px;
}
.right {
  right: 0;
  margin-right: 20px;
  transition: all 0.5s ease-in-out;
  .statistics {
    width: 100%;
    height: 90%;
    background: url(../assets/img/parking.svg) no-repeat;
    background-size: 100% 100%;
    margin: 2rem 0;
  }
  .car-space {
    display: flex;
    flex-direction: column;
    width: 100%;
    .top-item {
      height: 45%;
    }
    // .middle-item {
    //   height: 15%;
    //   display: flex;
    //   .left-progress {
    //     width: 50%;
    //     margin: 0 5px;
    //     background: url(../assets/img/left-progress.svg) no-repeat;
    //     background-size: 100% 100%;
    //   }
    //   .right-progress {
    //     width: 50%;
    //     margin: 0 5px;
    //     background: url(../assets/img/right-progress.svg) no-repeat;
    //     background-size: 100% 100%;
    //   }
    // }
    .bottom-item {
      height: 40%;
      display: flex;
      justify-content: space-evenly;
      .energy {
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
          margin: 0 auto;
        }
        .top-img {
          width: 16px;
          height: 16px;
        }
        .bottom-img {
          width: 32px;
          height: 16px;
        }
      }
      .small-font {
        font-size: xx-small;
        color: #8a8a8a;
      }
      .green-color {
        color: @green-color;
      }
    }
  }
  .area {
    .vihecle-count {
      width: 100%;
      height: 100%;
      background: url(../assets/img/vihecle-chart.svg) no-repeat;
      background-size: 100% 100%;
    }
  }
  .equipment {
    .machine {
      width: 100%;
      height: 100%;
      background: url(../assets/img/equipment.svg) no-repeat;
      background-size: 100% 100%;
    }
  }
  .total {
    width: 30%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    text-align: center;
    line-height: 90px;
  }
  .number {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
table {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0px; /*设置边框的距离*/
  border-collapse: collapse; /*合并边框(设置了此属性 边框的距离就没用了 所以用此属性无需再设置边框距离)*/
}
td,
th {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 1px solid rgb(235, 235, 235);
}
.black {
  color: rgb(255, 255, 255) !important;
}

#car {
  width: 100%;
  height: 100%;
}
#machine {
  width: 100%;
  height: 100%;
}
.bottom-mask {
  width: 100vw;
  height: 15%;
  bottom: 0;
  position: absolute;
  background: url(../assets/img/dark-bg.png) 0 0 no-repeat;
  background-size: 100% 100%;
  transform: rotate(180deg);
  z-index: 90;
}
</style>
