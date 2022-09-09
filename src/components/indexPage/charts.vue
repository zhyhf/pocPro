<template>
       <div class="panel-item-content" ref="brokenYChart"></div>
</template>
<script>
    export default {
        data() {
            return {
                    brokenChart: {},
                    brokenOptions: {
                    color:['#65E1DF','#139AFF','#33FEBF','#1563FF','#D1DEEE','red','blue'],
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
                            },
                             {
                                name: '电产品1',
                                icon: 'rect'
                            },
                            {
                                name: '其他1',
                                icon: 'rect'
                            }
                        ],
                        orient: 'vertical',  //垂直显示
                        right: '1%',
                        top: '16%',
                        align: 'left',
                        itemHeight: 6,
                        itemWidth: 6,
                        textStyle: {
                            color: '#fff',
                            fontSize: '12',
                            fontWeight: 300,
                        },
                        formatter: function (name) {  //图例后添加数值
                            let data =  [
                                { value: 34.72, name: '电子商务' },
                                { value: 21.39, name: '农产品' },
                                { value: 23.61, name: '服装' },
                                { value: 13.33, name: '电子产品' },
                                { value: 6.95, name: '其他' },
                                { value: 1.95, name: '电产品1' },
                                { value: 4.95, name: '其他1' }
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
                            radius: ['53%', '70%'],
                            center: ['20%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                { value: 34.72, name: '电子商务' },
                                { value: 21.39, name: '农产品' },
                                { value: 23.61, name: '服装' },
                                { value: 13.33, name: '电子产品' },
                                { value: 6.95, name: '其他' },
                                { value: 3.33, name: '电产品1' },
                                { value: 1.95, name: '其他1' }
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
                                width: 62,
                                height: 62
                            },
                            left: '11%',
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
                            left: '5%',
                            top: 'middle'
                        }
                        ]
                    }
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