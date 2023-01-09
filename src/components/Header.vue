<template>
  <div class="dark index">
    <div class="switchBtn index">
<!--      <div class="tips" v-show="isLeftTipsShow">隐藏大屏</div>-->
<!--      <div class="tips right-tips" v-show="isRightTipsShow">展示大屏</div>-->
      <img
            style="width: auto;"
            class="right-btn"
            :src="screenIcon"
            @click="switchScreen"
            @mouseenter="onMouseEnter('screenIcons')"
            @mouseleave="onMouseLeave('screenIcons')"
      />
        <img
            style="width: auto; margin-left: 10px"
            class="left-btn"
            :src="backIcon"
            @click="jumpToBackPlatform"
            @mouseenter="onMouseEnter('backIcons')"
            @mouseleave="onMouseLeave('backIcons')"
        />
    </div>
    <div class="top">
<!--      <div class="left-group">浙江省温州市龙湾区宿迁电商产业大脑</div>-->
      <div class="name">产业大脑平台</div>
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
          <div class="now-time" style="width: 63px">{{ nowTime }}</div>
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
      icons: {
        hide: {
          default: require('../assets/icon/header/hide.svg'),
          active: require('../assets/icon/header/hide-active.svg'),
          hover: require('../assets/icon/header/hide-hover.svg'),
          isHover: false
        },
        show: {
          default: require('../assets/icon/header/show.svg'),
          active: require('../assets/icon/header/show-active.svg'),
          hover: require('../assets/icon/header/show-hover.svg'),
          isHover: false
        }
      },
      screenIcons: {
          openHover: require('../assets/icon/open-hover.png'),
          openActive: require('../assets/icon/open-active.png'),
          closeHover: require('../assets/icon/close-hover.png'),
          closeActive: require('../assets/icon/close-active.png'),
          isHover: false
      },
      backIcons: {
          default: require('../assets/icon/back-default.png'),
          hover: require('../assets/icon/back-hover.png'),
          active: require('../assets/icon/back-active.png'),
          isHover: false,
          click: false
      }
    };
  },
  methods: {
    jumpToBackPlatform() {
        this.backIcons.click = true
        window.location.replace('http://180.101.119.122:30002/#/wel/index')
    },
    switchScreen() {
        this.backIcons.click = false
        if (this.$store.state.DigitalTwin.largeScreenShow) {
            this.$store.commit("DigitalTwin/changeLargeScreenShow", false)
        } else {
            this.$store.commit("DigitalTwin/changeLargeScreenShow", true)
        }
    },
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
    onMouseEnter(variable) {
        this[variable].isHover = true
      // if (type === 'hide') {
      //   this.isLeftTipsShow = !this.isLeftTipsShow
      //   this.icons.hide.isHover = true
      // } else {
      //   this.isRightTipsShow = !this.isRightTipsShow
      //   this.icons.show.isHover = true
      // }
    },
    onMouseLeave(variable) {
        this[variable].isHover = false
      // if (type === 'hide') {
      //   this.isLeftTipsShow = !this.isLeftTipsShow
      //   this.icons.hide.isHover = false
      // } else {
      //   this.isRightTipsShow = !this.isRightTipsShow
      //   this.icons.show.isHover = false
      // }
    },
    // changeLeftTips() {
    //   this.isLeftTipsShow = !this.isLeftTipsShow;
    // },
    // changeRightTips() {
    //   this.isRightTipsShow = !this.isRightTipsShow;
    // },
  },
  computed: {
    backIcon: function() {
        return this.backIcons.isHover ? this.backIcons.hover : (this.backIcons.click ? this.backIcons.active : this.backIcons.default)
    },
    screenIcon: function() {
        return this.screenIcons.isHover ? (
            !this.$store.state.DigitalTwin.largeScreenShow ? this.screenIcons.openHover : this.screenIcons.closeHover
        ) : (!this.$store.state.DigitalTwin.largeScreenShow ?  this.screenIcons.openActive : this.screenIcons.closeActive)
    },
    hideIcons: function() {
     return this.icons.hide.isHover
              ? this.icons.hide.hover
              : (this.$store.state.DigitalTwin.largeScreenShow ? this.icons.hide.default : this.icons.hide.active)
    },
    showIcons: function() {
      return this.icons.show.isHover
              ? this.icons.show.hover
              : (!this.$store.state.DigitalTwin.largeScreenShow ? this.icons.show.default : this.icons.show.active)
    },
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
  top: 13%;
  left: 80px;
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
    left: 9rem;
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
