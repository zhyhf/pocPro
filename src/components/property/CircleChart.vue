<template>
    <div
        :id="id"
        class="chart"
    ></div>
</template>

<script>
export default {
    name: "CircleChart",
    props: {
        id: {
            type: String,
            required: true,
            default: ''
        },
        options: {
            type: Object,
            // required: true
        }
    },
    data() {
        return {
            chart: null,
            defaultOption: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    right: 10,
                    top: 'middle',
                    orient: 'vertical',
                    textStyle: {
                        color: '#fff'
                    },
                    itemWidth: 8,
                    itemHeight: 8,
                    icon: 'rect'
                },
                formatter: (name) => {
                    let html = `<!--<div style="display: flex; flex-direction: row"></div>-->`
                    return name + ' ' + this.defaultOption.series[0].data.find(item => item.name === name).value
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        center: ['35%', '50%'],
                        radius: ['50%', '80%'],
                        avoidLabelOverlap: false,
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            }
        }
    },
    created() {
        // this.defaultOptions.formatter
    },
    mounted() {
        const chartEl = document.getElementById(this.id)
        this.chart = this.$echarts.init(chartEl)
        this.chart.setOption(this.defaultOption)
        window.addEventListener('resize', () => {
            this.chart.resize()
        })
    }
}
</script>

<style scoped lang="less">
    .chart {
        width: 100%;
        height: 100%;
    }
</style>
