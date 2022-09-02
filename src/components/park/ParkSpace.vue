<template>
<div>
  <div class="detail flex-1">
    <!-- <closeToolVue @click.native="close"></closeToolVue> -->
    <div class="chart" :id="chartId">
      <div class="center">
        <span class="num">85</span>
        <span class="percent">%</span>
      </div>
    </div>
    <div class="flex-1 content">
      <div class="top">
        <img src="../../assets/icon/car.svg" alt="" />
        <div class="bold ">{{ totalNum - usedNum }}</div>
        <div class="top-distance enmptyPark">空余车位</div>
      </div>
      <div class="bottom">
        <div class="bottom-distance enmptyPark">已用车位</div>
        <div class="bold green bottom-distance">{{ usedNum }}</div>
        <img src="../../assets/icon/car-green.svg" alt="" />
      </div>
    </div>
    <!-- <div class="rightWaring" @click="handleShowEvent">
        <img src="../../assets/img/cameraImg.svg"  style="width: 60px;padding:6px">
        <div class="name">摄像头</div>
        <div class="num">550</div>
    </div> -->
  </div>
  <div>
    <el-divider />
       <div class="content-detail intelligent-work">
          <div class="intelligent-item0" @click="handleClick">
              <img src="../../assets/img/park1.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">停车场总数/个</div>
                <div class="num">4</div>
              </div>
          </div>
             <div class="intelligent-item1" @click="handleShowEvent">
              <img src="../../assets/img/park2.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">摄像头/个</div>
                <div class="num">550</div>
              </div>
          </div>
       </div>
         <div class="content-detail intelligent-work">
          <div class="intelligent-item3">
              <img src="../../assets/img/park3.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">烟感/个</div>
                <div class="num">280</div>
              </div>
          </div>
          <div class="intelligent-item3">
               <img src="../../assets/img/park4.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">充电桩/个</div>
                <div class="num">380</div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import closeToolVue from "../closeTool.vue";

import * as echarts from "echarts";
// let timer = null;
export default {
  props: ["chartId", "option"],
  components: {
    closeToolVue,
  },
  data() {
    return {
      show: false,
      showEvent:false,
      totalNum: 640,
      usedNum: 96,
      // vi: "$store.state.DigitalTwin.parkCamera",
    };
  },
  methods: {
    handleClick(){
      this.show = !this.show
      const weizhi = 
        {
          y: 27.976653,
          x: 120.726969,
          z: 42.88,
          heading: 231.9,
          pitch: -12,
          roll: 0.1,
       }
      if(this.show){
       $viewer.qtum.centerAt(weizhi);
       document.getElementsByClassName('intelligent-item0')[0].style.backgroundColor = '#38B7FD'
       document.getElementsByClassName('intelligent-item1')[0].style.backgroundColor = ''
       this.showEvent = false
       $viewer.entities.getById("parkAllList1")._show = true;
      $viewer.entities.getById(
              "parkListDetail"
          )._billboard._image._value = require("@/assets/icon/car-label.png");
      }else{
        document.getElementsByClassName('intelligent-item0')[0].style.backgroundColor = ''
        $viewer.entities.getById("parkAllList1")._show = false;
       $viewer.entities.getById(
              "parkListDetail"
          )._billboard._image._value = require("@/assets/icon/car-label-grey.png");
      }
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);
    },
    initialChart() {
      // 基于准备好的dom，初始化echarts实例
      let chartDom = echarts.init(document.getElementById(this.chartId));
      // 绘制图表
      chartDom.setOption(this.option);
    },
    close() {
      this.$store.commit("DigitalTwin/changeParkCamera", false);
    },
    // 展示事件
    handleShowEvent(){
      this.showEvent = !this.showEvent
      if(this.showEvent){
       document.getElementsByClassName('intelligent-item1')[0].style.backgroundColor = '#38B7FD'
       document.getElementsByClassName('intelligent-item0')[0].style.backgroundColor = ''
       this.$store.commit("DigitalTwin/changeParkEventListShow", true);
       this.show = false
      }else{
        document.getElementsByClassName('intelligent-item1')[0].style.backgroundColor = ''
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      }

      const weizhi = 
       {
          y: 27.976681,
          x: 120.727478,
          z: 42.45,
          heading: 231.9,
          pitch: -12,
          roll: 0.1,
       }
      $viewer.qtum.centerAt(weizhi);
    }
    // changeNum() {
    //   timer = setInterval(() => {
    //     this.usedNum += 1;
    //   }, 8000);
    // },
  },
  mounted() {
    // this.initialChart();
    // this.changeNum();
  },
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.intelligent-work {
      display: flex;
      .intelligent-item0,.intelligent-item1,.intelligent-item3{
          margin-left: 4px;
          padding-left: 5px;
          width: 150px;
          height: 52px;
          border-radius: 5px;
          display: flex;
          img{
            margin-top: 6px;
          }
          .contentTile{
            text-align: left;
            vertical-align: middle;
            margin: 12px 0px 12px 10px;
            .name{
             color: #fff;
             font-size: 14px;
            }
            .num{
               color: #fff;
               font-size: 21px;
               margin-top: 5px;
            }
          }
      }
      .intelligent-item0,.intelligent-item1{
         cursor: pointer;
      }
      .intelligent-item0:hover, .intelligent-item1:hover{
         background: rgba(56,183,253,0.2);
      }
       .intelligent-item1:active{
          background: #38B7FD;
          // background: rgba(56,183,253,0.2);
          cursor: pointer;
      }
  }
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  justify-content: space-between;
  .content{
    margin-top: 10px;
    margin-left: 12px;
  }
  .enmptyPark{
    opacity: 0.64;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 18px;
  }
  .rightWaring{
    margin-left: 16px;
    width: 70px;
    height:132px;
    background: #38B7FD;
    text-align: center;
    .name{
      font-size: 12px;
      font-weight: 400;
      text-align: right;
      color: #ffffff;
      line-height: 17px;
      text-align: center;
      margin-top: 8px;
    }
    .num{
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      line-height: 29px;
      margin-top: 12px;
    }
  }
  .chart {
    width: 9rem;
    height: 9rem;
    margin: auto 12px;
    background: url("../../assets/img/chart.svg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    .center {
      position: absolute;
      text-align: center;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .num {
        font-family: HelveticaNeue;
        font-size: 2.4rem;
        font-weight: bold;
      }
      .percent {
        font-size: 1.2rem;
      }
    }
  }
  .top {
    width: 172px;
    height: 51px;
    background: url("../../assets/img/park-top.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 2rem;
    .bold{
      margin-left: 4px;
    }
    img {
       height: 70%;
       margin-top: 20px;
    }
  }
  .bottom {
    width: 172px;
    height: 51px;
    background: url("../../assets/img/park-bottom.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 2rem;
    img {
        height: 70%;
        margin-bottom: 12px;
    }
  }
  .bold {
    font-size: 2.4rem;
    font-weight: bold;
    color: #38b7fd;
  }
  .green {
    color: #20f09d;
  }
  .bottom-distance {
    align-self: auto;
  }
  // .line {
  //   width: 1.5rem;
  //   height: 30rem;
  //   background: url("../../assets/img/line.svg") no-repeat;
  //   background-size: 100% 100%;
  //   position: absolute;
  //   top: 14rem;
  //   left: 0;
  // }
}
.closeTool {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  background: url(../../assets/icon/close.png) no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
