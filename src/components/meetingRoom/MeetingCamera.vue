<template>
  <div id="MeetingCamera" v-show="$store.state.DigitalTwin.meetingShow">
    <div class="park-space">
      <titleToolVue :title="title" :iconPath="iconPath"></titleToolVue>
      <!-- <div class="closeTool" @click="closeList"></div> -->
      <!-- <closeToolVue @click.native="closeList"></closeToolVue> -->
      <div class="room-detail flex flex-1">
        <div class="room-content">
          <div class="item flex" v-for="(item, index) in roomArr" :key="index">
            <div class="room-name flex">
              <img src="../../assets/icon/meeting-room.svg" alt="" />
              <span @click="getRoomName(item + (index + 1))">{{
                item + (index + 1)
              }}</span>
            </div>
            <div class="room-status">在使用</div>
          </div>
        </div>
        <div class="room-content">
          <div class="item flex" v-for="(item, index) in roomArr" :key="index">
            <div class="room-name flex">
              <img src="../../assets/icon/meeting-room.svg" alt="" />
              <span @click="getRoomName(item + (index + 6))">{{
                item + (index + 6)
              }}</span>
            </div>
            <div class="room-status">在使用</div>
          </div>
        </div>
      </div>
    </div>
    <div class="room-info bg" v-show="roomShow">
      <div class="closeTool" @click="closeAll"></div>
      <!-- <closeToolVue @click.native="closeAll"></closeToolVue> -->
      <titleToolVue :title="infoTitle" :iconPath="iconPath"></titleToolVue>
      <!-- <div class=""> -->
      <div class="info-item flex" v-for="(item, index) in infoArr" :key="index">
        <span>{{ item.title }}</span
        >:
        <span>{{ item.content }}</span>
      </div>
      <!-- </div> -->
      <div class="reserve-btn btn" @click="openSwitchTime">
        预定{{ infoTitle }}
      </div>
      <div class="tips">在使用</div>
    </div>
    <div class="reverse-room bg" v-show="reverseShow">
      <div class="closeTool" @click="closeReverse"></div>
      <!-- <closeToolVue @click.native="closeReverse"></closeToolVue> -->
      <titleToolVue
        :title="reverseTitle"
        :iconPath="reverseIcon"
      ></titleToolVue>
      <div class="content flex-1 flex">
        <div class="name"></div>
        <div class="time flex">
          <span>开始时间</span>
          <el-date-picker
            v-model="startTime"
            type="datetime"
            placeholder="开始时间"
            size="small"
            :picker-options="startOptions"
          >
          </el-date-picker>
        </div>
        <div class="time flex">
          <span>结束时间</span>
          <el-date-picker
            v-model="endTime"
            type="datetime"
            placeholder="结束时间"
            size="small"
            :picker-options="endOptions"
          >
          </el-date-picker>
        </div>
        <div class="comfirm-btn btn" @click="comfirmTime">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
