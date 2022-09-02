<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">运营概况</div>
        <div class="panel-item-body">
          <div class="panel-item-content condition">
            <div
              v-for="(item, index) in iconArray"
              :key="index"
              class="condition-item"
            >
              <div class="detail-img-wrapper">
                <img :src="item.icon" alt="" class="detail-img" />
              </div>
              <div class="detail-box">
                <div class="detail-title">{{ item.title }}</div>
                <div class="item-detail">
                  <span class="detail-data">{{ item.value }}</span>
                  <span class="item-unit">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">碳排放构成</div>
        <div class="panel-item-body">
          <div class="panel-item-content">
            <div
              ref="COChart"
              id="COChart"
              style="width: 100%; height: 100%"
            ></div>
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">能耗分析</div>
        <div class="panel-item-body">
          <div class="panel-item-content">
            <el-table
              :header-cell-class-name="'tableHeaderCell'"
              class="box-table"
              :data="tableData"
              :fit="true"
            >
              <el-table-column
                prop="target"
                label="企业"
                min-width="20%"
                show-overflow-tooltip
              />
              <el-table-column
                prop="waterYear"
                label="用水量同比"
                min-width="15%"
                show-overflow-tooltip
              >
                <template slot-scope="scope">
                  <span v-if="scope.row.waterYear.indexOf('-') !== -1"
                    >{{ scope.row.waterYear
                    }}<span class="iconRed">↓</span></span
                  >
                  <span v-else>
                    {{ scope.row.waterYear }}<span class="iconGreen">↑</span>
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                prop="waterMonth"
                label="用水量环比"
                min-width="15%"
                show-overflow-tooltip
              >
                <template slot-scope="scope">
                  <span v-if="scope.row.waterMonth.indexOf('-') !== -1"
                    >{{ scope.row.waterMonth
                    }}<span class="iconRed">↓</span></span
                  >
                  <span v-else>
                    {{ scope.row.waterMonth }}<span class="iconGreen">↑</span>
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                prop="electricYear"
                label="用电量同比"
                min-width="15%"
                show-overflow-tooltip
              >
                <template slot-scope="scope">
                  <span v-if="scope.row.electricYear.indexOf('-') !== -1"
                    >{{ scope.row.electricYear
                    }}<span class="iconRed">↓</span></span
                  >
                  <span v-else>
                    {{ scope.row.electricYear }}<span class="iconGreen">↑</span>
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                prop="electricMonth"
                label="用电量环比"
                min-width="15%"
                show-overflow-tooltip
              >
                <template slot-scope="scope">
                  <span v-if="scope.row.electricMonth.indexOf('-') !== -1"
                    >{{ scope.row.electricMonth
                    }}<span class="iconRed">↓</span></span
                  >
                  <span v-else>
                    {{ scope.row.electricMonth
                    }}<span class="iconGreen">↑</span>
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                min-width="20%"
                show-overflow-tooltip
              >
                <template slot-scope="scope">
                  <el-link
                    :underline="false"
                    :class="{
                      line: true,
                      operation: true,
                      active: activeIndex === scope.row.target,
                    }"
                    @click="analysisEnergy(scope.row)"
                    >分析</el-link
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="table-buttons">
              <el-pagination
                :total="4"
                :page-size="5"
                @currentChange="currentChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElPagination from "../../components/page/index.vue";
