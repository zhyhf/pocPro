<template>
  <div class="title">
    <img v-show="iconPath" :src="iconPath" class="icon" />
    <div class="text">{{ title }}</div>
    <div class="closeTool" @click="showEventContainer"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "iconPath", "type"],
  components: {},
  data() {
    return {};
  },
  methods: {
    showEventContainer() {
      if(this.type === 'parkShow') {
        // 智慧停车
        this.$store.commit("DigitalTwin/changeParkShow", false);
      }else if(this.type === 'parkEventList') {
        // 智慧停车 - 摄像头
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
        this.$bus.$emit("closeChangeStyle");
      }else if(this.type === 'parkEventDetail') {
        // 智慧停车 - 摄像头实时监控
        this.$bus.$emit("closeCameraStyle");
        this.$store.commit("DigitalTwin/changeParkEventDetail", false);
      }
      else if(this.type === 'EnterPriseShow') {
        // 北航大厦
        this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
      } else if(this.type === 'eventContainer') {
        // 北航大厦 楼栋入驻信息
        this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
      } else if(this.type === 'eventListShow') {
        // 预警事件
        this.$store.commit("DigitalTwin/changeEventShow", false);
        this.$store.commit("DigitalTwin/changeEventListShow", false);
        this.$store.commit("DigitalTwin/changeCheckBtnNum", 0);
      }else if(this.type === 'eventListDetail' ){
         // 预警事件详情
         this.$store.commit("DigitalTwin/changeEventDetailShow", false);
      }else if(this.type === 'dataAnalysisShow' ){
        // KFC数据分析
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", false);
      }else if(this.type === 'energyAnalysisShow' ){
        // 能源分析
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", false);
      }else if(this.type === 'envAnalysisShow' ){
        // 环境分析
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", false);
      }else if(this.type === 'companyAnalysisShow' ){
        // 企业分析
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", false);
      }else if(this.type === 'environment'){
         // 报警事件 - 周围环境分析
         this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
      }else if(this.type === 'dataComponet1'){
         // 报警事件 - 周围资料1
         this.$store.commit("DigitalTwin/changeData1ComShow", false);
      }else if(this.type === 'dataComponet2'){
         // 报警事件 - 周围资料2
         this.$store.commit("DigitalTwin/changeData2ComShow", false);
      }else if(this.type === 'analyseCom'){
         // 报警事件 - 分析结果
         this.$store.commit("DigitalTwin/changeAnalyseShow", false);
      }
    },
  },
};
</script>

<style scoped lang="less">
.title {
  width: 100%;
  height:2.5rem;
  line-height: 2.5rem;
  display: flex;
  .icon {
    width: 20px;
    height: 20px;
    margin: 3px 8px 0 0;
  }
  .text {
    font-size: 20px;
    color: #38b7fd;
  }
  .closeTool {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0.7rem;
    right: 0.6rem;
    background: url(../assets/icon/close.png) no-repeat;
    background-size: 100% 100%;
    z-index: 210;
  }
}
</style>
