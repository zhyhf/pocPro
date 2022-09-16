<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item goal">
        <div class="panel-title">节能目标完成情况</div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content goal-content">
            <div class="goal-title-wrapper">
                <span class="goal-title">能耗使用情况</span>
            </div>
            <div class="wave-content" ref="waveContent">
                <div class="wave-chart" id='waveEchart' ref='waveEchart'></div>
                <div class="wave-right">
                    <div class="right-item" v-for="(item, index) in waveRight" :key="index">
                        <img :src="item.bgImg" class="right-pic" @load="imgLoaded('WAVE')">
                        <div class="right-text">
                            <span class="right-text-title" :class="index === 1 ? 'right-text-title-middle' : ''">{{ item.title }}</span>
                            <dv-digital-flop v-if="counterRender" :config="item.config" style="height: 30px; position: absolute; top: -0.5rem; right: 5.2rem"/>
                            <span style="position: absolute; right: 0.7rem">万 kW.h</span>
<!--                            <span class="right-text-value">{{ item.value }}</span>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="wave-bottom">
                <span class="bottom-title">目标预期</span>
                <span class="bottom-result">有望达成预期</span>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-item green-energy">
        <div class="panel-title">绿色能源</div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content green-content">
            <img src="@/assets/img/energy/green-ele.svg" class="green-ele" @load="imgLoaded('GREEN')">
              <div class="green-chart" ref="greenChart"></div>
          </div>
        </div>
      </div>

      <div class="panel-item energy-used">
        <div class="panel-title">能耗使用概况</div>
        <div class="panel-item-body">
          <img src="@/assets/img/panel-bg-bodyCan.png" class="panelBodyCan">
          <div class="panel-item-content" style="display: flex">
              <div ref="usedChart" style="flex: 1"></div>
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
                counterRender: false,
                activeName: 'first',
                brokenChart: {},
                brokenOptions: {
                    color:['#3888FD','#60DFF9','#2DFDDE','#342DFC','#2A97DE'],
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
                                name: '光伏站',
                                icon: 'circle'
                            },
                            {
                                name: '储能站',
                                icon: 'circle'
                            },
                            {
                                name: '光储站',
                                icon: 'circle'
                            },
                            {
                                name: '光储充能',
                                icon: 'circle'
                            },
                            {
                                name: '储充站',
                                icon: 'circle'
                            }
                        ],
                        orient: 'vertical',  //垂直显示
                        y: 'center',    //延Y轴居中
                        x: 'right', //居右显示
                        padding: [0, 10, 0, 0],
                        align: 'left',
                        textStyle: {
                            color: '#C6CFCE',
                            fontSize: '12'
                        },
                        itemStyle: {

                        }
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['35%', '65%'],
                            center: ['37%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#C6CFCE'
                                }
                            },
                            labelLine: {
                                show: true,
                                length: 10,
                                length2: 4
                            },
                            data: [
                                { value: 1048, name: '光伏站' },
                                { value: 735, name: '储能站' },
                                { value: 580, name: '光储站' },
                                { value: 484, name: '光储充能' },
                                { value: 300, name: '储充站' }
                            ]
                        }
                    ]
                },

                energyChart: {},
                energyOptions: {
                    xAxis: {
                        type: 'category',
                        data: ['2021.10', '2021.11', '2021.12', '2022.1', '2022.2', '2022.3'],
                        axisTick: {
                            interval: 0
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                fontSize: 10,
                                color: '#C6CFCE'
                            }
                        }
                    },
                    yAxis: {
                        name: '能耗(吨)',
                        nameTextStyle: {
                            color: '#C6CFCE'
                        },
                        type: 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#C6CFCE'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: 'grey'
                            }
                        }
                    },
                    grid: {
                        left: 43,
                        top: 30,
                        right: 11,
                        bottom: 25
                    },
                    series: [
                        {
                            data: [1630, 1800, 2150, 2600, 2930, 3215],
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: "rgba(56,183,253, 0)" // 0% 处的颜色
                                    }, {
                                        offset: 0.6,
                                        color: "rgba(56,183,253, 0.5)" // 60% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: "rgb(56,183,253)" // 100% 处的颜色
                                    }], false),
                                    label: {
                                        show: true,
                                        position: 'top',
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 12
                                        }
                                    }
                                }
                            },
                            animationDelay: function (idx) {
                              return idx * 500;
                            }
                        }
                    ],
                  animationEasing: 'elasticOut',
                  animationDelayUpdate: function (idx) {
                    return idx * 200;
                  }
                },
                // timeOptions: ['月', '季度', '半年', '年'],
                timeOptions: ['半年'],
                activeIndex: 2,
                greenChart: null,
                greenOption: {
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
                        data: ["光伏发电量", "减排量"],
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
                            "12/15",
                            "12/16",
                            "12/17",
                            "12/18",
                            "12/19",
                            "12/20",
                            "12/21"
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
                        name: "电量(kW.h)",
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
                            name: "光伏发电量",
                            data: [23, 25, 38, 32, 22, 35, 36],
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
                                ['12/15', 23],
                                ["12/16", 25],
                                ["12/17", 38],
                                ["12/18", 32],
                                ["12/19", 22],
                                ["12/20", 35],
                                ["12/21", 36],
                                ],
                            },
                            ]
                        },
                        {
                            name: "减排量",
                            data: [17, 20, 18, 16, 15, 15, 12],
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
                                ['12/15', 40],
                                ["12/16", 45],
                                ["12/17", 56],
                                ["12/18", 48],
                                ["12/19", 37],
                                ["12/20", 50],
                                ["12/21", 48],
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
                waveOptions:{
                    // title: {// 标题
                    //     text: '能耗使用情况',
                    //     textStyle: {// 标题的样式
                    //         color: '#888', // 字体颜色
                    //         fontSize: 12,
                    //         fontWeight: '400',
                    //         align: 'center', // 文字的水平方式
                    //         baseline: 'middle',
                    //         position: 'inside',
                    //         verticalAlign: 'middle'// 文字的垂直方式
                    //     },
                    //     left: 'center', // 定位
                    //     top: '20%'
                    // },
                    series: [{
                        type: 'liquidFill',
                        radius: '95%',
                        waveAnimation: true,
                        data: [{
                            value: 0.7,
                            direction: 'left',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(56,183,253,0.4)'
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(56,183,253,1)'
                                    }
                                    ])
                                }
                            }
                        }],
                        outline: {
                            // show: true , //是否显示轮廓 布尔值
                            borderDistance: 1, // 外部轮廓与图表的距离 数字
                            itemStyle: {
                                borderColor: '#38B7FD', // 边框的颜色
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
                            color: 'transparent' // 图表的背景颜色
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
                timeToInitGreenChart: false,
                timeToInitWaveChart: false,
                waveRight: [
                    {
                        title: '年度用能目标',
                        value: '100 万kW.h',
                        config: {
                            number:[0],
                            animationFrame: 50,
                            style: {
                                fontSize: 16,
                                fontWeight: 600,
                                fill: '#FFFFFF'
                            }
                        },
                        bgImg: require('../../assets/img/energy/top.svg')
                    },
                    {
                        title: '今年累计用能',
                        value: '55 万kW.h',
                        config: {
                            number:[0],
                            animationFrame: 50,
                            style: {
                                fontSize: 16,
                                fontWeight: 600,
                                fill: '#FFFFFF'
                            }
                        },
                        bgImg: require('../../assets/img/energy/middle.svg')
                    },
                    {
                        title: '能耗剩余额度',
                        value: '45 万kW.h',
                        config: {
                            number:[0],
                            animationFrame: 50,
                            style: {
                                fontSize: 16,
                                fontWeight: 600,
                                fill: '#FFFFFF'
                            }
                        },
                        bgImg: require('../../assets/img/energy/bottom.svg')
                    }
                ],
                usedChart: null,
                usedOption: {
                   tooltip: {
                        trigger: "axis",
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        textStyle:{
                        color: '#fff',
                        fontSize: '12px'
                        },
                        borderWidth: "0",
                    },
                    legend: {
                        data: ['用水 (单位:kT)', '用电 (单位:kW.h)'],
                        itemWidth: 10,
                        itemHeight: 10,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisPointer: {
                        link: {xAxisIndex: 'all'}
                    },
                    grid: [{
                        left: '55.5%',
                        right: '13%',
                        top: '14.5%',
                        height: '70%'
                    }, {
                        left: '13%',
                        right: '56.5%',
                        top: '14.5%',
                        height: '70%'
                    }],
                    yAxis: [
                        {
                            type: 'category',
                            axisTick:{show:false},
                            data: ['今年', '今月', '今日'],
                            axisLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            data: ['今年', '今月', '今日'],
                            axisLabel:{show:false},
                            axisTick:{show:false},
                            axisLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            }
                        },
                        {
                            type: 'category',
                            name: '环比',
                            nameTextStyle:{
                                color: '#fff',
                                padding:[0,0,-12,36]
                            },
                            data: ['8%', '13%', '14%'],
                            position: 'right',
                            axisLabel: {
                                show: true,
                                formatter: (value, index) => {
                                    if (index % 2 === 0) {
                                        return [`{b|${value}}`, '{a|▲}'].join(' ')
                                    } else {
                                        return [`{b|${value}}`, '{c|▼}'].join(' ')
                                    }
                                },
                                rich: {
                                    a: {
                                        color: 'red',
                                        fontSize: 7
                                    },
                                    b: {
                                        color: '#fff',
                                        fontSize: 10
                                    },
                                    c: {
                                        color: '#20F09D',
                                        fontSize: 7
                                    }
                                },
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#1b2424',
                                    type: 'dashed'
                                }
                            },
                            offset: 0,
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            name: '环比',
                            nameTextStyle:{
                                color: '#fff',
                                padding:[0,40,-12, 0]
                            },
                            data: ['8%', '12%', '11%'],
                            position: 'left',
                            axisLabel: {
                                show: true,
                                formatter: (value, index) => {
                                    if (index % 2 !== 0) {
                                        return ['{a|▲}', `{b|${value}}`].join(' ')
                                    } else {
                                        return ['{c|▼}', `{b|${value}}`].join(' ')
                                    }
                                },
                                rich: {
                                    a: {
                                        color: 'red',
                                        fontSize: 7
                                    },
                                    b: {
                                        color: '#fff',
                                        fontSize: 10
                                    },
                                    c: {
                                        color: '#20F09D',
                                        fontSize: 7
                                    }
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#1b2424',
                                    type: 'dashed'
                                }
                            },
                            offset: 0,
                        },
                    ],
                    xAxis: [
                        {
                            type: 'value',
                            axisTick:{show:false},
                            axisLabel: {
                                hideOverlap: true,
                                showMaxLabel: true,
                                showMinLabel: false
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            }
                        },
                        {
                            gridIndex: 1,
                            type: 'value',
                            axisTick:{show:false},
                            axisLabel: {
                                hideOverlap: true,
                                showMaxLabel: true,
                                showMinLabel: false
                            },
                            inverse: true,
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '用电 (单位:kW.h)',
                            type: 'bar',
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(255,159,77,0)'
                            },
                                {
                                    offset: 1,
                                    color: 'rgba(255,159,77,1)'
                                }
                            ]),
                            data: [1180, 480, 90],
                            barWidth: 6,
                            itemStyle: {
                                barBorderRadius: 5,
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',
                                        textStyle: {
                                            color: '#fff',
                                            padding: -3
                                        }
                                    }
                                }
                            }
                        },
                        {
                            name: '用水 (单位:kT)',
                            type: 'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: 'rgba(50,249,194,0)'
                            },
                                {
                                    offset: 1,
                                    color: 'rgba(50,249,194,1)'
                                }
                            ]),
                            data: [
                                1180, 380, 80
                            ],
                            barWidth: 6,
                            itemStyle: {
                                barBorderRadius: 5,
                                normal: {
                                    label: {
                                        show: true,
                                        position: 'top',
                                        textStyle: {
                                            color: '#fff',
                                            padding: -3
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        },
        watch: {
            timeToInitWaveChart(val) {
                if (val) {
                    this.waveEchart = this.$echarts.init(this.$refs.waveEchart)
                    this.waveEchart.setOption(this.waveOptions)
                    window.addEventListener('resize', () => {
                        this.waveEchart.resize()
                    })
                }
            },
            timeToInitGreenChart(val) {
                if (val) {
                    this.greenChart = this.$echarts.init(this.$refs.greenChart)
                    this.greenChart.setOption(this.greenOption)
                    window.addEventListener('resize', () => {
                        this.greenChart.resize()
                    })
                }
            }
        },
        mounted() {
            // this.energyChart = this.$echarts.init(this.$refs.energyChart)
            // this.energyChart.setOption(this.energyOptions)
            //
            // this.brokenChart = this.$echarts.init(this.$refs.brokenChart)
            // this.brokenChart.setOption(this.brokenOptions)

            if (window.innerWidth >= 1920) {
                this.$refs.waveContent.style.marginTop = '5%'
            }

            this.initFlippers()

            this.usedChart = this.$echarts.init(this.$refs.usedChart)
            this.usedChart.setOption(this.usedOption)

            window.addEventListener('resize', () => {
                this.usedChart.resize()
                // this.energyChart.resize()
                // this.brokenChart.resize()
            })
        },
        methods: {
            initFlippers() {
                const waveVals = [100, 55, 45]
                this.setFlipper(waveVals, this.waveRight)
            },
            setFlipper(arr, data) {
                setInterval(() => {
                    data.forEach((item, index) => {
                        item.config.number[0] = arr[index]
                        item.config = {...item.config}
                    })
                }, 1000)
            },
            imgLoaded(type) {
                type === 'GREEN' && (this.timeToInitGreenChart = true, this.counterRender = true)
                type === 'WAVE' && (this.timeToInitWaveChart = true)
            },
            handleIndexChange(index) {
                this.activeIndex = index
            },
            tabClick(node) {
                if (node.index === '0') {
                    this.energyOptions.series[0].data = [1630, 1800, 2150, 2600, 2930, 3215]
                    this.energyOptions.grid = {
                        left: 43,
                        top: 30,
                        right: 11,
                        bottom: 25
                    }
                    this.energyOptions.yAxis.name = '能耗(吨)'
                    this.energyChart.setOption(this.energyOptions)
                } else if (node.index === '1') {
                    this.energyOptions.series[0].data = [19520, 21560, 26500, 31985, 36500, 48000]
                    this.energyOptions.grid = {
                        left: 50,
                        top: 30,
                        right: 11,
                        bottom: 25
                    }
                    this.energyOptions.yAxis.name = '能耗(瓦)'
                    this.energyChart.setOption(this.energyOptions)
                } else if (node.index === '2') {
                    this.energyOptions.series[0].data = [70, 64, 54, 14, 26, 50]
                    this.energyOptions.grid = {
                        left: 27,
                        top: 30,
                        right: 11,
                        bottom: 25
                    }
                    this.energyOptions.yAxis.name = 'tCO2'
                    this.energyChart.setOption(this.energyOptions)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.light-charger {
  display: flex;
  .light-value {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #38b7fd;
  }
  .light-theme {
    font-size: 12px;
    color: #c6cfce;
  }
  .light-pic {
    flex: 2;
    background-image: url("../../assets/img/light-charger.svg");
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .light-flex-info {
    flex: 1;
    display: flex;
    //flex-direction: column;
    .light-data {
      display: flex;
      flex-direction: column;
      padding: 5px 0 10px;
      .light-flex {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .light-total {
        flex: 1;
      }
      .transform-light {
        flex: 1;
      }
      .light-fix {
        flex: 1;
      }
    }
  }
}
.energy-chart {
  width: 100%;
  height: calc(100% - 35px);
  margin-top: -5px;
}
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

  .goal {
    flex: 1 !important;
      .goal-content {
          position: relative;
      }
      .goal-title-wrapper {
          margin-left: 5%;
          margin-bottom: 0.2rem;
          .goal-title {
              font-size: 14px;
              color: #fff;
          }
      }
      .wave-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .wave-chart{
              flex: 1;
              height: 9.6rem;
              margin-right: -7%;
              margin-top: -0.2rem;
          }
          .wave-right {
              display: flex;
              flex-direction: column;
              transform: translateX(-1.7rem);
              .right-item {
                  margin-bottom: 0.2rem;
                  position: relative;
                  font-size: 16px;
                  font-weight: bold;
                  .right-pic {
                      height: 3rem;
                      width: auto;
                  }
              }
              .right-item:nth-child(2) {
                  margin-left: 10%;
              }
              .right-text {
                  width: 100%;
                  position: absolute;
                  left: 0;
                  top: 0.5rem;
                  display: flex;
                  justify-content: space-between;
                  .right-text-title {
                      display: inline-block;
                      margin-left: 12%;
                  }
                  .right-text-title-middle {
                      width: 20%;
                      flex: 1;
                      margin-left: 3%;
                  }
                  .right-text-value {
                      display: inline-block;
                      margin-right: 7%;
                  }

              }
          }
      }
      .wave-bottom {
          width: 95%;
          font-size: 14px;
          display: flex;
          justify-content: space-between;
          background-color: rgba(50,249,194,0.1);
          position: absolute;
          bottom: 5%;
          left: 2.5%;

          .bottom-title {
              display: inline-block;
              margin-left: 5%;
          }
          .bottom-result {
              display: inline-block;
              width: 30%;
              text-align: center;
              font-weight: bold;
              color: #000;
              background-color: #32F9C2;
          }
      }
  }
  .green-energy {
    flex: 1.7 !important;
      .green-content {
          display: flex;
          flex-direction: column;
          .green-ele {
              width: 90%;
              margin: 10px 5%;
              height: auto;
          }
          .green-chart {
              flex: 1;
          }
      }
  }
  .energy-used {
    flex: 1 !important;
  }
</style>
