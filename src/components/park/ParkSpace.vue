<template>
<div>
  <div class="detail flex-1">
    <closeToolVue @click.native="close"></closeToolVue>
    <div class="chart" :id="chartId">
      <div class="center">
        <span class="num">85</span>
        <span class="percent">%</span>
      </div>
    </div>
    <div class="flex-1 content">
      <div class="top">
        <!-- <img src="../../assets/icon/car-top.png" alt=""/> -->
        <div class="bold ">{{ $store.state.DigitalTwin.parkDetails.spareNum }}</div>
        <div class="top-distance enmptyPark">空余车位</div>
      </div>
      <div class="bottom">
        <div class="bottom-distance usedCar enmptyPark">已用车位</div>
        <div class="bold green bottom-distance">{{ $store.state.DigitalTwin.parkDetails.used }}</div>
        <!-- <img src="../../assets/icon/green-car.png" alt=""/> -->
      </div>
    </div>
  </div>
  <div>
    <!-- <el-divider /> -->
    <div class="line"></div>
       <div class="content-detail intelligent-work">
          <div class="intelligent-item0">
              <img src="../../assets/img/park3.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">烟感</div>
                <div class="num">{{$store.state.DigitalTwin.parkDetails.smogNum}} <span class="name">个</span></div>
              </div>
          </div>
             <div :class="[this.showEvent?'intelligent-item-bg':'intelligent-item1']" @click="handleShowEvent">
              <img src="../../assets/img/park2.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">摄像头</div>
                <div class="num">{{$store.state.DigitalTwin.parkDetails.camera}} <span class="name">个</span></div>
              </div>
          </div>
          <div class="intelligent-item3">
               <img src="../../assets/img/park4.svg"  style="width: 42px; height: 42px">
              <div class="contentTile">
                <div class="name">充电桩</div>
                <div class="num">{{$store.state.DigitalTwin.parkDetails.eleNum}} <span class="name">个</span></div>
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

  created(){
    this.$bus.$on("changeStyle",()=>{
        console.log('changeStyle')
        if(!this.$store.state.DigitalTwin.parkEventListShow){
          this.showEvent=false
        }
    });

    this.$bus.$on("closeChangeStyle",()=>{
        console.log('changeStylessssss');
        this.showEvent=false
    });

  },
  methods: {
    handleClick(){
      this.show = !this.show
      const weizhi = 
        {
          y: 33.948273,
          x: 118.341745,
          z: 490.37,
          heading: 0.3,
          pitch: -28.7,
          roll: 360,
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
   let points=['parkPosition1Icon','parkPosition2Icon','parkPosition3Icon',
              'parkPosition4Icon','parkPosition5Icon',
              'parkPosition6Icon']
        points.map(item=>{
        console.log('itemmm',item);
        $viewer.entities.getById(item)._show=true
       })
      this.$store.commit("DigitalTwin/changeParkShow", false);
      console.log('6736246326453264532645326');
      this.$store.commit("DigitalTwin/changeParkCamera", false);
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);
      // 关闭摄像头列表
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
    },

    // 展示事件
    handleShowEvent(){
      this.showEvent = !this.showEvent
      if(this.showEvent){
       this.$store.commit("DigitalTwin/changeParkEventListShow", true);
       this.show = false
      }else{
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      }
      const weizhi = 
       {
          y: 33.948273,
          x: 118.341745,
          z: 490.37,
          heading: 0.3,
          pitch: -28.7,
          roll: 360,
       }
      $viewer.qtum.centerAt(weizhi);
    }
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
.line{
  height: 1px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-top:1px dotted lightgrey ;
}
.intelligent-work {
      display: flex;
      margin-bottom: 10px;
      // .intelligent-item-bg{
      //   background-color:#38B7FD;
      // }
      .intelligent-item-bg{
          cursor: pointer;
          margin-left: 4px;
          padding-left: 5px;
          width: 160px;
          height: 62px;
          border-radius: 5px;
          display: flex;
          background-color:#38B7FD;
          img{
            margin-top: 6px;
          }
          .contentTile{
            text-align: left;
            vertical-align: middle;
            margin: 12px 0px 12px 10px;
            .name{
              color: lightgrey;
            // color: #fff;
             font-size: 14px;
            }
            .num{
               color: #fff;
               font-size: 21px;
               margin-top: 5px;
            }
          }
      }
      .intelligent-item0,.intelligent-item1,.intelligent-item3{
          margin-left: 4px;
          padding-left: 5px;
          width: 160px;
          height: 62px;
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
    // padding-bottom:20px;
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
    width: 8.6rem;
    height: 8.6rem;
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
    width: 95%;
    height: 51px;
    background: url("../../assets/icon/car-top.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    // justify-content: space-evenly;
    align-items: center;
    padding-bottom: 1rem;
    .bold{
    //height: 35px;
     margin-left: 155px;
    // line-height: 35px;
      margin-right: 4PX;
    }
    img {
       height: 70%;
       margin-top: 10PX;
    }
  }
  .bottom {
    width: 95%;
    height: 51px;
    background: url("../../assets/icon/green-car.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    //justify-content: space-evenly;
    align-items: center;
    padding-top: 1rem;
    margin-top: -10px;
    img {
        height: 70%;
        margin-bottom: 12px;
    }
  }
  .bold {
    font-size: 2rem;
    font-weight: bold;
    color: #38b7fd;
  }
  .green {
    color: #20f09d;
  }
  .bottom-distance {
    align-self: auto;
    // margin-left: 150px;
  }
  .usedCar{
    margin-left: 100px;
    padding-right:5px;
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
