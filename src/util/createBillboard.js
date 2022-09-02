import toBase64ForDefaultValue from "./html2base64";
import store from "../store";

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
    {
      id: "housePositionIcon",
      position: [120.725961, 27.975977, 65.5],
      image: require("../assets/icon/housePosition.png"),
      scale: 0.7,
    },
      // 右下
    // {
    //   id: "housePositionIcon2",
    //   position: [120.726150, 27.976046, 33.2],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    //   // 左下
    // {
    //   id: "housePositionIcon3",
    //   position: [120.726035, 27.975580, 33.2],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    //   // 左上
    // {
    //   id: "housePositionIcon4",
    //   position: [120.726030, 27.975582, 58.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    //   // 右上
    // {
    //   id: "housePositionIcon5",
    //   position: [120.726150, 27.976045, 58.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    //   // 侧上
    // {
    //   id: "housePositionIcon6",
    //   position: [120.725905, 27.976068, 58.5],
    //   image: require("../assets/icon/housePosition.png"),
    //   scale: 0.7,
    // },
    //   // 侧下
    // {
    //   id: "housePositionIcon7",
    //   position: [120.725905, 27.976073, 33.5],
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
// const warningCamera = () => {
//   let pos = {
//     "y": 27.976313,
//     "x": 120.726635,
//     "z": 70.17,
//     "heading": 153.4,
//     "pitch": -18,
//     "roll": 360
//   }
//   setTimeout(() => {
//     $viewer.entities.getById('camera002')._billboard.image = 'static/img/icon/camera-warning.svg'
//     store.commit("DigitalTwin/changeEventShow", true);
//     flyTo(pos)
//   }, 30000);
// }

export { createBillboard };
