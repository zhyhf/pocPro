v
<template>
  <div :id="tableid" v-show="isShow">
    <InfoTemplateVue :inputData="info"></InfoTemplateVue>
  </div>
</template>
<script>
import InfoTemplateVue from "./InfoTemplate.vue";
export default {
  props: ["tableid", "isShow"],
  data() {
    return {
      info: {
        title: "会议室管理",
        data: [
          "地址：C区2栋402",
          "负责人电话：15984786315",
          "预定状态：已被预定",
          "参会人数：30人",
          "预定时间：12/30 13:00-12/31 14:00",
        ],
      },
    };
  },
  components: {
    InfoTemplateVue,
  },
};
</script>
<style lang="less" scoped>
.box-container {
  left: 320px;
  position: absolute;
}
</style>
