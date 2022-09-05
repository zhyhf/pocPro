<template>
    <div class="dataComponet1 bgsmall index"  v-show="$store.state.DigitalTwin.data1ComShow">
    <titleToolVue :title="title" :type="'dataComponet1'"></titleToolVue> 
        <div class="data_content">
           <div class="titleContent"><img src="@/assets/icon/greenPoint.svg">楼层平面图</div>
           <div class="titleContent"><img src="@/assets/icon/greenPoint.svg">附近道路图</div>
           <div class="titleContent_d"><img src="@/assets/icon/greenPoint.svg">应急车辆路径规划</div>
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
      title:'周围资料',
    }
    }
}
</script>
<style lang="less" scoped> 
@import "../../../assets/css/globe.css";
.dataComponet1 { 
  width: 410px;
  position: absolute;
  top:calc(13% + 139px);
  left: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 30px;
  color: #fff;
  .data_content{
    padding:30px 0px 20px 0px;
    display: inline-flex;
    justify-content: space-between;
    .titleContent{
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #20f09d;
      line-height: 21px;
    }
    .titleContent_d{
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: rgba(255,255,255,0.64);
      line-height: 21px;
    }
    img{
      margin-right: 4px;
      margin-top: -3px;
    }
  }
  }
  </style>