<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">园区安全</div>
        <div class="panel-item-body">
          <div class="panel-item-content industry-safety">
            <div
              class="safety-item"
              v-for="(item, index) in safetyArray"
              :key="index"
            >
              <div style="display: flex">
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <img
                    :src="item.pic"
                    class="pic"
                    @mouseenter.stop="mouseenterImage(index)"
                    @mouseleave.stop="mouseleaveImage(index)"
                    v-if="index === 0 || index === 2"
                  />
                  <div class="theme">{{ item.theme }}</div>
                  <div class="item-detail">
                      <dv-digital-flop :config="config['config' + (index + 1)]" style="width:6rem;height:1.7rem;"/>
                    <!-- <span class="item-value">{{ item.value }}</span> -->
                    <span class="item-unit">{{ item.unit }}</span>
                  </div>
                  <img :src="item.pic"  @mouseenter.stop="mouseenterImage(index)"
                    @mouseleave.stop="mouseleaveImage(index)" v-if="index === 1" class="pic" />
                </div>
                <div v-show="index===0" class="line"></div>
                <div v-show="index===1" class="lineInfo"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">企业资质分析</div>
        <div class="panel-item-body company-zzfx">
              <div class="zzImg">
               <div   
                v-for="(item, index) in imgArr"
               :key="index" >
                <img :src="deviceActiveNum === index ?item.new : item.old"  class="zzImg1"/>
              </div>
              </div>
              <div class="panel-item-contentZ" ref="outputChart"></div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">优质企业Top10</div>
        <div class="panel-item-body">
          <div class="panel-item-content intelligent-work">
             <dv-scroll-board :config="configTable" ref="scrollBoard" />
            <!-- <div
              class="intelligent-item"
              v-for="(item, index) in intelligentWork"
              :key="index"
            >
              <img :src="item.pic" class="intelligent-pic" />
              <div class="intelligent-detail">
                <div class="intelligent-theme">{{ item.theme }}</div>
                <div class="item-detail">
                  <span class="item-value">{{ item.value }}</span>
                  <span class="item-unit">{{ item.unit }}</span>
                </div>
              </div>
            </div> -->
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
        deviceActiveNum: 0,
        imgArr: [
          {
            new:require('@/assets/img/echarts/zzIMgLight1.png'),
            old:require("@/assets/img/echarts/zzIMg1.png")
          },
            {
            new:require('@/assets/img/echarts/zzIMgLight2.png'),
            old:require("@/assets/img/echarts/zzIMg2.png")
          },
            {
            new:require('@/assets/img/echarts/zzIMgLight3.png'),
            old:require("@/assets/img/echarts/zzIMg3.png")
          },
            {
            new:require('@/assets/img/echarts/zzIMgLight4.png'),
            old:require("@/assets/img/echarts/zzIMg4.png")
          }
        ],
        configTable:{
          header: ['企业名称', '高新人才数', '注册资本(亿元)'],
          data: [
            ['中东科技有限公司', '287', '345'],
            ['DXC Technology', '225', '298'],
            ['KFC', '219', '289'],
            ['温州才华智能网络', '203', '276'],
            ['龙湾农村商业银行', '195', '234']
          ],
          rowNum: 4,
          headerBGC: 'transparent',
          columnWidth: [120],
          align: ['center'],
          waitTime: 1000
      },
      outputChart: {},
      outputOptions: {
        tooltip: {
            trigger: "item",
            backgroundColor: 'rgba(0,0,0,0.65)',
            color: '#fff',
            textStyle:{
              color: '#fff',
              fontSize: '12px'
            },
            borderWidth: "0",
        },
        xAxis: {
          type: "category",
          data: ["能源", "工业", "农业", "医疗", "制造业","交通","信息化服务业"],
          axisLabel: {
            interval: 0,
              formatter: function (value) {
                var ret = "";//拼接加\n返回的类目项  
                var maxLength = 3;//每项显示文字个数  
                var valLength = value.length;//X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1)//如果类目项的文字大于4,  
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = "";//每次截取的字符串  
                        var start = i * maxLength;//开始截取的位置  
                        var end = start + maxLength;//结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                }
                else {
                    return value;
                }
            },
            textStyle: {
              color: "#C6CFCE",
            },
          },
        },
        yAxis: {
          name: "单位(家)",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#C6CFCE",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#C6CFCE",
            },
          },
        },
        grid: {
          left: 36,
          top: 34,
          right: 20,
          bottom: 33,
        },
        series: [
          {
            data: [20, 40, 16, 35, 30,39,48],
            type: "bar",
            barWidth: 15,
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
                      color: "rgba(2,247,183,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "rgba(2,247,183,0.5)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(2,247,183,1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                // label: {
                //   show: true,
                //   position: "top",
                //   textStyle: {
                //     color: "#fff",
                //     fontSize: 12,
                //   },
                // },
              },
            },
            animationDelay: function (idx) {
              return idx * 500;
            }
          },
        ],
         animationEasing: 'elasticOut',
         animationDelayUpdate: function (idx) {
          return idx * 200;
        }
      },
      safetyArray: [
        {
          pic: require("@/assets/img/monitor.png"),
          theme: "监控点位",
          value: "1650",
          unit: "个",
        },
        {
          pic: require("@/assets/img/monitor-area.png"),
          theme: "监控覆盖面积",
          value: "45542",
          unit: "m²",
        },
        {
          pic: require("@/assets/img/monitor-alert.png"),
          theme: "告警数量",
          value: "5625",
          unit: "个",
        },
      ],
      config: {
        config1: {
          number:[0],
          content:'{nt}',
          style: {
            fontSize: 18,
            fill: '#fff'
          },
          animationFrame: 80,
        },
        config2: {
          number:[0],
          content:'{nt}',
          style: {
            fontSize: 18,
            fill: '#fff'
          },
          animationFrame: 80,
        },
        config3: {
          number:[0],
          content:'{nt}',
          style: {
            fontSize: 18,
            fill: '#fff'
          },
         animationFrame: 80,
        }
      },
      partyArray: [
        {
          pic: require("@/assets/img/party-count.png"),
          theme: "党员数量",
          value: "260",
          unit: "个",
        },
        {
          pic: require("@/assets/img/event-count.png"),
          theme: "支部活动数",
          value: "7",
          unit: "个",
        },
        {
          pic: require("@/assets/img/party-detail.png"),
          theme: "党史资料",
          value: "1300",
          unit: "册",
        },
      ],
      intelligentWork: [
        {
          pic: require("../../assets/img/party-people.png"),
          theme: "党员人数(臻龙)",
          value: 39,
          unit: "个",
        },
        {
          pic: require("../../assets/img/party-meeting.png"),
          theme: "会议室数量",
          value: 8,
          unit: "个",
        },
        {
          pic: require("../../assets/img/party-receive.png"),
          theme: "接待批次",
          value: 142,
          unit: "次",
        },
        {
          pic: require("../../assets/img/party-check.png"),
          theme: "工单数量",
          value: 1507,
          unit: "个",
        },
      ],
      isHighLight: false,
      radarOptions: {
        radar: {
          center: ['50%', '52%'],
          axisName: {
            color: '#fff',
            padding: -5,
            fontSize: 10,
            formatter: (value, indicator) => {
              if (value === '创新能力和创业活跃度') return value
              const arr = value.split('')
              arr.splice(5, 0, '\n')
              return arr.join('')
            }
          },
          indicator: [
            { name: '创新能力和创业活跃度', max: 6500 },
            { name: '结构优化和产业价值链', max: 16000 },
            { name: '绿色发展和宜居包容性', max: 30000 },
            { name: '开放创新和国际竞争力', max: 38000 },
            { name: '综合质效和持续创新力', max: 52000 }
          ],
          splitLine: {
            lineStyle: {
              color: ['rgba(255, 255, 255, 0.4)']
            }
          },
          splitArea: {
            areaStyle: {
              color: ['transparent', 'rgba(255, 255, 255, 0.1)']
            }
          },
        },
        series: [
          {
            type: 'radar',
            symbol: 'image://http://localhost:8080/rardar-default.png',
            symbolSize: 50,
            data: [
              {
                value: [4200, 12000, 3800, 4100, 6700],
              }
            ],
            lineStyle: {
              color: '#38B7FD'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(0, 47, 74, 0.7)'},
                {offset: 1, color: 'rgba(0, 47, 74, 0.15)'}
              ]
    )
            }
          }
        ]
      }
    };
  },
  mounted() {
    // this.radarChart = this.$echarts.init(this.$refs.radarChart)
    // this.radarChart.setOption(this.radarOptions)
    // setInterval(() => {
    //   this.radarOptions.series[0].symbol = `image://http://localhost:8080/rardar-${this.isHighLight ? 'default' : 'active'}.png`
    //   this.isHighLight = !this.isHighLight
    //   this.radarChart.setOption(this.radarOptions)
    // }, 500)
     this.$nextTick(() => {
          this.outputChart = this.$echarts.init(this.$refs.outputChart);
          this.outputChart.setOption(this.outputOptions);
          window.addEventListener("resize", () => {
              this.outputChart.resize();
          });
      });
      setTimeout(() => {
          this.config.config1.number[0] = 1650
          this.config.config2.number[0] = 45542
          this.config.config3.number[0] = 5625
          this.config.config1 = {...this.config.config1}
          this.config.config2 = {...this.config.config2}
          this.config.config3 = {...this.config.config3}
      }, 1000)
      setInterval(() => {
      this.deviceActiveNum = (++this.deviceActiveNum) % 4
    }, 2000)
  },
  methods: {
    // 鼠标移入图片
    mouseenterImage(i){
      this.safetyArray.map((item,index)=>{
        if( i === 0 && index === i){
          item.pic = require("@/assets/img/monitorLight.png")
        }else if( i === 1 && index === i){
          item.pic = require("@/assets/img/monitorAreaLight.png")
        }else if( i === 2 && index === i){
          item.pic = require("@/assets/img/monitorAlertLight.png")
        }
      })
    },
    // 鼠标移出图片
    mouseleaveImage(){
       this.safetyArray = [
        {
          pic: require("@/assets/img/monitor.png"),
          theme: "监控点位",
          value: "1650",
          unit: "个",
        },
        {
          pic: require("@/assets/img/monitor-area.png"),
          theme: "监控覆盖面积",
          value: "45542",
          unit: "m²",
        },
        {
          pic: require("@/assets/img/monitor-alert.png"),
          theme: "告警数量",
          value: "5625",
          unit: "个",
        },
      ]
    }
  }
};
</script>
<style scoped lang="less">
 /deep/ .dv-scroll-board {
    .header{
      color: rgba(255,255,255,0.64) !important;
      font-weight: 400;
      font-size: 12px !important;
    }
}
</style>
<style scoped lang="less">
@import "../../style/panel.less";
.zzImg{ 
  display: flex;
  justify-content: space-between;
  margin:6px 12px 13px 12px;
  height: 100px;
}
.zzImg1{
  width: 100%;
  margin-left: 3px;
}
.panel-item-contentZ{
    width: 100%;
     height: 180px;
    // height: calc(100% - 4vh - 100px);
    margin-top: 8px;
}
.company-zzfx{
   height: 300px;
}
.industry-safety {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .safety-item {
    width: 32%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 58px;
    }
    .pic {
      display: block;
      animation: myFloat 4s ease-in-out infinite;
    }
    .theme {
      margin-top: 10px;
      width: 100%;
      font-size: 12px;
      color: #c6cfce;
      text-align: center;
    }
    .item-detail {
      margin-top: 6px;
      margin-left: 6px;
      display: flex;
      .item-value {
        font-size: 19px;
        font-weight: 700;
        color: #fff;
      }
      .item-unit {
        margin-left: 4px;
        font-size: 12px;
        color: #c6cfce;
      }
    }
    .line {
      width: 1px;
      height: 64px;
      opacity: 0.4;
      border: 1px dashed #ffffff;
      position: absolute;
      left: 33%;
      top: 30%;
    }
    .lineInfo {
      width: 1px;
      height: 64px;
      opacity: 0.4;
      border: 1px dashed #ffffff;
      position: absolute;
      left: 66%;
      top: 30%;
    }
  }
}
.party-manage {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .party-item {
    width: 32%;
    box-sizing: border-box;
    background-image: url("../../assets/img/party-manage-bg.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .pic {
      display: block;
    }
    .theme {
      margin-top: 10px;
      width: 100%;
      font-size: 12px;
      color: #c6cfce;
      text-align: center;
    }
    .item-detail {
      margin-top: 6px;
      margin-left: 6px;
      display: flex;
      .item-value {
        font-size: 19px;
        font-weight: 700;
        color: #fff;
      }
      .item-unit {
        margin-left: 4px;
        font-size: 12px;
        color: #c6cfce;
      }
    }
  }
}
.intelligent-work {
  padding-right: 8px !important;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 10px 1%;
  justify-content: space-around;
  .intelligent-item:nth-child(2n - 1) {
    width: 51%;
    padding-left: 12px;
  }
  .intelligent-item:nth-child(2n) {
    padding-right: -20px;
  }
  .intelligent-item {
    width: 49%;
    height: 40%;
    margin-top: 15px;
    padding-left: 5px;
    display: flex;
    align-items: center;
    /*justify-content: center;*/
    .intelligent-pic {
      margin-left: -4%;
      width: 55px;
      height: 55px;
    }
    .intelligent-detail {
      display: flex;
      flex-direction: column;
      padding-left: 8px;
      .intelligent-theme {
        font-size: 12px;
        color: #c6cfce;
      }
      .item-detail {
        padding-left: 2px;
        display: flex;
        .item-value {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
        }
        .item-unit {
          margin-left: 4px;
          font-size: 12px;
          color: #c6cfce;
        }
      }
      .item-detail {
        padding-left: 2px;
        display: flex;
        .item-value {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
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
  @keyframes myFloat {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes scaleIn {
    0% {
      transform: scale(0.9)
    }
    50% {
      transform: scale(1.1)
    }
    100% {
      transform: scale(1);
    }
  }
</style>
