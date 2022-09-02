<template>
  <div :id="tableid" class="road">
    <!-- <div class="closeTool"></div> -->
    <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
    <div class="road-box">
      <img src="@/assets/img/road.svg">
      <!-- <header class="road-name">B2园区中段道路状况</header>
      <footer>
        <div class="road-list">
          <span class="list-name">路面损毁</span>
          <span class="list-bar1">
            <el-progress class="bar" :percentage="20" :format="format"></el-progress>
          </span>
        </div>
        <div class="road-list">
          <span class="list-name">承压范围</span>
          <span class="list-bar2">
            <el-progress class="bar" :percentage="70" :format="format2"></el-progress>
          </span>
        </div>
      </footer> -->
    </div>
    <!-- <div class="road-line"></div>
    <div class="road-point"></div> -->
  </div>
</template>

<script>
import titleToolVue from "./titleTool.vue";
export default {
  name: "roadCondition",
  props: ["tableid"],
  components: {
    titleToolVue,
  },
    data() {
    return {
     title: "B2园区中段道路状况",
     iconPath: require("../assets/icon/flag.png"),
    }
    },
  methods: {
    format(percentage) {
      return percentage === 10 ? "满" : "";
    },
    format2(percentage) {
      return percentage === 10 ? "满" : "";
    },
  },
};
</script>

<style lang="less" scoped>
.road {
  width: 36.7rem;
  // height: 33.4rem;
  position: absolute;
   background: url(../assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  .road-box{
    padding: 16px;
  }
  .road-line {
    position: absolute;
    left: 1.2rem;
    width: 1.2rem;
    height: 10.8rem;
    border-right: 0.1rem solid #f1b80b;
  }
  .road-point {
    position: absolute;
    top: 28.6rem;
    left: 1rem;
    width: 2.8rem;
    height: 2.8rem;
    background-color: #ffdf4b;
    border-radius: 50%;
  }
}
.closeTool {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: url(../assets/icon/close.png) no-repeat;
  background-size: 100% 100%;
  z-index: 210;
}
</style>
