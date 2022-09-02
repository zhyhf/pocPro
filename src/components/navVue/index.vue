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
          // defaultUrl:require("@/assets/icon/home-checked.svg"),
          picUrl: require("@/assets/icon/home-notchecked.svg"),
          checkedPicUrl: require("@/assets/icon/home-checked.svg"),
          hoveredPicUrl: require("@/assets/icon/home-hover.svg"),
          isClick:true,
          value:'homePage'
        },
        {
          name: "资产",
          picUrl: require("@/assets/icon/assets-notchecked.svg"),
          checkedPicUrl: require("@/assets/icon/assets-checked.svg"),
          hoveredPicUrl: require("@/assets/icon/assets-hover.svg"),
          isClick:true,
          value:'assets'
        },
        {
          name: "物业",
          picUrl: require("@/assets/icon/property-notchecked.svg"),
          checkedPicUrl: require("@/assets/icon/property-checked.svg"),
          hoveredPicUrl: require("@/assets/icon/property-hover.svg"),
          isClick:true,
          value:'property'
        },
        {
          name: "能耗",
          picUrl: require("@/assets/icon/energy-notchecked.svg"),
          checkedPicUrl: require("@/assets/icon/energy-checked.svg"),
          hoveredPicUrl: require("@/assets/icon/energy-hover.svg"),
          isClick:true,
          value:'energy'
        }
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
    display: inline-flex;
    position: absolute;
    top:7%;
    left: 25%;
    width: 50%;
    z-index: 101;
     pointer-events: all;
    cursor:pointer;
    justify-content: center;
    margin: 0 auto;
  .middle-pic-wrapper:nth-child(1) {
    margin-right: -8px;
  }
  .middle-pic-wrapper:nth-child(4) {
    margin-left: -8px;
  }
  img{
      width: 70px;
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
