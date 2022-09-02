<template>
  <div class="bottom">
    <div class="bottomFunc">
      <div
        :class="{ bottomContainer: true, selectLight: activeNum === index }"
        v-for="(item, index) in bottomPicUrl"
        :key="index"
      >
        <div class="bottomPicContainer">
          <div class="circle-bg" @click="flyTo(index)">
            <img
              v-show="activeNum !== index"
              :src="item.picUrl"
              class="bottomPic"
            />
            <img
              v-show="activeNum === index"
              :src="item.checkedPicUrl"
              class="bottomPic"
            />
          </div>
        </div>
        <div :class="{ bottomFont: true, activeColor: activeNum === index }">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      bottomPicUrl: [
        {
          name: "园区全貌",
          picUrl: require("@/assets/icon/all.svg"),
          checkedPicUrl: require("@/assets/icon/active-all.svg"),
        },
          {
          name: "楼栋信息",
          picUrl: require("@/assets/icon/houseP.svg"),
          checkedPicUrl: require("@/assets/icon/houseS.svg"),
        },
        {
          name: "智慧停车",
          picUrl: require("@/assets/icon/parking.svg"),
          checkedPicUrl: require("@/assets/icon/active-parking.svg"),
        },
        // {
        //   name: "会议室",
        //   picUrl: require("@/assets/icon/meeting.svg"),
        //   checkedPicUrl: require("@/assets/icon/active-meeting.svg"),
        // },
        {
          name: "预警事件",
          picUrl: require("@/assets/icon/list.svg"),
          checkedPicUrl: require("@/assets/icon/active-event.svg"),
        },
      ],
      position: [
         {
          y: 27.945429,
          x: 120.73098,
          z: 1024.53,
          heading: 1.7,
          pitch: -19.6,
          roll: 0,
        },
        {
          y: 27.976103,
          x: 120.727852,
          z: 116.72,
          heading: 261.3,
          pitch: -23,
          roll: 0.2,
        },
        {
          y: 27.976661,
          x: 120.727143,
          z: 42.45,
          heading: 231.9,
          pitch: -12,
          roll: 0.1,
        },
        {
          y: 27.97692,
          x: 120.726029,
          z: 40.46,
          heading: 199.4,
          pitch: -5.8,
          roll: 0.2,
        },
      ],
    };
  },
  methods: {
    changeActive(index) {
      this.$store.commit("DigitalTwin/changeCheckBtnNum", index);
    },
    flyTo(index) {
      $viewer.qtum.centerAt(this.position[index]); // 飞行到指定位置
      if (index === 3) {
        this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
        this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
        this.$store.commit("DigitalTwin/changeEventDetailShow", false);
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
        this.$store.commit("DigitalTwin/changeParkEventDetail", false);
        this.$store.commit("DigitalTwin/changeParkShow", false);
        this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
        this.$store.commit("DigitalTwin/changeData1ComShow", false);
        this.$store.commit("DigitalTwin/changeData2ComShow", false);
        this.$store.commit("DigitalTwin/changeAnalyseShow", false);

        //能源分析
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", false);

        // 管道和楼栋平面图信息
        this.$store.commit("DigitalTwin/changeConduitShow", false);
        this.$store.commit("DigitalTwin/changePlanImgShow", false);

        // 事件处理显示
        setTimeout(() => {
          this.$store.commit("DigitalTwin/changeEventListShow", true);
        }, 1000);
      } else if(index===1){
        let p1 = Cesium.Cartesian3.fromDegrees(120.726150, 27.976046, 33.2) // 右下
        let p2 = Cesium.Cartesian3.fromDegrees(120.726035, 27.975580, 33.2) // 左下
        let p3 = Cesium.Cartesian3.fromDegrees(120.726030, 27.975582, 58.5) // 左上
        let p4 = Cesium.Cartesian3.fromDegrees(120.726150, 27.976045, 58.5) // 右上
        let p5 = Cesium.Cartesian3.fromDegrees(120.725905, 27.976068, 58.5) // 侧上
        let p6 = Cesium.Cartesian3.fromDegrees(120.725905, 27.976073, 33.5) // 侧下

        $viewer.entities.add({
          polygon: {
            hierarchy: [p1, p2, p3, p4],
            material: new Cesium.Color(100, 100, 100, 0.5),
            perPositionHeight: true,
            fill: true
          },
        })

        $viewer.entities.add({
          polygon: {
            hierarchy: [p1, p4, p5, p6],
            material: new Cesium.Color(100, 100, 100, 0.5),
            perPositionHeight: true,
            fill: true
          }
        })

        this.$store.commit("DigitalTwin/changeEventListShow", false);
        this.$store.commit("DigitalTwin/changeEventDetailShow", false);
        this.$store.commit("DigitalTwin/changeParkEventDetail", false);
        this.$store.commit("DigitalTwin/changeParkShow", false);
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
        this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
        this.$store.commit("DigitalTwin/changeData1ComShow", false);
        this.$store.commit("DigitalTwin/changeData2ComShow", false);
        this.$store.commit("DigitalTwin/changeAnalyseShow", false);

        //能源分析
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", false);
        // 楼栋信息显示
          setTimeout(() => {
              this.$store.commit("DigitalTwin/changeEnterPriseShow", true);
        }, 1000);
       }else if(index===2){
        this.$store.commit("DigitalTwin/changeEventListShow", false);
        this.$store.commit("DigitalTwin/changeEventDetailShow", false);
        this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
        this.$store.commit("DigitalTwin/changeParkEventDetail", false);
        this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
        this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
        this.$store.commit("DigitalTwin/changeData1ComShow", false);
        this.$store.commit("DigitalTwin/changeData2ComShow", false);
        this.$store.commit("DigitalTwin/changeAnalyseShow", false);

        //能源分析
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", false);

        // 管道和楼栋平面图信息
        this.$store.commit("DigitalTwin/changeConduitShow", false);
        this.$store.commit("DigitalTwin/changePlanImgShow", false);

         // 车位统计+告警显示
        setTimeout(() => {
             this.$store.commit("DigitalTwin/changeParkShow", true);
        }, 1000);
       }
       else {
        this.$store.commit("DigitalTwin/changeEventListShow", false);
        this.$store.commit("DigitalTwin/changeEventDetailShow", false);
        this.$store.commit("DigitalTwin/changeEventShow", false);
        this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
        this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
        this.$store.commit("DigitalTwin/changeParkShow", false);
        this.$store.commit("DigitalTwin/changeParkEventListShow", false);
        this.$store.commit("DigitalTwin/changeParkEventDetail", false);
        this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
        this.$store.commit("DigitalTwin/changeData1ComShow", false);
        this.$store.commit("DigitalTwin/changeData2ComShow", false);
        this.$store.commit("DigitalTwin/changeAnalyseShow", false);
        //能源分析
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", false);
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", false);
        this.$store.commit("DigitalTwin/changePlanImgShow", false);

        // 管道和楼栋平面图信息
        this.$store.commit("DigitalTwin/changeConduitShow", false);
        this.$store.commit("DigitalTwin/changePlanImgShow", false);
      }
      this.changeActive(index);
    },
    mouseenterImage(e, item) {
      let target = e.srcElement;
      target.src = item.checkedPicUrl;
    },
    mouseleaveImage(e, item) {
      let target = e.srcElement;
      target.src = item.picUrl;
    }
  },
  computed: {
    ...mapState("DigitalTwin", ["controlBottomShow"]),
    activeNum() {
      return this.$store.state.DigitalTwin.checkBtnNum;
    },
  },
};
</script>

<style lang="less" scoped>
.bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 17%;
  z-index: 99;
  .bottomFunc {
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    .select-light {
      width: 20%;
      height: 100%;
    }
    .selectLight {
      background: url("../assets/img/select-light.svg") no-repeat;
      background-size: 100% 130%;
    }
    .bottomContainer {
      width: 20%;
      height: 100%;
      .bottomPicContainer {
        margin-top: 3rem;
        text-align: center;

        .circle-bg {
          width: 5.7rem;
          height: 5.7rem;
          margin: 0 auto;
          .bottomPic {
            cursor: pointer;
            width: 100%;
          }
        }
        .bgShow {
          background: url("../assets/img/circle-bg.svg") no-repeat;
          background-size: 100% 100%;
        }
      }

      .bottomFont {
        min-width: 56.5px;
        width: 100%;
        height: 37.5%;
        // margin-top: 10px;
        display: block;
        text-align: center;
        font-size: 1.4rem;
        font-weight: bold;
        // padding-top: 0.5rem;
        white-space: nowrap;
      }
    }
  }
}
.activeColor {
  color: #38b7fd;
}
</style>
