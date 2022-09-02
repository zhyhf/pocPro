<template>
  <div class="data-analysis" id="dataAnalysis"  v-show="$store.state.DigitalTwin.dataAnalysisShow">
    <titleToolVue :title="$store.state.DigitalTwin.energyInfo.target+ '数据分析'" :iconPath="iconPath" :type="'dataAnalysisShow'"></titleToolVue>
    <DataContent v-if="Object.keys($store.state.DigitalTwin.energyInfo).length > 0"></DataContent>
  </div>
</template>
<script>
import DataContent from "./content.vue";
import titleToolVue from "../../titleTool.vue";
export default {
  components: {
    DataContent,
    titleToolVue,
  },
  data() {
    return {
      iconPath: require("../../../assets/img/energy/data_icon.png"),
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.data-analysis {
  // width: 360px;
  background: url("../../../assets/img/energy/bj.png") no-repeat;
  background-size: 100% 100%;
  padding: 14px;
  // height: 192px;
  line-height: 100%;
  position: absolute;
  display: flex;
  left: calc(60% - 370px);
  top: 12%;
  flex-direction: column;
  z-index: 120;
}
</style>
