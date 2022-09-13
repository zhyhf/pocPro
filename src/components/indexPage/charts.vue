<template>
       <div class="panel-item-content" ref="brokenYChart"></div>
</template>
<script>
    export default {
        data() {
            return {
                    brokenChart: {},
                    brokenOptions: {
                    color:['#65E1DF','#33FEBF','#D1DEEE','#FFAE76','#139AFF','#8F3AFF','#1563FF','#FFD265'],
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
                                name: '物业',
                                icon: 'rect'
                            },
                            {
                                name: '物流',
                                icon: 'rect'
                            },
                            {
                                name: '广告',
                                icon: 'rect'
                            },
                            {
                                name: '房地产',
                                icon: 'rect'
                            },
                             {
                                name: '保险',
                                icon: 'rect'
                            },
                            {
                                name: '人力资源',
                                icon: 'rect'
                            },
                            {
                                name: '策划',
                                icon: 'rect'
                            }
                        ],
                        orient: 'vertical',  //垂直显示
                        right: '1%',
                        top: '18%',
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
                                { value: 24.72, name: '电子商务' },
                                { value: 11.39, name: '物业' },
                                { value: 13.61, name: '物流' },
                                { value: 13.33, name: '广告' },
                                { value: 6.95, name: '房地产' },
                                { value: 10.95, name: '保险' },
                                { value: 14.91, name: '人力资源' },
                                { value: 13.33, name: '策划' }
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
                            radius: ['53%', '65%'],
                            center: ['15%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                { value: 24.72, name: '电子商务' },
                                { value: 11.39, name: '物业' },
                                { value: 13.61, name: '物流' },
                                { value: 13.33, name: '广告' },
                                { value: 6.95, name: '房地产' },
                                { value: 10.95, name: '保险' },
                                { value: 14.95, name: '人力资源' },
                                { value: 13.33, name: '策划' }
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
                            left: '5.3%',
                            top: 'middle'
                         },
                         {
                              type: 'image', // 图形元素类型
                            //   z: 40,  // 层叠
                              style: {
                                image: require('@/assets/img/echarts/wquan.png'),
                                width: 92,
                                height: 92
                            },
                            left: '0.5%',
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
