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
                                name: '批发和零售',
                                icon: 'rect'
                            },
                            {
                                name: '信息技术服务',
                                icon: 'rect'
                            },
                            {
                                name: '租赁商务服务',
                                icon: 'rect'
                            },
                            {
                                name: '金融',
                                icon: 'rect'
                            },
                            {
                                name: '建筑',
                                icon: 'rect'
                            },
                            {
                                name: '物流运输',
                                icon: 'rect'
                            },
                            {
                                name: '科学研究',
                                icon: 'rect'
                            },
                            {
                                name: '金融业',
                                icon: 'rect'
                            },
                            {
                               name: '制造业',
                               icon: 'rect'
                            },
                            {
                               name: '公共设施管理',
                               icon: 'rect'
                            },
                            {
                               name: '文体娱乐',
                               icon: 'rect'
                            },
                            // {
                            //    name: '住宿餐饮',
                            //    icon: 'rect'
                            // },
                            {
                               name: '教育类',
                               icon: 'rect'
                            },
                            {
                               name: '房地产',
                               icon: 'rect'
                            },
                            ],
                        orient: 'vertical',  //垂直显示
                        right: '1%',
                        align: 'left',
                        itemHeight: 6,
                        itemWidth: 6,
                        textStyle: {
                            color: '#fff',
                            fontSize: '9',
                            fontWeight: 300,
                               overflow: 'ellipese'
                        },
                        formatter: function (name) {  //图例后添加数值
                            let data =  [
                                { value: 32.5, name: '批发和零售' },
                                { value: 22.2, name: '信息技术服务' },
                                { value: 21.2, name: '租赁商务服务' },
                                { value: 4.8, name: '金融' },
                                { value: 4.45, name: '建筑' },
                                { value: 3.08, name: '物流运输' },
                                { value: 2.73, name: '科学研究' },
                                { value: 2.4, name: '制造业' },
                                { value: 2.05, name: '公共设施管理' },
                                { value: 1.71, name: '文体娱乐' },
                                // { value: 0.68, name: '机械设备修理' },
                                // { value: 0.68, name: '住宿餐饮' },
                                { value: 0.68, name: '教育类' },
                                { value: 0.68, name: '房地产' }
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
                                   { value: 32.5, name: '批发和零售' },
                                   { value: 22.2, name: '信息技术服务' },
                                   { value: 21.2, name: '租赁商务服务' },
                                   { value: 4.8, name: '金融' },
                                   { value: 4.45, name: '建筑' },
                                   { value: 3.08, name: '物流运输' },
                                   { value: 2.73, name: '科学研究' },
                                   { value: 2.4, name: '制造业' },
                                   { value: 2.05, name: '公共设施管理' },
                                   { value: 1.71, name: '文体娱乐' },
                                   // { value: 0.68, name: '机械设备修理' },
                                   // { value: 0.68, name: '住宿餐饮' },
                                   { value: 0.68, name: '教育类' },
                                   { value: 0.68, name: '房地产' }
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
