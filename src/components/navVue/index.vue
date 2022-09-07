<template>
  <div class="navContent">
       <div v-for="(item, index) in middlePicUrl" :key="index" class="middle-pic-wrapper">
        <img
          :src="item.picUrl"
          alt=""
          class="topImg"
          :ref="'style'+index"
          @click="choseSys(index, item)"
          @mouseenter.stop="mouseenterImage(index,item)"
          @mouseleave.stop="mouseleaveImage(index,item)"
        />
        <div class="bottomFont">{{ item.name }}</div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      checkedTarget: null,
      checkedTargetNum: -1,
      showicon: false,
      currentIndex: null,
      middlePicUrl: [
          {
              name: "首页",
              picUrl: require("@/assets/icon/navigator/home.svg"),
              checkedPicUrl: require("@/assets/icon/navigator/home-active.svg"),
              hoveredPicUrl: require("@/assets/icon/navigator/home-hover.svg"),
              isClick:true,
              value:'homePage'
          },
          {
              name: "物业",
              picUrl: require("@/assets/icon/navigator/property.svg"),
              checkedPicUrl: require("@/assets/icon/navigator/property-active.svg"),
              hoveredPicUrl: require("@/assets/icon/navigator/property-hover.svg"),
              isClick:true,
              value:'property'
          },
          {
              name: "招商",
              picUrl: require("@/assets/icon/navigator/business.svg"),
              checkedPicUrl: require("@/assets/icon/navigator/business-active.svg"),
              hoveredPicUrl: require("@/assets/icon/navigator/business-hover.svg"),
              isClick:true,
              value:'assets'
          },
          {
              name: "安防",
              picUrl: require("@/assets/icon/navigator/security.svg"),
              checkedPicUrl: require("@/assets/icon/navigator/security-active.svg"),
              hoveredPicUrl: require("@/assets/icon/navigator/security-hover.svg"),
              isClick:true,
              value:'property'
          },
          {
              name: "能耗",
              picUrl: require("@/assets/icon/navigator/energy.svg"),
              checkedPicUrl: require("@/assets/icon/navigator/energy-active.svg"),
              hoveredPicUrl: require("@/assets/icon/navigator/energy-hover.svg"),
              isClick:true,
              value:'energy'
          }
        // {
        //   name: "首页",
        //   // defaultUrl:require("@/assets/icon/home-checked.svg"),
        //   picUrl: require("@/assets/icon/home-notchecked.svg"),
        //   checkedPicUrl: require("@/assets/icon/home-checked.svg"),
        //   hoveredPicUrl: require("@/assets/icon/home-hover.svg"),
        //   isClick:true,
        //   value:'homePage'
        // },
        // {
        //   name: "资产",
        //   picUrl: require("@/assets/icon/assets-notchecked.svg"),
        //   checkedPicUrl: require("@/assets/icon/assets-checked.svg"),
        //   hoveredPicUrl: require("@/assets/icon/assets-hover.svg"),
        //   isClick:true,
        //   value:'assets'
        // },
        // {
        //   name: "物业",
        //   picUrl: require("@/assets/icon/property-notchecked.svg"),
        //   checkedPicUrl: require("@/assets/icon/property-checked.svg"),
        //   hoveredPicUrl: require("@/assets/icon/property-hover.svg"),
        //   isClick:true,
        //   value:'property'
        // },
        // {
        //   name: "能耗",
        //   picUrl: require("@/assets/icon/energy-notchecked.svg"),
        //   checkedPicUrl: require("@/assets/icon/energy-checked.svg"),
        //   hoveredPicUrl: require("@/assets/icon/energy-hover.svg"),
        //   isClick:true,
        //   value:'energy'
        // }
      ]
    };
  },
  mounted() {
      // 默认首页选中
      this.$nextTick(() => {
          this.choseSys(0, this.middlePicUrl[0])
      })
  },
  methods: {
    choseSys(n, item) {
      this.$store.commit("DigitalTwin/changeLargeScreenShow", false);
      setTimeout(() => {
          this.$store.commit("DigitalTwin/changeNavCheckBtnNum", item.value);
          if(item.isClick){
              if (this.checkedTarget) {
                  this.checkedTarget.src = this.middlePicUrl[
                      this.checkedTargetNum
                      ].picUrl;
              }
              let target = this.$refs['style'+n][0];
              target.src = item.checkedPicUrl;
              this.checkedTargetNum = n;
              this.checkedTarget = target;
              this.showicon = false;
          }

          if (n !== 3) {
              //能源分析
              this.$store.commit("DigitalTwin/changeDataAnalysisShow", false);
              this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", false);
              this.$store.commit("DigitalTwin/changeEnvAnalysisShow", false);
              this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", false);
          }
          this.$store.commit("DigitalTwin/changeLargeScreenShow", true);
      }, 400)
    },
     mouseenterImage(n, item) {
      if(item.isClick){
        let target = this.$refs['style'+n][0];
        target.src = item.hoveredPicUrl;
      }
    },
    mouseleaveImage(n, item) {
      if(item.isClick){
        if(n != this.checkedTargetNum){
          let target = this.$refs['style'+n][0];
          target.src = item.picUrl;
        }

      }
    }
  },
  computed: {
    ...mapState("DigitalTwin", ["controlBottomShow"]),
    activeNum() {
      return this.$store.state.DigitalTwin.navCheckBtnNum;
    },
  },
};
</script>

<style lang="less" scoped>
.navContent {
    display: flex;
    position: absolute;
    top:7%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 101;
    pointer-events: all;
    cursor:pointer;
    .middle-pic-wrapper {
        width: 80px;
        position: relative;
        .topImg {
            width: 100%;
        }
    }
    .middle-pic-wrapper:nth-child(1) {
        margin-right: -10px;
    }
    .middle-pic-wrapper:nth-child(2) {
        width: 80.5px;
        margin-right: -1px;
    }
    .middle-pic-wrapper:nth-child(4) {
        width: 80.5px;
        margin-left: -2px;
    }
    .middle-pic-wrapper:last-child {
        margin-left: -10px;
    }
  div{
    &:hover {
      .bottomFont {
        display: block;
      }
    }
    .bottomFont {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0,0,0.65);
      font-weight: 700;
      color: #ffffff;
      border: 1px solid #38b7fd;
      margin-top: 1px;
      display: none;
    }
  }
}
.activeColor {
  color: #38b7fd;
}
</style>
