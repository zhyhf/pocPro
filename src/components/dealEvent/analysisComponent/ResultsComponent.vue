<template>
    <div class="analyseCom bgScond index"  v-show="$store.state.DigitalTwin.analyseShow">
    <titleToolVue :title="title" :type="'analyseCom'"></titleToolVue> 
        <div class="analyse_content">
          <img src="@/assets/img/barBack.svg">
          <el-divider />
          <div class="subtitle">联络人信息</div>
          <div class="text-group flex-column">
            <div
              class="text-item flex"
            >
              <div class="text-title">物业负责人</div>
              <div class="text-content">{{$store.state.DigitalTwin.eventDetailList.analysis.propertyHead}} - {{$store.state.DigitalTwin.eventDetailList.analysis.propertyPhone}}</div>
            </div>
              <div
              class="text-item flex"
            >
              <div class="text-title">企业联系人</div>
              <div class="text-content">{{$store.state.DigitalTwin.eventDetailList.analysis.businessLeaders}} - {{$store.state.DigitalTwin.eventDetailList.analysis.businessPhone}}</div>
            </div>
              <div
              class="text-item flex"
            >
              <div class="text-title">园区领导</div>
              <div class="text-content">{{$store.state.DigitalTwin.eventDetailList.analysis.parkLeaders}} - {{$store.state.DigitalTwin.eventDetailList.analysis.parkPhone}}</div>
            </div>
          </div>
          <el-divider />
          <div class="btn-group">
            <div class="btn-item deal">查看类似事件</div>
            <div class="btn-item ignore" @click="handleClick">立即处理</div>
        </div>
        </div>
    </div>
</template>
<script>
import titleToolVue from "../../titleTool.vue";
export default {
components: {
    titleToolVue,
  },
  data() {
    return {
      title:'分析结果',
    }
    },
    methods:{
      // 点击立即处理 - 分析详情隐藏，查看详情的状态变成已处理
      handleClick(){
        this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
        this.$store.commit("DigitalTwin/changeData1ComShow", false);
        this.$store.commit("DigitalTwin/changeData2ComShow", false);
        this.$store.commit("DigitalTwin/changeAnalyseShow", false);
        this.$store.state.DigitalTwin.eventDetailList.status = '已处理'
      }
    }
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
  ::v-deep.el-divider--horizontal {
    margin: 12px 0;
    background: 0 0;
    opacity: 0.2;
     border: 1px dashed #38b7fd;
  }
.analyseCom {
  width: 410px;
  position: absolute;
  top: calc(13% + 350px);
  left: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 19px 30px;
  color: #fff;
  img{
    margin-top: 12px;
    width: 100%;
  }
  .subtitle{
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 21px;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
    .text-group {
    width: 100%;
    margin: 1rem 0;

    .text-item {
      height: 2rem;
      line-height: 2rem;
      margin: 0.5rem 0;
    }
    .text-title {
      width: 30%;
      background-color: #38b7fd;
      text-align: center;
    }
    .text-content {
      // width: 60%;
      flex: 1;
      text-align: left;
      background-color: #133a5c;
      padding-left: 1rem;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 21px;
    }
  }
  .btn-group {
      width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    .btn-item {
      width: 100%;
      height: 28px;
      border-radius: 3px;
      font-size: 16px;
      text-align: center;
      line-height: 28px;
      cursor: pointer;
    }
    .deal {
      // background-color: tran;
      border: 1px solid #fff;
    }
    .ignore {
      background-color: #38b7fd;
      margin-left: 16px;
    }
  }
  }
  </style>