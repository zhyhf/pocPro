<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">产业现状分析</div>
        <div class="panel-item-body">
              <div class="panel-item-content" ref="eventChart"></div>
        </div>
      </div>  
      <div class="panel-item">
        <div class="panel-title">招商活动统计</div>
        <div class="panel-item-body">
          <!-- <div class="panel-item-content" ref="eventChart"></div> -->
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">企业数量统计</div>
        <div class="panel-item-body">
          <div class="panel-item-content" ref="enterpriseChart"></div>
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
         trigger: 'axis',
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
          left: 35,
          top: 35,
          right: 39,
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
            tooltip: {
              valueFormatter: function (value) {
                return value;
              }
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
            tooltip: {
              valueFormatter: function (value) {
                return value;
              }
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
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 2px;
}
</style>