const flyTo = (center) => {
  $viewer.qtum.centerAt(center);
};
export default {
  components: {
    ElPagination,
  },
  data() {
    return {
      activeIndex: 100,
      COElementChart: {},
      COElementOptions: {
        color: ["#3888FD", "#60DFF9", "#2DFDDE", "#342DFC", "#2A97DE"],
        legend: {
          data: [
            {
              name: "电力",
              icon: "circle",
            },
            {
              name: "燃料",
              icon: "circle",
            },
            {
              name: "热力",
              icon: "circle",
            },
            {
              name: "生产工艺",
              icon: "circle",
            },
            {
              name: "其他",
              icon: "circle",
            },
          ],
          orient: "vertical", //垂直显示
          y: "center", //延Y轴居中
          x: "right", //居右显示
          padding: [0, 20, 0, 0],
          align: "left",
          textStyle: {
            color: "#C6CFCE",
            fontSize: "12",
          },
          itemStyle: {
            // fontSize: '20'
          },
        },
        tooltip: {
          // show: true,
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.65)",
          color: "#fff",
          textStyle: {
            color: "#fff",
            fontSize: "12px",
          },
          borderWidth: "0",
        },
        series: [
          {
            type: "pie",
            radius: ["20%", "75%"],
            center: ["40%", "55%"],
            roseType: "radius",
            label: {
              show: true,
              textStyle: {
                color: "#C6CFCE",
              },
            },
            labelLine: {
              show: true,
              length: 5,
              length2: 5,
            },
            data: [
              { value: 40, name: "电力" },
              { value: 33, name: "燃料" },
              { value: 28, name: "热力" },
              { value: 22, name: "生产工艺" },
              { value: 20, name: "其他" },
            ],
          },
        ],
      },
      iconArray: [
        {
          icon: require("@/assets/img/energy-customer.png"),
          title: "企业客户",
          value: 150,
          unit: "家",
        },
        {
          icon: require("@/assets/img/energy-location.png"),
          title: "场站",
          value: 320,
          unit: "个",
        },
        {
          icon: require("@/assets/img/energy-profit.png"),
          title: "累计收益",
          value: 350,
          unit: "亿",
        },
        {
          icon: require("@/assets/img/energy-co2.png"),
          title: "碳排放",
          value: 50,
          unit: "吨",
        },
      ],
      tableData: [
        {
          target: "KFC",
          waterYear: "8%",
          waterMonth: "5%",
          electricYear: "10%",
          electricMonth: "6%",
        },
        {
          target: "DXC",
          waterYear: "10%",
          waterMonth: "7%",
          electricYear: "9%",
          electricMonth: "6%",
        },
        {
          target: "博源",
          waterYear: "9%",
          waterMonth: "4%",
          electricYear: "10%",
          electricMonth: "6%",
        },
        {
          target: "中东",
          waterYear: "9%",
          waterMonth: "5%",
          electricYear: "10%",
          electricMonth: "5%",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.COElementChart = this.$echarts.init(this.$refs.COChart);
      this.COElementChart.setOption(this.COElementOptions);

      window.addEventListener("resize", () => {
        this.COElementChart.resize();
      });
    });
  },
  methods: {
    currentChange(current) {},
    analysisEnergy(row) {
      flyTo({
        y: 27.976326,
        x: 120.726344,
        z: 56.67,
        heading: 158.2,
        pitch: -19.2,
        roll: 0,
      });
      this.activeIndex = row.target;
      this.$store.commit("DigitalTwin/changeEventListShow", false);
      this.$store.commit("DigitalTwin/changeEventDetailShow", false);
      this.$store.commit("DigitalTwin/changeEventShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseShow", false);
      this.$store.commit("DigitalTwin/changeEnterPriseDetailShow", false);
      this.$store.commit("DigitalTwin/changeParkShow", false);
      this.$store.commit("DigitalTwin/changeParkEventListShow", false);
      this.$store.commit("DigitalTwin/changeParkEventDetail", false);
      this.$store.commit("DigitalTwin/changeEnvironmentShow", false);
      this.$store.commit("DigitalTwin/changeData1ComShow", false);
      this.$store.commit("DigitalTwin/changeData2ComShow", false);
      this.$store.commit("DigitalTwin/changeAnalyseShow", false);

      // 管道和楼栋平面图信息
      this.$store.commit("DigitalTwin/changeConduitShow", false);
      this.$store.commit("DigitalTwin/changePlanImgShow", false);

      this.$store.commit("DigitalTwin/changeEnergyInfo", row);
      this.$store.commit("DigitalTwin/changeLargeScreenShow", false);
      setTimeout(() => {
        this.$store.commit("DigitalTwin/changeDataAnalysisShow", true);
        this.$store.commit("DigitalTwin/changeEnergyAnalysisShow", true);
        this.$store.commit("DigitalTwin/changeEnvAnalysisShow", true);
        this.$store.commit("DigitalTwin/changeCompanyAnalysisShow", true);
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
.condition {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px 10px;
  .condition-item {
    margin-top: 10px;
    width: 49%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail-img-wrapper {
      width: 3.8vw;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .detail-img {
      width: 3.8vw;
      height: 3.8vw;
    }
    .detail-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 8px;
      .detail-title {
        font-size: 12px;
        color: #c6cfce;
      }
      .item-detail {
        .detail-data {
          font-weight: 700;
          font-size: 19px;
        }
        .item-unit {
          margin-left: 4px;
          font-size: 12px;
          color: #c6cfce;
        }
      }
    }
  }
}
.table-buttons {
  position: absolute;
  right: 10px;
  bottom: 0;
}
.iconRed {
  color: #ff4848;
}
.iconGreen {
  color: #33ffc0;
}
.line {
  display: inline;
}
.operation {
  cursor: pointer;
}
.active {
  color: #38b7fd !important;
  text-decoration: underline !important;
}
</style>
