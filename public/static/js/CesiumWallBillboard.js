/**
 * 使用方法
 * 
 * new Cesium.CesiumWallBillboard({
        viewer: viewer,
        center: {   // 广告牌中心点
            longitude: 118.057410,
            latitude: 24.630362,
            height: 80
        },
        width: 150,  // 广告牌宽度
        height: 50,  // 广告牌高度
        rotate: 180, // 正北顺时针角度
        content: createContent, //echart容器DOM || html代码 || image图片 || videoDOM视频DOM
         `<style>
              .border-box{padding: 5px;width:calc(100% - 14px);height:calc(100% - 14px);background: rgba(1, 19, 67, 0.4);border: 2px solid rgb(0, 161, 255);border-radius: 8px;font-size: 12px;color: white;}
              .border-box::before {position: absolute;top: -2px;bottom: -2px;left: 2px;width: calc(100% - 4px);content: "";border-top: 2px solid rgb(1, 104, 134);border-bottom: 2px solid rgb(1, 104, 134);z-index: 0;}
              .border-box::after {position: absolute;top: 2px;right: -2px;left: -2px;height: calc(100% - 4px);content: "";border-right: 2px solid rgb(1, 104, 134);border-left: 2px solid rgb(1, 104, 134);z-index: 0;}
          </style>
          <div class="border-box">
          <div>\"BSM\":\"370100000000091188\",</div>
          <div>\"CG\",\"3\",</div>
          <div>\"CODE\",\"370100\",</div>
          <div>\"CS\",\"15\",</div>
          <div>\"LG\",\"45\",</div>
          <div>\"NAME\",\"楼房91188\",</div>
          <div>\"UID\",\"bc2e4443-2fbb-11ea-9cec-380025e8e3aa\",</div>
          <div>\"id\",\"91188\"</div>
        </div>`
        followCamera:true || false, //是否跟随视角
        type:'chart' || 'html' || 'image' || 'video', // content的类型，echarts或html
        isTrans:true || false, //image材质背景是否透明
        flyTo:true || false
    });
 */
