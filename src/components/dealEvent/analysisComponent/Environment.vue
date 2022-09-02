<template>
    <div class="environment index"  v-show="$store.state.DigitalTwin.environmentShow">
    <titleToolVue :title="title" :type="'environment'"></titleToolVue> 
        <div class="envi_content">
            <div class="group">
            <img class="titleImg" src="@/assets/img/enviroment1.svg">
            <div class="title">温度<span><img src="@/assets/img/red.svg"></span></div>
            </div>
             <div class="group">
            <img  class="titleImg"  src="@/assets/img/enviroment3.svg">
             <div class="title">湿度<span><img src="@/assets/img/green.svg"></span></div>
            </div>
            <div class="group">
            <img  class="titleImg"  src="@/assets/img/enviroment2.svg">
            <div class="title">空气质量</div>
            </div>
            <div class="group">
            <img  class="titleImg"  src="@/assets/img/enviroment4.svg">
            <div class="title">整体环境</div>
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
      title:'周围环境分析',
    }
    }
}
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.environment {
  width: 380px;
  position: absolute;
  top: 13%;
  left: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0px 30px;
  color: #fff;
  background: url(~@/assets/img/backEnciro.svg) no-repeat;
  background-size: cover;
  .titleImg{
    width: 43px;
  }
  .envi_content{
      display: inline-flex;
      justify-content: space-between;
      padding:30px 0px 12px 0px;
      .group{
        text-align: center;
        .title{
            font-size: 12px;
            font-weight: 400;
            color: #ffffff;
            margin-top: 8px;
            img{
                margin-left: 4px;   
            }
        }
      }
  }
  }
  </style>