import { buildingInfo } from '@/assets/constant/building'

export default {
  namespaced: true,
  actions: {

  },
  mutations: {
    changeBottonShow(state, value) {
      state.controlBottomShow = value
    },
    changeParkCamera(state, value) {
      state.parkCamera = value
    },
    changeEventShow(state, value) {
      state.eventShow = value
    },
    changeMeetingShow(state, value) {
      state.meetingShow = value
    },
    changeLargeScreenShow(state, value) {
      state.largeScreenShow = value
    },
    changeEventListShow(state, value) {
      state.eventListShow = value
    },
    changeEventDetailShow(state, value) {
      state.eventDetailShow = value
    },
    changeEventDetail(state, value) {
      state.eventDetailList = value
    },
    changeParkDetail(state, value) {
      state.parkDetailList = value
    },
    changeParkEventDetail(state, value) {
      state.parkEventDetail = value
    },
    changeEnterPriseDetailShow(state, value) {
      state.EnterPriseDetailShow = value
    },
    changeEnterPriseDetailType(state, value) {
      state.EnterPriseDetailType = value
    },
    changeSouthGateShow(state, value) {
      state.southGateShow = value
    },
    changeEnterPriseShow(state, value) {
      state.EnterPriseShow = value
    },
    changeEastGateShow(state, value) {
      state.eastGateShow = value
    },
    changeSecondFloorShow(state, value) {
      state.secondFloorShow = value
    },
    changeSouthGateWarning(state, value) {
      state.southGateWarning = value
    },
    changeEastGateWarning(state, value) {
      state.eastGateWarning = value
    },
    changeSecondFloorWarning(state, value) {
      state.secondFloorWarning = value
    },
    changeCheckBtnNum(state, value) {
      state.checkBtnNum = value
    },
    changeNavCheckBtnNum(state, value) {
      state.navCheckBtnNum = value
    },
    changeParkShow(state, value) {
      state.parkShow = value
    },
    changeParkEventListShow(state, value) {
      state.parkEventListShow = value
    },
    changeDataAnalysisShow(state, value) {
      state.dataAnalysisShow = value
    },
    changeEnergyAnalysisShow(state, value) {
      state.energyAnalysisShow = value
    },
    changeEnvAnalysisShow(state, value) {
      state.envAnalysisShow = value
    },
    changeCompanyAnalysisShow(state, value) {
      state.companyAnalysisShow = value
    },
    changeEnvironmentShow(state, value) {
      state.environmentShow = value
    },
    changeData1ComShow(state, value) {
      state.data1ComShow = value
    },
    changeData2ComShow(state, value) {
      state.data2ComShow = value
    },
    changeAnalyseShow(state, value) {
      state.analyseShow = value
    },
    changePlanImgShow(state, value) {
      state.planImgShow = value
    },
    changeEnergyInfo(state, value) {
      state.energyInfo = value
    },
    changeConduitShow(state, value) {
      state.conduitShow = value
    },
    changeSelectedBuilding(state, value) {
      if (buildingInfo[value]) {
        state.selectedBuilding = buildingInfo[value]
        console.log(state.selectedBuilding);
      }
    },
    changeSelectedBuildingIndex(state, value) {
      state.selectedBuildingIndex = value
    },
    changeSelectedIcon(state, value) {
      state.selectedIcon = value
    },
  },
  state: {
    controlBottomShow: true,
    parkCamera: false,
    eventShow: false,
    meetingShow: true,
    largeScreenShow: true,
    eventListShow: false,
    houseListShow: false,
    southGateShow: false,
    eastGateShow: false,
    secondFloorShow: false,
    southGateWarning: true,
    eastGateWarning: true,
    secondFloorWarning: true,
    checkBtnNum: 0,
    navCheckBtnNum: 'homePage',
    eventDetailShow: false,
    EnterPriseShow:false,
    EnterPriseDetailShow:false,
    parkShow:false,
    parkEventListShow:false,
    parkEventDetail:false,
    EnterPriseDetailType:0,
    eventDetailList:{},
    environmentShow:false,
    data1ComShow:false,
    data2ComShow:false,
    analyseShow:false,
    parkDetailList:{},
    dataAnalysisShow: false,
    energyAnalysisShow: false,
    envAnalysisShow: false,
    companyAnalysisShow: false,
    planImgShow: false,
    energyInfo: {},
    conduitShow: false,

    selectedBuilding: buildingInfo['hyBuilding'],
    selectedBuildingIndex: 0,
    selectedIcon: null
  },
  getters: {

  }
}
