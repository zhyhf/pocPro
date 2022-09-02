<template>
  <div class="echarts-item" :id="chartData.id">

  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name:'Echartsitem',
    props:['chartData'],
    data(){
        return{

        }
    },
    mounted(){
        this.renderReport();
    },
    methods:{
    renderReport(){
    let chartDom = document.getElementById(this.chartData.id);
    let myChart = echarts.init(chartDom)
    myChart.setOption(this.chartData.option)
      }
    }

}
</script>

<style>

</style>