import store from "../store";
import {tableDataA1,tableDataA6,tableDataB4,tableDataC4D1,tableDataC8,tableDataD5} from '../assets/constant/parkCamera'
// 添加图标及点击事件
function createParkBillboard(self) {
  // 添加图标实体
  addIcon(self);
}

// 删除停车场的所有点位信息
function deleteParkBillboard() {
   let deletePoints=['parkPosition1Icon', 'parkPosition2Icon',
                      'parkPosition3Icon','parkPosition4Icon',
                      'parkPosition5Icon', 'parkPosition6Icon',
                      'parkPosition1','parkPosition6',
                      'parkPosition2','parkPosition3',
                      'parkPosition4','parkPosition5',
                     ]
              deletePoints.map(item=>{
                $viewer.entities.remove({id:item})
              })
}
// 图标entities添加
const addIcon = (self) => {
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
  addClickEvent(self);
};
const addClickEvent = (self) => {
  
  // entityObj图标对应的点位视口信息
  let entityObj = {
    parkPosition1Icon: {
      billboardId: "parkPosition1Icon",
      perspective:{y:33.951978,x:118.347336,z:484.17,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition2Icon: {
      billboardId: "parkPosition2Icon",
      perspective: {y:33.955534,x:118.340463,z:623.14,heading:0.3,pitch:-75.2,roll:0}
    },
    parkPosition3Icon: {
      billboardId: "parkPosition3Icon",
      perspective: {y:33.951044,x:118.347176,z:483.85,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition4Icon: {
      billboardId: "parkPosition4Icon",
      perspective: {y:33.95098,x:118.345313,z:483.83,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition5Icon: {
      billboardId: "parkPosition5Icon",
      perspective: {y:33.951165,x:118.349801,z:483.89,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition6Icon: {
      billboardId: "parkPosition6Icon",
      perspective:{y:33.952954,x:118.349572,z:484.51,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition1: {
      billboardId: "parkPosition1Icon",
      perspective:{y:33.951978,x:118.347336,z:484.17,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition2: {
      billboardId: "parkPosition2Icon",
      perspective: {y:33.955534,x:118.340463,z:623.14,heading:0.3,pitch:-75.2,roll:0}
    },
    parkPosition3: {
      billboardId: "parkPosition3Icon",
      perspective: {y:33.951044,x:118.347176,z:483.85,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition4: {
      billboardId: "parkPosition4Icon",
      perspective: {y:33.95098,x:118.345313,z:483.83,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition5: {
      billboardId: "parkPosition5Icon",
      perspective: {y:33.951165,x:118.349801,z:483.89,heading:317.3,pitch:-32.5,roll:6.8}
    },
    parkPosition6: {
      billboardId: "parkPosition6Icon",
      perspective:{y:33.952954,x:118.349572,z:484.51,heading:317.3,pitch:-32.5,roll:6.8}
    },
  };
  let points=['parkPosition1Icon','parkPosition2Icon',
  'parkPosition3Icon','parkPosition4Icon',
  'parkPosition5Icon','parkPosition6Icon']
  let handler = new Cesium.ScreenSpaceEventHandler($viewer.scene.canvas);
  // 设置图标的单击事件的处理
  handler.setInputAction(function (movement) {
    let pick = $viewer.scene.pick(movement.position);
    let id = pick && pick.id && pick.id.id;
    if (pick) {
      if(id&&id.indexOf("park") !== -1){
      if(entityObj[id]&&entityObj[id].perspective){
        flyTo(entityObj[id].perspective)
      }
       points.map(item=>{
        $viewer.entities.getById(item)._show=true
       })
       store.commit("DigitalTwin/changeParkEventDetail", false);
       self.$bus.$emit("changeStyle");
      if(entityObj[id] && entityObj[id].billboardId == "parkPosition1Icon"){
        setTimeout(()=>{
          store.commit("DigitalTwin/changeParkShow", true);
        },2000)
        store.commit("DigitalTwin/changeParkCamera", tableDataC4D1);
        let parkDetail={parkName:'电商园区停车场',smogNum:5,camera:9,eleNum:74,used:84,spareNum:32,parkNum:4}
        store.commit("DigitalTwin/changeParkDetails",parkDetail);
        $viewer.entities.getById(entityObj[id].billboardId)._show=false
      }
      if(entityObj[id] && entityObj[id].billboardId == "parkPosition2Icon"){
        setTimeout(()=>{
          store.commit("DigitalTwin/changeParkShow", true);
        },2000)
        store.commit("DigitalTwin/changeParkCamera", tableDataC8);
        let parkDetail={parkName:'中宏停车场',smogNum:5,camera:9,eleNum:23,used:26,spareNum:14,parkNum:4}
        store.commit("DigitalTwin/changeParkDetails",parkDetail);
        $viewer.entities.getById(entityObj[id].billboardId)._show=false
      }
      if(entityObj[id] && entityObj[id].billboardId == "parkPosition3Icon"){
        // A6 3
        setTimeout(()=>{
          store.commit("DigitalTwin/changeParkShow", true);
        },2000)
        store.commit("DigitalTwin/changeParkCamera", tableDataA6);
        let parkDetail={parkName:'恒通停车场',smogNum:4,camera:11,eleNum:12,used:9,spareNum:8,parkNum:4}
        store.commit("DigitalTwin/changeParkDetails",parkDetail);
        $viewer.entities.getById(entityObj[id].billboardId)._show=false
      }
      if(entityObj[id] && entityObj[id].billboardId == "parkPosition4Icon"){
        // A1 4   
         
        setTimeout(()=>{
          store.commit("DigitalTwin/changeParkShow", true);
        },2000)
        store.commit("DigitalTwin/changeParkCamera", tableDataA1);
        let parkDetail={parkName:'东苑停车场',
        smogNum:3,camera:12,
        eleNum:35,used:12,spareNum:46,parkNum:4}
        store.commit("DigitalTwin/changeParkDetails",parkDetail);
        $viewer.entities.getById(entityObj[id].billboardId)._show=false
      }
      if(entityObj[id] && entityObj[id].billboardId == "parkPosition5Icon"){
        setTimeout(()=>{
          store.commit("DigitalTwin/changeParkShow", true);
        },2000)
        store.commit("DigitalTwin/changeParkCamera", tableDataD5);
        let parkDetail={parkName:'万宝停车场',smogNum:5,camera:16,eleNum:29,used:17,spareNum:21,parkNum:4}
        store.commit("DigitalTwin/changeParkDetails",parkDetail);
        $viewer.entities.getById(entityObj[id].billboardId)._show=false
      }
      if(entityObj[id] && entityObj[id].billboardId == "parkPosition6Icon"){
        setTimeout(()=>{
          store.commit("DigitalTwin/changeParkShow", true);
        },2000)
        store.commit("DigitalTwin/changeParkCamera", tableDataB4);
        let parkDetail={parkName:'电商第一街立体综合停车楼',smogNum:2,camera:14,eleNum:89,used:45,spareNum:105,parkNum:4}
        store.commit("DigitalTwin/changeParkDetails",parkDetail);
        $viewer.entities.getById(entityObj[id].billboardId)._show=false
      }
    }
     }}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
};
const flyTo = (center) => {
  $viewer.qtum.centerAt(center);
};
export { createParkBillboard, deleteParkBillboard};
