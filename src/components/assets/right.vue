<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">产业现状分析</div>
        <div class="panel-item-body">
              <div class="panel-item-content" ref="eventChart"></div>
        </div>
      </div>  
      <div class="panel-item zhishuAnalysis">
        <div class="panel-title">竞争力指数分析</div>
        <div class="panel-item-body">
          <div class="panel-item-content" ref="radarComCharts"></div>
        </div>
      </div>
      <div class="panel-item companyDevelop">
        <div class="panel-title">企业发展<div class="updateC">更新时间: <span class="innerDate">2022/09/09</span></div></div> 
          <div class="panel-item-body">
          <div class="panel-item-content condition">
            <div
              v-for="(item, index) in iconArray"
              :key="index"
              :class="item.title.length>5?'condition-itemL':'condition-item'"
            >
              <div class="detail-img-wrapper">
                <img :src="item.icon" alt="" class="detail-img" />
              </div>
              <div class="detail-box">
                <div class="detail-title">{{ item.title }}</div>
                <div class="item-detail">
                  <span class="detail-data">{{ item.value }}</span>
                  <span class="item-unit">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="panel-item new">
        <div class="panel-title">创新能力(近12个月)</div>
        <div class="panel-item-body">
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
                <span class="card-value">暂无</span>
                <!-- <span class="card-unit" :style="index === 3 ? { right: 0 } : {}">{{ item.unit }}</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElPagination from "../../components/page/index.vue";
