// 延迟时间加载
let throttle = (FN, delay) => {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      FN.call(this)
      timer = null
    }, delay)
  }
}

// 添加圆形动画
function addCircleAnimation(
    id,
    viewer,
    position,
    height,
    color = new Cesium.Color(255 / 255, 0 / 255, 0, 0.7)
) {
  viewer.entities.add({
    id:id,
    position: position,
    ellipse: {
      height: height,
      semiMinorAxis: 50,
      semiMajorAxis: 50,
      material: new qtum3d.CircleWaveMaterial({
        duration: 5e3,
        gradient: 0,
        count: 1,
        color: color
      })
    }
  });
}

export {
  throttle,
  addCircleAnimation
}
