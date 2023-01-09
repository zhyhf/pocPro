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
              <div v-for="(name, index) in industryOptions" :key="index" class="industry-item" @click.stop="select(name)">{{ name }}</div>
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
import {tableDatarg,tableDataht,tableDatasx,tableDatayx,tableDataqz,entityWarning} from '@/assets/constant/parkCamera'
import { mapState } from "vuex";
import {clearWarningEntities,materialImgFn,createBuilding, resetSelectedIcon, clearBuildingEntities,drawIndustry,createEarlyWaring } from '@/util/createBillboard.js'
import { createParkBillboard,deleteParkBillboard} from '@/util/parkBillBoard'
export default {
  data() {
    return {
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
          y:33.950485,
          x:118.347155,
          z:483.66,
          heading:317.3,
          pitch:-32.5,
          roll:6.8
        },
        {
          y:33.950485,
          x:118.347155,
          z:483.66,
          heading:317.3,
          pitch:-32.5,
          roll:6.8
        },
        {
          y:33.950485,
          x:118.347155,
          z:483.66,
          heading:317.3,
          pitch:-32.5,
          roll:6.8
        },
        {
          y:33.950485,
          x:118.347155,
          z:483.66,
          heading:317.3,
          pitch:-32.5,
          roll:6.8
        },
        {  
          y:33.950485,
          x:118.347155,
          z:483.66,
          heading:317.3,
          pitch:-32.5,
          roll:6.8
        }
      ],
      parkAreaDatas:[
        {
        id:'parkPosition1',
        areaPositions:[
        118.340862,33.956594,
        118.341187, 33.956602,
        118.341309, 33.956709,
        118.341639, 33.956729,
        118.341803, 33.956861,
        118.342644, 33.956839,
        118.342649, 33.955918,
        118.342022, 33.95568,
        118.340841, 33.95578,
        ],
        ifexclude:false,
        img: require('@/assets/innerC/park1Back.png'),
        height: 8
      },
        {
          id:'parkPosition2',
          areaPositions:[
          118.339273,33.957069,
          118.339874,33.956904,
          118.339854,33.956407,
          118.339115,33.956407,
          118.339114,33.956484,
          118.339253,33.956484,
        ],
        ifexclude:false,
        img:require('@/assets/innerC/park2Back.png')
      },
         {
          id:'parkPosition3',
        areaPositions:[
          118.341089,33.955203,
          118.341476,33.955205,
          118.341471,33.954648,
          118.340861,33.954648,
          118.340861,33.955187,
        ],
        ifexclude:false,
        img:''
      },
         {
          id:'parkPosition4',
         areaPositions:[
          118.339082,33.954115,
          118.339827,33.954115,
          118.339851,33.954709,
          118.339276,33.954877,
          118.339131,33.954875,
        ],
        ifexclude:false,
        img:''
      },
        {
          id:'parkPosition5',
        areaPositions:[
          118.343621,33.955122,
          118.344279,33.955122,
          118.344294,33.954621,
          118.34362,33.954627,
        ],
        ifexclude:true,
        height: 1,
        img:'',
      },
      {
        id:'parkPosition6',
        areaPositions:[
          118.343288,33.957001,
          118.343668,33.957001,
          118.343668,33.956750,
          118.343288, 33.956750,
        ],
        ifexclude:true,
        height: 1,
        img:'',
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
        // '电子商务',
        // '房地产',
        // '物业',
        // '保险',
        // '物流',
        // '人力资源',
        // '广告',
        // '策划'
        '批发和零售',
        '信息技术服务',
        '租赁商务服务',
        '金融',
        '建筑',
        '物流运输',
        '制造业',
        '科学研究'
      ],
      selectedIndustry: '选择产业',
      showOptions: false,
      shouldDraw: true
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
      this.showOptions = false;
      drawIndustry(name);
    },
    onMouseEnter(index) {
      this.bottomPicUrl[index].isHover = true
    },
    onMouseLeave(index) {
      this.bottomPicUrl[index].isHover = false
    },
    // 停车场高亮区域
    addParkArea(data){
    data.map(item=>{
      materialImgFn(item.id,item.areaPositions,item.ifexclude,item.img,item.height)
      })
     createParkBillboard(this)
    },
    changeActive(index) {
      this.$store.commit("DigitalTwin/changeCheckBtnNum", index);
    },
    flyTo(index) {
      this.$store.state.DigitalTwin.industryListShow=false
      // 停车场列表
      this.$store.commit("DigitalTwin/changeParkShow", false);
       //显示详情 
       this.$store.commit("DigitalTwin/changeEventDetailShow", false);
     //隐藏预警事件列表
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      //周围环境
      this.$store.commit("DigitalTwin/changeEnvironmentShow",false);
      // 周围资料1
      this.$store.commit("DigitalTwin/changeData1ComShow", false);
      // 周围资料2
      this.$store.commit("DigitalTwin/changeData2ComShow", false);
      // 分析结果
      this.$store.commit("DigitalTwin/changeAnalyseShow", false);
        clearWarningEntities()
        clearBuildingEntities()
        deleteParkBillboard()
        this.$store.commit('DigitalTwin/changeWarningSelectedIcon',null)
      // 判断index是否为4,this.showOptions为true或者false
      if(this.showOptions){
          this.showOptions = false;
            // this.showOptions = index === 4
      }else{
          this.showOptions = index === 4
      }
    
      // 点击下面的菜单栏飞到指定的位置
      $viewer.qtum.centerAt(this.position[index]); // 飞行到指定位
      if (index === 3) {
        this.selectedIndustry = '选择产业';
        // clearWarningEntities()
        // clearBuildingEntities();
        // deleteParkBillboard();
        createEarlyWaring();
        this.$store.commit("DigitalTwin/changeEventListShow", true);
        this.$store.commit('DigitalTwin/changeWarningData',tableDataht)
        this.$bus.$emit('changeWarningStyle')
        this.$store.state.DigitalTwin.EnterPriseShow = false;
        this.$store.state.DigitalTwin.EnterPriseDetailShow = false;
        this.$store.state.DigitalTwin.planImgShow = false;
        if (!this.shouldDraw) {
          this.shouldDraw = true
        }
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
        // setTimeout(() => {
        //   this.$store.commit("DigitalTwin/changeEventListShow", true);
        // }, 1000);
      } else if(index===1){
        this.selectedIndustry = '选择产业';
        // clearBuildingEntities();
        // deleteParkBillboard()
         createBuilding()
         resetSelectedIcon()
        // if (this.shouldDraw) {
        //   // 删除停车场的点位信息
        //   createBuilding()
        //   this.shouldDraw = false
        // } else {
        //   resetSelectedIcon()
        // }
        this.$store.state.DigitalTwin.EnterPriseShow = false
        this.$store.state.DigitalTwin.EnterPriseDetailShow = false
        this.$store.state.DigitalTwin.planImgShow = false
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
        //   setTimeout(() => {
        //       this.$store.commit("DigitalTwin/changeEnterPriseShow", true);
        // }, 1000);
       }
      //  else if(index===2){
      //   //   setTimeout(() => 
      //   //       this.$store.commit("DigitalTwin/changeEnterPriseShow", true);
      //   // }, 1000);
      //  }
       else if(index===2){
         this.selectedIndustry = '选择产业';
        if (!this.shouldDraw) {
          this.shouldDraw = true
        }
        this.addParkArea(this.parkAreaDatas)
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

         // 车位统计+告警显示 点击对应图标显示 TODO
        // setTimeout(() => {
        //      this.$store.commit("DigitalTwin/changeParkShow", true);
        // }, 1000);
       }else if(index === 0){
         this.selectedIndustry = '选择产业';
       }
       else {
        if (!this.shouldDraw) {
          // clearBuildingEntities()
          this.shouldDraw = true
        }
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
        this.$store.state.DigitalTwin.EnterPriseShow = false;
        this.$store.state.DigitalTwin.EnterPriseDetailShow = false;
        this.$store.state.DigitalTwin.planImgShow = false;
        // deleteParkBillboard();
        // clearBuildingEntities()
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
            background-image: url("../assets/icon/bottom/industry-options-bg.svg");
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
