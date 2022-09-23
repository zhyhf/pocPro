<template>
  <div class="park-space bg">
    <!-- <div class="closeTool" @click="showEventContainer"></div> -->
    <titleToolVue
      :title="title"
      :iconPath="iconPath"
      type="eventContainer"
    ></titleToolVue>
    <div class="title"></div>
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
      <div class="rows" v-for="(item,index) in dataCurrent" :key="index">
        <span
          :class="{ name: index === 0 }"
          v-for="(v, k, index) in item"
          :key="index"
          >{{ item[k] }}
        </span>
      </div>
      <div class="table-buttons" v-if="this.data.length>4">
        <el-pagination
          :total="total"
          :pageSize="pageSize"
          @currentChange="currentChange"
        />
      </div>
    </div>
  </div>
</template>
<script>
import titleToolVue from "../titleTool.vue";
import ElPagination from "../../components/page/index.vue";
export default {
  components: {
    ElPagination,
    titleToolVue,
  },
  props: ["data", "tableHead", "val"],
  data() {
    return {
      dataCurrent: [],
      pageSize:1,
      total:this.data.length,
      tableSecondData: [
        {
          name: "温州中航智慧科技有限公司",
          type: "软件行业",
          contacts: "张军",
          phone: "13651426987",
          area: "528.88㎡",
          contract: "2021.9-2024.9",
        },
      ],
      head: [
        "具体位置",
        "租赁面积",
        "租赁租约",
        "物业费",
        "人员数量",
        "总用电量",
      ],
      iconPath: require("../../assets/icon/flag.png"),
    };
  },
  computed: {
    title() {
      return `入驻信息`;
    },
  },
  watch: {
    data:{
       handler(val){
          let arr = JSON.parse(JSON.stringify(val))
          this.dataCurrent = arr.splice(0,4);
       },
       immediate:true
    },
    val(newVal, old) {
     // this.dataCurrent = this.data;
    //   if (newVal === "2") {
    //     this.dataCurrent = [
    //       {
    //         name: "易停易行智慧科技有限公司",
    //         type: "公共设施",
    //         contacts: "张梅",
    //         phone: "13951426929",
    //         area: "358.92㎡",
    //         contract: "2021.1-2024.1",
    //       },
    //       {
    //         name: "温州瓯业信息技术服务有限公司 ",
    //         type: "服务领域",
    //         contacts: "王华",
    //         phone: "11351426929",
    //         area: "634.6㎡",
    //         contract: "2021.1-2024.1",
    //       },
    //       {
    //         name: "温州市才华智能网络有限公司 ",
    //         type: "软件行业",
    //         contacts: "王聪",
    //         phone: "11351426929",
    //         area: "262.79㎡",
    //         contract: "2021.1-2024.1",
    //       },
    //     ];
    //   } else if (newVal === "3") {
    //     this.dataCurrent = [
    //       {
    //         name: "温州欣悦贸易有限公司",
    //         type: "企业入驻",
    //         contacts: "李阳",
    //         phone: "15932009221",
    //         area: "643㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       {
    //         name: " 温州市鑫格科技有限公司",
    //         type: "企业入驻",
    //         contacts: "陈龙",
    //         phone: "15932009221",
    //         area: "338.77㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       {
    //         name: " 杭州桑美实业有限公司温州分公司",
    //         type: "企业入驻",
    //         contacts: "郑聪",
    //         phone: "15932009221",
    //         area: "168.25㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //     ];
    //   } else if (newVal === "4") {
    //     this.dataCurrent = [
    //       {
    //         name: "温州慧商教育科技有限公司",
    //         type: "企业入驻",
    //         contacts: "李栋",
    //         phone: "18932009222",
    //         area: "2047.57㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //     ];
    //   } else if (newVal === "5") {
    //     this.dataCurrent = [
    //       {
    //         name: "温州激光与光电子协同创新中心",
    //         type: "企业入驻",
    //         contacts: "李光",
    //         phone: "11232009222",
    //         area: "1513㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       {
    //         name: "法拉第激光科技有限公司",
    //         type: "企业入驻",
    //         contacts: "章杨",
    //         phone: "11232009222",
    //         area: "549㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //     ];
    //   } else if (newVal === "6") {
    //     this.dataCurrent = [
    //       {
    //         name: "首信工程项目管理有限公司",
    //         type: "企业入驻",
    //         contacts: "李光",
    //         phone: "11232009222",
    //         area: "1215㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //     ];
    //   } else if (newVal === "7") {
    //     this.dataCurrent = [
    //       {
    //         name: "龙脊文化产业发展有限公司",
    //         type: "企业入驻",
    //         contacts: "李栋",
    //         phone: "11232009222",
    //         area: "1215㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       {
    //         name: "温州市盛誉置业有限公司",
    //         type: "企业入驻",
    //         contacts: "王光",
    //         phone: "11232009222",
    //         area: "315㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       {
    //         name: "臻龙集团招商经营部",
    //         type: "企业入驻",
    //         contacts: "章红",
    //         phone: "11232009222",
    //         area: "215㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       //    {
    //       //   name:'温州龙湾科技投资管理公司',
    //       //   type:'企业入驻',
    //       //   contacts:'震龙',
    //       //   phone:'11232009222',
    //       //   area:'120㎡',
    //       //   contract:'2021.9-2024.9'
    //       // },
    //     ];
    //   } else if (newVal === "8") {
    //     this.dataCurrent = [
    //       {
    //         name: "一拓（温州）软件信息技术有限公司",
    //         type: "企业入驻",
    //         contacts: "杨栋",
    //         phone: "11232009222",
    //         area: "1215㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //       {
    //         name: "温州市视显电子科技有限公司",
    //         type: "企业入驻",
    //         contacts: "王光",
    //         phone: "11232009222",
    //         area: "315㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //     ];
    //   } else if (newVal === "9") {
    //     this.dataCurrent = [
    //       {
    //         name: "飞叶科技股份有限公司",
    //         type: "企业入驻",
    //         contacts: "刘栋",
    //         phone: "11232009222",
    //         area: "1215㎡",
    //         contract: "2021.9-2024.9",
    //       },
    //     ];
    //   } else {
    //     this.dataCurrent = this.data;
    //   }
    },
  },
  methods: {
    handleClick() {},
    currentChange(current) {
      let arr = JSON.parse(JSON.stringify(this.data));
      if (current === 1) {
        this.dataCurrent = arr.splice(0,4);
      } else if (current === 2) {
        this.dataCurrent = arr.splice(4);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../assets/css/globe.css";
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 8px;
}
.park-space {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  .title {
    padding-left: 13px;
  }
  .content {
    height: 100%;
    padding: 10px;
    padding-left: 15px;
    padding-top: 5px;
    color: #fff;
    .rows {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
      :nth-child(1) {
        width: 320px;
      }
      :nth-child(2) {
        width: 135px;
      }
      :nth-child(3) {
        width: 105px;
      }
      :nth-child(4) {
        width: 200px;
      }
      :nth-child(5) {
        width: 138px;
      }
      :nth-child(6) {
        width: 190px;
      }
      span {
        width: 120px;
      }
    }
    .header {
      // background-color: #38383818;
      color: rgb(206, 206, 206);
    }
  }
  .detail {
    display: flex;
    color: #fff;
    .left {
      text-align: center;
      span {
        background: rgba(56, 183, 253, 0.64);
      }
    }
    .right {
      flex: 1;
      text-align: left;
      span {
        background-color: #1d4f7786;
        padding-left: 10px;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      width: 30%;
    }
    .mb {
      margin: 5px 0;
    }
  }
}
.closeTool {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  background: url(../../assets/icon/close.png) no-repeat;
  background-size: 100% 100%;
  z-index: 210;
}
</style>
