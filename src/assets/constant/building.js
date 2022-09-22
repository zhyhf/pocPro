const fromDegrees = Cesium.Cartesian3.fromDegrees

function getAreaList(position) {
    return [
        [position.frontLeftTop, position.frontRightTop, position.frontRightBottom, position.frontLeftBottom],
        [position.backLeftTop, position.backRightTop, position.backRightBottom, position.backLeftBottom],
        [position.frontLeftTop, position.frontRightTop, position.backRightTop, position.backLeftTop],
        [position.frontLeftTop, position.backLeftTop, position.backLeftBottom, position.frontLeftBottom],
        [position.frontRightTop, position.backRightTop, position.backRightBottom, position.frontRightBottom]
    ]
}

// 华益
const hyPosition = {
    frontLeftTop: fromDegrees(...[118.34339, 33.954170, 35.73]),// 前左上
    frontRightTop: fromDegrees(...[118.343688, 33.954170, 35.73]), // 前右上
    frontLeftBottom: fromDegrees(...[118.343388, 33.954170, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.343688, 33.954170, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.343388, 33.954430, 35.73]), // 后左上
    backRightTop: fromDegrees(...[118.343688, 33.954430, 35.73]), // 后右上
    backLeftBottom: fromDegrees(...[118.343388, 33.954430, 6.46]), // 后左下
    backRightBottom: fromDegrees(...[118.343688, 33.954430, 6.46]), // 后右下
}
// 永成
const ycPosition = {
    frontLeftTop: fromDegrees(...[118.342909, 33.954165, 41.84]),// 前左上
    frontRightTop: fromDegrees(...[118.34321, 33.954165, 41.84]), // 前右上
    frontLeftBottom: fromDegrees(...[118.342909, 33.954165, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.34321, 33.954165, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.342909, 33.954438, 41.84]), // 后左上
    backRightTop: fromDegrees(...[118.34321, 33.954438, 41.84]), // 后右上
    backLeftBottom: fromDegrees(...[118.342909, 33.954438, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.34321, 33.954438, 6.64]), // 后右下
}

// 瑞谷
const rgPosition = {
    frontLeftTop: fromDegrees(...[118.342123, 33.954165, 60]),// 前左上
    frontRightTop: fromDegrees(...[118.342618, 33.954165, 60]), // 前右上
    frontLeftBottom: fromDegrees(...[118.342123, 33.954165, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.342618, 33.954165, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.342123, 33.95443, 60]), // 后左上
    backRightTop: fromDegrees(...[118.342618, 33.95443, 60]), // 后右上
    backLeftBottom: fromDegrees(...[118.342123, 33.95443, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.342618, 33.95443, 6.64]), // 后右下
}

// 政泰B
const ztPosition = {
    frontLeftTop: fromDegrees(...[118.340906, 33.954165, 60]),// 前左上
    frontRightTop: fromDegrees(...[118.341393, 33.954165, 60]), // 前右上
    frontLeftBottom: fromDegrees(...[118.340906, 33.954165, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.341393, 33.954165, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.340906, 33.95443, 60]), // 后左上
    backRightTop: fromDegrees(...[118.341393, 33.95443, 60]), // 后右上
    backLeftBottom: fromDegrees(...[118.340906, 33.95443, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.341393, 33.95443, 6.64]), // 后右下
}

// 政泰A
const ztaPosition = {
    frontLeftTop: fromDegrees(...[118.340422, 33.954165, 42]),// 前左上
    frontRightTop: fromDegrees(...[118.340717, 33.954165, 42]), // 前右上
    frontLeftBottom: fromDegrees(...[118.340422, 33.954165, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.340717, 33.954165, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.340422, 33.954424, 42]), // 后左上
    backRightTop: fromDegrees(...[118.340717, 33.95443, 42]), // 后右上
    backLeftBottom: fromDegrees(...[118.340422, 33.954424, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.340717, 33.95443, 6.64]), // 后右下
}

// 邗润
const hrPosition = {
    frontLeftTop: fromDegrees(...[118.339944, 33.954228, 42]),// 前左上
    frontRightTop: fromDegrees(...[118.340239, 33.954228, 42]), // 前右上
    frontLeftBottom: fromDegrees(...[118.339944, 33.954228, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.340239, 33.954228, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.339944, 33.954477, 42]), // 后左上
    backRightTop: fromDegrees(...[118.340239, 33.954477, 42]), // 后右上
    backLeftBottom: fromDegrees(...[118.339944, 33.954477, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.340239, 33.954477, 6.64]), // 后右下
}

