<template>
  <div class="container" id="SouthGate" v-show="$store.state.DigitalTwin.southGateShow">
    <EventDetailVue
      :changeShow="changeShow"
      :index="1"
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
      this.$store.commit("DigitalTwin/changeSouthGateShow", false);
    },
  },
  data() {
    return {
      listData: [
        {
          title: "报警事件",
          content: "打架",
        },
        {
          title: "报警位置",
          content: "企业南门2号口...",
        },
        {
          title: "报警时间",
          content: "2022.08.05 10:34:59",
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
