<template>
  <div class="dark index">
    <div class="switchBtn index">
      <div class="tips" v-show="isLeftTipsShow">隐藏大屏</div>
      <div class="tips right-tips" v-show="isRightTipsShow">展示大屏</div>
      <img
        style="width: auto;"
        class="left-btn"
        :src="
          $store.state.DigitalTwin.largeScreenShow
            ? require('../assets/img/left-notchecked.svg')
            : require('../assets/img/left-checked.svg')
        "
        @click="close"
        @mouseenter="changeLeftTips"
        @mouseleave="changeLeftTips"
      />
      <img
        style="width: auto;"
        class="right-btn"
        :src="
          !$store.state.DigitalTwin.largeScreenShow
            ? require('../assets/img/right-notchecked.svg')
            : require('../assets/img/right-checked.svg')
        "
        @click="open"
        @mouseenter="changeRightTips"
        @mouseleave="changeRightTips"
      />
    </div>
    <div class="top">
      <div class="left-group">浙江省温州市龙湾区文昌创客小镇</div>
      <div class="name">文昌创客小镇</div>
      <div class="time">
        <div class="titleContent">
          <i class="iconfont icon-humidity" />
          <span>60%</span>
        </div>
         <div class="titleContent">
        <i class="iconfont icon-temperature" />
           <span>18°C</span>
        </div>
        <div class="titleContent">
        <i class="iconfont icon-airquality" />
           <span>优</span>
        </div>
        <div class="titleContent">
        <i class="iconfont icon-noise" />
           <span>60db</span>
        </div>
        <div class="now-date">{{ nowday }}</div>
        <div class="now-week">{{ nowWeek }}</div>
        <!-- <img class="icon" src="../assets/icon/weather.png" /> -->
        <div class="now-time">{{ nowTime }}</div>
      </div>
    </div>
  </div>
</template>
<script>
const days = ["天", "一", "二", "三", "四", "五", "六"]; // 星期数组
let icnow = new Date(); // 初始化时间
let interval; // 定义全局定时器，用于清除定时器
export default {
  data() {
    return {
      year: icnow.getFullYear(),
      month: icnow.getMonth() + 1,
      date: icnow.getDate(),
      day: icnow.getDay(),
      h: icnow.getHours(), //当前时(0-23)
      m: icnow.getMinutes(), //当前分(0-59)
      s: icnow.getSeconds(), //当前秒(0-59)
      closure: "closure",
      closureActive: "closureActive",
      isLeftTipsShow: false,
      isRightTipsShow: false,
    };
  },
  methods: {
    close() {
      if (this.$store.state.DigitalTwin.largeScreenShow) {
        this.$store.commit("DigitalTwin/changeLargeScreenShow", false);
      }
    },
    open() {
      if (!this.$store.state.DigitalTwin.largeScreenShow) {
        this.$store.commit("DigitalTwin/changeLargeScreenShow", true);
      }
    },
    changeLeftTips() {
      this.isLeftTipsShow = !this.isLeftTipsShow;
    },
    changeRightTips() {
      this.isRightTipsShow = !this.isRightTipsShow;
    },
  },
  computed: {
    nowday: function () {
      return `${this.year}.${this.month}.${this.date}`;
    },
    nowWeek: function () {
      return `星期${days[this.day]}`;
    },
    nowTime: function () {
      return `
        ${this.h < 10 ? '0' + this.h : this.h}:${this.m < 10 ? '0' + this.m : this.m}:${this.s < 10 ? '0' + this.s : this.s}
      `
    },
    closureObj() {
      return {};
    },
  },
  created() {
    interval = setInterval(() => {
      let icnow = new Date();
      this.year = icnow.getFullYear();
      this.month = icnow.getMonth() + 1;
      this.date = icnow.getDate();
      this.day = icnow.getDay();
      this.h = icnow.getHours();
      this.m = icnow.getMinutes(); //当前分(0-59)
      this.s = icnow.getSeconds(); //当前秒(0-59)
    }, 1000);
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(interval);
  },
};
</script>
<style lang="less" scoped>
.dark {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 25vh;
  background: url("../assets/img/header.png") no-repeat;
  background-size: 100% 100%;
  font-family: Segoe UI;
}
.switchBtn {
  line-height: 3rem;
  position: absolute;
  top: 10%;
  left: 27%;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  transition: all 0.5s ease-in-out;
  img {
    width: 8.7rem;
    height: 2.2rem;
  }
  .tips {
    width: 8.8rem;
    height: 3.6rem;
    border: 1px solid #38b7fd;
    position: absolute;
    top: 3.6rem;
    font-size: 1.4rem;

    font-weight: 700;
    text-align: center;
    color: #ffffff;
  }
  .right-tips {
    left: 8.8rem;
  }
}
.top {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -100;
  font-family: Helvetica Neue !important;
  font-weight: Bold !important;
  color: #fff;
  .name {
    font-size: 2rem;
    font-weight: normal;
    margin-top: 2vh;
    text-shadow: 5px 5px 5px #535353;
    letter-spacing: 5px;
  }
  .top-btn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;

    padding: 2px 5px;
    background: url(../assets/img/bg.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 20px;
  }
  .time {
    // width: 31%;
    position: absolute;
    top: 11%;
    right: 1vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgba(255, 255, 255, 0.64);
    .icon {
      width: 24px;
      height: 24px;
    }
    & > div {
      margin: 0 10px 0 6px;
    }
    .now-time {
      color: #fff;
    }
  }
  .left-group {
    color: rgba(255, 255, 255, 0.64);
    position: absolute;
    left: 2vw;
    top: 10%;
  }
}
.titleContent{
  display: inline-flex;
  .iconfont{
    color: rgba(255,255,255,0.64);
  }
  span{
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    color: #ffffff;
    line-height: 17px;
    margin-left: 3px;
    margin-top: 2px;
  }
}
</style>