// 恒同
const htPosition = {
    frontLeftTop: fromDegrees(...[118.340990, 33.954662, 45]),// 前左上
    frontRightTop: fromDegrees(...[118.341350, 33.954662, 45]), // 前右上
    frontLeftBottom: fromDegrees(...[118.340990, 33.954662, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.341350, 33.954662, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.340990, 33.955125, 45]), // 后左上
    backRightTop: fromDegrees(...[118.341350, 33.955125, 45]), // 后右上
    backLeftBottom: fromDegrees(...[118.340990, 33.955125, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.341350, 33.955125, 6.64]), // 后右下
}

// 盛详
const sxPosition = {
    frontLeftTop: fromDegrees(...[118.339325, 33.955141, 81]),// 前左上
    frontRightTop: fromDegrees(...[118.339798, 33.955141, 81]), // 前右上
    frontLeftBottom: fromDegrees(...[118.339325, 33.955141, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.339798, 33.955141, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.339325, 33.955383, 81]), // 后左上
    backRightTop: fromDegrees(...[118.339798, 33.955383, 81]), // 后右上
    backLeftBottom: fromDegrees(...[118.339325, 33.955383, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.339798, 33.955383, 6.64]), // 后右下
}

// 齐智
const qzPosition = {
    frontLeftTop: fromDegrees(...[118.340012, 33.955925, 44]),// 前左上
    frontRightTop: fromDegrees(...[118.3403002, 33.955925, 44]), // 前右上
    frontLeftBottom: fromDegrees(...[118.340012, 33.955925, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.3403002, 33.955925, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.340012, 33.956172, 44]), // 后左上
    backRightTop: fromDegrees(...[118.3403002, 33.956172, 44]), // 后右上
    backLeftBottom: fromDegrees(...[118.340012, 33.956172, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.3403002, 33.956172, 6.64]), // 后右下
}

// 豫信
const yxPosition = {
    frontLeftTop: fromDegrees(...[118.343301, 33.955924, 44]),// 前左上
    frontRightTop: fromDegrees(...[118.343683, 33.955924, 44]), // 前右上
    frontLeftBottom: fromDegrees(...[118.343301, 33.955924, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.343683, 33.955924, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.343301, 33.956185, 44]), // 后左上
    backRightTop: fromDegrees(...[118.343683, 33.956185, 44]), // 后右上
    backLeftBottom: fromDegrees(...[118.343301, 33.956185, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.343683, 33.956185, 6.64]), // 后右下
}

// 汇成
const hcPosition = {
    frontLeftTop: fromDegrees(...[118.343237, 33.955490, 36.5]),// 前左上
    frontRightTop: fromDegrees(...[118.343536, 33.955490, 36.5]), // 前右上
    frontLeftBottom: fromDegrees(...[118.343237, 33.955490, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.343536, 33.955490, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.343237, 33.955741, 36.5]), // 后左上
    backRightTop: fromDegrees(...[118.343536, 33.955741, 36.5]), // 后右上
    backLeftBottom: fromDegrees(...[118.343237, 33.955741, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.343536, 33.955741, 6.64]), // 后右下
}

// 通元
const tyPosition = {
    frontLeftTop: fromDegrees(...[118.343606, 33.955254, 36.5]),// 前左上
    frontRightTop: fromDegrees(...[118.344276, 33.955254, 36.5]), // 前右上
    frontLeftBottom: fromDegrees(...[118.343606, 33.955254, 6.46]), // 前左下
    frontRightBottom: fromDegrees(...[118.344276, 33.955254, 6.46]), // 前右下
    backLeftTop: fromDegrees(...[118.343606, 33.955627, 36.5]), // 后左上
    backRightTop: fromDegrees(...[118.344276, 33.955627, 36.5]), // 后右上
    backLeftBottom: fromDegrees(...[118.343606, 33.955627, 6.64]), // 后左下
    backRightBottom: fromDegrees(...[118.344276, 33.955627, 6.64]), // 后右下
}

const hyCoverAreas = getAreaList(hyPosition)
const ycCoverAreas = getAreaList(ycPosition)
const rgCoverAreas = getAreaList(rgPosition)
const ztCoverAreas = getAreaList(ztPosition)
const ztaCoverAreas = getAreaList(ztaPosition)
const hrCoverAreas = getAreaList(hrPosition)
const htCoverAreas = getAreaList(htPosition)
const sxCoverAreas = getAreaList(sxPosition)
const qzCoverAreas = getAreaList(qzPosition)
const yxCoverAreas = getAreaList(yxPosition)
const hcCoverAreas = getAreaList(hcPosition)
const tyCoverAreas = getAreaList(tyPosition)

