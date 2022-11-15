<template>
  <div>
    <div class="panel-wrapper">
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
        <div class="analysis-opts">
          <div
            v-for="(item, index) in detailOptions"
            :key="index"
            :class="detailActiveIndex === index ? 'opts-item select-opt' : 'opts-item'"
            @click="changeIndex(index, 'detailActiveIndex')"
          >
            {{ item }}
          </div>
        </div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content" id="threeD-pieChart" ref="threeDPieChart"  style="width: 100%; height: 188px"></div>
        </div>
      </div>

      <div class="panel-item ring">
        <div class="panel-title">耗能环比分析</div>
        <div class="time-opts">
          <div
            v-for="(item, index) in timeOptions"
            :key="index"
            :class="activeOptIndex === index ? 'opts-item select-opt' : 'opts-item'"
            @click="changeIndex(index, 'activeOptIndex')"
          >
            {{ item }}
          </div>
        </div>
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
    </div>
  </div>
</template>

<script>
import { getPie3D, getParametricEquation } from '@/util/getPie.js' //工具类js，页面路径自己修改
import ElPagination from "../page/index.vue";
const color = ['#F7CF6E','#55F0FF','#42FECA','#28BCFD'];
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
        columnWidth: [150,130,110],
        align: ['left'],
        waitTime: 1000
      },
      analysisChart: null,
      analysisOption: {
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
                  ['5月', 23],
                  ["6月", 25],
                  ["7月", 38],
                  ["8月", 32],
                  ["9月", 22],
                  ["10月", 35],
                  ["11月", 36],
                  ["12月", 30],
                ],
              },
            ]
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
                  ['5月', 40],
                  ["6月", 45],
                  ["7月", 56],
                  ["8月", 48],
                  ["9月", 37],
                  ["10月", 50],
                  ["11月", 48],
                  ["12月", 43],
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
          top: 'middle',
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
              { value: 28.96, name: '电力' },
              { value: 21.39, name: '燃料' },
              { value: 30.61, name: '热力' },
              { value: 13.33, name: '生产工艺' },
              { value: 5.71, name: '其他' }
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
              { value: 28.96, name: '电力' },
              { value: 21.39, name: '燃料' },
              { value: 30.61, name: '热力' },
              { value: 13.33, name: '生产工艺' },
              { value: 5.71, name: '其他' }
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
      },
       optionData: [
        {
          name: "1楼楼宇空调",
          value: 12,
          itemStyle: {
            // opacity: 0.2,
            color: "#F7CF6E",
          },
        },
        {
          name: "2楼楼宇空调",
          value: 20,
          itemStyle: {
            // opacity: 0.2,
            color: "#55F0FF",
          },
        },
        {
          name: "3楼楼宇空调",
          value: 19,
          itemStyle: {
            // opacity: 0.2,
            color: "#42FECA",
          },
        },
        {
          name: "水冷机组",
          value: 20,
          itemStyle: {
            // opacity: 0.2,
            color: "#28BCFD",
          },
        },
      ],
      statusChart:null,
      option:{},
      timeOptions: ['年', '月', '日'],
      detailOptions: ['耗能占比', '成本占比'],
      activeOptIndex: 0,
      detailActiveIndex: 0,

      // 
      title_data:["2021", "2020"],
      x_data:[
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
      bottom_data:[23, 25, 38, 32, 22, 35, 36,30],
      top_coords:[
               ['5月', 23],
               ["6月", 25],
               ["7月", 38],
               ["8月", 32],
               ["9月", 22],
               ["10月", 35],
               ["11月", 36],
               ["12月", 30],
                ],
      bottom_coords:[
                  ['5月', 40],
                  ["6月", 45],
                  ["7月", 56],
                  ["8月", 48],
                  ["9月", 37],
                  ["10月", 50],
                  ["11月", 48],
                  ["12月", 43],
                ],
      top_data:[17, 20, 18, 16, 15, 15, 12, 13],
      top_title:'2020',
      bottom_title:'2021'
    }
  },
   created () {
    // this.setLabel()
  },
  mounted() {
    this.initPosition()
    this.initChart()
    this.analysisChart = this.$echarts.init(this.$refs.analysisChart)
    // this.analysisChart.setOption(this.analysisOption)
    this.getAnalysisOption()
    this.carbonChart = this.$echarts.init(this.$refs.carbonChart)
    this.carbonChart.setOption(this.carbonOption)
      // this.COElementChart = this.$echarts.init(this.$refs.COChart);
      // this.COElementChart.setOption(this.COElementOptions);
      // this.waveEchart = this.$echarts.init(this.$refs.waveEchart)
      // this.waveEchart.setOption(this.waveOptions)
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.analysisChart.resize()
         this.changeSize()
        // this.COElementChart.resize();
        // this.waveEchart.resize();
      });
    });
  },
  methods: {
    // 耗能环比分析
    getAnalysisOption(){
     let analysisOption={
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
          padding: [10, 10, 0, 0],
          itemHeight: 6,
          // 不同折现表示的含义
          data:this.title_data,
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
          data:this.x_data,
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
            name: this.bottom_title,
            data: this.bottom_data,
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
                coords: this.bottom_coords
              },
            ]
          },
          {
            name:this.top_title,
            data:this.top_data,
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
                coords: this.top_coords
              },
            ]
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 200;
        }
      }
      this.analysisChart.setOption(analysisOption)
    },
    changeIndex(index, property) {
      this[property] = index
      console.log('000',index);
      if(index===0){
      this.title_data=["2021", "2020"],
      this.x_data=[
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
      this.bottom_data=[23, 25, 38, 32, 22, 35, 36,30],
      this.top_coords=[
               ['5月', 23],
               ["6月", 25],
               ["7月", 38],
               ["8月", 32],
               ["9月", 22],
               ["10月", 35],
               ["11月", 36],
               ["12月", 30],
                ],
      this.bottom_coords=[
                  ['5月', 40],
                  ["6月", 45],
                  ["7月", 56],
                  ["8月", 48],
                  ["9月", 37],
                  ["10月", 50],
                  ["11月", 48],
                  ["12月", 43],
                ],
      this.top_data=[17, 20, 18, 16, 15, 15, 12, 13],
      this.top_title='2020',
      this.bottom_title='2021'
      } else if (index===1){
        this.title_data=["7月", "8月"],
      this.x_data=[
            "5日",
            "6日",
            "7日",
            "8日",
            "9日",
            "10日",
            "11日",
            "12日"
          ],
      this.bottom_data=[4, 5, 6, 8, 12, 5, 3,4],
      this.bottom_coords=[
               ['5日', 4],
               ["6日", 5],
               ["7日", 6],
               ["8日", 8],
               ["9日", 12],
               ["10日", 5],
               ["11日", 3],
               ["12日", 4],
                ],
      this.top_coords=[
                  ['5日', 9],
                  ["6日", 14],
                  ["7日", 14],
                  ["8日", 14],
                  ["9日", 17],
                  ["10日", 10],
                  ["11日", 5],
                  ["12日", 7],
                ],
      this.top_data=[5, 9, 8, 6, 5, 5, 2, 3],
      this.top_title='7月',
      this.bottom_title='8月'
      } else{
        this.title_data=["7日", "8日"],
        this.x_data=[
            "5时",
            "6时",
            "7时",
            "8时",
            "9时",
            "10时",
            "11时",
            "12时"
          ],
      this.bottom_data=[1.6, 1.6, 2.6,2.3, 3.8,1.1, 3.2,2.1],
      this.bottom_coords=[
               ['5时', 1.6],
               ["6时", 1.6],
               ["7时", 2.6],
               ["8时", 2.3],
               ["9时", 3.8],
               ["10时", 1.1],
               ["11时", 3.2],
               ["12时", 2.1],
                ],
      this.top_coords=[
                  ['5时', 3.7],
                  ["6时", 3.6],
                  ["7时", 4.4],
                  ["8时", 3.8],
                  ["9时", 7.2],
                  ["10时", 3.9],
                  ["11时", 5.3],
                  ["12时", 4.1],
                ],
      this.top_data=[2.1, 2, 1.8, 1.5, 3.4, 2.8, 2.1, 2],
      this.top_title='7日',
      this.bottom_title='8日'
      }

      this.getAnalysisOption()
    },
    initPosition() {
      if (window.innerWidth >= 1920) {
        const innerCircle = this.carbonOption.graphic.elements[0]
        const outerCircle = this.carbonOption.graphic.elements[1]
        innerCircle.style.width = innerCircle.style.height = 85
        innerCircle.left = '16.3%'
        outerCircle.style.width = outerCircle.style.height = 150
        outerCircle.left = '8.7%'
      } else {
        const innerCircle = this.carbonOption.graphic.elements[0]
        const outerCircle = this.carbonOption.graphic.elements[1]
        innerCircle.style.width = innerCircle.style.height = 57
        innerCircle.left = '17.4%'
        outerCircle.style.width = outerCircle.style.height = 100
        outerCircle.left = '10.5%'
      }
    },
    // 图表初始化
    initChart () {
      this.statusChart = this.$echarts.init(this.$refs.threeDPieChart)
      // 传入数据生成 option, 构建3d饼状图, 参数工具文件已经备注的很详细
      if (window.innerWidth >= 1920) {
      this.option = getPie3D(this.optionData, 0.8, 250, 28, 20, 1 ,'11%')
      }else{
      this.option = getPie3D(this.optionData, 0.8, 250, 28, 20, 1, '7%')
      }
      this.statusChart.setOption(this.option)
      // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      this.statusChart.setOption(this.option)
      this.bindListen(this.statusChart)
    },
    // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
    // optionName是防止有多个图表进行定向option传递，单个图表可以不传，默认是opiton
    bindListen (myChart, optionName = 'option') {
      let selectedIndex = ''
      let hoveredIndex = ''
      // 监听点击事件，实现选中效果（单选）
      myChart.on('click', (params) => {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
        const isSelected = !this[optionName].series[params.seriesIndex].pieStatus
          .selected
        const isHovered =
          this[optionName].series[params.seriesIndex].pieStatus.hovered
        const k = this[optionName].series[params.seriesIndex].pieStatus.k
        const startRatio =
          this[optionName].series[params.seriesIndex].pieData.startRatio
        const endRatio =
          this[optionName].series[params.seriesIndex].pieData.endRatio
        // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
        if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
          this[optionName].series[
            selectedIndex
          ].parametricEquation = getParametricEquation(
            this[optionName].series[selectedIndex].pieData.startRatio,
            this[optionName].series[selectedIndex].pieData.endRatio,
            false,
            false,
            k,
            this[optionName].series[selectedIndex].pieData.value
          )
          this[optionName].series[selectedIndex].pieStatus.selected = false
        }
        // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
        this[optionName].series[
          params.seriesIndex
        ].parametricEquation = getParametricEquation(
          startRatio,
          endRatio,
          isSelected,
          isHovered,
          k,
          this[optionName].series[params.seriesIndex].pieData.value
        )
        this[optionName].series[params.seriesIndex].pieStatus.selected = isSelected
        // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
        selectedIndex = isSelected ? params.seriesIndex : null
        // 使用更新后的 option，渲染图表
        myChart.setOption(this[optionName])
      })
      // 监听 mouseover，近似实现高亮（放大）效果
      myChart.on('mouseover', (params) => {
        // 准备重新渲染扇形所需的参数
        let isSelected
        let isHovered
        let startRatio
        let endRatio
        let k
        // 如果触发 mouseover 的扇形当前已高亮，则不做操作
        if (hoveredIndex === params.seriesIndex) {
          // 否则进行高亮及必要的取消高亮操作
        } else {
          // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = this[optionName].series[hoveredIndex].pieStatus.selected
            isHovered = false
            startRatio = this[optionName].series[hoveredIndex].pieData.startRatio
            endRatio = this[optionName].series[hoveredIndex].pieData.endRatio
            k = this[optionName].series[hoveredIndex].pieStatus.k
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            this[optionName].series[
              hoveredIndex
            ].parametricEquation = getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              this[optionName].series[hoveredIndex].pieData.value
            )
            this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered
            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = ''
          }
          // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
          if (
            params.seriesName !== 'mouseoutSeries' &&
            params.seriesName !== 'pie2d'
          ) {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected =
              this[optionName].series[params.seriesIndex].pieStatus.selected
            isHovered = true
            startRatio =
              this[optionName].series[params.seriesIndex].pieData.startRatio
            endRatio = this[optionName].series[params.seriesIndex].pieData.endRatio
            k = this[optionName].series[params.seriesIndex].pieStatus.k
            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            this[optionName].series[
              params.seriesIndex
            ].parametricEquation = getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              this[optionName].series[params.seriesIndex].pieData.value + 30
            )
            this[optionName].series[
              params.seriesIndex
            ].pieStatus.hovered = isHovered
            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex
          }
          // 使用更新后的 option，渲染图表
          myChart.setOption(this[optionName])
        }
      })
      // 修正取消高亮失败的 bug
      myChart.on('globalout', () => {
        // 准备重新渲染扇形所需的参数
        let isSelected
        let isHovered
        let startRatio
        let endRatio
        let k
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = this[optionName].series[hoveredIndex].pieStatus.selected
          isHovered = false
          k = this[optionName].series[hoveredIndex].pieStatus.k
          startRatio = this[optionName].series[hoveredIndex].pieData.startRatio
          endRatio = this[optionName].series[hoveredIndex].pieData.endRatio
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          this[optionName].series[
            hoveredIndex
          ].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            this[optionName].series[hoveredIndex].pieData.value
          )
          this[optionName].series[hoveredIndex].pieStatus.hovered = isHovered
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = ''
        }
        // 使用更新后的 option，渲染图表
        myChart.setOption(this[optionName])
      })
    },
    // 自适应宽高
    changeSize () {
      this.statusChart.resize()
    },
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
  width: 200px;
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
  position: relative;
  .analysis-opts {
    position: absolute;
    right: 2rem;
    top: 0.25rem;
    .opts-item {
      display: inline-block;
      font-size: 12px;
      margin-top: 2px;
      color: #fff;
      padding: 0 0.5rem;
      height: 2.2rem;
      line-height: 2.1rem;
      border: 1px solid #fff;
      border-radius: 5px;
      text-align: center;
      vertical-align: middle;
      margin-left: 1rem;
    }
    .select-opt {
      border: 1px solid #38B7FD;
      color: #38B7FD;
    }
  }
}

.ring {
  flex: 1 !important;
  position: relative;
  .time-opts {
    position: absolute;
    right: 2rem;
    top: 0.25rem;
    .opts-item {
      display: inline-block;
      font-size: 12px;
      color: #fff;
      width: 2.2rem;
      line-height: 2.2rem;
      height: 2.2rem;
      border: 1px solid #fff;
      border-radius: 5px;
      text-align: center;
      vertical-align: middle;
      margin-left: 1rem;
    }
    .select-opt {
      border: 1px solid #38B7FD;
      color: #38B7FD;
    }
  }
}

.carbon {
  flex: 0.8 !important;
}
</style>
