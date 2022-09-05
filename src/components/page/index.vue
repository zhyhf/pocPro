<template>
  <div>
    <el-pagination
      background
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="total"
      @current-change="currentChange"
      :class="isShowPager ? '' : 'isShowPager'"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    isShowPager: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    currentChange(current) {
      this.$emit("currentChange", current);
    },
  },
};
</script>
<style scoped lang="less">
::v-deep .el-pagination button {
  color: #d5d8da !important;
  min-width: 18px !important;
  height: 18px;
  line-height: 18px;
  background-color: transparent;
  .el-icon-arrow-left:before {
    content: "";
  }
  .el-icon-arrow-right:before {
    content: "";
  }
}
::v-deep .el-pager li {
  color: #d5d8da;
  min-width: 18px !important;
  height: 18px;
  line-height: 18px;
  background-color: transparent;
}
::v-deep .el-pager li.active {
  color: #38b7fd !important;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: transparent;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: transparent;
  color: #d5d8da;
  &:hover {
    color: #38b7fd !important;
  }
  &:active {
    color: #38b7fd !important;
  }
}
::v-deep .el-pagination.is-background .btn-prev {
  background-color: transparent;
  border: 1px solid;
  &:hover {
    background: #38b7fd;
    color: #ffffff !important;
    border: 1px solid #38b7fd;
  }
  &:active {
    background: #38b7fd;
    color: #ffffff !important;
    border: 1px solid #38b7fd;
  }
}
::v-deep .el-pagination.is-background .btn-next {
  background-color: transparent;
  border: 1px solid;
  &:hover {
    background: #38b7fd;
    color: #ffffff !important;
    border: 1px solid #38b7fd;
  }
  &:active {
    background: #38b7fd;
    color: #ffffff !important;
    border: 1px solid #38b7fd;
  }
}

::v-deep .isShowPager {
  .el-pager {
    display: none;
  }
}
</style>
