<template>
  <div class="btn-tool" :id="tableid"></div>
</template>
<script>
export default {
  props: ["tableid"],
};
</script>
<style lang="less" scoped>
.btn-tool {
  width: 2.4rem;
  height: 2.4rem;
  background-color: rgba(255, 255, 255, 0.01);
  position: absolute;
}
</style>
