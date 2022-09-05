<template>
  <div class="conduit" v-show="$store.state.DigitalTwin.conduitShow">
    <div class="title">
      <div>北航大厦--管道图</div>
      <div class="closeTool" @click="showEventContainer"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showEventContainer() {
      this.$store.commit("DigitalTwin/changeConduitShow", false);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.conduit {
  position: absolute;
  background: url("../../assets/img/conduit.svg") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  top: calc(19% + 260px);
  left: 60.5%;
  transform: translateX(-50%);
  z-index: 103;
  height: 360px;
  width: 500px;
  .title{
    display: flex;
    margin-top: 1rem;
    font-size: 20px;
    .closeTool {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 2rem;
      right: 0.3rem;
      background: url(../../assets/icon/close.png) no-repeat;
      background-size: 100% 100%;
      z-index: 210;
    }
  }
}
</style>
