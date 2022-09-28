<template>
  <div class="park-space bg index"  v-show="$store.state.DigitalTwin.parkEventDetail">
   <titleToolVue :title="title" :iconPath="iconPath" type="parkEventDetail"></titleToolVue>
    <div class="video-group flex">
      <div class="video-item flex-column">
         <video
            class="videoContent myvideo"
            muted
            autoplay
            controlsList="nodownload noplaybackrate"
            controls
          ></video>
      </div>
    </div>
    <div class="text-group flex-column">
      <div
        class="text-item flex"
      >
        <div class="text-title">摄像头名称</div>
        <div class="text-content">{{ $store.state.DigitalTwin.parkDetailList.position}}</div>
      </div>
      <div
        class="text-item flex"
      >
        <div class="text-title">分布区域</div>
        <div class="text-content">{{ $store.state.DigitalTwin.parkDetailList.time}}</div>
      </div>
       <div
        class="text-item flex"
      >
        <div class="text-title">算法名称</div>
        <div class="text-content">{{ $store.state.DigitalTwin.parkDetailList.superName }}</div>
      </div>
      <div class="text-item flex">
        <div class="text-title">状态</div>
        <div class="text-content">{{ $store.state.DigitalTwin.parkDetailList.status }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "../titleTool.vue";
import flvjs from 'flv.js/src'
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
        player: null,
        listData: [
        {
          title: "摄像头名称",
          content: '22',
        },
        {
          title: "报警区域",
          content: "吸烟监测",
        },
        {
          title: "报警位置",
          content: "负一层28-B区",
        }
      ],
      s: "$store.state.DigitalTwin.eventShow",
      title: "实时监控",
      iconPath: require("../../assets/icon/cameraSvg.svg"),
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
  mounted(){
    console.log('dsdasdsad',this.$store.state.DigitalTwin.parkDetailList);
      const videoElement = document.querySelectorAll('.myvideo')[0]
      const url  = 'https://rtmp01open.ys7.com:9188/v3/openlive/J28106733_1_1.flv?expire=1678091049&id=422429536487223296&t=c36660de8ed3c3bd8f7b839d6072dd117badc89e7416ded4403f27074904599a&ev=100'
      this.createPlayer(videoElement, url)
  },
  methods: {
        // 创建关于flv的播放器
    createPlayer(videoElement, url) {
      const newUrl = url
      // 配置播放器的属性
      if (flvjs.isSupported()) {
        this.player = flvjs.createPlayer({
          type: 'flv',
          isLive: true,
          url: newUrl,
          hasAudio: false
        })
        this.player.attachMediaElement(videoElement)
        this.player.load()
        this.player.on(flvjs.Events.LOADING_COMPLETE, () => {
          console.log('EventsError网络导致的异常中断日志')
          // 重连
          this.createPlayer(videoElement, url)
        })
        this.player.on(flvjs.Events.ERROR, (errType, errDetail) => {
          if (errDetail === 'MediaMSEError') {
            // 重连
            this.createPlayer(videoElement, url)
          }
        })
        // this.player.on(flvjs.Events.MEDIA_SOURCE_CLOSE, () => {
        //   console.log('MEDIA_SOURCE_CLOSE')
        // })
        const playPromise = this.player.play()
        if (this.player && playPromise !== undefined) {
          playPromise.then(() => {
            this.player.play()
          }).catch(() => {})
        }
      }
    },
    resolve() {
      this.changeShow();
      if (this.index === 0) {
        this.$store.commit("DigitalTwin/changeEastGateWarning", false);
      } else if (this.index === 1) {
        this.$store.commit("DigitalTwin/changeSouthGateWarning", false);
      } else {
        this.$store.commit("DigitalTwin/changeSecondFloorWarning", false);
      }
    },
    cancel() {
      this.changeShow();
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.park-space {
  width: 262px;
  position: absolute;
  bottom: 10%;
  left: 51.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  .videoContent{
      width:100%;
      height:288px;
      object-fit: fill;
      border-radius: 4px;
      box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 20%);
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
    margin: 0.5rem 0;
    font-size: 12px;

    .text-item {
      height: 2rem;
      line-height: 2rem;
      margin: 0.5rem 0;
    }
    .text-title {
      width: 39%;
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
      height: 30px;
      border-radius: 3px;

      font-size: 18px;
      text-align: center;
      line-height: 30px;
      margin-right: 10px;
      cursor: pointer;
    }
    .deal {
      // background-color: tran;
      border: 1px solid #fff;
    }
    .ignore {
      background-color: #38b7fd;
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
// 全屏按钮
// video::-webkit-media-controls-fullscreen-button {
//   display: none;
// }
</style>