(function(window) {
  function CesiumWallBillboard(options) {
    options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
    this._center = options.center || {
      longitude: 118.05741,
      latitude: 24.630362,
      height: 20
    };
    this._width = options.width || 60;
    this._height = options.height || 40;
    this._rotate = options.rotate || 180.0;
    this._content = options.content || "";
    this._viewer = options.viewer;
    this._followCamera = options.followCamera;
    this._type = options.type;
    this._id = options.id;
    this._isTrans = options.isTrans;
    this._show = options.show;
    this.flyTo = options.flyTo;
    this._Init();
  }

  Object.defineProperties(CesiumWallBillboard.prototype, {
    center: {
      get: function() {
        return this._center;
      },
      set: function(e) {
        this._center = e;
      }
    },
    width: {
      get: function() {
        return this._width;
      },
      set: function(e) {
        this._width = e;
      }
    },
    height: {
      get: function() {
        return this._height;
      },
      set: function(e) {
        this._height = e;
      }
    },
    rotate: {
      get: function() {
        return this._rotate;
      },
      set: function(e) {
        this._rotate = e;
      }
    },
    viewer: {
      get: function() {
        return this._viewer;
      },
      set: function(e) {
        this._viewer = e;
      }
    }
  });

  CesiumWallBillboard.prototype._CreateImage = function(callback) {
    let _this = this,
      image = null;
    // 判断类型
    if (_this._type === "chart") {
      // 初始化echarts
      let chart = _this._content;
      chart.style.width = _this.width * 5 + "px";
      chart.style.height = _this.height * 5 + "px";
      let myChart = echarts.init(chart);
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line"
          }
        ],
        animation: false
      };
      myChart.setOption(option);
      // 将echarts转成base64码
      let src = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: "#fff"
      });
      image = src;
      callback(_this, image, _this._isTrans);
    } else if (_this._type === "html") {
      var data =
        "data:image/svg+xml," +
        "<svg xmlns='http://www.w3.org/2000/svg'>" +
        "<foreignObject width='100%' height='100%'>" +
        "<div xmlns='http://www.w3.org/1999/xhtml' style='width: 100%;height: 100%;'>" +
        this._content +
        "</div>" +
        "</foreignObject>" +
        "</svg>";
      var img = new Image();
      img.src = data;
      img.onload = function() {
        // 将 svg转换成canvas
        var canvas = document.createElement("canvas"); //准备空画布
        canvas.width = _this._width; //img.width;
        canvas.height = _this._height; //img.height;
        var context = canvas.getContext("2d"); //取得画布的2d绘图上下文
        context.drawImage(img, 0, 0);
        let image = canvas.toDataURL("png");
        callback(_this, image, "canvas", _this._isTrans);
      };
    } else if (_this._type === "image") {
      callback(_this, _this._content, "image", _this._isTrans);
    } else {
      callback(_this, _this._content, "video", _this._isTrans);
    }
  };
  CesiumWallBillboard.prototype._Init = function() {
    this._CreateImage(this._AddEntity);
  };

  CesiumWallBillboard.prototype._AddEntity = function(
    _this,
    element,
    type,
    isTrans
  ) {
    if (_this.flyTo) {
      
        let pointleft = _this.Utils.destinationVincenty(
          _this._center,
          _this._rotate + 90,
          _this.width / 16
        );
        let pointright = _this.Utils.destinationVincenty(
          _this._center,
          _this._rotate + 180 + 90,
          _this.width / 16
        );
        _this._viewer.entities.add({
          id: _this._id,
          wall: {
            classificationType: Cesium.ClassificationType.TERRAIN,
            positions: Cesium.Cartesian3.fromDegreesArrayHeights([
              pointleft.longitude,
              pointleft.latitude,
              pointleft.height,
              pointright.longitude,
              pointright.latitude,
              pointright.height
            ]),
            // positions: new Cesium.CallbackProperty((time, result) => {
            //   if (result && _this._followCamera) {
            //     var cameraposition = _this.Utils.cartesianToLonlat(
            //       viewer.camera.position
            //     );
            //     _this._rotate = _this.Utils.bearing(
            //       _this._center.latitude,
            //       _this._center.longitude,
            //       cameraposition.latitude,
            //       cameraposition.longitude
            //     );
            //   }
            // let pointleft = _this.Utils.destinationVincenty(
            //   _this._center,
            //   _this._rotate + 90,
            //   _this.width / 16
            // );
            // let pointright = _this.Utils.destinationVincenty(
            //   _this._center,
            //   _this._rotate + 180 + 90,
            //   _this.width / 16
            // );
            // return Cesium.Cartesian3.fromDegreesArrayHeights([
            //   pointleft.longitude,
            //   pointleft.latitude,
            //   pointleft.height,
            //   pointright.longitude,
            //   pointright.latitude,
            //   pointright.height
            // ]);
            // }, false),
            minimumHeights: [
              _this._center.height - _this.height / 16,
              _this._center.height - _this.height / 16
            ],
            maximumHeights: [
              _this.height / 16 + _this._center.height,
              _this.height / 16 + _this._center.height
            ],
            material:
              type === "video"
                ? element
                : new Cesium.ImageMaterialProperty({
                    image: element,
                    transparent: isTrans,
                  })
          },
          show: _this._show,
          click: function(t) {
            let cartesian = t.wall.positions._value;
            let positionObj = _this.Utils.cartesianToLonlat({
              y: (cartesian[1].y + cartesian[0].y) / 2,
              x: (cartesian[1].x + cartesian[0].x) / 2,
              z: (cartesian[1].z + cartesian[0].z) / 2
            });
            $viewer.qtum.centerAt({
              y: positionObj.latitude + 0.00132814,
              x: positionObj.longitude + 0.00163783,
              z: positionObj.height + 40,
              heading: 229.2,
              pitch: -9,
              roll: 0.2
            });
          }
        });
    } else {
        _this._viewer.entities.add({
          id: _this._id,
          wall: {
            classificationType: Cesium.ClassificationType.TERRAIN,
            positions: new Cesium.CallbackProperty((time, result) => {
              if (result && _this._followCamera) {
                var cameraposition = _this.Utils.cartesianToLonlat(
                  viewer.camera.position
                );
                _this._rotate = _this.Utils.bearing(
                  _this._center.latitude,
                  _this._center.longitude,
                  cameraposition.latitude,
                  cameraposition.longitude
                );
              }
              let pointleft = _this.Utils.destinationVincenty(
                _this._center,
                _this._rotate + 90,
                _this.width / 16
              );
              let pointright = _this.Utils.destinationVincenty(
                _this._center,
                _this._rotate + 180 + 90,
                _this.width / 16
              );
              return Cesium.Cartesian3.fromDegreesArrayHeights([
                pointleft.longitude,
                pointleft.latitude,
                pointleft.height,
                pointright.longitude,
                pointright.latitude,
                pointright.height
              ]);
            }, false),
            minimumHeights: [
              _this._center.height - _this.height / 16,
              _this._center.height - _this.height / 16
            ],
            maximumHeights: [
              _this.height / 16 + _this._center.height,
              _this.height / 16 + _this._center.height
            ],
            material:
              type === "video"
                ? element
                : new Cesium.ImageMaterialProperty({
                    image: element,
                    transparent: isTrans
                  })
          },
          show: _this._show
        });
    }
  };

  CesiumWallBillboard.prototype.Utils = {
    destinationVincenty: function(lonlat, brng, dist) {
      var ct = {
        a: 6378137,
        b: 6356752.3142,
        f: 1 / 298.257223563
      };
      var a = ct.a,
        b = ct.b,
        f = ct.f;

      var lon1 = lonlat.longitude;
      var lat1 = lonlat.latitude;

      var s = dist;
      var alpha1 = (brng * Math.PI) / 180.0;
      var sinAlpha1 = Math.sin(alpha1);
      var cosAlpha1 = Math.cos(alpha1);

      var tanU1 = (1 - f) * Math.tan((lat1 * Math.PI) / 180.0);
      var cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1),
        sinU1 = tanU1 * cosU1;
      var sigma1 = Math.atan2(tanU1, cosAlpha1);
      var sinAlpha = cosU1 * sinAlpha1;
      var cosSqAlpha = 1 - sinAlpha * sinAlpha;
      var uSq = (cosSqAlpha * (a * a - b * b)) / (b * b);
      var A =
        1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
      var B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));

      var sigma = s / (b * A),
        sigmaP = 2 * Math.PI;
      while (Math.abs(sigma - sigmaP) > 1e-12) {
        var cos2SigmaM = Math.cos(2 * sigma1 + sigma);
        var sinSigma = Math.sin(sigma);
        var cosSigma = Math.cos(sigma);
        var deltaSigma =
          B *
          sinSigma *
          (cos2SigmaM +
            (B / 4) *
              (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
                (B / 6) *
                  cos2SigmaM *
                  (-3 + 4 * sinSigma * sinSigma) *
                  (-3 + 4 * cos2SigmaM * cos2SigmaM)));
        sigmaP = sigma;
        sigma = s / (b * A) + deltaSigma;
      }

      var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
      var lat2 = Math.atan2(
        sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
        (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp)
      );
      var lambda = Math.atan2(
        sinSigma * sinAlpha1,
        cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1
      );
      var C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
      var L =
        lambda -
        (1 - C) *
          f *
          sinAlpha *
          (sigma +
            C *
              sinSigma *
              (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));

      var revAz = Math.atan2(sinAlpha, -tmp); // final bearing

      return {
        longitude: lon1 + (L * 180) / Math.PI,
        latitude: (lat2 * 180) / Math.PI,
        height: lonlat.height
      };
    },
    bearing: function(startLat, startLng, destLat, destLng) {
      let y = Math.sin(destLng - startLng) * Math.cos(destLat);
      let x =
        Math.cos(startLat) * Math.sin(destLat) -
        Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
      let brng = Math.atan2(y, x);

      const degrees = brng % (2 * Math.PI);
      return (degrees * 180) / Math.PI;
    },
    cartesianToLonlat: function(cartesian) {
      if (cartesian) {
        let cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(
          cartesian
        );
        return {
          longitude: Cesium.Math.toDegrees(cartographic.longitude),
          latitude: Cesium.Math.toDegrees(cartographic.latitude),
          height: cartographic.height
        };
      }
      return {
        longitude: 0,
        latitude: 0,
        height: 0
      };
    },
    lonLatToRadians: function(point) {
      return {
        longitude: Cesium.Math.toRadians(point.longitude),
        latitude: Cesium.Math.toRadians(point.latitude),
        height: point.height
      };
    }
  };

  window.Cesium.CesiumWallBillboard = CesiumWallBillboard;
})(window);
