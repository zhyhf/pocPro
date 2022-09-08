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
                    v-if="index === 0 || index === 2"
                  />
                  <div class="theme">{{ item.theme }}</div>
                  <div class="item-detail">
                      <dv-digital-flop :config="config['config' + (index + 1)]" />
                    <!-- <span class="item-value">{{ item.value }}</span>
                    <span class="item-unit">{{ item.unit }}</span> -->
                  </div>
                  <img :src="item.pic" v-if="index === 1" class="pic" />
                </div>
                <div v-show="index===0" class="line"></div>
                <div v-show="index===1" class="lineInfo"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">党建管理</div>
        <div class="panel-item-body">
          <div class="panel-item-content party-manage">
            <div
              class="party-item"
              v-for="(item, index) in partyArray"
              :key="index"
            >
              <img :src="item.pic" class="pic" />
              <div class="theme">{{ item.theme }}</div>
              <div class="item-detail">
                <span class="item-value">{{ item.value }}</span>
                <span class="item-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">智慧办公</div>
        <div class="panel-item-body">
          <div class="panel-item-content intelligent-work">
            <div
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
            </div>
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
          content:'{nt}个',
          style: {
            fontSize: 20,
            fill: '#FFFFFF'
          },
          animationFrame: 80,
        },
        config2: {
          number:[0],
          content:'{nt}m²',
          style: {
            fontSize: 20,
            fill: '#FFFFFF'
          },
          animationFrame: 80,
        },
        config3: {
          number:[0],
          content:'{nt}个',
          style: {
            fontSize: 20,
            fill: '#FFFFFF'
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
    };
  },
    mounted() {
    setTimeout(() => {
      this.config.config1.number[0] = 1650
      this.config.config2.number[0] = 45542
      this.config.config3.number[0] = 5625
      this.config.config1 = {...this.config.config1}
      this.config.config2 = {...this.config.config2}
      this.config.config3 = {...this.config.config3}
    }, 1000)
    // setInterval( ()=>{
    //   this.power(360);
    // },8000);
    setInterval(() => {
      this.deviceActiveNum = (++this.deviceActiveNum) % 4
    }, 2000)
    this.$nextTick(() => {
      this.energyChart = this.$echarts.init(this.$refs.energyChart);
      this.energyChart.setOption(this.energyOptions);

      window.addEventListener("resize", () => {
        this.energyChart.resize();
      });
    });
  },
};
</script>

<style scoped lang="less">
@import "../../style/panel.less";
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
