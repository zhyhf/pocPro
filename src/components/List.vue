<template>
  <div class="gas-container">
    <div class="content">
      <div class="header rows">
        <span
          :class="{ name: index === 0 }"
          v-for="(item, index) in tableHead"
          :key="index"
        >
          {{ item }}</span
        >
      </div>
      <div class="rows" v-for="item in tableData" :key="item.id">
        <span
          :class="{ name: index === 0 }"
          v-for="(v, k, index) in item"
          :key="index"
        >
          <i class="point" v-if="item[k] === '正常'"></i>
          {{ item[k] }}</span
        >
        <span>{{actionName||'查看'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tableData", "tableHead","actionName"],
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
// @import "src/assets/css/common";
.gas-container {
  height: 100%;
}
.content {
  height: 100%;
  padding: 12px;
  color: #fff;
  .rows {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    :nth-child(2) {
      width: 80px;
    }
    :nth-child(3) {
      width: 70px;
    }
    :nth-child(1) {
      width: 70px;
    }
    span {
      width: 50px;
    }
  }
  .header {
    // background-color: #38383818;
    color: rgb(206, 206, 206);
  }
  .point {
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      left: -10px;
      top: 35%;
      width: 7px;
      height: 7px;
      background-color: #20f09d;
      border-radius: 4px;
    }
  }
}
</style>
