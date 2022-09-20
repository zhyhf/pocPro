import store from "../store";

// 添加图标及点击事件
function createParkBillboard() {
  // 添加图标实体
  addIcon();
}
// 图标entities添加
const addIcon = () => {
  let billArr = [
    // 停车场点位1图标
    {
      id: "parkPosition1Icon",
      position: [118.340822, 33.956594, 18],
      image: require("../assets/innerC/parking.png"),
      scale: 0.35,
    },
    {
      id: "parkPosition2Icon",
      position: [118.33925, 33.957107, 21],
      image: require("../assets/innerC/parking.png"),
      scale: 0.35,
    },
    {
      id: "parkPosition3Icon",
      position: [118.340864, 33.955177, 20],
      image: require("../assets/innerC/parking.png"),
      scale: 0.35,
    },
    {
      id: "parkPosition4Icon",
      position: [118.339105, 33.954878, 20],
      image: require("../assets/innerC/parking.png"),
      scale: 0.35,
    },
    {
      id: "parkPosition5Icon",
      position: [118.343625, 33.9552, 49],
      image: require("../assets/innerC/parking.png"),
      scale: 0.35,
    },
    {
      id: "parkPosition6Icon",
      position: [118.343293, 33.956986, 49],
      image: require("../assets/innerC/parking.png"),
      scale: 0.35,
    },
  ];
  for (let index = 0; index < billArr.length; index++) {
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
  }
  // 鼠标点击图标事件
  addClickEvent();
};
const addClickEvent = () => {
  // entityObj图标对应的点位视口信息
  let entityObj = {
    parkPosition1Icon: {
      billboardId: "parkPosition1Icon",
      perspective: {
        y: 33.952407,
        x: 118.34257,
        z: 457.43,
        heading: 0.5,
        pitch: -48.4,
        roll: 0,
      },
    },
    parkPosition2Icon: {
      billboardId: "parkPosition2Icon",
      perspective: {
        y: 33.955052,
        x: 118.340433,
        z: 622.97,
        heading: 0.3,
        pitch: -75.2,
        roll: 0,
      },
    },
    parkPosition3Icon: {
      billboardId: "parkPosition3Icon",
      perspective: {
        y: 33.953341,
        x: 118.34145,
        z: 300.01,
        heading: 2.6,
        pitch: -57.2,
        roll: 0,
      },
    },
    parkPosition4Icon: {
      billboardId: "parkPosition4Icon",
      perspective: {
        y: 33.952615,
        x: 118.340012,
        z: 379.75,
        heading: 2.6,
        pitch: -57.2,
        roll: 0,
      },
    },
    parkPosition5Icon: {
      billboardId: "parkPosition5Icon",
      perspective: {
        y: 33.953309,
        x: 118.3424255,
        z: 331.97,
        heading: 2.3,
        pitch: -57.2,
        roll: 0,
      },
    },
    parkPosition6Icon: {
      billboardId: "parkPosition6Icon",
      perspective: {
        y: 33.955417,
        x: 118.343727,
        z: 308,
        heading: 1.6,
        pitch: -56.9,
        roll: 0,
      },
    },
  };
  let handler = new Cesium.ScreenSpaceEventHandler($viewer.scene.canvas);
  // 设置图标的单击事件的处理
  handler.setInputAction(function (movement) {
    let pick = $viewer.scene.pick(movement.position);
    let id = pick && pick.id && pick.id.id;
    if (pick) {
       flyTo(entityObj[id].perspective);
      if(pick.id && id == "parkPosition1Icon"){
        store.commit("DigitalTwin/changeParkShow", true);
        $viewer.entities.getById(
          "parkPosition1Icon"
        )._billboard._image._value = ''
      }
    }

    if (Cesium.defined(pick) && entityObj[id]) {
      let isShow = $viewer.entities.getById(entityObj[id].billboardId)._show;
      if (!isShow) {
        $viewer.entities.getById(entityObj[id].billboardId)._show = !isShow;
        flyTo(entityObj[id].perspective);
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};
const flyTo = (center) => {
  $viewer.qtum.centerAt(center);
};
export { createParkBillboard };
