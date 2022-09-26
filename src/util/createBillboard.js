import toBase64ForDefaultValue from "./html2base64";
import store from "../store";
import { buildingIcon, entityObj,earlywarningIcon } from '@/assets/constant/building'
import {tableDatarg,tableDataht,tableDatasx,tableDatayx,tableDataqz,entityWarning} from '@/assets/constant/parkCamera'
import {
  hyCoverAreas,
  ycCoverAreas,
  rgCoverAreas,
  ztCoverAreas,
  ztaCoverAreas,
  hrCoverAreas,
  htCoverAreas,
  sxCoverAreas,
  qzCoverAreas,
  yxCoverAreas,
  hcCoverAreas,
  tyCoverAreas
} from '@/assets/constant/building'

// ---- 楼栋相关
function createBuilding() {
  draw()
  addBuildingIcon(buildingIcon)
  addBuildingIconEvent()
}

function drawIndustry(name){
   switch(name){
     case '电子商务':
      clearBuildingEntities();
      addWrapper(qzCoverAreas, 'qz');
      addWrapper(htCoverAreas, 'ht');
      addWrapper(hcCoverAreas, 'hc');
      addWrapper(hyCoverAreas, 'hy');
     break;
     case '房地产':
      clearBuildingEntities();
      addWrapper(hyCoverAreas, 'zta');
      addWrapper(sxCoverAreas, 'xs');
     break;
     case '物业':
      clearBuildingEntities();
      addWrapper(ztCoverAreas, 'zt');
      addWrapper(sxCoverAreas, 'xs');
     break;
     case '物流':
      clearBuildingEntities();
      addWrapper(qzCoverAreas, 'qz');  
      addWrapper(htCoverAreas, 'ht');
      addWrapper(sxCoverAreas, 'xs'); 
     break;
     case '人力资源':
      clearBuildingEntities();
      addWrapper(htCoverAreas, 'ht');
      addWrapper(ztCoverAreas, 'zt');
      addWrapper(yxCoverAreas, 'yx');
    break;
    case '广告':
      clearBuildingEntities();
      addWrapper(htCoverAreas, 'ht');
      addWrapper(tyCoverAreas, 'ty');
      addWrapper(ycCoverAreas, 'yc');
    break;
    case '保险':
      clearBuildingEntities();
      addWrapper(ztaCoverAreas, 'zta');
      addWrapper(rgCoverAreas, 'rg');
    break;
    case '策划':
      clearBuildingEntities();
      addWrapper(hyCoverAreas, 'hy');
      addWrapper(rgCoverAreas, 'rg');
   }
}

function draw() {
  addWrapper(hyCoverAreas, 'hy')
  addWrapper(ycCoverAreas, 'yc')
  addWrapper(rgCoverAreas, 'rg')
  addWrapper(ztCoverAreas, 'zt')
  addWrapper(ztaCoverAreas, 'zta')
  addWrapper(hrCoverAreas, 'hr')
  addWrapper(htCoverAreas, 'ht')
  addWrapper(sxCoverAreas, 'xs')
  addWrapper(qzCoverAreas, 'qz')
  addWrapper(yxCoverAreas, 'yx')
  addWrapper(hcCoverAreas, 'hc')
  addWrapper(tyCoverAreas, 'ty')
}

function createEarlyWaring(){
   drawEarlyWaring();
   iconEarlyWaring();
}

function drawEarlyWaring(){
  addWrapper(qzCoverAreas, 'qz');
  addWrapper(sxCoverAreas, 'xs');
  addWrapper(htCoverAreas, 'ht');
  addWrapper(yxCoverAreas, 'yx');
  addWrapper(rgCoverAreas, 'rg');
}

function iconEarlyWaring(){
   addEarlyWaring(earlywarningIcon)
   addEarlyWaringEvent()
  //addBuildingIcon([store.state.DigitalTwin.selectedIcon])
}

