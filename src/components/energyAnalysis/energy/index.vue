<template>
  <div
    class="energy-analysis"
    id="energyAnalysis"
    v-show="$store.state.DigitalTwin.energyAnalysisShow"
  >
    <titleToolVue
      :title="title"
      :iconPath="iconPath"
      :type="'energyAnalysisShow'"
    ></titleToolVue>
    <EnergyContent :chartId="chartId" :option="option"></EnergyContent>
  </div>
</template>
<script>
import EnergyContent from "./content.vue";
import titleToolVue from "../../titleTool.vue";
import * as echarts from "echarts";
export default {
  components: {
    EnergyContent,
    titleToolVue,
  },
  data() {
    return {
      title: "能耗分析",
      iconPath: require("../../../assets/img/energy/energy_icon.png"),
      chartId: "energyChartId",
      option: {
        legend: {
          data: ["用电量", "用水量"],
          textStyle:{
            color: '#ffffff'//字体颜色
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          axisLine: {
            lineStyle: {
              color: "#FFFFFF14",
            }
          },
          axisLabel: {//x轴文字的配置
            show: true,
            textStyle: {
              color: "#fff",
            }
          },
        },
        yAxis: {
          name: '单位/(吨)',
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          },
          //坐标轴内线的样式
          splitLine: {
            lineStyle: {
              color: '#FFFFFF14',
            }
          }
        },
        series: [
          {
            data: [42, 43, 62, 50, 53, 47, 76, 64, 70, 61, 78, 75],
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#7567fdb3'
                }, {
                  offset: 1,
                  color: '#7567fd00'
                }]),
              }
            },
            name: "用电量",
            itemStyle:{
              normal: {
                color: '#7566FD',
              }
            },
          },
          {
            data: [18, 21, 37, 25, 30, 39, 57, 58, 65, 72, 71, 80],
            type: 'line',
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#40e8cbb3'
                }, {
                  offset: 1,
                  color: '#40e8cb00'
                }]),
              }
            },
            name: "用水量",
            itemStyle:{
              normal: {
                color: '#40E8CB'
              }
            },
          }
        ]
      }
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.energy-analysis {
  // width: 360px;
  background: url("../../../assets/img/energy/bj.png") no-repeat;
  background-size: 100% 100%;
  padding: 14px;
  // height: 192px;
  line-height: 100%;
  position: absolute;
  display: flex;
  left: 60%;
  top: 12%;
  flex-direction: column;
  z-index: 120;
  width: 420px;
  height: 260px;
}
</style>