const buildingIcon = [
    {
        id: "hyBuilding",
        position: [118.34353, 33.954300, 39.73],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "ycBuilding",
        position: [118.343049, 33.954300, 45.84],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "rgBuilding",
        position: [118.342383, 33.954300, 64],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "ztBuilding",
        position: [118.341155, 33.9542975, 62],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "ztaBuilding",
        position: [118.3405695, 33.9542945, 44],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "hrBuilding",
        position: [118.3400915, 33.9543525, 44],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "htBuilding",
        position: [118.34117, 33.9548935, 47],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "sxBuilding",
        position: [118.3395615, 33.955267, 83],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "qzBuilding",
        position: [118.3401561, 33.9560485, 46],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "yxBuilding",
        position: [118.343492, 33.9560545, 46],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "hcBuilding",
        position: [118.3433865, 33.9556155, 38.5],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
    {
        id: "tyBuilding",
        position: [118.343936, 33.9554405, 38.5],
        image: require('@/assets/icon/building/building-icon.png'),
        scale: 0.4,
    },
]

const entityObj = {
    hyBuilding: {
        billboardId: "hyBuilding",
        perspective: {
            y: 33.953294,
            x: 118.343612,
            z: 40.26,
            heading: 357.9,
            pitch: -5.9,
            roll: 0.1,
        },
    },
    ycBuilding: {
        billboardId: "ycBuilding",
        perspective: {
            y: 33.953279,
            x: 118.343104,
            z: 48.86,
            heading: 357.2,
            pitch: -13,
            roll: 0.1,
        },
    },
    rgBuilding: {
        billboardId: "rgBuilding",
        perspective: {
            y: 33.952676,
            x: 118.34234,
            z: 65.02,
            heading: 358.2,
            pitch: -6.8,
            roll: 0,
        },
    },
    ztBuilding: {
        billboardId: 'ztBuilding',
        perspective: {
            y: 33.952973,
            x: 118.341076,
            z: 48.2,
            heading: 3.6,
            pitch: -5,
            roll: 359.8,
        },
    },
    ztaBuilding: {
        billboardId: 'ztaBuilding',
        perspective: {
            y: 33.952958,
            x: 118.340606,
            z: 45.87,
            heading: 0.2,
            pitch: -4,
            roll: 359.8,
        },
    },
    hrBuilding: {
        billboardId: 'hrBuilding',
        perspective: {
            y: 33.953256,
            x: 118.340071,
            z: 42.26,
            heading: 0,
            pitch: -5.2,
            roll: 359.8,
        },
    },
    htBuilding: {
        billboardId: 'htBuilding',
        perspective: {
            y: 33.954894,
            x: 118.339679,
            z: 86.11,
            heading: 90.9,
            pitch: -22.1,
            roll: 359.6,
        },
    },
    sxBuilding: {
        billboardId: 'sxBuilding',
        perspective: {
            y: 33.954227,
            x: 118.33853,
            z: 136.35,
            heading: 40,
            pitch: -31.3,
            roll: 359.7,
        },
    },
    qzBuilding: {
        billboardId: 'qzBuilding',
        perspective: {
            y: 33.955183,
            x: 118.340562,
            z: 71.13,
            heading: 336.9,
            pitch: -23.8,
            roll: 0.1,
        },
    },
    yxBuilding: {
        billboardId: 'yxBuilding',
        perspective: {
            y: 33.955267,
            x: 118.344006,
            z: 81.09,
            heading: 332.2,
            pitch: -26.1,
            roll: 0.2,
        },
    },
    hcBuilding: {
        billboardId: 'hcBuilding',
        perspective: {
            y: 33.954806,
            x: 118.343514,
            z: 48.75,
            heading: 351.6,
            pitch: -16.5,
            roll: 0.1,
        },
    },
    tyBuilding: {
        billboardId: 'tyBuilding',
        perspective: {
            y: 33.955859,
            x: 118.345096,
            z: 50,
            heading: 243.4,
            pitch: -14.8,
            roll: 0.2,
        },
    }
};

const buildingInfo = {
    hyBuilding: {
        title: '华益大厦A',
        tableData: [
            {
                name: '1',
                industry: '1665㎡',
                enterprise: [
                    {
                        name: "江苏九淼科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    }
                ]
            },
            {
                name: "2",
                industry: "1665㎡",
                enterprise: [
                    {
                        name: "江苏九淼科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    }
                ]
            },
            {
                name: "3",
                industry: "1665㎡",
                enterprise: [
                    {
                        name: "江苏九淼科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    }
                ]
            },
            {
                name: "4",
                industry: "1665㎡",
                enterprise: [
                    {
                        name: "江苏九淼科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    }
                ]
            }
        ]
    }
}

export {
    // 建筑遮罩
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
    tyCoverAreas,

    // 建筑上的图标
    buildingIcon,
    // 每个建筑的相关信息
    buildingInfo,
    // 图标实体，用于设置点击事件
    entityObj
}
