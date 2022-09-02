<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item conclusion">
        <div class="panel-title">物业概况</div>
        <div class="panel-item-body">
          <div class="introduce">
            <div class="intro-building">建筑概况</div>
            <div class="intro-property">物业运营</div>
          </div>
          <div class="panel-item-content property">
            <div
              class="property-item"
              v-for="(item, index) in propertyConclusion"
              :key="index"
            >
              <div
                :class="
                  index > 2
                    ? 'item-title item-title-bottom'
                    : 'item-title item-title-top'
                "
              >
                {{ item.title }}
              </div>
              <div class="item-detail">
                <span class="item-value">{{ item.value }}</span>
                <span class="item-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-item parking">
        <div class="panel-title">智慧停车</div>
        <div class="panel-item-body">
          <div class="jump-to-login">
            <a :href="loginPage" target="_blank">
              <img src="../../assets/img/jump-arrow.png" />
            </a>
          </div>
          <div class="panel-item-content">
            <img
              src="../../assets/img/intelligent-parking.svg"
              alt=""
              style="width: 85%; margin-left: 7.5%"
            />
          </div>
          <div class="parking-lot">停车场</div>
          <div class="parking-num">
            <div class="item-detail">
              <span class="parking-value">15</span>
              <span class="item-unit">个</span>
            </div>
            <div class="parking-theme">停车场数量</div>
          </div>
          <div class="carport">
            <div class="item-detail">
              <span class="parking-value">1650</span>
              <span class="item-unit">个</span>
            </div>
            <div class="parking-theme">车位总数</div>
          </div>
          <div class="charger">
            <div class="item-detail">
              <span class="parking-value">35</span>
              <span class="item-unit">个</span>
            </div>
            <div class="parking-theme">充电桩总数</div>
          </div>
          <div class="used-charger">
            <div class="item-detail">
              <span class="parking-value">1504</span>
              <span class="item-unit">个</span>
            </div>
            <div class="parking-theme">已用充电桩</div>
          </div>
          <div class="temp-car">
            <div class="item-detail">
              <span class="parking-value">560</span>
              <span class="item-unit">辆</span>
            </div>
            <div class="parking-theme">临时车辆数</div>
          </div>
        </div>
      </div>

      <div class="pandemic">
        <div class="pandemic-title">
          <div class="pandemic-text">疫情管控</div>
        </div>
        <div class="pandemic-item">
          <div class="item-title">临时隔离点</div>
          <div class="item-detail">
            <img src="../../assets/img/quarantine.png" class="item-icon" />
            <span class="item-data">26</span>
            <span class="item-unit">个</span>
          </div>
        </div>
        <div class="pandemic-item">
          <div class="item-title">测温点</div>
          <div class="item-detail">
            <img
              src="../../assets/img/temperature-icon.png"
              class="item-icon"
            />
            <span class="item-data">500</span>
            <span class="item-unit">个</span>
          </div>
        </div>
      </div>

      <div class="panel-item sentiment-alert">
        <div class="panel-title">舆情告警情况</div>
        <div class="panel-item-body">
          <div class="panel-item-content">
            <el-table
              :header-cell-class-name="'tableHeaderCell'"
              class="box-table"
              :data="tableData"
              :fit="true"
            >
              <el-table-column
                prop="name"
                label="事件类型"
                min-width="22%"
                show-overflow-tooltip
              />
              <el-table-column
                prop="time"
                label="发生时间"
                min-width="40%"
                show-overflow-tooltip
              />
              <el-table-column
                prop="status"
                label="当前状态"
                min-width="22%"
                show-overflow-tooltip
              >
                <template slot-scope="{ row }">
                  <span>{{ row.status }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                min-width="16%"
                show-overflow-tooltip
              >
                <template slot-scope="{ row }">
                  <el-link
                    :class="{
                      line: true,
                      operation: true,
                      active: activeIndex === row.id,
                    }"
                    type="primary"
                    :underline="false"
                    @click="handleFly(row)"
                    >查看</el-link
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="table-buttons">
              <el-pagination :total="4" :page-size="5" @currentChange="currentChange" />
            </div>
          </div>
        </div>
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
  data() {
    return {
      activeIndex: 100,
      tableData: [
        {
          id: 1,
          name: "吸烟",
          time: "2022.08.01 16:22:02",
          position: "企业东门1号口",
          status: "未处理",
        },
        {
          id: 2,
          name: "打架",
          time: "2022.08.01 16:22:02",
          position: "企业东门2号口",
          status: "未处理",
        },
        {
          id: 3,
          name: "吸烟",
          time: "2022.08.01 16:22:02",
          position: "企业东门3号口",
          status: "已处理",
        },
        {
          id: 4,
          name: "吸烟",
          time: "2022.08.01 16:22:02",
          position: "2楼办公区",
          status: "未处理",
        },
      ],
      propertyConclusion: [
        {
          title: "楼宇数量",
          value: 350,
          unit: "个",
        },
        {
          title: "企业数量",
          value: 1560,
          unit: "家",
        },
        {
          title: "物业人员数",
          value: 3642,
          unit: "个",
        },
        {
          title: "已入驻企业",
          value: 1503,
          unit: "家",
        },
        {
          title: "物业收入",
          value: 15,
          unit: "亿元",
        },
        {
          title: "待建项目",
          value: 25,
          unit: "个",
        },
      ],
      loginPage: "https://park.keytop.cn/unityp/login",
    };
  },
  methods: {
    handleFly(item) {
      this.activeIndex = item.id;
      $viewer.qtum.centerAt({
        y: 27.97692,
        x: 120.726029,
        z: 40.46,
        heading: 199.4,
        pitch: -5.8,
        roll: 0.2,
      });
      this.$store.commit("DigitalTwin/changeEventDetail", item);
      this.$store.commit("DigitalTwin/changeEventDetailShow", true);
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      this.$store.commit("DigitalTwin/changeEventShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
      this.$store.commit("DigitalTwin/changeParkShow", false);
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);

      // 管道和楼栋平面图信息
      this.$store.commit("DigitalTwin/changeConduitShow", false);
      this.$store.commit("DigitalTwin/changePlanImgShow", false);
    },
    currentChange(current) {},
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.operation {
  cursor: pointer;
}
.active {
  color: #38b7fd !important;
  text-decoration: underline !important;
}
.line {
  display: inline;
}

.conclusion {
  flex: 2.26 !important;
  .small-panel-center {
    height: 102% !important;
  }
  .introduce {
    width: 60%;
    display: flex;
    justify-content: right;
    height: 3vh;
    position: absolute;
    top: 1vh;
    right: 10px;
    font-size: 12px;
    color: #c6cfce;
    .intro-building {
      height: 3vh;
    }
    .intro-building::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #38b7fd;
      margin: 0 3px;
    }
    .intro-property {
      height: 3vh;
    }
    .intro-property::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2dffbf;
      margin: 0 3px;
    }
  }
  .property {
    padding: 5px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .property-item {
      width: 32%;
      height: 48%;
      margin-top: 1%;
      box-sizing: border-box;
      background-image: url("../../assets/img/index-samll-bg.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .item-title {
        font-size: 12px;
        color: #c6cfce;
      }
      .item-title-top::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #38b7fd;
        margin: 0 4px;
      }
      .item-title-bottom::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #2dffbf;
        margin: 0 4px;
      }
      .item-detail {
        margin-left: 6px;
        .item-value {
          font-size: 19px;
          font-weight: 700;
          color: #fff;
        }
        .item-unit {
          font-size: 12px;
          color: #c6cfce;
        }
      }
    }
  }
}
.parking {
  flex: 2.78 !important;
  position: relative;
  .jump-to-login {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 7%;
    top: 5px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .parking-lot {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    top: 30%;
    left: 42%;
  }
  .item-detail {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .parking-value {
      line-height: normal;
      font-size: 19px;
      font-weight: 700;
      color: #38b7fd;
    }
    .item-unit {
      margin-left: 4px;
      font-size: 12px;
      color: #c6cfce;
    }
  }
  .parking-theme {
    font-size: 12px;
  }
  .parking-num {
    position: absolute;
    left: 9%;
    top: 26%;
  }
  .carport {
    position: absolute;
    left: 17%;
    top: 58%;
  }
  .charger {
    position: absolute;
    left: 47%;
    top: 65%;
  }
  .used-charger {
    position: absolute;
    left: 70%;
    top: 49%;
  }
  .temp-car {
    position: absolute;
    left: 62%;
    top: 16%;
  }
}
.pandemic {
  flex: 1 !important;
  width: 100%;
  margin-bottom: 2vh;
  background-image: url("../../assets/img/pandemic-bg.png");
  background-size: 100% 100%;
  display: flex;
  .pandemic-title {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    color: #38b7fd;
    display: flex;
    align-items: center;
    justify-content: center;
    .pandemic-text {
      width: 32px;
    }
  }
  .pandemic-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
    .item-title {
      flex: 1;
      font-size: 12px;
      margin-top: 8px;
      color: #c6cfce;
    }
    .item-detail {
      flex: 2;
      margin-top: -8px;
      .item-data {
        font-size: 19px;
        font-weight: 700;
        color: #38b7fd;
        position: relative;
        left: 5px;
        top: 5px;
      }
      .item-unit {
        font-size: 12px;
        color: #c6cfce;
        position: relative;
        left: 6px;
        top: 4px;
      }
    }
  }
}
.sentiment-alert {
  flex: 2.78 !important;
  .table-buttons {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
}
.state::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: red;
  margin-right: 2px;
}
</style>
