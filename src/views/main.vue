<template>
  <div class="main">
    <largeScreenVue></largeScreenVue>
    <div id="cesiumContainer"></div>
<!--    <div-->
<!--      v-for="(item, index) in $store.state.BubbleAndImmersChart.immersionChart"-->
<!--      :key="index"-->
<!--    >-->
<!--      <component :tableid="item.id" :is="item.componentName" />-->
<!--    </div>-->
  </div>
</template>
<script>
import { createBillboard } from "../util/createBillboard";
// import { createBubble } from "../util/bubbleChart";
import roadConditionVue from "../components/roadCondition.vue";
import LargeScreenVue from "../components/LargeScreen.vue";
import DealEventVue from "../components/dealEvent/EventDetail.vue";
import SecondFloorVue from "../components/dealEvent/SecondFloor.vue";
// import EastGateVue from "../components/dealEvent/EastGate.vue";
import SouthGateVue from "../components/dealEvent/SouthGate.vue";
// import EnterpriseShowVue from "../components/enterprise/EnterpriseShow.vue";
// import EnterpriseVue from "../components/enterprise/Enterprise.vue";
import EquipmentVue from "../components/Equipment.vue";
import ParkEventDetail from "../components/park/ParkEventDetail.vue"
// import MeetingVue from "../components/Meeting.vue";
// import ParkingStatisticsVue from "../components/park/ParkingStatistics.vue";
import CarDetailVue from "../components/park/CarDetail.vue";
// import MeetingCameraVue from "../components/meetingRoom/MeetingCamera.vue";
import EquipmentClose from "../components/closeBtn/EquipmentClose.vue";
import EnterpriseListCloseVue from "../components/closeBtn/EnterpriseListClose.vue";
import EnterpriseDetailCloseVue from "../components/closeBtn/EnterpriseDetailClose.vue";
import CarDetailClose from "../components/closeBtn/CarDetailClose.vue";
import CarStatisticsCloseVue from "../components/closeBtn/CarStatisticsClose.vue";
import RoadConditionClose from "../components/closeBtn/RoadConditionClose.vue";
import CheckDXCVue from "../components/closeBtn/CheckDXC.vue";
import ParkAllListClose from "../components/closeBtn/ParkAllListClose.vue";
// import Introduction from '../components/introductionList/Introduction.vue';
import ParkAllList from "../components/park/ParkAllList.vue";
import {addCircleAnimation} from "@/util/utils";
export default {
  components: {
    CheckDXCVue,
    RoadConditionClose,
    CarStatisticsCloseVue,
    CarDetailClose,
    EnterpriseDetailCloseVue,
    EnterpriseListCloseVue,
    EquipmentClose,
    roadConditionVue,
    // MeetingCameraVue,
    CarDetailVue,
    SouthGateVue,
    LargeScreenVue,
    DealEventVue,
    SecondFloorVue,
    // EastGateVue,
    // EnterpriseShowVue,
    // EnterpriseVue,
    EquipmentVue,
    ParkEventDetail,
    // MeetingVue,
    // ParkingStatisticsVue,
    // Introduction,
    ParkAllList,
    ParkAllListClose
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let url = haoutil.system.getRequestByName(
        "config",
        "static/common/config/config.json"
      );
      // 创建地图
      this.map = qtum3d.createMap({
        id: "cesiumContainer",
        url: url,
        success: async (viewer, i) => {
          window.$viewer = viewer;
          // viewer.clock.currentTime = Cesium.JulianDate.addHours(Cesium.JulianDate.now(new Date()), 3, new Cesium.JulianDate());
          viewer.scene.globe.depthTestAgainstTerrain = false;
          viewer.scene.globe.enableLighting = true;
          //   viewer.scene.light = new Cesium.DirectionalLight({ //去除时间原因影响模型颜色
          //     direction: new Cesium.Cartesian3(0.35492591601301104, -0.8909182691839401, -0.2833588392420772)
          // })
          viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
            Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
          );
          $("#location_mars_jwd").hide();
          //  加载模型数据
          qtum3d.layer.createLayer(
            {
              type: "3dtiles",
              // url:'static/data/Scene/Production_1.json', // 本地模型数据
              // url: "http://124.71.153.0:31080/mmodel/model/Scene1/Production_2.json",
              url:'http://218.94.58.222:32080/zl/Scene/Scene1/Production_2.json',
              offset: { z: -12 },
              visible: !0,
              flyTo: true,
            },
            viewer
          );
          // viewer.scene.debugShowFramesPerSecond = true;
          // 控制缩放范围;
          // viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100;
          viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40000;
          setTimeout(() => {
            let arr = this.$store.state.BubbleAndImmersChart.immersionChart;
            // 创建广告牌实体标记
            createBillboard(arr);
          }, 100);
          // 改变鼠标事件
          this.changeMouseOperation(viewer);
          // 气泡显示（比如页面上的会议室）
          // createBubble();

          //添加圆点动画
          let { longitude, latitude, height } = {
            longitude: 120.729742,
            latitude: 27.974732,
            height: 29.65,
          };
          addCircleAnimation(
            "productspecial",
            $viewer,
            Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
            height
          );
        },
      });
    },
    // 改变鼠标默认事件
    changeMouseOperation(viewer) {
      //设置中键放大缩小
      viewer.scene.screenSpaceCameraController.zoomEventTypes = [
        Cesium.CameraEventType.WHEEL,
        Cesium.CameraEventType.MIDDLE_DRAG,
        Cesium.CameraEventType.PINCH,
      ];
      //设置右键旋转
      viewer.scene.screenSpaceCameraController.tiltEventTypes = [
        Cesium.CameraEventType.RIGHT_DRAG,
        Cesium.CameraEventType.PINCH,

        {
          eventType: Cesium.CameraEventType.RIGHT_DRAG,
          modifier: Cesium.KeyboardEventModifier.CTRL,
        },

        {
          eventType: Cesium.CameraEventType.MIDDLE_DRAG,
          modifier: Cesium.KeyboardEventModifier.CTRL,
        },
      ];
    },
  },
};
</script>
<style scoped lang="less">
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
