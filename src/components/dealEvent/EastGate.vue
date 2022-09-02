<template>
  <div
    class="containers"
    id="EastGate"
    v-show="$store.state.DigitalTwin.eastGateShow"
  >
    <closeToolVue @click.native="changeShow"></closeToolVue>
    <EventDetailVue
      :changeShow="changeShow"
      :index="0"
      :listData="listData"
    ></EventDetailVue>
  </div>
</template>
<script>
import EventDetailVue from "./EventDetail.vue";
import closeToolVue from "../closeTool.vue";
export default {
  components: {
    EventDetailVue,
    closeToolVue,
  },
  methods: {
    changeShow() {
      this.$store.commit("DigitalTwin/changeEastGateShow", false);
    },
    // hiddenContainer(){
    //   this.$store.commit("DigitalTwin/changeEastGateShow", false);
    // }
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
          content: "企业东门1号口...",
        },
        {
          title: "报警时间",
          content: "2022.08.01 16:22:02",
        },
        {
          title: "当前状态",
          content: "报警中",
        },
      ],
    };
  },
  mounted() {
    let time = new Date().format("hh");
    let date = new Date().format("yyyy.MM.dd");
    this.listData[2].content = `${date} ${time - 1}:47:32`;
  },
};
</script>
<style lang="less" scoped>
.containers {
  position: absolute;
  width: 38rem;
}
</style>
