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
      <div class="rows" v-for="(item, i) in data" :key="item.id">
        <span
          :class="{ name: index === 0 }"
          v-for="(v, k, index) in item"
          :key="index"
        >
          <i class="point" v-if="item[k] === '正常'"></i>
          {{ item[k] }}</span
        >
        <span
          @click="flyTo(i, item)"
          :class="{
            operation: true,
            active: activeIndex === i && indexAction === 0,
          }"
          >{{ actionName[0] }}</span
        >
        <span
          @click="queryImg(i, item)"
          :style="{ width: '8rem' }"
          :class="{
            operation: true,
            active: activeIndex === i && indexAction === 1,
          }"
          >{{ actionName[1] }}</span
        >
      </div>
      <div class="table-buttons" v-if="this.tableData.length>4">
        <el-pagination
          :total="total"
          :pageSize="1"
          @currentChange="currentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ElPagination from "../../components/page/index.vue";
export default {
  components: {
    ElPagination,
  },
  props: ["tableData", "tableHead", "actionName"],
  data() {
    return {
      total: this.tableData.length,
      data: [],
      activeIndex: 100,
      indexAction: 0,
      tableSecondData: [
        {
          name: "6",
          industry: "913.29㎡",
        },
        {
          name: "7",
          industry: "911.29㎡",
        },
        {
          name: "8",
          industry: "872.29㎡",
        },
        {
          name: "9",
          industry: "452.29㎡",
        },
      ],
    };
  },
  watch:{
     tableData:{
       handler(val){
          let arr = JSON.parse(JSON.stringify(val))
          this.data = arr.splice(0,4);
       },
       immediate:true
     }
  },
  methods: {
    currentChange(current) {
      let arr = JSON.parse(JSON.stringify(this.tableData));
      if (current === 1) {
        this.data = arr.splice(0,4);
      } else if (current === 2) {
        this.data = arr.splice(4);
      }
    },
    flyTo(index, item) {
      this.activeIndex = index;
      this.indexAction = 0;
      // 具体的入住信息显示
      this.$store.commit("DigitalTwin/changePlanImgShow", false);
      this.$store.commit("DigitalTwin/changeConduitShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", true);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailType", item.name);

      this.$store.commit('DigitalTwin/changeSelectedBuildingIndex', index)
    },
    queryImg(index, item) {
      this.activeIndex = index;
      this.indexAction = 1;
      this.$store.commit("DigitalTwin/changeEnterPriseDetailType", item.name);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
      this.$store.commit("DigitalTwin/changePlanImgShow", true);
      this.$store.commit("DigitalTwin/changeConduitShow", true);
    },
  },
};
</script>
<style scoped lang="less">
// @import "src/assets/css/common";
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 5px;
}
.gas-container {
  height: 100%;
}
.operation {
  cursor: pointer;
}
.active {
  color: #38b7fd;
  text-decoration: underline;
}
.content {
  height: 100%;
  padding: 8px;
  padding-left: 14px;
  padding-bottom: 10px;
  color: #fff;
  .rows {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    :nth-child(2) {
      width: 90px;
    }
    :nth-child(3) {
      width: 80px;
    }
    :nth-child(1) {
      width: 60px;
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
