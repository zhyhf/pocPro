<template>
       <div class="panel-item-content" ref="brokenChart"></div>
</template>
<script>
    export default {
        data() {
            return {
                    brokenChart: {},
                    brokenOptions: {
                    color:['#1563FF','#3AFFF7','#008C89','#007697','#D1DEEE'],
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
                                name: '电子商务',
                                icon: 'rect'
                            },
                            {
                                name: '农产品',
                                icon: 'rect'
                            },
                            {
                                name: '服装',
                                icon: 'rect'
                            },
                            {
                                name: '电子产品',
                                icon: 'rect'
                            },
                            {
                                name: '其他',
                                icon: 'rect'
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
                                show: false,
                                textStyle: {
                                    color: '#C6CFCE'
                                }
                            },
                            labelLine: {
                                show: false,
                                length: 10,
                                length2: 4
                            },
                            data: [
                                { value: 34.72, name: '电子商务' },
                                { value: 21.39, name: '农产品' },
                                { value: 23.61, name: '服装' },
                                { value: 13.33, name: '电子产品' },
                                { value: 6.95, name: '其他' }
                            ]
                        }
                    ]
                },
            }
        },
        mounted() {
            this.brokenChart = this.$echarts.init(this.$refs.brokenChart)
            this.brokenChart.setOption(this.brokenOptions)
            window.addEventListener('resize', () => {
                this.brokenChart.resize()
            })
        }
    }
</script>