import {
  throttle
} from './utils'

// 气泡显示 - id对应component的页面文件 不随鼠标移动变化，始终面向视角方向
function createBubble() {
  $viewer.scene.preRender.addEventListener(throttle(getPos, 10))
  // $viewer.scene.preRender.addEventListener(getPos)
}

function getPos() {
  let posArr = [
    {
      id: 'MeetingCamera',
      position: [120.725761, 27.976244, 24],
      offset: [-10, 2]
    }
  ]
  for (let index = 0; index < posArr.length; index++) {
    let DOM = document.getElementById(posArr[index].id)
    // 世界坐标转屏幕坐标  Cesium.SceneTransforms.wgs84ToWindowCoordinates
    let windowPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      $viewer.scene,
      Cesium.Cartesian3.fromDegrees(...posArr[index].position)
    );
    // 气泡的屏幕显示位置样式定义  DOM.style
    if (windowPosition) {
      DOM.style.top = windowPosition.y - DOM.offsetHeight + posArr[index].offset[0] + "px";
      DOM.style.left = windowPosition.x - DOM.offsetWidth / posArr[index].offset[1] + "px";
    }

  }
}

export {
  createBubble
}