let timer = null;
import MeetingVue from "../Meeting.vue";
// import closeToolVue from "../closeTool.vue";
import titleToolVue from "../titleTool.vue";
export default {
  props: ["tableid"],
  components: {
    // closeToolVue,
    MeetingVue,
    titleToolVue,
  },
  data() {
    return {
      title: "C栋会议室管理",
      iconPath: require("../../assets/icon/rent-district.svg"),
      infoTitle: "",
      infoIcon: require("../../assets/icon/meeting-blue.svg"),
      reverseTitle: "预定会议室",
      reverseIcon: require("../../assets/icon/reverse.svg"),
      usedNum: 4,
      detailShow: false,
      // s: "$store.state.DigitalTwin.meetingShow",
      roomArr: ["会议室", "会议室", "会议室", "会议室", "会议室"],
      infoArr: [
        {
          title: "具体地址",
          content: "C栋会议室1层101",
        },
        {
          title: "联系方式",
          content: "13369547122",
        },
        {
          title: "参会人数",
          content: "30人",
        },
      ],
      startTime: "",
      endTime: "",
      startOptions: {
        // 设置禁用日期
        disabledDate: (time) => {
          // 声明date变量等于入职日期
          let date = this.endTime;

          // 当小于入职日期 或 大于等于今日时禁用
          if (date) {
            return time.getTime() >= new Date(date).getTime();
          }
        },
      },
      endOptions: {
        // 设置禁用日期
        disabledDate: (time) => {
          // 声明date变量等于入职日期
          let date = this.startTime;

          // 当小于入职日期 或 大于等于今日时禁用
          if (date) {
            return time.getTime() <= new Date(date).getTime();
          }
        },
      },
      roomShow: false,
      reverseShow: false,
    };
  },
  methods: {
    closeAll() {
      this.roomShow = false;
      this.reverseShow = false;
    },
    closeList() {
      this.$store.commit("DigitalTwin/changeMeetingShow", false);
    },
    openSwitchTime() {
      this.reverseShow = true;
    },
    comfirmTime() {
      this.roomShow = false;
      this.reverseShow = false;
    },
    closeReverse() {
      this.reverseShow = false;
    },
    isDetailShow() {
      this.detailShow = !this.detailShow;
    },
    getRoomName(name) {
      this.infoTitle = name;
      !this.roomShow && (this.roomShow = !this.roomShow);
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
#MeetingCamera {
  // height: 25%;
  position: absolute;
  display: flex;
  padding: 10px;
  white-space: nowrap;
}
.park-space {
  background: url("../../assets/img/meeting-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  .detail {
    display: flex;
    color: #fff;
    justify-content: space-between;
    .detail-item {
      width: 100px;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        text-align: center;
        font-size: 18px;
        // padding-top: 5px;
      }
    }
  }
  .line {
    width: 100px;
    height: 120px;
    // background: url(../../assets/icon/line.png) no-repeat;
    // background-size: 100% 100%;
    position: absolute;
    top: 90%;
    left: -10%;
  }
}
.room-detail {
  color: #fff;
  .room-content {
    display: flex;
    flex-direction: column;
    margin: 1rem 0.5rem;
    .item {
      margin: 0.5rem 0.8rem;
    }
    .room-name {
      margin-right: 2rem;
      align-items: center;
      img {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.3rem;
      }
      span {
        border-bottom: 0.5px solid #fff;
        cursor: pointer;
      }
    }
    .room-status {
      position: relative;
      &::after {
        content: " ";
        position: absolute;
        left: -1rem;
        bottom: 35%;
        width: 7px;
        height: 7px;
        background-color: #20f09d;
        border-radius: 4px;
      }
    }
  }
}
.room-info {
  width: 30rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  .info-item {
    width: 100%;
    margin: 1.5rem 0;

    :nth-child(1) {
      color: rgb(197, 197, 197);
    }
    :nth-child(2) {
      margin-left: 0.5rem;
    }
  }
  .reserve-btn {
    background-color: #38b7fd;
  }
  .tips {
    position: absolute;
    right: 10%;
    &::after {
      content: " ";
      position: absolute;
      left: -1rem;
      bottom: 40%;
      width: 7px;
      height: 7px;
      background-color: #20f09d;
      border-radius: 4px;
    }
  }
}
.reverse-room {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #c5c5c5;
  .content {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .time {
    margin: 1rem auto;
    span {
      margin-right: 1rem;
      line-height: 2.4rem;
    }
    /deep/ .el-input__inner {
      background-color: transparent;
      color: #ffffff;
      height: 2.4rem;
      border: 1px solid rgb(168, 168, 168);
    }
    /deep/ .el-input__icon {
      line-height: 2.4rem;
    }
  }

  .comfirm-btn {
    border: 0.2rem solid #38b7fd;
    color: #38b7fd;
  }
}
.btn {
  width: 90%;
  margin: 0.5rem auto;
  text-align: center;
  border-radius: 0.3rem;
  padding: 0.3rem 0;
  cursor: pointer;
}

.closeTool {
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: url(../../assets/icon/close.png) no-repeat;
  background-size: 100% 100%;
  // z-index: 210;
}
</style>
