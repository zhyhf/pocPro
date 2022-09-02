<template>
  <div
    class="container"
    id="SecondFloor"
    v-show="$store.state.DigitalTwin.secondFloorShow"
  >
    <EventDetailVue
      :changeShow="changeShow"
      :index="2"
      :listData="listData"
    ></EventDetailVue>
  </div>
</template>
<script>
import EventDetailVue from "./EventDetail.vue";
export default {
  components: {
    EventDetailVue,
  },
  methods: {
    changeShow() {
      this.$store.commit("DigitalTwin/changeSecondFloorShow", false);
    },
  },
  data() {
    return {
      listData: [
        {
          title: "报警事件",
          content: "吸烟",
        },
        {
          title: "报警位置",
          content: "2楼办公区...",
        },
        {
          title: "报警时间",
          content: "2022.08.16 18:56:11",
        },
        {
          title: "当前状态",
          content: "报警中",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  width: 25%;
}
</style>
