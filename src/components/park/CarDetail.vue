<template>
  <div :id="tableid" class="car">
    <DetailContainerVue :formData="arr" :title="title"></DetailContainerVue>
  </div>
</template>
<script>
import DetailContainerVue from "../DetailContainer.vue";
export default {
  props: ["tableid"],
  components: {
    DetailContainerVue,
  },
  data() {
    return {
      title: "车辆信息",
      arr: [
        {
          name: "车牌号",
          content: "浙C.66854",
        },
        {
          name: "车位号",
          content: "C302",
        },
        {
          name: "停车类型",
          content: "长期",
        },
        {
          name: "联系方式",
          content: "17364487651",
        },
        {
          name: "入场时间",
          content: "2022.01.05 09:23",
        },
        {
          name: "入场时长",
          content: "9小时18分",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.car {
  position: absolute;
}
</style>
