<template>
  <div>
    <div class="content">
      <div class="header rows">
        <span v-for="(item, index) in tableHead" :key="index"> {{ item }}</span>
      </div>
      <div class="rows" v-for="(item, i) in tableData" :key="i">
        <div v-for="(v, k, index) in item" :key="index">
          <template>
            <span v-if="k !== 'with'">{{ item[k] }}</span>
            <span v-else>
              <span class="redPoint" v-if="item[k] === '耗能'"></span>
              <span class="whitePoint" v-else></span>
              <span class="text">{{ item[k] }}</span>
            </span>
          </template>
        </div>
      </div>
      <div class="table-buttons">
        <el-pagination :total="4" :page-size="5" @currentChange="currentChange" />
      </div>
    </div>
  </div>
</template>
<script>
import ElPagination from "../../../components/page/index.vue";
export default {
  components: {
    ElPagination,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    tableHead: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  methods: {
    currentChange(current) {},
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/globe.css";
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 2px;
}
.content {
  width: 100%;
  height: 100%;
  padding: 12px;
  color: #fff;
  .rows {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    white-space: nowrap;
    background-color: #0516306e;
    :nth-child(1) {
      width: 18rem;
    }
    :nth-child(2) {
      width: 20rem;
    }
    :nth-child(3) {
      width: 13rem;
    }
    span {
      width: 30px;
    }
  }
  .header {
    background-color: transparent !important;
    color: rgb(206, 206, 206);
  }
  .redPoint {
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      width: 18px;
      height: 18px;
      background-image: url("../../../assets/img/energy/with_icon.svg");
      border-radius: 4px;
    }
  }
  .text {
    margin-left: 22%;
  }
  .whitePoint {
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      width: 18px;
      height: 18px;
      background-image: url("../../../assets/img/energy/no_with_icon.svg");
      border-radius: 4px;
    }
  }
}
</style>
