<template>
  <div class="bottom">
    <div class="bottomFunc">
      <div
        :class="{ bottomContainer: true }"
        v-for="(item, index) in bottomPicUrl"
        :key="index"
      >
        <div class="bottomPicContainer">
          <div class="circle-bg" @click="flyTo(index)" :class="index === 4 ? 'circle-bg-last' : ''">
            <img
              :src="
                item.isHover ? item.hoverPic
                : activeNum !== index ? item.picUrl : item.checkedPic
              "
              class="bottomPic"
              @mouseenter="onMouseEnter(index)"
              @mouseleave="onMouseLeave(index)"
            >
            <div v-show="index === 4" class="selected-industry">{{ selectedIndustry }}</div>
            <div v-show="showOptions && index === 4" class="industry-option-bg">
              <div v-for="(name, index) in industryOptions" class="industry-item" @click.stop="select(name)">{{ name }}</div>
            </div>
          </div>
        </div>
<!--        <div :class="{ bottomFont: true, activeColor: activeNum === index }">-->
<!--          {{ item.name }}-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { materialImgFn } from '@/util/createBillboard.js'
export default {
  data() {
    return {
      imageValue:require('@/assets/innerC/park1Back.png'),
      bottomPicUrl: [
        {
          name: "园区全貌",
          picUrl: require("@/assets/icon/bottom/whole.svg"),
          checkedPic: require("@/assets/icon/bottom/whole-active.svg"),
          hoverPic: require("@/assets/icon/bottom/whole-hover.svg"),
          isHover: false
        },
          {
          name: "楼栋信息",
          picUrl: require("@/assets/icon/bottom/building.svg"),
          checkedPic: require("@/assets/icon/bottom/building-active.svg"),
          hoverPic: require("@/assets/icon/bottom/building-hover.svg"),
          isHover: false
        },
        {
          name: "智慧停车",
          picUrl: require("@/assets/icon/bottom/parking.svg"),
          checkedPic: require("@/assets/icon/bottom/parking-active.svg"),
          hoverPic: require("@/assets/icon/bottom/parking-hover.svg"),
          isHover: false
        },
        {
          name: "预警事件",
          picUrl: require("@/assets/icon/bottom/alert.svg"),
          checkedPic: require("@/assets/icon/bottom/alert-active.svg"),
          hoverPic: require("@/assets/icon/bottom/alert-hover.svg"),
          isHover: false
        },
        {
          name: "预警事件",
          picUrl: require("@/assets/icon/bottom/industry.svg"),
          checkedPic: require("@/assets/icon/bottom/industry-active.svg"),
          // checkedPicArrowRight: require("@/assets/icon/bottom/industry-active-right.svg"),
          hoverPic: require("@/assets/icon/bottom/industry-hover.svg"),
          isHover: false
        }
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
          y: 33.954783,
          x: 118.341786, 
          z: 877.26,  
          heading: 0.9,
          pitch: -84.8,
          roll: 0,
        },
        {
          y: 33.954783,
          x: 118.341786, 
          z: 877.26,  
          heading: 0.9,
          pitch: -84.8,
          roll: 0,
        },
        {
          y: 33.954783,
          x: 118.341786, 
          z: 877.26,  
          heading: 0.9,
          pitch: -84.8,
          roll: 0,
        },
         {
          y: 33.954783,
          x: 118.341786, 
          z: 877.26,  
          heading: 0.9,
          pitch: -84.8,
          roll: 0,
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
      industryOptions: [
        '电子商务',
        '房地产',
        '物业',
        '保险',
        '物流',
        '人力资源',
        '广告',
        '策划'
      ],
      selectedIndustry: '选择产业',
      showOptions: false
    };
  },
  watch: {
    showOptions(val) {
      this.bottomPicUrl[this.bottomPicUrl.length - 1].checkedPic =
              val ? require("@/assets/icon/bottom/industry-active.svg") : require("@/assets/icon/bottom/industry-active-right.svg")
    }
  },
  created() {
      this.areaPositions.forEach((item, index) => {
          this.points[`p${index + 1}`] = Cesium.Cartesian3.fromDegrees(...item)
      })
  },
  methods: {
    select(name) {
      this.selectedIndustry = name
      this.showOptions = false
    },
    onMouseEnter(index) {
      this.bottomPicUrl[index].isHover = true
    },
    onMouseLeave(index) {
      this.bottomPicUrl[index].isHover = false
    },
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
    // 停车场高亮区域
    addParkArea(){
      const pointArr = [118.340862,33.956594,
          118.341182, 33.956699,
          118.341309, 33.956895,
          118.342634, 33.956839,
          118.342625, 33.955923,
          118.342022, 33.955702,
          118.340841, 33.95578
          ]
     materialImgFn(pointArr,this.imageValue)
    },
    changeActive(index) {
      this.$store.commit("DigitalTwin/changeCheckBtnNum", index);
    },
    flyTo(index) {
      this.showOptions = index === 4
      if (this.activeNum === index) return
      $viewer.qtum.centerAt(this.position[index]); // 飞行到指定位
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
        this.addParkArea()
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
    width: 47%;
    height: 100%;
    top: 23%;
    left: 48.5%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    /*.select-light {*/
    /*  width: 20%;*/
    /*  height: 100%;*/
    /*}*/
    /*.selectLight {*/
    /*  background: url("../assets/img/select-light.svg") no-repeat;*/
    /*  background-size: 100% 130%;*/
    /*}*/
    .bottomContainer {
      width: 20%;
      height: 100%;
      .bottomPicContainer {
        margin-top: 3rem;
        text-align: center;

        .circle-bg {
          width: 11rem;
          height: auto;
          margin: 0 auto;
          position: relative;
          .bottomPic {
            cursor: pointer;
            width: 100%;
          }
          .selected-industry {
            position: absolute;
            left: 50%;
            transform: translateX(-60%);
            top: 21%;
            font-size: 18px;
          }
          .industry-option-bg {
            width: 100%;
            height: 27rem;
            position: absolute;
            top: -26.5rem;
            background-image: url("../assets/img/bottom/industry-options-bg.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            flex-wrap: wrap;
            padding: 1rem 0;
            .industry-item {
              margin: 0 0.5rem;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              &:hover {
                background-color: #00486E;
              }
            }
          }
        }
        .circle-bg-last {
          width: 18rem;
          margin-left: 15%;
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
