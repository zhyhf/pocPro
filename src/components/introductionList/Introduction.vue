<template>
    <div  :id="tableid" class="introductionD">
      <div>
          <img src="../../assets/img/area.png" alt="" style="width:175px">
       </div>
     </div>
</template>
<script>
export default {
  props: ["tableid"],
}
</script>
<style scoped lang="less">
.introductionD{
  width:200px;
  background: url("../../assets/img/enterprise-bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 1rem;
  transform: translateX(-50%);
  z-index: 103;
}
</style>