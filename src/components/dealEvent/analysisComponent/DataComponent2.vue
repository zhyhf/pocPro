<template>
    <div class="dataComponet2 bgmiddle index"  v-show="$store.state.DigitalTwin.data2ComShow">
    <titleToolVue :title="title" :type="'dataComponet2'"></titleToolVue> 
         <div class="data_content">
           <div>
            <div class="titleContent">百度舆情分析<span class="inner" v-if="$store.state.DigitalTwin.eventDetailList.analysis">{{$store.state.DigitalTwin.eventDetailList.analysis.baidu}}</span></div>
            <div class="titleContent">知乎舆情分析<span class="inner" v-if="$store.state.DigitalTwin.eventDetailList.analysis">{{$store.state.DigitalTwin.eventDetailList.analysis.zhihu}}</span></div>
           </div>
            <div>
            <div class="titleContent">新浪舆情分析<span class="inner" v-if="$store.state.DigitalTwin.eventDetailList.analysis">{{$store.state.DigitalTwin.eventDetailList.analysis.xinlang}}</span></div>
            <div class="titleContent">其他舆情分析<span class="inner" v-if="$store.state.DigitalTwin.eventDetailList.analysis">{{$store.state.DigitalTwin.eventDetailList.analysis.others}}</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import titleToolVue from "./titleToolSmall.vue";
export default {
components: {
    titleToolVue,
  },
  data() {
    return {
      title:'舆情分析'
    }
    }
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.dataComponet2 {
  width: 410px;
  position: absolute;
  top: calc(13% + 233px);
  left: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 30px;
  color: #fff;
  .data_content{
    margin-top:16px;
    padding:15px 0px 16px 0px;
    display: inline-flex;
    justify-content: space-between;
    .titleContent{
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 21px;
    }
    .inner{
      opacity: 0.64;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 21px;
      margin-left: 8px;
    }
  }
}
  </style>