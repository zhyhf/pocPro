<template>
  <div
    class="env-analysis"
    id="envAnalysis"
    v-show="$store.state.DigitalTwin.envAnalysisShow"
  >
    <titleToolVue
      :title="title"
      :iconPath="iconPath"
      :type="'envAnalysisShow'"
    ></titleToolVue>
    <envContent :chartId="chartId" :option="option"></envContent>
  </div>
</template>
<script>
import envContent from "./content.vue";
import titleToolVue from "../../titleTool.vue";
import * as echarts from "echarts";
export default {
  components: {
    envContent,
    titleToolVue,
  },
  data() {
    return {
      title: "环境分析",
      iconPath: require("../../../assets/img/energy/environment_icon.png"),
      chartId: "envChartId",
      option: {
        tooltip: {
          // show: true,
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
          data: ["KFC值", "园区平均值"],
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
        yAxis: [
          {
            type: "value",
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
        ],
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: ['空气质量', '湿度', '温度'],
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
        ],
        series: [
          {
            name: "KFC值",
            type: "bar",
            data: [51,80,61],
            barWidth: 26,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#9DFCE1'
                }, {
                  offset: 1,
                  color: '#23B9C5'
                }]),
              }
            },
          },
          {
            name: "园区平均值",
            type: "bar",
            data: [17,72,50],
            barWidth: 26,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#7566FD'
                }, {
                  offset: 1,
                  color: '#65A3FC'
                }]),
              }
            },
          },
        ]
      }
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.env-analysis {
  // width: 360px;
  background: url("../../../assets/img/energy/bj.png") no-repeat;
  background-size: 100% 100%;
  padding: 14px;
  // height: 192px;
  line-height: 100%;
  position: absolute;
  display: flex;
  left: 60%;
  top:calc(12% + 270px);
  flex-direction: column;
  z-index: 120;
  width: 380px;
  height: 250px;
}
</style>
