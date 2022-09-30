<template>
  <div>
    <div class="panel-wrapper">
      <div class="info">
        <div class="info-bg">
         <img :src="activeBg" class="info-bg-inner">
         <div class="info-message">
          <div class="parent">
        <div class="child" v-for="(item, index) in varieties" :key="index">
           <div :class="[`variety-head-child-${index}`]">
              <img class="info-img" :src="index === varietyIndex ? item.activeIcon: item.icon">
              <span  class="variety-title">{{ item.title }}</span>
              <dv-digital-flop :config="item.config"  class="flop-right"></dv-digital-flop>
           </div>
           
    </div>
  </div>
         </div>
        </div>
    
        <!-- <div class="bg-item" v-for="(item, index) in varieties" :key="index">
          <div :class="[`variety-content-${index}`,'variety-content']">
            <div class="variety-head">
              <img :src="index === varietyIndex ? item.activeIcon: item.icon">
              <span class="variety-title">{{ item.title }}</span>
            </div>
            <dv-digital-flop :config="item.config"  class="flop-right"></dv-digital-flop>
          </div>
        </div> -->
      </div>

      <div class="panel-item broken">
        <div class="panel-title">设备故障分析</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content broken-wrapper" ref="brokenWrapper">
            <div v-for="(ele, index) in electricityInfo" :key="index" class="ele-item">
              <img src="@/assets/icon/property/ele-icon.svg" class="ele-icon">
              <div class="ele-content">
                <div class="content-header">
                  <span class="header-detail content-title">{{ ele.title }}</span>
                  <dv-digital-flop class="header-detail content-value" :config="ele.config" :style="{ left: ele.percent + '%', height: '30px' }"/>
<!--                  <span class="header-detail" :style="{ left: ele.percent + '%', height: '30px' }">{{ ele.value }}</span>-->
                  <span class="header-detail content-percent">{{ ele.percent + '%' }}</span>
                </div>
                <svg width="100%" height="10" class="svg-wrapper">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:rgba(6,60,89,0.39);stop-opacity:1" />
                      <stop offset="100%" style="stop-color:rgba(2,247,183,1);stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
                      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#434645" stroke-width=10 stroke-dasharray="5 1"></line>
                  <path :d="`M0,0 L${ele.current},0 L${ele.current},0.01`" stroke="url(#grad1)" fill="none" stroke-width=10 stroke-dasharray="5 1"/>
<!--                  <line x1="0" y1="0" :x2="`${ele.current}%`" y2="0" stroke="#02F7B7" stroke-width=10 stroke-dasharray="5 1"></line>-->
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-item equipment">
        <div class="panel-title">设备设施</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content device">
            <div
              class="device-item"
              v-for="(item, index) in deviceArray"
              :key="index"
            >
              <div class="card-head">
                <img :src="item.pic" class="card-icon" />
                <div class="card-title">{{ item.title }}</div>
              </div>
              <div class="card-detail">
                <dv-digital-flop v-if="index !== 3" :config="item.config" style="height: 30px; position: relative; left: 0px"/>
                <dv-digital-flop v-else :config="item.config" style="height: 30px; position: relative; left: -10px"/>
<!--                <span class="card-value">{{ item.value }}</span>-->
                <span class="card-unit" :style="index === 3 ? { right: 0 } : {}">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-item extra-service">
        <div class="panel-title">园区增值服务</div>
        <div class="panel-item-body">
            <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
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
                <dv-digital-flop :config="item.config" style="height: 30px; position: relative; left: 0px"/>
