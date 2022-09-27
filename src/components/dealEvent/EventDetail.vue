<template>
  <div
    class="park-space bg index"
    v-show="$store.state.DigitalTwin.eventDetailShow"
  >
    <!-- <div class="closeTool" @click="showEventContainer"></div> -->
    <titleToolVue
      :title="title"
      :iconPath="iconPath"
      :type="'eventListDetail'"
    ></titleToolVue>
    <!-- <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue> -->
    <div class="video-group flex">
      <div class="screen-item flex-column">
        <div>报警截图</div>
        <img src="../../assets/img/peopleV.png" alt="" />
      </div>
      <div class="video-item flex-column">
        <div>报警回放</div>
        <video src="static/video/video.mp4" controls muted></video>
      </div>
    </div>
    <div class="text-group flex-column">
      <div class="text-item flex">
        <div class="text-title">报警事件</div>
        <div class="text-content">
          {{ $store.state.DigitalTwin.eventDetailList.name }}
        </div>
      </div>
      <div class="text-item flex">
        <div class="text-title">报警位置</div>
        <div class="text-content">
          {{ $store.state.DigitalTwin.eventDetailList.position }}
        </div>
      </div>
      <div class="text-item flex">
        <div class="text-title">报警时间</div>
        <div class="text-content">
          {{ $store.state.DigitalTwin.eventDetailList.time }}
        </div>
      </div>
      <div class="text-item flex">
        <div class="text-title">当前状态</div>
        <div class="text-content">{{ status }}</div>
      </div>
    </div>
    <div class="btn-group">
      <div :class="['btn-item deal',{activeDeal:mark===1}]"         @click="resolve">忽略</div>
      <div :class="['btn-item ignore',{activeIgnore:mark===2}]"     @click="cancel">处理</div>
      <div :class="['btn-item analysis',{activeAnalysis:mark===3}]" @click="analysis">分析</div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "../titleTool.vue";
export default {
  props: {
    changeShow: {
      type: Function,
      default: () => {
        return Function;
      },
    },
    index: {
      type: Number,
    },
  },
  components: {
    titleToolVue,
  },
  data() {
    return {
      mark:0,
      listData: [
        {
          title: "报警事件",
          content: "吸烟",
        },
        {
          title: "报警位置",
          content: "企业东门1号口",
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
      s: "$store.state.DigitalTwin.eventShow",
      title: "查看详情",
      iconPath: require("../../assets/icon/event-detail.svg"),
      textArr: [
        {
          title: "报警事件",
          content: "吸烟",
        },
        {
          title: "报警位置",
          content: "企业东南门1号口企业东南门1号口...",
        },
        {
          title: "报警时间",
          content: "2022.08.08 16:20:45",
        },
        {
          title: "当前状态",
          content: "报警中",
        },
      ],
    };
  },
  computed: {
    status: {
      get() {
        return this.$store.state.DigitalTwin.eventDetailList.status;
      },
      set(v) {
        // this.countData = v
      },
    },
  },
  created() {
    this.status =
      this.$store.state.DigitalTwin.eventDetailList &&
      this.$store.state.DigitalTwin.eventDetailList.status;
  },
  methods: {
    // 分析
    analysis() {
      this.mark=3
      //隐藏预警事件列表
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      // 显示具体分析详情 --
      //周围环境
      this.$store.commit("DigitalTwin/changeEnvironmentShow", true);
      // 周围资料1
      this.$store.commit("DigitalTwin/changeData1ComShow", true);
      // 周围资料2
      this.$store.commit("DigitalTwin/changeData2ComShow", true);
      // 分析结果
      this.$store.commit("DigitalTwin/changeAnalyseShow", true);
    },
    resolve() {
      this.mark=1
      this.changeShow();
      this.status = "已忽略";
      this.$store.state.DigitalTwin.eventDetailList.status = "已忽略";
      if (this.index === 0) {
        this.$store.commit("DigitalTwin/changeEastGateWarning", false);
      } else if (this.index === 1) {
        this.$store.commit("DigitalTwin/changeSouthGateWarning", false);
      } else {
        this.$store.commit("DigitalTwin/changeSecondFloorWarning", false);
      }
    },
    cancel() {
      this.mark=2
      this.changeShow();
      this.status = "已处理";
      this.$store.state.DigitalTwin.eventDetailList.status = "已处理";
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.park-space {
  width: 305px;
  // height: 300px;
  position: absolute;
  bottom:30%;
  left: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  .title {
    padding-left: 11px;
  }
  .closeTool {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0.9rem;
    right: 0.7rem;
    background: url(../../assets/icon/close.png) no-repeat;
    background-size: 100% 100%;
    z-index: 210;
  }
  .video-group {
    width: 100%;
    height: 40%;
    font-size: 1.5rem;
    .video-item {
      width: 50%;
      margin: 0.5rem;

      video {
        width: 100%;
        height: 100%;
      }
    }
    .screen-item {
      width: 50%;
      margin: 0.5rem;
      justify-content: space-between;
      img {
        width: 100%;
        height: 77%;
        bottom: 0;
      }
    }
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .text-group {
    width: 100%;
    margin: 1rem 0;

    .text-item {
      height: 2rem;
      line-height: 2rem;
      margin: 0.5rem 0;
    }
    .text-title {
      width: 30%;
      background-color: #38b7fd;
      text-align: center;
    }
    .text-content {
      // width: 60%;
      flex: 1;
      text-align: left;
      background-color: #133a5c;
      padding-left: 1rem;
    }
  }

  .btn-group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    .btn-item {
      width: 100%;
      height: 28px;
      border-radius: 3px;
      font-size: 16px;
      text-align: center;
      line-height: 28px;
      cursor: pointer;
    }
    .deal {
      color: #38b7fd;
      border: 1px solid #38b7fd;
    }
    .activeDeal{
      color: #fff;
      border: 1px solid #fff;
      background-color: #38b7fd;
    }
    .ignore {
      color: #38b7fd;
      border: 1px solid #38b7fd;
      // background-color: #38b7fd;
      margin-left: 6px;
    }
    .activeIgnore{
      color:#fff;
      border: 1px solid #38b7fd;
      background-color: #38b7fd;
      margin-left: 6px;
    }
    .analysis {
      color: #38b7fd;
      border: 1px solid #38b7fd;
      border-radius: 2px;
      margin-left: 6px;
    }
    .activeAnalysis{
      background-color: #38b7fd;
      color:#fff;
      border: 1px solid #38b7fd;
      border-radius: 2px;
      margin-left: 6px;
    }
  }
}
//进度条
video::-webkit-media-controls-timeline {
  display: none;
}
//观看的当前时间
video::-webkit-media-controls-current-time-display {
  display: none;
}
//剩余时间
video::-webkit-media-controls-time-remaining-display {
  display: none;
}
//音量按钮
video::-webkit-media-controls-mute-button {
  display: none;
}
video::-webkit-media-controls-toggle-closed-captions-button {
  display: none;
}
//音量的控制条
video::-webkit-media-controls-volume-slider {
  display: none;
}
//全屏按钮
video::-webkit-media-controls-fullscreen-button {
  display: none;
}
</style>
