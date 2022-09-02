<template>
  <div>
    <div class="chart" :ref="chartId" :id="chartId">
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    chartId: {
      type: String,
      default: 'envChartId'
    },
    option: {
      type: Object,
      default: ()=>{}
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.initialChart()
    window.addEventListener('resize', () => {
      this.chartId.resize()
    })
  },
  methods: {
    initialChart() {
      // 基于准备好的dom，初始化echarts实例
      let chartDom = echarts.init(document.getElementById(this.chartId));
      // 绘制图表
      chartDom.setOption(this.option);
    },
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.chart {
  width: 355px;
  height: 200px;
  margin-top: 10px;
}
</style>
