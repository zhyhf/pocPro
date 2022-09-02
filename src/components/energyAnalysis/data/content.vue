<template>
  <div>
    <div class="content-detail intelligent-work">
      <div class="intelligent-item0">
        <img src="../../../assets/img/energy/water.png" />
        <div class="contentTile">
          <div class="name">用水量同比</div>
          <div class="num">
            <span
              v-if="
                $store.state.DigitalTwin.energyInfo.waterYear.indexOf(
                  '-'
                ) !== -1
              "
              >{{ $store.state.DigitalTwin.energyInfo.waterYear
              }}<span class="iconRed">↓</span></span
            >
            <span v-else>
              {{ $store.state.DigitalTwin.energyInfo.waterYear
              }}<span class="iconGreen">↑</span>
            </span>
          </div>
        </div>
      </div>
      <div class="intelligent-item1">
        <img src="../../../assets/img/energy/water.png" />
        <div class="contentTile">
          <div class="name">用水量环比</div>
          <div class="num">
            <span
              v-if="
                $store.state.DigitalTwin.energyInfo.waterMonth.indexOf(
                  '-'
                ) !== -1
              "
              >{{ $store.state.DigitalTwin.energyInfo.waterMonth
              }}<span class="iconRed">↓</span></span
            >
            <span v-else>
              {{ $store.state.DigitalTwin.energyInfo.waterMonth
              }}<span class="iconGreen">↑</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-detail intelligent-work">
      <div class="intelligent-item3">
        <img src="../../../assets/img/energy/electric.png" />
        <div class="contentTile">
          <div class="name">用电量同比</div>
          <div class="num">
            <span
              v-if="
                $store.state.DigitalTwin.energyInfo.electricYear.indexOf(
                  '-'
                ) !== -1
              "
              >{{ $store.state.DigitalTwin.energyInfo.electricYear
              }}<span class="iconRed">↓</span></span
            >
            <span v-else>
              {{ $store.state.DigitalTwin.energyInfo.electricYear
              }}<span class="iconGreen">↑</span>
            </span>
          </div>
        </div>
      </div>
      <div class="intelligent-item3">
        <img src="../../../assets/img/energy/electric.png" />
        <div class="contentTile">
          <div class="name">用电量环比</div>
          <div class="num">
            <span
              v-if="
                $store.state.DigitalTwin.energyInfo.electricMonth.indexOf(
                  '-'
                ) !== -1
              "
              >{{ $store.state.DigitalTwin.energyInfo.electricMonth
              }}<span class="iconRed">↓</span></span
            >
            <span v-else>
              {{ $store.state.DigitalTwin.energyInfo.electricMonth
              }}<span class="iconGreen">↑</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
// let timer = null;
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.intelligent-work {
  display: flex;
  padding: 10px;
  .intelligent-item0,
  .intelligent-item1,
  .intelligent-item3 {
    margin-left: 4px;
    padding-left: 5px;
    width: 150px;
    height: 52px;
    border-radius: 5px;
    display: flex;
    position: relative;
    .contentTile {
      position: absolute;
      top: 2px;
      left: 58px;
      .name {
        color: #fff;
        font-size: 12px;
      }
      .num {
        color: #fff;
        font-size: 14px;
        margin-top: 15px;
        margin-left: 5px;
        .iconRed {
          color: #ff4848;
          padding-left: 3px;
        }
        .iconGreen {
          color: #33ffc0;
          padding-left: 3px;
        }
      }
    }
  }
  .intelligent-item0,
  .intelligent-item1 {
    cursor: pointer;
  }
}
</style>
