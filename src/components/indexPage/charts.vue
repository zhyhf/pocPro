<template>
       <div class="panel-item-content" ref="brokenYChart"></div>
</template>
<script>
    export default {
        data() {
            return {
                    brokenChart: {},
                    brokenOptions: {
                    color:['#65E1DF','#139AFF','#33FEBF','#1563FF','#D1DEEE'],
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
                        right: '6%',
                        top: '16%',
                        align: 'left',
                        itemHeight: 8,
                        itemWidth: 8,
                        textStyle: {
                            color: '#fff',
                            fontSize: '14',
                            fontWeight: 400,
                        },
                        formatter: function (name) {  //图例后添加数值
                            let data =  [
                                { value: 34.72, name: '电子商务' },
                                { value: 21.39, name: '农产品' },
                                { value: 23.61, name: '服装' },
                                { value: 13.33, name: '电子产品' },
                                { value: 6.95, name: '其他' }
                            ];
                            let tarValue;
                            for (let i = 0; i < data.length; i++) {
                            if (data[i].name === name) {
                                tarValue = data[i].value;
                            }
                            }
                            return name  + '     '+ tarValue+ '%';
                        }
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['40%', '70%'],
                            center: ['25%', '50%'],
                            avoidLabelOverlap: false,
                            roseType: 'radius',
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                              itemStyle: {
                                borderRadius: 5
                            },
                            data: [
                                { value: 34.72, name: '电子商务' },
                                { value: 21.39, name: '农产品' },
                                { value: 23.61, name: '服装' },
                                { value: 13.33, name: '电子产品' },
                                { value: 6.95, name: '其他' }
                            ]
                        }
                    ],
                    // graphic: {
                    //     id:'image1',
                    //     elements:[
                    //         {
                    //           type: 'image', // 图形元素类型
                    //           z: 40,  // 层叠
                    //           style: {
                    //             image: require('@/assets/img/echarts/nQuan.png'),
                    //             width: 69,
                    //             height: 69
                    //         },
                    //         left: '16%',
                    //         top: 'middle'
                    //     },
                    //      {
                    //           type: 'image', // 图形元素类型
                    //         //   z: 40,  // 层叠
                    //           style: {
                    //             image: require('@/assets/img/echarts/wquan.png'),
                    //             width: 124,
                    //             height: 124
                    //         },
                    //         left: '8%',
                    //         top: 'middle'
                    //     }
                    //     ]
                    // }
                },
            }
        },
        mounted() {
            this.brokenChart = this.$echarts.init(this.$refs.brokenYChart)
            this.brokenChart.setOption(this.brokenOptions)
            window.addEventListener('resize', () => {
            setTimeout(()=>{
              this.brokenChart.resize()
              })
            })
        }
    }
</script>