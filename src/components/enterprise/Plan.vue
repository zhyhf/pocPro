<template>
  <div class="plan"  v-show="$store.state.DigitalTwin.planImgShow">
   <div class="title">
     <div>{{ "北航大厦--"+$store.state.DigitalTwin.EnterPriseDetailType+"层平面图" }}</div>
     <div class="closeTool" @click="showEventContainer"></div>
   </div>
  </div>
</template>
<script>
export default {
  methods: {
    showEventContainer() {
      this.$store.commit("DigitalTwin/changePlanImgShow", false);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.plan {
  position: absolute;
  background: url("../../assets/img/plan.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  top: 19%;
  left: 60.5%;
  transform: translateX(-50%);
  z-index: 103;
  height: 250px;
  width: 500px;
  .title{
    display: flex;
    font-size: 20px;
    .closeTool {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 0.4rem;
      right: 0.3rem;
      background: url(../../assets/icon/close.png) no-repeat;
      background-size: 100% 100%;
      z-index: 210;
    }
  }
}
</style>
