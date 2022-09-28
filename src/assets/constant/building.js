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

const earlywarningIcon = [
    {
        id: "rgWarning",
        position: [118.342383, 33.954300, 64],
        image: require('@/assets/icon/warning/warning.png'),
        scale: 0.4,
    },
    {
        id: "htWarning",
        position: [118.34117, 33.9548935, 47],
        image: require('@/assets/icon/warning/warning.png'),
        scale: 0.4,
    },
    {
        id: "sxWarning",
        position: [118.3395615, 33.955267, 83],
        image: require('@/assets/icon/warning/warning.png'),
        scale: 0.4,
    },
    {
        id: "qzWarning",
        position: [118.3401561, 33.9560485, 46],
        image: require('@/assets/icon/warning/warning.png'),
        scale: 0.4,
    },
    {
        id: "yxWarning",
        position: [118.343492, 33.9560545, 46],
        image: require('@/assets/icon/warning/warning.png'),
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
    htBuilding: {
        title: '恒通大厦',
        tableData: [
            {
                name: '1',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "江苏创薪汇科技有限公司",
                        type: "信息技术服务",
                        contacts: "张  亮",
                        phone: "13151426920",
                        area: "156㎡",
                        contract: "2021.01.17",
                    },
                    {
                        name: "江苏创一知识产权服务有限公司",
                        type: "租赁商务服务",
                        contacts: "丁  超",
                        phone: "13951426929",
                        area: "68㎡",
                        contract: "2019.06.01",
                    },
                    {
                        name: "江苏丛德商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "黄 海",
                        phone: "15751423370",
                        area: "64㎡",
                        contract: "2019.01.21",
                    }, 
                    {
                        name: "江苏丛德商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "黄 海",
                        phone: "13851428992",
                        area: "35㎡",
                        contract: "2019.01.21",
                    },
                    {
                        name: "江苏恒达软件科技有限公司",
                        type: "信息技术服务",
                        contacts: "蔡 宇",
                        phone: "13351446921",
                        area: "124㎡",
                        contract: "2021.05.22",
                    }
                ]
            },
            {
                name: '2',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "江苏聚英人力资源管理服务有限公司",
                        type: "租赁商务服务",
                        contacts: "胡道学",
                        phone: "13851428992",
                        area: "104㎡",
                        contract: "2021.05.23",
                    },
                    {
                        name: "江苏灵童商务秘书有限公司",
                        type: "批发和零售",
                        contacts: "潘锋",
                        phone: "15751423370",
                        area: "76㎡",
                        contract: "2019.10.23",
                    },
                    {
                        name: "江苏马驹儿文化传媒有限公司",
                        type: "租赁商务服务",
                        contacts: "王  通",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2019.10.24",
                    },
                    {
                        name: "江苏美视影业有限公司",
                        type: "文体娱乐",
                        contacts: "周挺鹤",
                        phone: "13151426920",
                        area: "170㎡",
                        contract: "2019.10.25",
                    }
                ]
            },
            {
                name: '3',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "江苏祁运科技有限公司",
                        type: "租赁商务服务",
                        contacts: "戴雨颖",
                        phone: "13151426920",
                        area: "30㎡",
                        contract: "2021.04.01",
                    },
                    {
                        name: "江苏鑫泰汉固劳务有限公司",
                        type: "租赁商务服务",
                        contacts: "陈贺然",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2021.04.02",
                    },
                    {
                        name: "江苏鑫耀信息服务有限公司",
                        type: "租赁商务服务",
                        contacts: "周允生",
                        phone: "15751423370",
                        area: "80㎡",
                        contract: "2019.03.01",
                    },
                    {
                        name: "江苏宇德智能科技有限公司",
                        type: "信息技术服务",
                        contacts: "沈  群",
                        phone: "13151426920",
                        area: "130㎡",
                        contract: "2019.03.02",
                    },
                    {
                        name: "江苏泽成智能科技有限公司",
                        type: "",
                        contacts: "肖自强",
                        phone: "13855539882",
                        area: "120㎡",
                        contract: "2019.03.03",
                    }, 
                    {
                        name: "京派通信息技术宿迁有限公司",
                        type: "批发和零售",
                        contacts: "张  雱",
                        phone: "18755538923",
                        area: "680㎡",
                        contract: "2019.03.04",
                    }
                ]
            },
            {
                name: '4',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "京派通信息技术宿迁有限公司",
                        type: "批发和零售",
                        contacts: "张  雱",
                        phone: "13951426929",
                        area: "680㎡",
                        contract: "2019.03.05",
                    },
                    {
                        name: "快走（宿迁）国际旅行社有限公司",
                        type: "租赁商务服务",
                        contacts: "盛龙",
                        phone: "18755538923",
                        area: "25㎡",
                        contract: "2021.05.04",
                    },
                    {
                        name: "宿迁爱语实盛贸易有限公司",
                        type: "批发和零售",
                        contacts: "袁禾英",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2019.03.15",
                    },
                    {
                        name: "宿迁德润企业管理咨询有限公司",
                        type: "租赁商务服务",
                        contacts: "陈  峥",
                        phone: "13951426929",
                        area: "138㎡",
                        contract: "2019.03.16",
                    },
                    {
                        name: "宿迁鼎义成电子商务有限公司",
                        type: "批发和零售",
                        contacts: "彭加勤",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2019.03.07",
                    },
                    {
                        name: "宿迁菲丽熊电子商务有限公司",
                        type: "批发和零售",
                        contacts: "张陈",
                        phone: "13951426929",
                        area: "107㎡",
                        contract: "2019.03.08",
                    },
                    {
                        name: "宿迁福奥德电子商务有限公司",
                        type: "批发和零售",
                        contacts: "黄军兰",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2019.03.09",
                    }
                ]
            },
            {
                name: '5',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "宿迁贵昌茂电子商务有限公司",
                        type: "批发和零售",
                        contacts: "刘芳合",
                        phone: "18356206731",
                        area: "98㎡",
                        contract: "2019.05.10",
                    },
                    {
                        name: "宿迁宏久电子商务有限公司",
                        type: "批发和零售",
                        contacts: "李永城",
                        phone: "18356206732",
                        area: "35㎡",
                        contract: "2019.03.11",
                    },
                    {
                        name: "宿迁杰新物联智慧城市开发运营有限公司",
                        type: "信息技术服务",
                        contacts: "刘瑞苗",
                        phone: "18356206733",
                        area: "110㎡",
                        contract: "2019.03.12",
                    },
                    {
                        name: "宿迁京东通联物流有限公司",
                        type: "物流运输",
                        contacts: "张雱",
                        phone: "18356206734",
                        area: "60㎡",
                        contract: "2019.04.13",
                    },
                    {
                        name: "宿迁蓝玉大数据有限公司",
                        type: "信息技术服务",
                        contacts: "赖嵩岳",
                        phone: "18356206735",
                        area: "109㎡",
                        contract: "2019.03.14",
                    },
                    {
                        name: "宿迁隆恒倍旺电子商务有限公司",
                        type: "批发和零售",
                        contacts: "张  锦",
                        phone: "18356206736",
                        area: "89㎡",
                        contract: "2019.03.15",
                    },
                    {
                        name: "宿迁沐晴语欣贸易有限公司",
                        type: "批发和零售",
                        contacts: "林鹤",
                        phone: "18755538923",
                        area: "35㎡",
                        contract: "2019.06.16",
                    }
                ]
            },
            {
                name: '6',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "宿迁瑞浩晖缘贸易有限公司",
                        type: "批发和零售",
                        contacts: "林燕青",
                        phone: "17854635430",
                        area: "35㎡",
                        contract: "2019.03.17",
                    },
                    {
                        name: "宿迁市创业谷商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "张雷",
                        phone: "17854635431",
                        area: "105㎡",
                        contract: "2019.09.03",
                    },
                    {
                        name: "宿迁市福浩宸贸易有限公司",
                        type: "批发和零售",
                        contacts: "丁欣",
                        phone: "17854635432",
                        area: "100㎡",
                        contract: "2019.09.01",
                    },
                    {
                        name: "宿迁市怀德贸易有限公司 ",
                        type: "批发和零售",
                        contacts: "章杰",
                        phone: "17854635433",
                        area: "35㎡",
                        contract: "2019.07.02",
                    },
                    {
                        name: "宿迁市辉雅金商贸有限公司",
                        type: "批发和零售",
                        contacts: "张方女",
                        phone: "17854635434",
                        area: "35㎡",
                        contract: "2019.01.03",
                    },
                    {
                        name: "宿迁市京车汇汽车服务有限公司",
                        type: "机械设备修理",
                        contacts: "张小梅",
                        phone: "178546354335",
                        area: "200㎡",
                        contract: "2019.11.04",
                    },
                    {
                        name: "宿迁市品俱全电子商务有限公司",
                        type: "批发和零售",
                        contacts: "吴传凤",
                        phone: "17854635436",
                        area: "40㎡",
                        contract: "2019.07.05",
                    },
                    {
                        name: "宿迁市泉丘宏熙贸易有限公司",
                        type: "批发和零售",
                        contacts: "袁小燕",
                        phone: "17854635437",
                        area: "35㎡",
                        contract: "2019.09.06",
                    },
                    {
                        name: "宿迁市腾锐元贸易有限公司",
                        type: "批发和零售",
                        contacts: "袁志军",
                        phone: "17854635438",
                        area: "35㎡",
                        contract: "2019.03.07",
                    },
                    {
                        name: "宿迁市万木春信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "张绍英",
                        phone: "17854635439",
                        area: "70㎡",
                        contract: "2019.09.08",
                    }
                ]
            },
            {
                name: '7',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "宿迁市闻远广告制品有限公司",
                        type: "公共设施管理",
                        contacts: "李泼",
                        phone: "14765342301",
                        area: "105㎡",
                        contract: "2019.09.01",
                    },
                    {
                        name: "宿迁市鑫平胜商贸有限公司",
                        type: "批发和零售",
                        contacts: "黄锦亮",
                        phone: "14765342311",
                        area: "40㎡",
                        contract: "2021.03.28",
                    },
                    {
                        name: "宿迁市兴飞网络科技有限公司",
                        type: "信息技术服务",
                        contacts: "马书玲",
                        phone: "14765342321",
                        area: "35㎡",
                        contract: "2021.06.29",
                    },
                    {
                        name: "宿迁市萱薇晓雅商贸有限公司",
                        type: "批发和零售",
                        contacts: "位为婷",
                        phone: "14765342331",
                        area: "35㎡",
                        contract: "2021.03.30",
                    },
                    {
                        name: "宿迁市智熙慧轩贸易有限公司",
                        type: "批发和零售",
                        contacts: "张海",
                        phone: "14765342421",
                        area: "90㎡",
                        contract: "2019.03.31",
                    },
                    {
                        name: "宿迁伍陆资产管理有限公司",
                        type: "金融",
                        contacts: "刘中山",
                        phone: "14765342421",
                        area: "108㎡",
                        contract: "2021.04.01",
                    },
                    {
                        name: "宿迁鑫裕富电子商务有限公司",
                        type: "批发和零售",
                        contacts: "彭芬芬",
                        phone: "14745342421",
                        area: "35㎡",
                        contract: "2019.04.02",
                    }
                ]
            },
            {
                name: '8',
                industry: '1120㎡',
                enterprise: [
                    {
                        name: "宿迁一众会务会展服务有限公司",
                        type: "租赁商务服务",
                        contacts: "盛  龙",
                        phone: "13945637567",
                        area: "35㎡",
                        contract: "2019.01.14",
                    },
                    {
                        name: "宿迁忆佰熠电子商务有限公司",
                        type: "批发和零售",
                        contacts: "黄玉玲",
                        phone: "13234346576",
                        area: "35㎡",
                        contract: "2019.01.15",
                    },
                    {
                        name: "宿迁兆盈商服科技有限公司",
                        type: "批发和零售",
                        contacts: "李昌明",
                        phone: "13923546723",
                        area: "90㎡",
                        contract: "2021.03.28",
                    },
                    {
                        name: "宿迁正聚电子商务有限公司",
                        type: "批发和零售",
                        contacts: "张宇龙",
                        phone: "18386759878",
                        area: "40㎡",
                        contract: "2021.03.29",
                    },
                    {
                        name: "宿迁众睿合电子商务有限公司",
                        type: "批发和零售",
                        contacts: "刘平",
                        phone: "13923546123",
                        area: "35㎡",
                        contract: "2021.04.30",
                    },
                    {
                        name: "星小海(宿迁)科技有限公司",
                        type: "批发和零售",
                        contacts: "李旗莉",
                        phone: "13951436029",
                        area: "35㎡",
                        contract: "2021.03.31",
                    }
                ]
            }
        ]
    },
    hyBuilding: {
        title: '华益大厦A',
        tableData: [
            {
                name: '1',
                industry: '1665㎡',
                enterprise: [
                    {
                        name: "百安居信息技术（上海）有限公司宿迁分公司",
                        type: "租赁商务服务",
                        contacts: "俞轩",
                        phone: "13951426929",
                        area: "642㎡",
                        contract: "2021.04.06",
                    },
                    {
                        name: "江苏九淼科技有限公司",
                        type: "信息技术服务",
                        contacts: "陈军周",
                        phone: "18755538923",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    },
                    {
                        name: "江苏仁达项目管理咨询有限公司",
                        type: "建筑",
                        contacts: "陈怀敏",
                        phone: "18756003770",
                        area: "180㎡",
                        contract: "2021.06.15",
                    },
                    {
                        name: "江苏融众供应链管理有限公司",
                        type: "租赁商务服务",
                        contacts: "刘 超",
                        phone: "13251426921",
                        area: "50㎡",
                        contract: "2021.07.15",
                    }
                ]
            },
            {
                name: "2",
                industry: "1665㎡",
                enterprise: [
                    {
                        name: "江苏蔚车汽车销售有限公司",
                        type: "租赁商务服务",
                        contacts: "徐培军",
                        phone: "15744493772",
                        area: "1099㎡",
                        contract: "2021.05.09",
                    }
                ]
            },
            {
                name: "3",
                industry: "1665㎡",
                enterprise: [
                    {
                        name: "江苏应宇数据科技有限公司",
                        type: "信息技术服务",
                        contacts: "李  远",
                        phone: "13951426929",
                        area: "676㎡",
                        contract: "2021.04.09",
                    },
                    {
                        name: "江苏九淼科技有限公司",
                        type: "租赁商务服务",
                        contacts: "张敏",
                        phone: "15951426926",
                        area: "155㎡",
                        contract: "2019.07.20",
                    },
                    {
                        name: "江苏优众信息服务有限公司",
                        type: "信息技术服务",
                        contacts: "葛镇瑞",
                        phone: "13851426920",
                        area: "205㎡",
                        contract: "2019.07.29",
                    },
                    {
                        name: "江苏悦恒机电设备安装工程有限公司",
                        type: "机械设备修理",
                        contacts: "张晓利",
                        phone: "13751426929",
                        area: "110㎡",
                        contract: "2021.05.15",
                    },
                    {
                        name: "搜多多信息技术（宿迁）有限公司",
                        type: "租赁商务服务",
                        contacts: "陆迎春",
                        phone: "13651426929",
                        area: "64㎡",
                        contract: "2021.05.06",
                    },
                    {
                        name: "宿迁道豫商贸有限公司",
                        type: "批发和零售",
                        contacts: "穆良风",
                        phone: "19951426629",
                        area: "46.5㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁焦点科技有限公司",
                        type: "批发和零售",
                        contacts: "李磊",
                        phone: "17951426009",
                        area: "270㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁茂泰置业有限公司",
                        type: "房地产",
                        contacts: "程润",
                        phone: "18951556929",
                        area: "128㎡",
                        contract: "2021.01.28",
                    }

                ]
            },
            {
                name: "4",
                industry: "1665㎡",
                enterprise: [
                    {
                        name: "宿迁融众供应链管理有限公司",
                        type: "租赁商务服务",
                        contacts: "刘超",
                        phone: "13951426929",
                        area: "367㎡",
                        contract: "2021.04.03",
                    },
                    {
                        name: "宿迁市安羽科技有限公司",
                        type: "信息技术服务",
                        contacts: "刘培森",
                        phone: "15951426926",
                        area: "120㎡",
                        contract: "2019.09.15",
                    },
                    {
                        name: "宿迁市大拇指网络科技有限公司",
                        type: "信息技术服务",
                        contacts: "刘祖乐",
                        phone: "13551426920",
                        area: "196㎡",
                        contract: "2019.12.09",
                    },
                    {
                        name: "宿迁市萌萌小微企业服务有限公司",
                        type: "租赁商务服务",
                        contacts: "孙威",
                        phone: "13751426921",
                        area: "48㎡",
                        contract: "2021.05.06",
                    },
                    {
                        name: "宿豫区先飞信息服务经营部",
                        type: "信息技术服务",
                        contacts: "高先节",
                        phone: "13851426929",
                        area: "100㎡",
                        contract: "2019.12.09",
                    }
                ]
            }
        ]
    },
    qzBuilding: {
        title: '齐智大厦',
        tableData: [
            {
                name: '1',
                industry: '1870㎡',
                enterprise: [
                    {
                        name: "江苏虎聚汽车租赁服务有限公司",
                        type: "租赁商务服务",
                        contacts: "王 娜",
                        phone: "13951426929",
                        area: "280㎡",
                        contract: "2019.03.25",
                    },
                    {
                        name: "江苏九马进出口有限公司",
                        type: "批发和零售",
                        contacts: "陈亚力",
                        phone: "15951426926",
                        area: "59㎡",
                        contract: "2019.09.10",
                    },
                    {
                        name: "江苏润宁商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "王月兰",
                        phone: "15651426921",
                        area: "30㎡",
                        contract: "2019.09.06",
                    },
                    {
                        name: "江苏苏粤跨境电商综合服务有限公司",
                        type: "批发和零售",
                        contacts: "孙镭",
                        phone: "18951421924",
                        area: "230㎡",
                        contract: "2019.05.07",
                    }
                ]
            },
            {
                name: "2",
                industry: "1870㎡",
                enterprise: [
                    {
                        name: "青松嘉创信息科技（宿迁）有限公司",
                        type: "批发和零售",
                        contacts: "高潘潘",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁晟通汽车技术服务有限公司",
                        type: "批发和零售",
                        contacts: "潘咪",
                        phone: "15651426921",
                        area: "57㎡",
                        contract: "2019.04.19",
                    },
                    {
                        name: "宿迁高远国际贸易有限公司",
                        type: "批发和零售",
                        contacts: "金水林",
                        phone: "18951421924",
                        area: "92㎡",
                        contract: "2019.11.25",
                    },
                    {
                        name: "宿迁恒芮通信工程有限公司",
                        type: "",
                        contacts: "蔡  旺",
                        phone: "13351426929",
                        area: "62㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁神州易桥商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "王函彬",
                        phone: "13951426923",
                        area: "80㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁市博立威贸易有限公司",
                        type: "批发和零售",
                        contacts: "赵广博",
                        phone: "15951426926",
                        area: "30㎡",
                        contract: "2019.09.15",
                    },
                    {
                        name: "宿迁市晟鑫泰供应链有限公司",
                        type: "批发和零售",
                        contacts: "杜世康",
                        phone: "13951426929",
                        area: "30㎡",
                        contract: "2019.12.06",
                    }
                ]
            },
            {
                name: "3",
                industry: "1870㎡",
                enterprise: [
                    {
                        name: "宿迁市家家乐生鲜有限公司",
                        type: "批发和零售",
                        contacts: "娄卓尔",
                        phone: "137951426921",
                        area: "1500㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁市有元工艺品贸易有限公司",
                        type: "批发和零售",
                        contacts: "张先军",
                        phone: "15951426926",
                        area: "140㎡",
                        contract: "2020.03.01",
                    },
                    {
                        name: "宿迁旭锦物流有限公司",
                        type: "批发和零售",
                        contacts: "邵玉珍",
                        phone: "15351426914",
                        area: "60㎡",
                        contract: "2021.01.15",
                    },
                    {
                        name: "宿迁亿诚晟电子商务有限公司",
                        type: "批发和零售",
                        contacts: "陈玲",
                        phone: "13851426929",
                        area: "34㎡",
                        contract: "2019.03.02",
                    },
                    {
                        name: "江苏国讯网络有限公司",
                        type: "信息技术服务",
                        contacts: "邬成龙",
                        phone: "15951426929",
                        area: "32㎡",
                        contract: "2019.10.02",
                    },
                    {
                        name: "江苏国讯网络有限公司",
                        type: "信息技术服务",
                        contacts: "杜世康",
                        phone: "15951426929",
                        area: "90㎡",
                        contract: "2019.10.02",
                    },
                ]
            },
           
        ]
    },
    sxBuilding: {
        title: '盛祥大厦',
        tableData: [
            {
                name: '1',
                industry: '760㎡',
                enterprise: [
                    {
                        name: "江苏杰韬通信科技有限公司",
                        type: "信息技术服务",
                        contacts: "张杰",
                        phone: "13851426928",
                        area: "45㎡",
                        contract: "2019.12.09",
                    },
                    {
                        name: "江苏宿迁云众信息公共服务平台有限公司",
                        type: "信息技术服务",
                        contacts: "姜博",
                        phone: "15951426888",
                        area: "46㎡",
                        contract: "2019.12.17",
                    },
                    {
                        name: "江苏天异商贸集团有限公司",
                        type: "信息技术服务",
                        contacts: "裴昌锐",
                        phone: "18951426669",
                        area: "47㎡",
                        contract: "2019.12.10",
                    },
                    {
                        name: "宿迁市顺达镇村公共交通有限公司",
                        type: "物流运输",
                        contacts: "吴胜军",
                        phone: "15951429929",
                        area: "48㎡",
                        contract: "2019.11.28",
                    },
                    {
                        name: "宿迁政彩信息科技有限公司",
                        type: "批发和零售",
                        contacts: "裴昌锐",
                        phone: "13651427779",
                        area: "49㎡",
                        contract: "2019.11.25",
                    },
                    {
                        name: "北宿嘉泽文化传媒（宿迁）有限公司",
                        type: "批发和零售",
                        contacts: "李昊睿",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2019.10.01",
                    },
                    {
                        name: "江苏承业商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "叶敬沛",
                        phone: "16851426929",
                        area: "80㎡",
                        contract: "2021.02.03",
                    },
                    {
                        name: "江苏金泉建设工程有限公司",
                        type: "公共设施管理",
                        contacts: "丁俊",
                        phone: "17951426929",
                        area: "100㎡",
                        contract: "2019.08.22",
                    }
                ]
            },
            {
                name: "2",
                industry: "760㎡",
                enterprise: [
                    {
                        name: "江苏金润源包装制品有限公司",
                        type: "租赁商务服务",
                        contacts: "孙宇",
                        phone: "18951426929",
                        area: "100㎡",
                        contract: "2019.08.12",
                    },
                    {
                        name: "江苏力锐机电设备有限公司",
                        type: "批发和零售",
                        contacts: "张利凤",
                        phone: "17951426920",
                        area: "120㎡",
                        contract: "2019.08.26",
                    },
                    {
                        name: "江苏星邦众集科技有限公司",
                        type: "租赁商务服务",
                        contacts: "张立森",
                        phone: "18351420009",
                        area: "30㎡",
                        contract: "2021.04.16",
                    },
                    {
                        name: "江苏雨池企业管理服务有限公司",
                        type: "租赁商务服务",
                        contacts: "高帅",
                        phone: "13851426929",
                        area: "30㎡",
                        contract: "2019.04.23",
                    },
                    {
                        name: "金铲铲国际贸易江苏有限公司",
                        type: "批发和零售",
                        contacts: "苗齐",
                        phone: "13751426927",
                        area: "60㎡",
                        contract: "2019.11.15",
                    }
                ]
            },
            {
                name: "3",
                industry: "760㎡",
                enterprise: [
                    {
                        name: "乾畅坤电子商务（宿迁）有限公司",
                        type: "批发和零售",
                        contacts: "刘晓林",
                        phone: "13751426927",
                        area: "80㎡",
                        contract: "2019.09.19",
                    },
                    {
                        name: "宿迁丰圆宸馨信息科技有限公司",
                        type: "房地产",
                        contacts: "刘威",
                        phone: "18951426929",
                        area: "88㎡",
                        contract: "2021.04.22",
                    },
                    {
                        name: "宿迁浩淼泵业有限公司",
                        type: "批发和零售",
                        contacts: "李丹阳",
                        phone: "13851426920",
                        area: "90㎡",
                        contract: "2019.08.12",
                    },
                    {
                        name: "宿迁美格宝鑫汽车科技发展有限公司",
                        type: "制造业",
                        contacts: "张  伟",
                        phone: "13951426929",
                        area: "500㎡",
                        contract: "2021.06.01",
                    }
                ]
            },
            {
                name: "4",
                industry: "760㎡",
                enterprise: [
                    {
                        name: "宿迁市金学贸易有限公司",
                        type: "批发和零售",
                        contacts: "庄冬良",
                        phone: "18951426921",
                        area: "60㎡",
                        contract: "2019.09.20",
                    },
                    {
                        name: "宿迁市九千七电子商务有限公司",
                        type: "批发和零售",
                        contacts: "袁欣琦",
                        phone: "14951426922",
                        area: "88㎡",
                        contract: "2021.02.22",
                    },
                    {
                        name: "宿迁市茂昂供应链有限公司",
                        type: "物流运输",
                        contacts: "卓启龙",
                        phone: "13851428991",
                        area: "110㎡",
                        contract: "2021.08.23",
                    },
                    {
                        name: "宿迁市雅弥优格网络运营有限公司",
                        type: "信息技术服务",
                        contacts: "叶青",
                        phone: "13200026929",
                        area: "161㎡",
                        contract: "2021.11.30",
                    },
                    {
                        name: "宿迁市云众商务秘书有限公司",
                        type: "租赁商务服务",
                        contacts: "姜博",
                        phone: "13851426829",
                        area: "30㎡",
                        contract: "2021.04.27",
                    },
                    {
                        name: "宿迁味央中央厨房管理有限公司",
                        type: "住宿餐饮",
                        contacts: "王兴宇",
                        phone: "18351426929",
                        area: "80㎡",
                        contract: "2019.07.01",
                    },
                    {
                        name: "宿迁云慧万方科技有限公司",
                        type: "租赁商务服务",
                        contacts: "徐星",
                        phone: "13551426925",
                        area: "30㎡",
                        contract: "2019.06.01",
                    }
                ]
            }
        ]
    },
    hrBuilding: {
        title: '邗润大厦',
        tableData: [
            {
                name: '1',
                industry: '1327㎡',
                enterprise: [
                    {
                        name: "凤和麒（江苏）科技信息有限公司",
                        type: "科学研究",
                        contacts: "刘丙双",
                        phone: "13951426929",
                        area: "117㎡",
                        contract: "2021.03.09",
                    },
                    {
                        name: "江苏俊采星驰信息技术有限公司",
                        type: "信息技术服务",
                        contacts: "王浩",
                        phone: "13551426925",
                        area: "235㎡",
                        contract: "2019.07.08",
                    },
                    {
                        name: "江苏康古堂健康科技有限公司",
                        type: "批发和零售",
                        contacts: "李海刚",
                        phone: "18951426929",
                        area: "236㎡",
                        contract: "2019.07.29",
                    },
                    {
                        name: "江苏三五二环保科技有限公司",
                        type: "科学研究",
                        contacts: "李劲松",
                        phone: "13851426929",
                        area: "237㎡",
                        contract: "2019.05.15",
                    }
                ]
            },
            {
                name: "2",
                industry: "1327㎡",
                enterprise: [
                    {
                        name: "南京鼎鼎信用管理有限公司宿迁分公司",
                        type: "租赁商务服务",
                        contacts: "庄朝辉",
                        phone: "13851426929",
                        area: "238㎡",
                        contract: "2019.05.16",
                    },
                    {
                        name: "南京威安消防设备工程有限责任公司宿迁分公司",
                        type: "公共设施管理",
                        contacts: "于莉莉",
                        phone: "13951426929",
                        area: "239㎡",
                        contract: "2019.12.01",
                    },
                    {
                        name: "宿迁京喜科技有限公司",
                        type: "批发和零售",
                        contacts: "李昌明",
                        phone: "18951426920",
                        area: "266㎡",
                        contract: "2021.09.30",
                    }
                ]
            },
            {
                name: "3",
                industry: "1327㎡",
                enterprise: [
                    {
                        name: "宿迁润沽贸易有限公司",
                        type: "批发和零售",
                        contacts: "童  娟",
                        phone: "13551426922",
                        area: "1200㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁市天牛网络科技有限公司",
                        type: "信息技术服务",
                        contacts: "罗  桂",
                        phone: "13851426992",
                        area: "32㎡",
                        contract: "2019.05.22",
                    },
                    {
                        name: "宿豫区天为网络科技工作室",
                        type: "信息技术服务",
                        contacts: "李经纬",
                        phone: "15753426929",
                        area: "60㎡",
                        contract: "2019.01.07",
                    },
                    {
                        name: "宿迁市以淳木家居有限公司",
                        type: "制造业",
                        contacts: "宗渠先",
                        phone: "18951423390",
                        area: "32㎡",
                        contract: "2021.01.19",
                    }
                ]
            }
        ]
    },
    ztaBuilding: {
        title: '政泰大厦A',
        tableData: [
            {
                name: '1',
                industry: '470㎡',
                enterprise: [
                    {
                        name: "江苏博爱同源商贸有限公司",
                        type: "批发和零售",
                        contacts: "陆勇",
                        phone: "13951426929",
                        area: "200㎡",
                        contract: "2021.01.10",
                    },
                    {
                        name: "宿迁胜赢企业管理有限公司",
                        type: "信息技术服务",
                        contacts: "付愚",
                        phone: "13851426992",
                        area: "35㎡",
                        contract: "2021.09.15",
                    },
                    {
                        name: "宿迁币链天下科技有限公司",
                        type: "信息技术服务",
                        contacts: "朱云鹏",
                        phone: "15753426929",
                        area: "55㎡",
                        contract: "2019.09.09",
                    }
                ]
            },
            {
                name: "2",
                industry: "470㎡",
                enterprise: [
                    {
                        name: "宿迁名亚生态景观有限公司",
                        type: "公共设施管理",
                        contacts: "梁聪聪",
                        phone: "18951423390",
                        area: "470㎡",
                        contract: "2021.02.15",
                    }
                ]
            }
        ]
    },
    yx1: {
        title: '豫信大厦',
        tableData: [
            {
                name: '1',
                industry: '630㎡',
                enterprise: [
                    {
                        name: "宿迁市贤泽人力资源有限公司",
                        type: "租赁商务服务",
                        contacts: "胡长亮",
                        phone: "13951426929",
                        area: "175㎡",
                        contract: "2021.08.12",
                    },
                    {
                        name: "江苏敬肤护肤品有限公司",
                        type: "批发和零售",
                        contacts: "王康",
                        phone: "15753426929",
                        area: "135㎡",
                        contract: "2019.09.19",
                    },
                    {
                        name: "江苏思纬智能科技有限公司",
                        type: "批发和零售",
                        contacts: "孔辉",
                        phone: "18951423390",
                        area: "46㎡",
                        contract: "2021.01.25",
                    },
                    {
                        name: "勤和商务服务（宿迁）有限公司",
                        type: "信息技术服务",
                        contacts: "周  炯",
                        phone: "13551426922",
                        area: "51㎡",
                        contract: "2019.06.25",
                    },
                    {
                        name: "宿宁计算机信息服务中心",
                        type: "租赁商务服务",
                        contacts: "丁丹丹",
                        phone: "15753426928",
                        area: "124㎡",
                        contract: "2019.09.20",
                    }
                ]
            },
            {
                name: '2',
                industry: '630㎡',
                enterprise: [
                    {
                        name: "宿迁国民电力有限公司",
                        type: "批发和零售",
                        contacts: "徐志平",
                        phone: "13151426920",
                        area: "100㎡",
                        contract: "2019.04.01",
                    },
                    {
                        name: "宿迁汇恒信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "袁林",
                        phone: "13851426929",
                        area: "97㎡",
                        contract: "2021.02.22",
                    },
                    {
                        name: "宿迁如涵电子商务有限公司",
                        type: "批发和零售",
                        contacts: "邵其亮",
                        phone: "18951426919",
                        area: "120㎡",
                        contract: "2019.07.25",
                    },
                    {
                        name: "宿迁市岳泽景观工程设计有限公司",
                        type: "公共设施管理",
                        contacts: "王  乐",
                        phone: "13851426920",
                        area: "230㎡",
                        contract: "2019.04.16",
                    },
                    {
                        name: "宿迁优则仕教育咨询有限公司",
                        type: "租赁商务服务",
                        contacts: "乔昆鹏",
                        phone: "18951426888",
                        area: "80㎡",
                        contract: "2019.05.01",
                    }
                ]
            }
        ]
    },
    hcBuilding: {
        title: '汇成大厦',
        tableData: [
            {
                name: '1',
                industry: '390㎡',
                enterprise: [
                    {
                        name: "常州钧晨信息服务有限公司宿迁分公司",
                        type: "租赁商务服务",
                        contacts: "陈军周",
                        phone: "18951426888",
                        area: "36㎡",
                        contract: "2021.05.25",
                    },
                    {
                        name: "江苏迅诺通信科技有限公司",
                        type: "信息技术服务",
                        contacts: "朱海旺",
                        phone: "17851426920",
                        area: "110㎡",
                        contract: "2019.06.05",
                    },
                    {
                        name: "江苏迅诺通信科技有限公司",
                        type: "信息技术服务",
                        contacts: "朱海旺",
                        phone: "13851426929",
                        area: "120㎡",
                        contract: "2019.06.05",
                    },
                    {
                        name: "宿迁核盾建筑技术有限公司",
                        type: "制造业",
                        contacts: "刘  方",
                        phone: "18351426929",
                        area: "60㎡",
                        contract: "2019.05.05",
                    }
                ]
            },
            {
                name: '2',
                industry: '390㎡',
                enterprise: [
                    {
                        name: "宿迁市百通规划设计有限公司",
                        type: "",
                        contacts: "华亮亮",
                        phone: "13951426929",
                        area: "98㎡",
                        contract: "2021.06.15",
                    },
                    {
                        name: "宿迁市嘉博企业管理有限公司",
                        type: "租赁商务服务",
                        contacts: "张磊",
                        phone: "15755059876",
                        area: "30㎡",
                        contract: "2021.06.01",
                    },
                    {
                        name: "宿迁新硕熙照明工程有限公司",
                        type: "批发和零售",
                        contacts: "周杰",
                        phone: "13151426929",
                        area: "90㎡",
                        contract: "2019.11.15",
                    },      
                    {
                        name: "宿迁云帆传媒有限公司",
                        type: "批发和零售",
                        contacts: "吴宝库",
                        phone: "13251426929",
                        area: "135㎡",
                        contract: "2021.12.03",
                    },
                    {
                        name: "宿迁中利测绘工程有限公司",
                        type: "租赁商务服务",
                        contacts: "袁涛",
                        phone: "13851426929",
                        area: "32㎡",
                        contract: "2021.03.25",
                    }
                ]
            }
        ]
    },
    tyBuilding: {
        title: '通元大厦',
        tableData: [
            {
                name: '1',
                industry: '1500㎡',
                enterprise: [
                    {
                        name: "江苏金伙伴电子科技有限公司",
                        type: "信息技术服务",
                        contacts: "吴麒",
                        phone: "13951426929",
                        area: "676㎡",
                        contract: "2021.04.25",
                    },
                    {
                        name: "江苏善德新能源有限公司",
                        type: "科学研究",
                        contacts: "左德洲",
                        phone: "15755059876",
                        area: "200㎡",
                        contract: "2019.06.05",
                    },
                    {
                        name: "宿迁莱埔数字新材料有限公司",
                        type: "公共设施管理",
                        contacts: "张永辉",
                        phone: "18499902884",
                        area: "565㎡",
                        contract: "2021.06.16",
                    },
                    {
                        name: "宿迁市富发电子商务有限公司",
                        type: "批发和零售",
                        contacts: "杨辉",
                        phone: "18366678322",
                        area: "40㎡",
                        contract: "2019.06.14",
                    }
                ]
            },
            {
                name: '2',
                industry: '1500㎡',
                enterprise: [
                    {
                        name: "宿迁兴腾经济贸易商行",
                        type: "批发和零售",
                        contacts: "张世洲",
                        phone: "15751426927",
                        area: "60㎡",
                        contract: "2019.06.25",
                    },
                    {
                        name: "宿迁亿特医疗器械有限公司",
                        type: "批发和零售",
                        contacts: "张  苗",
                        phone: "18366678322",
                        area: "80㎡",
                        contract: "2020.10.25",
                    },
                    {
                        name: "宿迁智恩商务信息咨询服务中心",
                        type: "租赁商务服务",
                        contacts: "郑智利",
                        phone: "13951426929",
                        area: "120㎡",
                        contract: "2019.10.18",
                    }
                ]
            }
        ]
    },
    rgBuilding: {
        title: '瑞谷大厦',
        tableData: [
            {
                name: '1',
                industry: '815㎡',
                enterprise: [
                    {
                        name: "江苏经天纬地网络科技有限公司",
                        type: "信息技术服务",
                        contacts: "王坤",
                        phone: "15751428771",
                        area: "88㎡",
                        contract: "2020.03.01",
                    },
                    {
                        name: "江苏森贝健康管理有限公司",
                        type: "批发和零售",
                        contacts: "臧建东",
                        phone: "13855573882",
                        area: "87㎡",
                        contract: "2019.05.01",
                    },
                    {
                        name: "江苏苏恩科技有限公司",
                        type: "信息技术服务",
                        contacts: "赵雷",
                        phone: "13151421129",
                        area: "223㎡",
                        contract: "2021.02.18",
                    },
                    {
                        name: "江苏新匠景观工程有限公司",
                        type: "",
                        contacts: "张路路",
                        phone: "18956006929",
                        area: "64㎡",
                        contract: "2020.03.01",
                    },
                    {
                        name: "江苏云都盈和科技有限公司",
                        type: "批发和零售",
                        contacts: "郭云",
                        phone: "13151426911",
                        area: "294㎡",
                        contract: "2021.12.03",
                    },
                    {
                        name: "曼威工程科技宿迁有限公司",
                        type: "",
                        contacts: "朱其瑞",
                        phone: "13751426920",
                        area: "58㎡",
                        contract: "2021.04.19",
                    }
                ]
            },
            {
                name: '2',
                industry: '815㎡',
                enterprise: [
                    {
                        name: "宿迁白光视觉设计有限公司",
                        type: "租赁商务服务",
                        contacts: "李婷婷",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2021.01.15",
                    },
                    {
                        name: "宿迁楚韵通信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "杜银凤",
                        phone: "13151426911",
                        area: "55㎡",
                        contract: "2020.03.01",
                    },
                    {
                        name: "宿迁得一灵本草生物科技有限公司",
                        type: "信息技术服务",
                        contacts: "徐万里",
                        phone: "18951420929",
                        area: "100㎡",
                        contract: "2021.05.15",
                    },
                    {
                        name: "宿迁扶摇信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "杨宁",
                        phone: "13451455929",
                        area: "35㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁谷方生物科技有限公司",
                        type: "批发和零售",
                        contacts: "吴佩佩",
                        phone: "18951433929",
                        area: "55㎡",
                        contract: "2021.04.21",
                    },
                    {
                        name: "宿迁宏境环保科技有限公司",
                        type: "",
                        contacts: "潘韦杰",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2021.09.26",
                    },
                    {
                        name: "宿迁今天艺品有限公司",
                        type: "批发和零售",
                        contacts: "庞超",
                        phone: "15951426028",
                        area: "68㎡",
                        contract: "2019.03.25",
                    },
                    {
                        name: "宿迁巨拓装饰工程有限公司",
                        type: "",
                        contacts: "韦一",
                        phone: "13961126992",
                        area: "50㎡",
                        contract: "2021.01.05",
                    }
                ]
            },
            {
                name: '3',
                industry: '815㎡',
                enterprise: [
                    {
                        name: "宿迁鲲鹏信息科技服务有限公司",
                        type: "租赁商务服务",
                        contacts: "沈炫合",
                        phone: "13961126992",
                        area: "90㎡",
                        contract: "2021.01.12",
                    },
                    {
                        name: "宿迁诺和科技有限公司",
                        type: "租赁商务服务",
                        contacts: "蒋春林",
                        phone: "13952420929",
                        area: "223㎡",
                        contract: "2019.10.03",
                    },
                    {
                        name: "宿迁普睿益思信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "刘亮亮",
                        phone: "13821426929",
                        area: "166㎡",
                        contract: "2021.02.03",
                    },
                    {
                        name: "宿迁森迈信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "滕杰",
                        phone: "18360983423",
                        area: "160㎡",
                        contract: "2019.10.05",
                    },
                    {
                        name: "宿迁盛洋科技有限公司",
                        type: "批发和零售",
                        contacts: "李季",
                        phone: "13151426911",
                        area: "109㎡",
                        contract: "2021.10.01",
                    }
                ]
            },
            {
                name: '4',
                industry: '815㎡',
                enterprise: [
                    {
                        name: "宿迁市天酬商贸有限公司",
                        type: "批发和零售",
                        contacts: "周晓梦",
                        phone: "13951426929",
                        area: "104㎡",
                        contract: "2021.01.21",
                    },
                    {
                        name: "宿迁市益远测绘仪器有限公司",
                        type: "批发和零售",
                        contacts: "高照",
                        phone: "13151426911",
                        area: "80㎡",
                        contract: "2019.07.31",
                    },
                    {
                        name: "宿迁硕玮办公科技有限公司",
                        type: "批发和零售",
                        contacts: "云伟",
                        phone: "13951426929",
                        area: "110㎡",
                        contract: "2019.08.01",
                    },
                    {
                        name: "宿迁天芒网络科技有限公司",
                        type: "信息技术服务",
                        contacts: "王广泰",
                        phone: "14951420000",
                        area: "35㎡",
                        contract: "2019.08.02",
                    },
                    {
                        name: "宿迁微炫客信息技术有限公司",
                        type: "信息技术服务",
                        contacts: "户思琦",
                        phone: "15951426919",
                        area: "67㎡",
                        contract: "2019.08.08",
                    },
                    {
                        name: "宿迁新浦东网络科技有限公司",
                        type: "文体娱乐",
                        contacts: "顾锴",
                        phone: "13951426928",
                        area: "89㎡",
                        contract: "2019.11.16",
                    },
                    {
                        name: "宿迁鑫木盛信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "花朵",
                        phone: "15951426919",
                        area: "75㎡",
                        contract: "2021.01.21",
                    },
                    {
                        name: "宿迁云聚信息技术服务有限公司",
                        type: "住宿餐饮",
                        contacts: "赵江山",
                        phone: "13651426669",
                        area: "55㎡",
                        contract: "2021.04.31",
                    },
                    {
                        name: "宿迁知果农业科技有限公司",
                        type: "批发和零售",
                        contacts: "李兴东",
                        phone: "13751426922",
                        area: "45㎡",
                        contract: "2021.01.01",
                    }
                ]
            },
            {
                name: '5',
                industry: '815㎡',
                enterprise: [
                    {
                        name: "宿迁钟南信息科技有限公司",
                        type: "信息技术服务",
                        contacts: "郑前",
                        phone: "13751426922",
                        area: "55㎡",
                        contract: "2019.04.09",
                    },
                    {
                        name: "蚁团信息科技宿迁有限公司",
                        type: "信息技术服务",
                        contacts: "云风",
                        phone: "13851426900",
                        area: "55㎡",
                        contract: "2021.09.10",
                    },
                    {
                        name: "云星（宿迁）信息科技有限公司",
                        type: "批发和零售",
                        contacts: "张广田",
                        phone: "15951426919",
                        area: "75㎡",
                        contract: "2019.05.10",
                    },
                    {
                        name: "智慧工场科技服务（宿迁）有限公司",
                        type: "租赁商务服务",
                        contacts: "何兴梅",
                        phone: "18638997800",
                        area: "48㎡",
                        contract: "2021.01.01",
                    },
                    {
                        name: "中誉网络科技宿迁有限公司",
                        type: "信息技术服务",
                        contacts: "高  翔",
                        phone: "17955556929",
                        area: "50㎡",
                        contract: "2019.04.25",
                    }
                ]
            }
        ]
    },
    ycBuilding: {
        title: '永成大厦',
        tableData: [
            {
                name: '1',
                industry: '460㎡',
                enterprise: [
                    {
                        name: "江苏慕田文化传播有限公司",
                        type: "教育类",
                        contacts: "王烈",
                        phone: "13951426929",
                        area: "85㎡",
                        contract: "2021.02.26",
                    },
                    {
                        name: "江苏奕均电子科技有限公司",
                        type: "科学研究",
                        contacts: "袁 昊",
                        phone: "18366678322",
                        area: "160㎡",
                        contract: "2019.06.05",
                    },
                    {
                        name: "宿迁果颂法律咨询有限公司",
                        type: "租赁商务服务",
                        contacts: "何文静",
                        phone: "13451426921",
                        area: "97㎡",
                        contract: "2021.01.10",
                    },
                    {
                        name: "宿迁市楚豪信息科技有限公司",
                        type: "批发和零售",
                        contacts: "杨倩",
                        phone: "17951426888",
                        area: "110㎡",
                        contract: "2021.05.18",
                    }
                ]
            },
            {
                name: '2',
                industry: '460㎡',
                enterprise: [
                    {
                        name: "宿迁文和装饰设计有限公司",
                        type: "",
                        contacts: "盛壮",
                        phone: "13951426929",
                        area: "100㎡",
                        contract: "2019.12.12",
                    },
                    {
                        name: "中青文化传媒（江苏）有限公司",
                        type: "文体娱乐",
                        contacts: "王军",
                        phone: "18366678322",
                        area: "185㎡",
                        contract: "2020.10.25",
                    }
                ]
            }
        ]
    },
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
    earlywarningIcon,
    entityObj
}