export default {
  components: {
    ElPagination,
  },
  data() {
    return {
         deviceArray: [
        {
          pic: require("@/assets/img/elevator.png"),
          title: "商标",
          config: {
            number:[0],
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/AC.png"),
          title: "专利",
          config: {
            number:[0],
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/water.png"),
          title: "著作权",
          config: {
            number:[0],
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "个",
        },
        {
          pic: require("@/assets/img/plant.png"),
          title: "软件著作权",
          config: {
            number:[0],
            style: {
              fontSize: 18,
              fontWeight: 600,
              fill: '#FFFFFF'
            }
          },
          unit: "m²",
        },
      ],
          iconArray: [
            {
              icon: require("@/assets/img/enegy.png"),
              title: "总量",
              value: 92813,
              unit: "家",
            },
            {
              icon: require("@/assets/img/enegy.png"),
              title: "规模企业(注册资本3000万以上)",
              value: 320,
              unit: "家",
            },
            {
              icon: require("@/assets/img/enegy.png"),
              title: "总量",
              value: 5,
              unit: "家",
            },
            {
              icon: require("@/assets/img/enegy.png"),
              title: "新注册企业(近12个月)",
              value: 8520,
              unit: "家",
            },
          ],
        isHighLight: false,
        radartComOptions: {
        radar: {
          center: ['50%', '50%'],
          name: {
            color: 'rgba(255,255,255,0.8)',
            fontSize: 10,
            fontWeight:400,
            // formatter: (value, indicator) => {
            //   if (value === '创新能力和创业活跃度') return value
            //   const arr = value.split('')
            //   arr.splice(5, 0, '\n')
            //   return arr.join('')
            // }
          },
          nameGap: 7,
          indicator: [
            { name: '创新能力', max: 6500 },
            { name: '经济增长', max: 16000 },
            { name: '资本热度', max: 30000 },
            { name: '人才吸引', max: 33000 },
            { name: '企业发展', max: 12000 },
            { name: '产业结构', max: 10000 }
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
            symbol: 'image://http://localhost:8080/rardar-default.png',
            symbolSize: 50,
            data: [
              {
                value: [4200, 12000, 23800, 18000, 8700 ,9000],
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
        config:{
        header: ['企业', '招商状态', '时间'],
        data: [
          ['中东科技有限公司', '完成资产合同', '2022.08'],
          ['DXC Technology', '完成物业合同', '2022.08'],
          ['KFC', '完成资产合同', '2022.09'],
          ['温州才华智能网络', '已入驻', '2022.04'],
          ['龙湾农村商业银行', '完成物业合同', '2022.05']
        ],
        rowNum: 4,
        headerBGC: 'transparent',
        columnWidth: [120],
        align: ['center'],
        waitTime: 1000
      },
      eventChart: {},
      eventOptions: {
        color: ["rgb(45, 253, 189)", "rgb(55, 133, 247)"],
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
        legend: {
          right: 0,
          itemHeight: 6,
          itemWidth: 6,
          padding: [10, 100, 0, 0],
          data: ["企业数量", "注册资本"],
          textStyle: {
            color: "#C6CFCE",
            fontSize: "10",
          },
        },
        xAxis: {
          type: "category",
          data: [
            "电子商务",
            "房地产",
            "物业",
            "保险",
            "物流",
            "人力资源",
            "广告",
            "策划",
          ],
          axisTick: {
            interval: 0,
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              fontSize: 10,
              color: "#C6CFCE",
            },
            formatter: function (value) {
            var ret = "";//拼接加\n返回的类目项  
            var maxLength = 2;//每项显示文字个数  
            var valLength = value.length;//X轴类目项的文字个数  
            var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
            if (rowN > 1)//如果类目项的文字大于4,  
            {
                for (var i = 0; i < rowN; i++) {
                    var temp = "";//每次截取的字符串  
                    var start = i * maxLength;//开始截取的位置  
                    var end = start + maxLength;//结束截取的位置  
                    //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                    temp = value.substring(start, end) + "\n";
                    ret += temp; //凭借最终的字符串  
                }
                return ret;
            }
            else {
                return value;
            }
        },
          },
        },
        yAxis: [{
          name: "企业数量(家)",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          type: "value",
          axisLabel: {
            formatter: '{value}'
          },
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
        {
          name: "注册资本(亿元)",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          axisLabel: {
            formatter: '{value}'
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
        }],
        grid: {
          left: 42,
          top: 35,
          right: 45,
          bottom: 30,
        },
        series: [
          {
            name: "企业数量",
            data: [45, 47, 54, 50, 52, 55, 46, 55],
            type: "bar",
            barWidth:20,
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
                      color: "rgba(45, 253, 189, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "rgba(45, 253, 189, 0.5)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgb(45, 253, 189)", // 100% 处的颜色
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
            name: "注册资本",
            data: [40, 50, 67,72, 76, 65, 62,58],
            type: "line",
            yAxisIndex: 1,
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
                      color: "rgba(255,159,77,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(255,159,77,1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
        // animationEasing: 'elasticOut',
        // animationDelayUpdate: function (idx) {
        //   return idx * 200;
        // }
      },
      enterpriseChart: {},
      enterpriseOptions: {
        legend: {
          right: 0,
          padding: [10, 10, 0, 0],
          itemHeight: 6,
          data: ["意向单位数", "参加单位数", "已签约数"],
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
          type: "category",
          data: [
            "2021.10",
            "2021.11",
            "2021.12",
            "2022.01",
            "2022.02",
            "2022.03",
            "2022.04",
          ],
          axisTick: {
            interval: 0,
          },
          axisLabel: {
            interval: 0,
            rotate: 30,
            textStyle: {
              fontSize: 10,
              color: "#C6CFCE",
            },
          },
        },
        yAxis: {
          name: "次数",
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
            name: "意向单位数",
            data: [45, 22, 50, 80, 52, 55, 46],
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
            name: "参加单位数",
            data: [67, 89, 50, 36, 72, 22, 38],
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
                      color: "rgba(52, 45, 253, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "rgba(52, 45, 253, 0.5)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgb(52, 45, 253)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            animationDelay: function (idx) {
              return idx * 500;
            }
          },
          {
            name: "已签约数",
            data: [67, 89, 50, 36, 72, 22, 38],
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
      tableData: [
        {
          enterprise: "中东科技有限公司",
          state: "完成资产合同",
          time: "2022.08",
        },
        {
          enterprise: "DXC Technology",
          state: "完成物业合同",
          time: "2022.08",
        },
        {
          enterprise: "KFC",
          state: "完成资产合同",
          time: "2022.08",
        },
        {
          enterprise: "温州才华智能网络",
          state: "已入驻",
          time: "2022.08",
        },
      ],
    };
  },
  mounted() {
    this.radarChart = this.$echarts.init(this.$refs.radarComCharts)
    this.radarChart.setOption(this.radartComOptions)
    setInterval(() => {
      this.radartComOptions.series[0].symbol = `image://http://localhost:8080/rardar-${this.isHighLight ? 'default' : 'active'}.png`
      this.isHighLight = !this.isHighLight
      this.radarChart.setOption(this.radartComOptions)
    }, 500)
    this.$nextTick(() => {
      this.eventChart = this.$echarts.init(this.$refs.eventChart);
      this.eventChart.setOption(this.eventOptions);

      this.enterpriseChart = this.$echarts.init(this.$refs.enterpriseChart);
      this.enterpriseChart.setOption(this.enterpriseOptions);

      window.addEventListener("resize", () => {
        this.eventChart.resize();
        this.enterpriseChart.resize();
      });
    });
  },
  methods: {
    currentChange(current) {},
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.companyDevelop{
   flex: 0.69 !important;
    .panel-item-body {
      background-image: url("~@/assets/img/panel-bg-bodyShort.png") !important;
    }
}
.new{
     flex: 0.52 !important;
    .panel-item-body {
      background-image: url("~@/assets/img/panel-bg-bodyShort.png") !important;
    }
}
.device {
  display: flex;
  justify-content: space-between;
  padding: 9px 2px;
  .device-item {
    display: flex;
    flex-direction: column;
    padding-left: 6px;
    width: 24%;
    box-sizing: border-box;
    border: 1px solid rgba(255,255,255,0.30);
    box-shadow: 0px 0px 8px 3px rgba(255,255,255,0.12) inset; 
    // background-image: url("../../assets/img/device-midium-bg.png");
    // background-size: 100% 100%;
    margin-left: 4px;
    margin-right: 4px;
  }
  :nth-child(4) {
         width: 32% !important;
   }
  .device-item-active {
    background-image: url("../../assets/img/device-midium-bg-active.png") !important;
    .card-title, .card-value, .card-unit {
      color: #ffd800 !important;
    }
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
    font-size: 18px;
    font-weight: 600;
    color: #38b7fd;
    margin-top: 5px;
    margin-left: 20%;
  }
  .card-unit {
    position: absolute;
    right: 4px;
    top: 8px;
    font-size: 12px;
    color: #c6cfce;
  }
}
.updateC{
    color:rgba(255,255,255,0.64);
    font-size: 11px;
    font-weight: 400;
    position: absolute;
    right: 16px;
    top: 0px;
    .innerDate{
      color:rgba(2,247,183,1);
      font-weight: 700;
    }
}
.condition {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px 10px;
  .condition-item,.condition-itemL {
    margin-top: 12px;
    width: 36%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .detail-img-wrapper {
      width: 2vw;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .detail-img {
      width: 32px;
      height: 32px;
    }
    .detail-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 8px;
      .detail-title {
        font-size: 12px;
        color: rgba(255,255,255,0.64)
      }
      .item-detail {
        .detail-data {
          font-weight: 700;
          font-size: 19px;
        }
        .item-unit {
          margin-left: 4px;
          font-size: 12px;
          color: rgba(255,255,255,0.64)
        }
      }
    }
  }
  .condition-itemL{
      width: 64%;
  }
}
.zhishuAnalysis{
  flex: 0.8;
}
.companyNum{
  flex: 1.5;
}
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 2px;
}
</style>
