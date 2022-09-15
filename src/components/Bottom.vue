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
        {
          name: "预警事件",
          picUrl: require("@/assets/icon/list.svg"),
          checkedPicUrl: require("@/assets/icon/active-event.svg"),
        },
      ],
      position: [
         {
          y: 33.948273,
          x: 118.341745,
          z: 490.37,
          heading: 0.3,
          pitch: -28.7,
          roll: 360,
        },
        {
          y: 33.949479,
          x: 118.34102, 
          z: 403.54,  
          heading: 0.3,
          pitch: -28.7,
          roll: 360,
        },
        {
          y: 33.949479,
          x: 118.3412, 
          z: 403.54,  
          heading: 0.3,
          pitch: -28.7,
          roll: 360,
        },
        {
          y: 33.94947,
          x: 118.35102, 
          z: 403.54,  
          heading: 0.3,
          pitch: -28.7,
          roll: 360,
        },
      ],
      areaPositions: [
        [120.726150, 27.976038, 32.5],// 右下
        [120.726135, 27.975545, 7.2],// 左下
        [120.726130, 27.975545, 65.5],// 左上
        [120.726150, 27.976038, 65.5],// 右上
        [120.725880, 27.976080, 65.5],// 右侧上
        [120.725895, 27.976080, 32.5],// 右侧下
        [120.725790, 27.975592, 65.5],// 左侧上
        [120.725780, 27.975590, 7.2],// 左侧下
        [120.725905, 27.976210, 31.7],// 后上
        [120.726105, 27.976170, 31.7],// 前上
        [120.725905, 27.976210, 7.7], // 后下
        [120.726105, 27.976180, 7.7],// 前下
        [120.726250, 27.975980, 7.7],// 下
        [120.726250, 27.975980, 32.7],// 上
        [120.726250, 27.975980, 65.5]
      ],
      points: {},
    };
  },
  created() {
      this.areaPositions.forEach((item, index) => {
          this.points[`p${index + 1}`] = Cesium.Cartesian3.fromDegrees(...item)
      })
  },
  methods: {
    // cleanUpWrapper(arr) {
    //   const list = new Array(arr.length)
    //   for (let i = 0; i < list.length; i++) {
    //     $viewer.entities.removeById(`area${i + 1}`)
    //   }
    // },
    addWrapper(arr) {
      if ($viewer.entities.getById('area$1')) return
      let index = 0
      for (const points of arr) {
        this.addArea(points, ++index)
      }
    },
    addArea(pointArr, index) {
      $viewer.entities.add({
        id: `area${index}`,
        polygon: {
          hierarchy: pointArr,
          material: Cesium.Color.RED.withAlpha(0.3),
          perPositionHeight: true,
          fill: true
        }
      })
    },
    changeActive(index) {
      this.$store.commit("DigitalTwin/changeCheckBtnNum", index);
    },
    flyTo(index) {
      if (this.activeNum === index) return
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

        const points = this.points
        const areasPointCollection = [
          [points.p1, points.p4, points.p5, points.p6],
          [points.p1, points.p6, points.p9, points.p10, points.p14],
          [points.p9, points.p10, points.p12, points.p11],
          [points.p10, points.p14, points.p13, points.p12],
          [points.p2, points.p3, points.p15, points.p13],
          [points.p1, points.p4, points.p15, points.p14],
          [points.p3, points.p2, points.p8, points.p7],
          [points.p3, points.p15, points.p4, points.p5, points.p7],
          [points.p7, points.p5, points.p6, points.p9, points.p11, points.p8]
        ]

        this.addWrapper(areasPointCollection)

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