function addEarlyWaring(earlywarningIcon){
  for (let index = 0; index < earlywarningIcon.length; index++) {
    // 图标的通用大小位置等的处理
    if (earlywarningIcon[index].width) {
      $viewer.entities.add({
        id: earlywarningIcon[index].id,
        position: Cesium.Cartesian3.fromDegrees(...earlywarningIcon[index].position),
        billboard: {
          image: earlywarningIcon[index].image,
          scale: 0.7,
          width: 404,
          height: 238,
        },
      });
    } else {
      $viewer.entities.add({
        id: earlywarningIcon[index].id,
        position: Cesium.Cartesian3.fromDegrees(...earlywarningIcon[index].position),
        billboard: {
          image: earlywarningIcon[index].image,
          scale: earlywarningIcon[index].scale || 0.5,
        },
      });
    }
  }
}

function addEarlyWaringEvent(){
  let handler = new Cesium.ScreenSpaceEventHandler($viewer.scene.canvas);
  // 设置图标的单击事件的处理
  handler.setInputAction(function (movement) {
    let pick = $viewer.scene.pick(movement.position);
    let id = pick && pick.id && pick.id.id;
    if (pick) {
      if (id) {
        if(id&&id.indexOf('Warning')!==-1){
         // 事件处理显示
        setTimeout(() => {
          store.commit("DigitalTwin/changeEventListShow", true);
        }, 1000);
        reseWarningSelectedIcon()
        // store.commit('DigitalTwin/changeSelectedBuilding', id)
        if(entityWarning[id]&&entityWarning[id].perspective){
          flyTo(entityWarning[id].perspective);
        }  
         let selectedIcon =earlywarningIcon.find(item => item.id === id)
        store.commit('DigitalTwin/changeWarningSelectedIcon', selectedIcon)
         $viewer.entities.removeById(id)
         switch (id) {
          case "rgWarning":
            store.commit('DigitalTwin/changeWarningData',tableDatarg)
            break;
          case "htWarning":
            store.commit('DigitalTwin/changeWarningData',tableDataht)
            break;
          case "sxWarning":
            store.commit('DigitalTwin/changeWarningData',tableDatasx)
            break;
          case "qzWarning":
            store.commit('DigitalTwin/changeWarningData',tableDataqz)
            break;
          case "yxWarning":
            store.commit('DigitalTwin/changeWarningData',tableDatayx)
            break;
          default:
            break;
        }
     }
      }}
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
}

function addWrapper(arr, name) {
  let index = 0
  for (const points of arr) {
    // this.addArea(points, ++index, name)
    $viewer.entities.add({
      id: `${name}${++index}`,
      polygon: {
        hierarchy: points,
        material: Cesium.Color.fromCssColorString('#0093FE').withAlpha(0.3),
        perPositionHeight: true,
        fill: true
      }
    })
  }
}

export function clearBuildingEntities() {
  // 清除遮罩
  cleanWrapper(hyCoverAreas, 'hy')
  cleanWrapper(ycCoverAreas, 'yc')
  cleanWrapper(rgCoverAreas, 'rg')
  cleanWrapper(ztCoverAreas, 'zt')
  cleanWrapper(ztaCoverAreas, 'zta')
  cleanWrapper(hrCoverAreas, 'hr')
  cleanWrapper(htCoverAreas, 'ht')
  cleanWrapper(sxCoverAreas, 'xs')
  cleanWrapper(qzCoverAreas, 'qz')
  cleanWrapper(yxCoverAreas, 'yx')
  cleanWrapper(hcCoverAreas, 'hc')
  cleanWrapper(tyCoverAreas, 'ty')

  // 清除楼栋标记
  for (let index = 0; index < buildingIcon.length; index++) {
    $viewer.entities.removeById(buildingIcon[index].id)
  }
}

// 清除预警事件遮罩
export function clearWarningEntities() {
  // 清除遮罩
  cleanWrapper(qzCoverAreas, 'qz');
  cleanWrapper(sxCoverAreas, 'xs');
  cleanWrapper(htCoverAreas, 'ht');
  cleanWrapper(yxCoverAreas, 'yx');
  cleanWrapper(rgCoverAreas, 'rg');
  for (let index = 0; index < earlywarningIcon.length; index++) {
    $viewer.entities.removeById(earlywarningIcon[index].id)
  }
}


function cleanWrapper(arr, name) {
  let index = 0
  for (const points of arr) {
    $viewer.entities.removeById(`${name}${++index}`)
  }
}

export function resetSelectedIcon() {
  if (store.state.DigitalTwin.selectedIcon) {
   // addBuildingIcon([store.state.DigitalTwin.selectedIcon])
    store.commit('DigitalTwin/changeSelectedIcon', null)
  }
}

export function reseWarningSelectedIcon() {
  if (store.state.DigitalTwin.waringSelectedIcon) {
    addBuildingIcon([store.state.DigitalTwin.waringSelectedIcon])
    store.commit('DigitalTwin/changeWarningSelectedIcon', null)
  }
}

function addBuildingIcon(buildingIcon) {
  for (let index = 0; index < buildingIcon.length; index++) {
    // 图标的通用大小位置等的处理
    if (buildingIcon[index].width) {
      $viewer.entities.add({
        id: buildingIcon[index].id,
        position: Cesium.Cartesian3.fromDegrees(...buildingIcon[index].position),
        billboard: {
          image: buildingIcon[index].image,
          scale: 0.7,
          width: 404,
          height: 238,
        },
      });
    } else {
      $viewer.entities.add({
        id: buildingIcon[index].id,
        position: Cesium.Cartesian3.fromDegrees(...buildingIcon[index].position),
        billboard: {
          image: buildingIcon[index].image,
          scale: buildingIcon[index].scale || 0.5,
        },
      });
    }
  }
}

function addBuildingIconEvent() {
  let handler = new Cesium.ScreenSpaceEventHandler($viewer.scene.canvas);
  // 设置图标的单击事件的处理
  handler.setInputAction(function (movement) {
    let pick = $viewer.scene.pick(movement.position);
    let id = pick && pick.id && pick.id.id;
    if (pick) {
      if (id) {
        if(id&&id.indexOf('Building') !==-1){
        resetSelectedIcon()
        store.commit('DigitalTwin/changeSelectedBuilding', id)
        if(entityObj[id]&&entityObj[id].perspective){
          flyTo(entityObj[id].perspective);
        }  
        let selectedIcon = buildingIcon.find(item => item.id === id)
        store.commit('DigitalTwin/changeSelectedIcon', selectedIcon)
        $viewer.entities.removeById(id)
        //楼栋信息显示
          setTimeout(() => {
            store.commit("DigitalTwin/changeEnterPriseShow", true);
        }, 1000);
      }
      }}
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
}

// 对应物体的信息内容，随鼠标移动转动方向的纵向广告牌

function createBillboard(array) {
  // 添加图标实体
  addIcon();
  // 添加广告牌实体
  for (let index = 0; index < array.length; index++) {
    addFeature(array[index]);
  }
}
// 沉浸式图表 - 竖着的广告牌
const addFeature = (element) => {
  let chart = {
    id: element.id,
    chartType: element.id,
    center: element.center,
    width: element.width, // 广告牌宽度
    height: element.height, // 广告牌高度
    rotate: element.rotate, // 正北顺时针角度
    type: "image",
    show: element.show,
    flyTo: false,
    viewer: $viewer,
    followCamera: false,
    isTrans: true, //背景透明
  };
  // html转canvas显示 - 对应id显示页面文件
  toBase64ForDefaultValue(chart.chartType).then((res) => {
    chart.content = res;
    if (!Cesium.defined($viewer.entities.getById(element.id))) {
      new Cesium.CesiumWallBillboard(chart);
    }
    document.getElementById(chart.chartType).style.display = "none";
  });
};
// 图标entities添加
const addIcon = () => {
  let billArr = [
    //第一个摄像头
    {
      id: "bubbleCamera002",
      position: [120.725761, 27.976244, 22],
      image: require("../assets/icon/camera.svg"),
    },
    // 新增的楼栋摄像头-点击摄像头-监控视频后跳转到此处   //第二个摄像头
    {
      id: "cameraInfo",
      position: [120.727681, 27.975866, 20],
      image: require("../assets/icon/camera.svg"),
    },
    // 车辆信息下面的点
    {
      id: "vihecleInfo",
      position: [120.726359, 27.976237, 8],
      image: require("../assets/icon/car-label-grey.png"),
      scale: 0.3,
    },
    // 停车场下面的点
    {
      id: "parkListDetail",
      position: [120.726189, 27.976237, 20.59],
      image: require("../assets/icon/car-label-grey.png"),
      scale: 0.3,
    },
    // 排风机下面的点
    {
      id: "equipmentDetail",
      position: [120.727427, 27.975672, 32],
      image: require("../assets/icon/car-label.png"),
      scale: 0.3,
    },
    // 路况信息下面的点
    {
      id: "roadConditionDetail",
      position: [120.726909, 27.975977, 8],
      image: require("../assets/icon/car-label.png"),
      scale: 0.3,
    },
    // 第三个摄像头
    {
      id: "eastGate",
      position: [120.727227, 27.975277, 8],
      image: require("../assets/icon/camera.svg"),
    },
    // 第四个摄像头
    {
      id: "fourFloor",
      position: [120.726223, 27.975304, 8],
      image: require("../assets/icon/camera.svg"),
    },
    // 第五个摄像头
    {
      id: "fiveFloor",
      position: [120.729965, 27.974572, 7],
      image: require("../assets/icon/camera.svg"),
    },
    // 人员聚集告警图标 - 点击出现告警详情
    {
      id: "warningIcon",
      // position: [120.729779, 27.974776,29.65],
      position: [120.729742, 27.974732, 30.65],
      image: require("../assets/icon/warningIcon.svg"),
      scale: 0.7,
    },
    // 楼栋标记点
    // {
    //   id: "housePositionIcon",
    //   position: [120.725961, 27.975977, 65.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 前左上
    //   id: 'yc1',
    //   position: [118.343606, 33.955254, 36.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 前右上
    //   id: 'yc2',
    //   position: [118.344266, 33.955254, 36.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 前左下
    //   id: 'yc5',
    //   position: [118.343606, 33.955254, 6.46],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 前右下
    //   id: 'yc6',
    //   position: [118.344266, 33.955254, 6.46],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 后左上
    //   id: 'yc3',
    //   position: [118.343606, 33.955627, 36.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 后右上
    //   id: 'yc4',
    //   position: [118.344266, 33.955627, 36.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 后左下
    //   id: 'yc7',
    //   position: [118.343606, 33.955627, 6.64],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    // { // 后右下
    //   id: 'yc8',
    //   position: [118.344266, 33.955627, 6.64],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
  ];
  for (let index = 0; index < billArr.length; index++) {
    // if (billArr[index].id.indexOf("road") !== -1) {
    //   $viewer.entities.add({
    //     id: billArr[index].id,
    //     position: Cesium.Cartesian3.fromDegrees(...billArr[index].position),
    //     billboard: {
    //       image: require("../assets/icon/camera-warning.svg"),
    //       scale: 0.5,
    //     },
    //   });
    // } else {
    // 图标的通用大小位置等的处理
    if (billArr[index].width) {
      $viewer.entities.add({
        id: billArr[index].id,
        position: Cesium.Cartesian3.fromDegrees(...billArr[index].position),
        billboard: {
          image: billArr[index].image,
          scale: 0.7,
          width: 404,
          height: 238,
        },
      });
    } else {
      $viewer.entities.add({
        id: billArr[index].id,
        position: Cesium.Cartesian3.fromDegrees(...billArr[index].position),
        billboard: {
          image: billArr[index].image,
          scale: billArr[index].scale || 0.5,
        },
      });
    }
    // }
  }
  // 鼠标点击图标事件
  addClickEvent();
};
const addClickEvent = () => {
  // entityObj图标对应的点位视口信息
  let entityObj = {
    bubbleCamera002: {
      billboardId: "bubbleCamera002",
      perspective: {
        y: 27.976307,
        x: 120.725234,
        z: 47.92,
        heading: 103.8,
        pitch: -22.2,
        roll: 359.8,
      },
    },
    cameraInfo: {
      billboardId: "cameraInfo",
      perspective: {
        y: 27.976325,
        x: 120.728176,
        z: 42.34,
        heading: 231.2,
        pitch: -12,
        roll: 0.1,
      },
    },
    vihecleInfo: {
      billboardId: "CarDetail001",
      perspective: {
        y: 27.976729,
        x: 120.727004,
        z: 36.89,
        heading: 223.5,
        pitch: -11.8,
        roll: 359.9,
      },
    },
    parkListDetail: {
      billboardId: "parkAllList1",
      perspective: {
        y: 27.976653,
        x: 120.726969,
        z: 42.88,
        heading: 231.9,
        pitch: -12,
        roll: 0.1,
      },
    },
    equipmentDetail: {
      billboardId: "Equipment001",
      perspective: {
        y: 27.976242,
        x: 120.726926,
        z: 51.13,
        heading: 145.3,
        pitch: -8.6,
        roll: 0,
      },
    },
    roadConditionDetail: {
      billboardId: "roadCondition001",
      perspective: {
        y: 27.976731,
        x: 120.727238,
        z: 44.6,
        heading: 204.8,
        pitch: -19.2,
        roll: 0.4,
      },
    },
    eastGate: {
      billboardId: "eastGate",
      perspective: {
        y: 27.975375,
        x: 120.726738,
        z: 33.26,
        heading: 108.6,
        pitch: -20.2,
        roll: 0,
      },
    },
    fourFloor: {
      billboardId: "fourFloor",
      perspective: {
        y: 27.975563,
        x: 120.726657,
        z: 42,
        heading: 239.8,
        pitch: -26.6,
        roll: 0,
      },
    },
    fiveFloor: {
      billboardId: "fiveFloor",
      perspective: {
        y: 27.975282,
        x: 120.73021,
        z: 44.18,
        heading: 203,
        pitch: -17.3,
        roll: 0.2,
      },
    },
    warningIcon: {
      billboardId: "warningIcon",
      perspective: {
        y: 27.9756,
        x: 120.730413,
        z: 63.75,
        heading: 214.1,
        pitch: -21,
        roll: 360,
      },
    },
    housePositionIcon: {
      billboardId: "housePositionIcon",
      perspective: {
        y: 27.976406,
        x: 120.727647,
        z: 132.44,
        heading: 249.8,
        
        pitch: -27.9,
        roll: 0.2,
      },
    },
  };
  let handler = new Cesium.ScreenSpaceEventHandler($viewer.scene.canvas);
  // 设置图标的单击事件的处理
  handler.setInputAction(function (movement) {
    let pick = $viewer.scene.pick(movement.position);
    let id = pick && pick.id && pick.id.id;
    if (pick) {
      // 查看告警信息 - 人员聚集
      if (pick.id && id == "warningIcon") {
        flyTo(entityObj[id].perspective);
        setTimeout(function () {
          store.commit("DigitalTwin/changeEventDetailShow", true);
          const data = {
            name: "人员聚集",
            position: "企业东门1号口",
            time: "2020.3.9 9:47:34",
            status: "报警中",
            perspective: {
              y: 27.97534,
              x: 120.730174,
              z: 39.37,
              heading: 215.4,
              pitch: -16.1,
              roll: 360,
            },
          };
          store.commit("DigitalTwin/changeEventDetail", data);
        }, 2000);
      } else if (
        (pick.id && id == "eastGate") ||
        (pick.id && id == "bubbleCamera002") ||
        (pick.id && id == "cameraInfo") ||
        (pick.id && id == "fourFloor") ||
        (pick.id && id == "fiveFloor")
      ) {
        flyTo(entityObj[id].perspective);
        //监控 - 拆分开沉浸式
        let data = [];
        const tableData = [
          {
            name: "NH1472589251",
            position: "17区球型机",
            time: "负一层17区",
            superName: "人员聚集",
            status: "正常",
            perspective: {
              y: 27.976325,
              x: 120.728176,
              z: 42.34,
              heading: 231.2,
              pitch: -12,
              roll: 0.1,
            },
          },
          {
            name: "NH1472589252",
            position: "企业东门2号口",
            time: "负一层28区",
            superName: "人员入侵",
            status: "正常",
            perspective: {
              y: 27.976307,
              x: 120.725234,
              z: 47.92,
              heading: 103.8,
              pitch: -22.2,
              roll: 359.8,
            },
          },
          {
            name: "NH1472589253",
            position: "28区球型机",
            time: "负一层28区",
            superName: "吸烟监测",
            status: "故障",
            perspective: {
              y: 27.975375,
              x: 120.726738,
              z: 33.26,
              heading: 108.6,
              pitch: -20.2,
              roll: 0,
            },
          },
          {
            name: "NH1472589254",
            position: "22区球型机",
            time: "负一层22区",
            superName: "吸烟监测",
            status: "正常",
            perspective: {
              y: 27.975563,
              x: 120.726657,
              z: 42,
              heading: 239.8,
              pitch: -26.6,
              roll: 0,
            },
          },
          {
            name: "NH1472589255",
            position: "28区球型机",
            time: "负一层28区",
            superName: "吸烟监测",
            status: "正常",
            perspective: {
              y: 27.975282,
              x: 120.73021,
              z: 44.18,
              heading: 203,
              pitch: -17.3,
              roll: 0.2,
            },
          },
        ];
        tableData.map((item) => {
          if (item.perspective.y == entityObj[id].perspective.y) {
            data = item;
          }
        });
        store.commit("DigitalTwin/changeParkDetail", data);
        setTimeout(function () {
          store.commit("DigitalTwin/changeParkEventDetail", true); //打开监控页面
        }, 2000);
      } else if (pick.id && id == "vihecleInfo") {
        flyTo(entityObj[id].perspective);
        $viewer.entities.getById(
          "vihecleInfo"
        )._billboard._image._value = require("../assets/icon/car-label.png");
      } else if (pick.id && id == "parkListDetail") {
        flyTo(entityObj[id].perspective);
        $viewer.entities.getById(
          "parkListDetail"
        )._billboard._image._value = require("../assets/icon/car-label.png");
      } else if (pick.id && id == "Equipment001") {
        //点击实体跳转排风机具体位置
        const weizhi = {
          y: 27.976242,
          x: 120.726926,
          z: 51.13,
          heading: 145.3,
          pitch: -8.6,
          roll: 0,
        };
        flyTo(weizhi);
      } else if (pick.id && id == "CarDetail001") {
        //点击实体跳转车辆信息具体位置
        const weizhi = {
          y: 27.976582,
          x: 120.726986,
          z: 33.31,
          heading: 232.6,
          pitch: -12,
          roll: 0.1,
        };
        flyTo(weizhi);
      } else if (pick.id && id == "parkAllList1") {
        //点击实体跳转停车场信息具体位置
        const weizhi = {
          y: 27.976653,
          x: 120.726969,
          z: 42.88,
          heading: 231.9,
          pitch: -12,
          roll: 0.1,
        };
        flyTo(weizhi);
      } else if (pick.id && id == "roadCondition001") {
        //点击实体跳转路况统计具体位置
        const weizhi = {
          y: 27.976731,
          x: 120.727238,
          z: 44.6,
          heading: 204.8,
          pitch: -19.2,
          roll: 0.4,
        };
        flyTo(weizhi);
      } else if (pick.id && id == "housePositionIcon") {
        flyTo(entityObj[id].perspective);
        // 楼栋信息显示
        setTimeout(() => {
          store.commit("DigitalTwin/changeEnterPriseShow", true);
        }, 1000);
      } else if (pick.id && id == "equipmentDetail") {
        flyTo(entityObj[id].perspective);
        $viewer.entities.getById(
          "equipmentDetail"
        )._billboard._image._value = require("../assets/icon/car-label.png");
      } else if (pick.id && id == "roadConditionDetail") {
        flyTo(entityObj[id].perspective);
        $viewer.entities.getById(
          "roadConditionDetail"
        )._billboard._image._value = require("../assets/icon/car-label.png");
      }
    }

    if (Cesium.defined(pick) && entityObj[id]) {
      let isShow = $viewer.entities.getById(entityObj[id].billboardId)._show;
      if (!isShow) {
        $viewer.entities.getById(entityObj[id].billboardId)._show = !isShow;
        flyTo(entityObj[id].perspective);
      }
    } else {
      switch (id) {
        case "EnterpriseListClose":
          $viewer.entities.getById("EnterpriseShow001")._show = false;
          break;
        case "CarDetailClose":
          $viewer.entities.getById("CarDetail001")._show = false;
          $viewer.entities.getById(
            "vihecleInfo"
          )._billboard._image._value = require("../assets/icon/car-label-grey.png");
          break;
        case "ParkAllListClose":
          $viewer.entities.getById("parkAllList1")._show = false;
          $viewer.entities.getById(
            "parkListDetail"
          )._billboard._image._value = require("../assets/icon/car-label-grey.png");
          break;
        case "RoadConditionClose":
          $viewer.entities.getById("roadCondition001")._show = false;
          $viewer.entities.getById(
            "roadConditionDetail"
          )._billboard._image._value = require("../assets/icon/car-label-grey.png");
          break;
        case "EquipmentClose":
          $viewer.entities.getById("Equipment001")._show = false;
          $viewer.entities.getById(
            "equipmentDetail"
          )._billboard._image._value = require("../assets/icon/car-label-grey.png");
          break;
        default:
          break;
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  // warningCamera()
};
const flyTo = (center) => {
  $viewer.qtum.centerAt(center);
};
export { createBillboard, createBuilding, drawIndustry, createEarlyWaring };
// 创建多边形实体 添加图片填充  imageValue: 填充图片路径
export const materialImgFn = (id,pointArr,ifexclude,imageValue,height = 15) => {
 //材质修改
 const entity = $viewer.entities.add(
   {
      id:id,
      name:'polygon',
      polygon: {
         height: height,
         hierarchy: Cesium.Cartesian3.fromDegreesArray(pointArr),
         material: Cesium.Color.fromBytes(56,183,253,100),
         outlineColor: Cesium.Color.fromBytes(56,183,253,200),
         outline: true,
         outlineWidth: 10,
      }
    }
  )
  ifexclude && (entity.polygon.extrudedHeight = 43)
  // const positions = pointArrPolygon;
  // entity.polyline = {
  //   positions: positions,
  //   width: 4,
  //   material: Cesium.Color.fromBytes(56,183,253,100),
  //   clampToGround: true
  // }
  // $viewer.entities.add({
  //   position : pointArrPolygon,
  //   polyline : {
  //       width : 16,
  //       material: Cesium.Color.fromBytes(56,183,253,100),
  //       // clampToGround: true
  //   }
  //  });
   // 实体上添加传入的图片覆盖
  //  entity.polygon.material = new Cesium.ImageMaterialProperty({
  //    image : imageValue,
  //    transparent : true
  //  })
}
