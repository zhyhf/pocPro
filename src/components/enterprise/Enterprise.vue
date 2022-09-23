<template>
  <div
    id="Enterprise001"
    class="enterprise-detail"
    v-show="$store.state.DigitalTwin.EnterPriseDetailShow"
  >
    <InfoTemplateVue
      :val="$store.state.DigitalTwin.EnterPriseDetailType"
      :data="detailData"
      :tableHead="info.tableHead"
    ></InfoTemplateVue>
  </div>
</template>
<script>
import InfoTemplateVue from "./InfoTemplate.vue";
export default {
  data() {
    return {
      info: {
        tableHead: [
          "企业名称",
          "入驻类型",
          "联系人",
          "联系电话",
          "出租面积",
          "合约",
        ],
        data: [
          {
            name: "温州才华智能网络",
            type: "软件行业",
            contacts: "刘军",
            phone: "15651426987",
            area: "142.61㎡",
            contract: "2021.9-2024.9",
          },
          {
            name: "农业银行股份有限公司",
            type: "企业入驻",
            contacts: "张默",
            phone: "17546841475",
            area: "400㎡",
            contract: "2021.9-2024.9",
          },
          {
            name: "温州龙湾农村商业银行",
            type: "企业入驻",
            contacts: " 赵帅",
            phone: "18654124785",
            area: "363.92㎡",
            contract: "2021.9-2024.9",
          },
          // {
          //   name: "管理房",
          //   type: "管理",
          //   contacts: "李承浩",
          //   phone: "17562485247",
          //   area: "35.13㎡",
          //   contract: "2021.9-2024.9",
          // },
        ],
      },
    };
  },
  computed: {
    detailData() {
      const tableData = this.$store.state.DigitalTwin.selectedBuilding.tableData;
      const index = this.$store.state.DigitalTwin.selectedBuildingIndex
      return tableData[index].enterprise || []
    }
  },
  components: {
    InfoTemplateVue,
  },
};
</script>
<style lang="less" scoped>
.enterprise-detail {
  width: 650px;
  position: absolute;
  // background: url("../../assets/img/enterprise-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  top: 17.5%;
  left: calc(32.5% + 510px);
  transform: translateX(-50%);
  z-index: 103;
}
</style>
