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
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "张  亮",
                        phone: "13151426920",
                        area: "156㎡",
                        contract: "2021.01.17",
                    },
                    {
                        name: "江苏创一知识产权服务有限公司",
                        type: "租赁和商务服务类",
                        contacts: "丁  超",
                        phone: "13951426929",
                        area: "68㎡",
                        contract: "2019.06.01",
                    },
                    {
                        name: "江苏丛德商务秘书有限公司",
                        type: "租赁和商务服务类",
                        contacts: "黄 海",
                        phone: "15751423370",
                        area: "64㎡",
                        contract: "2019.01.21",
                    }, 
                    {
                        name: "江苏丛德商务秘书有限公司",
                        type: "租赁和商务服务类",
                        contacts: "黄 海",
                        phone: "13851428992",
                        area: "35㎡",
                        contract: "2019.01.21",
                    },
                    {
                        name: "江苏恒达软件科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
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
                        type: "租赁和商务服务类",
                        contacts: "胡道学",
                        phone: "13851428992",
                        area: "104㎡",
                        contract: "2021.05.23",
                    },
                    {
                        name: "江苏灵童商务秘书有限公司",
                        type: "批发和零售业",
                        contacts: "潘锋",
                        phone: "15751423370",
                        area: "76㎡",
                        contract: "2019.10.23",
                    },
                    {
                        name: "江苏马驹儿文化传媒有限公司",
                        type: "租赁和商务服务类",
                        contacts: "王  通",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2019.10.24",
                    },
                    {
                        name: "江苏美视影业有限公司",
                        type: "文化、体育和娱乐类",
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
                        type: "租赁和商务服务类",
                        contacts: "戴雨颖",
                        phone: "13151426920",
                        area: "30㎡",
                        contract: "2021.04.01",
                    },
                    {
                        name: "江苏鑫泰汉固劳务有限公司",
                        type: "租赁和商务服务类",
                        contacts: "陈贺然",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2021.04.02",
                    },
                    {
                        name: "江苏鑫耀信息服务有限公司",
                        type: "租赁和商务服务类",
                        contacts: "周允生",
                        phone: "15751423370",
                        area: "80㎡",
                        contract: "2019.03.01",
                    },
                    {
                        name: "江苏宇德智能科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "沈  群",
                        phone: "13151426920",
                        area: "130㎡",
                        contract: "2019.03.02",
                    },
                    {
                        name: "江苏泽成智能科技有限公司",
                        type: "建筑类",
                        contacts: "肖自强",
                        phone: "13855539882",
                        area: "120㎡",
                        contract: "2019.03.03",
                    }, 
                    {
                        name: "京派通信息技术宿迁有限公司",
                        type: "批发和零售业",
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
                        type: "批发和零售业",
                        contacts: "张  雱",
                        phone: "13951426929",
                        area: "680㎡",
                        contract: "2019.03.05",
                    },
                    {
                        name: "快走（宿迁）国际旅行社有限公司",
                        type: "租赁和商务服务类",
                        contacts: "盛龙",
                        phone: "18755538923",
                        area: "25㎡",
                        contract: "2021.05.04",
                    },
                    {
                        name: "宿迁爱语实盛贸易有限公司",
                        type: "批发和零售业",
                        contacts: "袁禾英",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2019.03.15",
                    },
                    {
                        name: "宿迁德润企业管理咨询有限公司",
                        type: "租赁和商务服务类",
                        contacts: "陈  峥",
                        phone: "13951426929",
                        area: "138㎡",
                        contract: "2019.03.16",
                    },
                    {
                        name: "宿迁鼎义成电子商务有限公司",
                        type: "批发和零售业",
                        contacts: "彭加勤",
                        phone: "13951426929",
                        area: "35㎡",
                        contract: "2019.03.07",
                    },
                    {
                        name: "宿迁菲丽熊电子商务有限公司",
                        type: "批发和零售业",
                        contacts: "张陈",
                        phone: "13951426929",
                        area: "107㎡",
                        contract: "2019.03.08",
                    },
                    {
                        name: "宿迁福奥德电子商务有限公司",
                        type: "批发和零售业",
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
                        name: "江苏九淼科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "18755538923",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    }
                ]
            },
            {
                name: '6',
                industry: '1120㎡',
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
                name: '7',
                industry: '1120㎡',
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
                name: '8',
                industry: '1120㎡',
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
                        type: "租赁和商务服务类",
                        contacts: "俞轩",
                        phone: "13951426929",
                        area: "642㎡",
                        contract: "2021.04.06",
                    },
                    {
                        name: "江苏九淼科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "18755538923",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    },
                    {
                        name: "江苏仁达项目管理咨询有限公司",
                        type: "建筑类",
                        contacts: "陈怀敏",
                        phone: "18756003770",
                        area: "180㎡",
                        contract: "2021.06.15",
                    },
                    {
                        name: "江苏融众供应链管理有限公司",
                        type: "租赁和商务服务类",
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
                        type: "租赁和商务服务类",
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
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "李  远",
                        phone: "13951426929",
                        area: "676㎡",
                        contract: "2021.04.09",
                    },
                    {
                        name: "江苏九淼科技有限公司",
                        type: "租赁和商务服务类",
                        contacts: "张敏",
                        phone: "13951426929",
                        area: "155㎡",
                        contract: "2019.07.20",
                    },
                    {
                        name: "江苏优众信息服务有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "葛镇瑞",
                        phone: "13951426929",
                        area: "205㎡",
                        contract: "2019.07.29",
                    },
                    {
                        name: "江苏悦恒机电设备安装工程有限公司",
                        type: "金属制品、机械和设备修理等",
                        contacts: "张晓利",
                        phone: "13951426929",
                        area: "110㎡",
                        contract: "2021.05.15",
                    },
                    {
                        name: "搜多多信息技术（宿迁）有限公司",
                        type: "租赁和商务服务类",
                        contacts: "陆迎春",
                        phone: "13951426929",
                        area: "64㎡",
                        contract: "2021.05.06",
                    },
                    {
                        name: "宿迁道豫商贸有限公司",
                        type: "批发和零售业",
                        contacts: "穆良风",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁焦点科技有限公司",
                        type: "批发和零售业",
                        contacts: "李磊",
                        phone: "13951426929",
                        area: "270㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁茂泰置业有限公司",
                        type: "房地产业",
                        contacts: "程润",
                        phone: "13951426929",
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
                        type: "租赁和商务服务类",
                        contacts: "刘超",
                        phone: "13951426929",
                        area: "367㎡",
                        contract: "2021.04.03",
                    },
                    {
                        name: "宿迁市安羽科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "刘培森",
                        phone: "13951426929",
                        area: "120㎡",
                        contract: "2019.09.15",
                    },
                    {
                        name: "宿迁市大拇指网络科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "刘祖乐",
                        phone: "13951426929",
                        area: "196㎡",
                        contract: "2019.12.09",
                    },
                    {
                        name: "宿迁市萌萌小微企业服务有限公司",
                        type: "租赁和商务服务类",
                        contacts: "孙威",
                        phone: "13951426929",
                        area: "48㎡",
                        contract: "2021.05.06",
                    },
                    {
                        name: "宿豫区先飞信息服务经营部",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "高先节",
                        phone: "13951426929",
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
                        type: "租赁和商务服务类",
                        contacts: "王 娜",
                        phone: "13951426929",
                        area: "280㎡",
                        contract: "2019.03.25",
                    },
                    {
                        name: "江苏九马进出口有限公司",
                        type: "批发和零售业",
                        contacts: "陈亚力",
                        phone: "13951426929",
                        area: "59㎡",
                        contract: "2019.09.10",
                    },
                    {
                        name: "江苏润宁商务秘书有限公司",
                        type: "租赁和商务服务类",
                        contacts: "王月兰",
                        phone: "15651426921",
                        area: "30㎡",
                        contract: "2019.09.06",
                    },
                    {
                        name: "江苏苏粤跨境电商综合服务有限公司",
                        type: "批发和零售业",
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
                        type: "批发和零售业",
                        contacts: "高潘潘",
                        phone: "13951426929",
                        area: "80㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁晟通汽车技术服务有限公司",
                        type: "批发和零售业",
                        contacts: "潘咪",
                        phone: "15651426921",
                        area: "57㎡",
                        contract: "2019.04.19",
                    },
                    {
                        name: "宿迁高远国际贸易有限公司",
                        type: "批发和零售业",
                        contacts: "金水林",
                        phone: "18951421924",
                        area: "92㎡",
                        contract: "2019.11.25",
                    },
                    {
                        name: "宿迁恒芮通信工程有限公司",
                        type: "建筑类",
                        contacts: "蔡  旺",
                        phone: "13351426929",
                        area: "62㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁神州易桥商务秘书有限公司",
                        type: "租赁和商务服务类",
                        contacts: "王函彬",
                        phone: "13951426923",
                        area: "80㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁市博立威贸易有限公司",
                        type: "批发和零售业",
                        contacts: "赵广博",
                        phone: "13951426921",
                        area: "30㎡",
                        contract: "2019.09.15",
                    },
                    {
                        name: "宿迁市晟鑫泰供应链有限公司",
                        type: "批发和零售业",
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
                        type: "批发和零售业",
                        contacts: "娄卓尔",
                        phone: "137951426921",
                        area: "1500㎡",
                        contract: "2019.03.28",
                    },
                    {
                        name: "宿迁市有元工艺品贸易有限公司",
                        type: "批发和零售业",
                        contacts: "张先军",
                        phone: "15951426926",
                        area: "140㎡",
                        contract: "2020.03.01",
                    },
                    {
                        name: "宿迁旭锦物流有限公司",
                        type: "批发和零售业",
                        contacts: "邵玉珍",
                        phone: "15351426914",
                        area: "60㎡",
                        contract: "2021.01.15",
                    },
                    {
                        name: "宿迁亿诚晟电子商务有限公司",
                        type: "批发和零售业",
                        contacts: "陈玲",
                        phone: "13851426929",
                        area: "34㎡",
                        contract: "2019.03.02",
                    },
                    {
                        name: "江苏国讯网络有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "邬成龙",
                        phone: "15951426929",
                        area: "32㎡",
                        contract: "2019.10.02",
                    },
                    {
                        name: "江苏国讯网络有限公司",
                        type: "信息传输、软件和咨询技术服务业",
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
                industry: "760㎡",
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
                industry: "760㎡",
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
                industry: "760㎡",
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
                        type: "科学研究和技术服务类",
                        contacts: "刘丙双",
                        phone: "13951426929",
                        area: "117㎡",
                        contract: "2021.03.09",
                    },
                    {
                        name: "江苏俊采星驰信息技术有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "王浩",
                        phone: "13951426929",
                        area: "235㎡",
                        contract: "2019.07.08",
                    },
                    {
                        name: "江苏康古堂健康科技有限公司",
                        type: "批发和零售业",
                        contacts: "李海刚",
                        phone: "13951426929",
                        area: "236㎡",
                        contract: "2019.07.29",
                    },
                    {
                        name: "江苏三五二环保科技有限公司",
                        type: "科学研究和技术服务类",
                        contacts: "李劲松",
                        phone: "13951426929",
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
                        type: "租赁和商务服务类",
                        contacts: "庄朝辉",
                        phone: "13951426929",
                        area: "238㎡",
                        contract: "2019.05.16",
                    },
                    {
                        name: "南京威安消防设备工程有限责任公司宿迁分公司",
                        type: "水利、环境和公共设施管理业",
                        contacts: "于莉莉",
                        phone: "13951426929",
                        area: "239㎡",
                        contract: "2019.12.01",
                    },
                    {
                        name: "宿迁京喜科技有限公司",
                        type: "批发和零售业",
                        contacts: "李昌明",
                        phone: "13951426929",
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
                        type: "批发和零售业",
                        contacts: "童  娟",
                        phone: "13551426922",
                        area: "1200㎡",
                        contract: "2019.05.15",
                    },
                    {
                        name: "宿迁市天牛网络科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "罗  桂",
                        phone: "13851426992",
                        area: "32㎡",
                        contract: "2019.05.22",
                    },
                    {
                        name: "宿豫区天为网络科技工作室",
                        type: "信息传输、软件和咨询技术服务业",
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
    },
    yx1: {
        title: '豫信大厦',
        tableData: [
            {
                name: '1',
                industry: '630㎡',
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
                        type: "租赁和商务服务类",
                        contacts: "陈军周",
                        phone: "13951426929",
                        area: "36㎡",
                        contract: "2021.05.25",
                    },
                    {
                        name: "江苏迅诺通信科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "朱海旺",
                        phone: "13951426929",
                        area: "110㎡",
                        contract: "2019.06.05",
                    },
                    {
                        name: "江苏迅诺通信科技有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "朱海旺",
                        phone: "13951426929",
                        area: "120㎡",
                        contract: "2019.06.05",
                    },
                    {
                        name: "宿迁核盾建筑技术有限公司",
                        type: "制造业",
                        contacts: "刘  方",
                        phone: "13951426929",
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
                        type: "建筑类",
                        contacts: "华亮亮",
                        phone: "13951426929",
                        area: "98㎡",
                        contract: "2019.04.03",
                    },
                    {
                        name: "宿迁市嘉博企业管理有限公司",
                        type: "租赁和商务服务类",
                        contacts: "张磊",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    },
                    {
                        name: "宿迁新硕熙照明工程有限公司",
                        type: "批发和零售业",
                        contacts: "周杰",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    },      
                    {
                        name: "宿迁云帆传媒有限公司",
                        type: "批发和零售业",
                        contacts: "吴宝库",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
                    },
                    {
                        name: "宿迁中利测绘工程有限公司",
                        type: "租赁和商务服务类",
                        contacts: "袁涛",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
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
                        name: "宿迁市百通规划设计有限公司",
                        type: "信息传输、软件和咨询技术服务业",
                        contacts: "陈军周",
                        phone: "13951426929",
                        area: "46.5㎡",
                        contract: "2019.04.03",
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
    },
    ycBuilding: {
        title: '永成大厦',
        tableData: [
            {
                name: '1',
                industry: '460㎡',
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