<!--                <span class="card-value">{{ item.value }}</span>-->
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
      count: 0,
      // deviceActiveNum: 0,
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
          pic: require("@/assets/img/elevator-1.png"),
          title: "电梯",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/AC1.png"),
          title: "空调",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/water1.png"),
          title: "给排水",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/plant1.png"),
          title: "绿化面积",
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "m²",
        },
      ],
      extraService: [
        {
          pic: require("@/assets/img/message1.png"),
          title: "信息发布",
          value: 165,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "条",
        },
        {
          pic: require("@/assets/img/laundry1.png"),
          title: "智慧洗衣房",
          value: 35,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/dinning1.png"),
          title: "食堂",
          value: 3,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/package1.png"),
          title: "快递驿站",
          value: 50,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
      ],
      // timeOptions: ['月', '季度', '半年', '年'],
      timeOptions: ["半年"],
      activeIndex: 2,
      activeBg: require('@/assets/img/property/left-top.svg'),
      infoBg: [
        require('@/assets/img/property/left-top.svg'),
        require('@/assets/img/property/right-top.svg'),
        require('@/assets/img/property/left-bottom.svg'),
        require('@/assets/img/property/right-bottom.svg'),
      ],
      varieties: [
        {
          icon: require('@/assets/icon/property/equipment.svg'),
          activeIcon: require('@/assets/icon/property/equipment-highlight.svg'),
          title: '正常运行设备(台)',
          // value: 1354
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          }
        },
        {
          icon: require('@/assets/icon/property/money.svg'),
          activeIcon: require('@/assets/icon/property/money-highlight.svg'),
          title: '年度累计缴费(元)',
          // value: 1638254.34
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          }
        },
        {
          icon: require('@/assets/icon/property/people.svg'),
          activeIcon: require('@/assets/icon/property/people-highlight.svg'),
          title: '今日进出人数(人)',
          // value: 5544
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 20,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          }
        },
        {
          icon: require('@/assets/icon/property/car.svg'),
          activeIcon: require('@/assets/icon/property/car-highlight.svg'),
          title: '今日进出车辆(辆)',
          // value: 468
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          }
        }
      ],
      varietyStyle: [
        {
          bottom: 'calc(50% - 24px)'
        },
        {
          bottom: 'calc(50% - 24px)'
        },
        {
          top: 'calc(50% - 24px)'
        },
        {
          top: 'calc(50% - 24px)'
        }
      ],
      varietyIndex: 0,
      electricityInfo: [
        {
          title: '工厂用电',
          value: 2169,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 12,
              fontWeight: 400,
              fill: '#fff'
            }
          },
          percent: 70.53,
          current: 0
        },
        {
          title: '工厂用煤',
          value: 1892,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 12,
              fontWeight: 400,
              fill: '#fff'
            }
          },
          percent: 65.02,
          current: 0
        },
        {
          title: '员工充电',
          value: 1600,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 12,
              fontWeight: 400,
              fill: '#fff'
            }
          },
          percent: 54.98,
          current: 0
        },
        {
          title: '日常照明',
          value: 1339,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 12,
              fontWeight: 400,
              fill: '#fff'
            }
          },
          percent: 46.01,
          current: 0
        },
        {
          title: '设备未关',
          value: 1105,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 12,
              fontWeight: 400,
              fill: '#fff'
            }
          },
          percent: 37.97,
          current: 0
        },
        {
          title: '光伏充电',
          value: 873,
          config: {
            number:[0],
            animationFrame: 90,
            style: {
              fontSize: 12,
              fontWeight: 400,
              fill: '#fff'
            }
          },
          percent: 30,
          current: 0
        }
      ],
    };
  },
  mounted() {
    this.initValue()
    this.initProgressBar()
    this.initFlippers()
    this.setBackgroundInterval()
  },
  methods: {
    initValue() {
      // if (window.innerWidth >= 1920) {
      //   this.varietyStyle[2].top = this.varietyStyle[3].top = '40%'
      // }
    },
    initProgressBar() {
      for (const item of this.electricityInfo) {
        let time = 0
        const barTimer = setInterval(() => {
          time = (time + 1) > item.percent ? item.percent : (time + 1)
          item.current = time * 0.01 * (this.$refs.brokenWrapper && (this.$refs.brokenWrapper.clientWidth - 40))
          if (time >= item.percent) clearInterval(barTimer)
        }, 40)
      }
    },
    initFlippers() {
      const varietyVals = [1354, 1638254, 5544, 468]
      const deviceVals = [15, 342, 5, 1542]
      const serviceVals = [50, 3, 5, 8]
      const eleVals = [2169, 1892, 1600, 1339, 1105, 873]
      this.setFlipper(deviceVals, this.deviceArray)
      this.setFlipper(serviceVals, this.extraService)
      this.setFlipper(varietyVals, this.varieties)
      this.setFlipper(eleVals, this.electricityInfo)
    },
    setFlipper(arr, data) {
      setTimeout(() => {
        data.forEach((item, index) => {
          item.config.number[0] = arr[index]
          item.config = {...item.config}
        })
      }, 1000)
    },
    setBackgroundInterval() {
      const infoBg = [
        require('@/assets/img/property/left-top.svg'),
        require('@/assets/img/property/right-top.svg'),
        require('@/assets/img/property/right-bottom.svg'),
        require('@/assets/img/property/left-bottom.svg')
      ]
      let index = 0
      this.varietyIndex = 0
      setInterval(() => {
        this.activeBg = infoBg[index = (index + 1) % 4]
        this.varietyIndex = index === 2 ? 3 :(index === 3 ? 2 : index)
      }, 1000)
    },
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
.flop-right{
  height: 30PX; 
  // color: #38b7fd;
  // position: relative;
}
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
.info {
  // flex: 1.1;
  // width: 100%;
  // margin-bottom:20px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
  // position: relative;
  .info-bg {
  // margin-bottom:20px;
  // position: relative;
  //   // height: 100%;
  //   width: 100%;
  //   background-color: #38b7fd;
  // // position: absolute;
   flex: 1.1;
  width: 100%;
  margin-bottom:20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  // background-color: #38b7fd;
  }
  .info-bg-inner{
    width: 100%;
  }
  .info-message{
      position: absolute;
      top:0%;
      height: 100%;
      // background-color: #ffd800;
      width: 100%;
  }
  .parent {
     width: 100%;
     height:100%;
     display: flex;
     flex-flow: row wrap;
     align-items: center;
     justify-content: center;
    //  align-content: flex-start;
   }
   .child {
    display: flex;
    justify-content: center;
    align-items: center;
     box-sizing: border-box;
    //  background-color: red;
     flex: 50%;
     height: 50%;
    //  line-height: 50%;
    //  border: 1px solid red;
    // &:nth-child(1){
    //   margin-top: 30px;
    //   margin-left: 15px;
    // }
   }
   .variety-head-child-0,.variety-head-child-1{
      // color:#38b7fd;
      font-size: 12px;
      color: #fff;
      // margin-top:5px;
   }
   .variety-head-child-2,.variety-head-child-3{
      // color:#38b7fd;
      font-size: 12px;
      color: #ffffff;
      padding-top:2.5rem;
   }
   .info-img{
    margin-left:3px;
    padding-right:7px;
   }
  // .bg-item {
  //   flex-basis: 49.5%;
  //   z-index: 99;
  //   position: absolute;
  //   // .variety-content{
  //   //   position: absolute;
  //   //   width: 100%;
  //   // }
  // //  @media screen and (min-width:1921px) and (max-width:2570px) {
  // //     .variety-content-0{
  // //       top:30% !important;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:30%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:50%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:50%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  // //   @media screen and (min-width:1601px) and (max-width:1920px) {
  // //     .variety-content-0{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:38%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:38%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  // //   @media screen and (min-width:1401px) and (max-width:1600px) {
  // //     .variety-content-0{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  // //   @media screen and (min-width:1280px) and (max-width:1400px) {
  // //     .variety-content-0{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:20%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:5%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:5%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  // //   @media screen and (min-width:1001px) and (max-width:1279px) {
  // //     .variety-content-0{
  // //       top:10%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:10%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:-10%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:-10%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  // //   @media screen and (min-width:951px) and (max-width:1000px) {
  // //     .variety-content-0{
  // //       top:3%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:0%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:-40%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:-40%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  // //   @media screen and (max-width:950px){
  // //     .variety-content-0{
  // //       top:0%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-1{
  // //       top:0%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-2{
  // //       top:-48%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   .variety-content-3{
  // //       top:-48%;           
  // //     // transform: translate3d(-50%, -50%, 0);
  // //   }
  // //   }
  //   .variety-head {
  //     text-align: center;
  //     font-size: 12px;
  //     color: #fff;
  //     line-height: 18PX;
  //   }
  //   .variety-title {
  //     position: relative;
  //     left: 0.7rem;
  //     top: 0.1rem;
  //   }
  // }
}
.broken {
  flex: 1.5 !important;
  .broken-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px 0;
    .ele-item {
      flex: 1;
      width: 100%;
      margin-bottom: 5px;
      display: flex;
      .ele-icon {
        flex: 0.1
      }
      .ele-content {
        flex: 0.9;
        display: flex;
        flex-direction: column;
        .content-header {
          flex: 1;
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #fff;
          font-weight: bold;
          position: relative;
          background-image: url("../../assets/img/property/ele-bg.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .header-detail {
            position: absolute;
          }
        }
        .content-title {
          left: 2px;
        }
        .content-value {
          transform: translateX(-30%);
          margin-top: 2px;
        }
        .content-percent {
          right: 0;
        }
        .svg-wrapper {
          margin-left: 3px;
        }
      }
    }
  }
}

.equipment {
  flex: 0.5 !important;
  .small-panel-center {
    height: 103% !important;
  }
}
.extra-service {
  flex: 0.5 !important;
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
  margin-top: 6px;
  .card-icon {
    width: 12px;
    height: 12px;
    margin-top: 4px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .card-title {
    font-size: 12px;
    color: #c6cfce;
  }
}
.card-detail {
  display: flex;
  margin-left: 7px;
  position: relative;
  .card-value {
    font-size: 19px;
    font-weight: 700;
    color: #fff;
  }
  .card-unit {
    position: absolute;
    right: 4px;
    top: 8px;
    /*margin-left: -10px !important;*/
    /*margin-top: 6px;*/
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
