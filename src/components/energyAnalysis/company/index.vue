<template>
  <div
      class="company-analysis"
      id="companyAnalysis"
      v-show="$store.state.DigitalTwin.companyAnalysisShow"
  >
    <titleToolVue
        :title="title"
        :iconPath="iconPath"
        :type="'companyAnalysisShow'"
    ></titleToolVue>
    <companyContent :tableHead="tableHead" :tableData="tableData"></companyContent>
  </div>
</template>
<script>
import companyContent from "./content.vue";
import titleToolVue from "../../titleTool.vue";
export default {
  components: {
    companyContent,
    titleToolVue,
  },
  data() {
    return {
      title: "企业分析",
      iconPath: require("../../../assets/img/energy/company_icon.png"),
      tableData: [
        {
          active: "设备采购",
          content: "采购设备多台",
          with: "耗能",
        },
        {
          active: "2021年终大会",
          content: "年会准备",
          with: "耗能",
        },
        {
          active: "员工福利",
          content: "端午节礼品发放",
          with: "无耗能",
        },
        {
          active: "KFC周年庆",
          content: "周年庆活动举办",
          with: "耗能",
        },
      ],
      tableHead: ["活动", "内容", "人员关联性"],
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.company-analysis {
  // width: 360px;
  background: url("../../../assets/img/energy/bj.png") no-repeat;
  background-size: 100% 100%;
  padding: 14px;
  // height: 192px;
  line-height: 100%;
  position: absolute;
  display: flex;
  left: 60%;
  top:calc(12% + 540px);
  flex-direction: column;
  z-index: 120;
  width: 420px;
  height: 220px;
}
</style>
