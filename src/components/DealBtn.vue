<template>
  <div :id="tableid" class="deal-btn"></div>
</template>
<script>
export default {
  props: ["tableid"],
};
</script>
<style lang="less" scoped>
.deal-btn {
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.01);
}
</style>
