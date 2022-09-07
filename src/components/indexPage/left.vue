<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">园区概况</div>
        <div class="panel-item-body">
          <div>
            <img
              src="../../assets/img/area.png"
              alt=""
              style="width: 80%; margin-left: 10%; margin-top: 0.6vh"
            />
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">园区运营概况</div>
        <div class="panel-item-body industry-operate">
          <Charts />
          <!-- <div class="top">
            <div
              class="top-item"
              v-for="(item, index) in industryArray"
              :key="index"
            >
              <div class="item-title">{{ item.title }}</div>
              <div class="item-detail">
                <span class="item-value">{{ item.value }}</span>
                <span class="item-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div
              class="bottom-item"
              v-for="(item, index) in buildingDetail"
              :key="index"
            >
              <div class="item-title">{{ item.title }}</div>
              <div class="item-detail">
                <span class="item-value">{{ item.value }}</span>
                <span class="item-unit">{{ item.unit }}</span>
              </div>
            </div>
          </div> -->
        </div> 
      </div>
      <div class="panel-item">
        <div class="panel-title">园区产值(近5年)</div>
        <div class="panel-item-body">
          <div class="panel-item-content" ref="outputChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Charts from './charts.vue'
export default {
  data() {
    return {
      outputChart: {},
      outputOptions: {
        xAxis: {
          type: "category",
          data: ["2017", "2018", "2019", "2020", "2021"],
          axisLabel: {
            textStyle: {
              color: "#C6CFCE",
            },
          },
        },
        yAxis: {
          name: "产值(亿元)",
          nameTextStyle: {
            color: "#C6CFCE",
          },
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#C6CFCE",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#C6CFCE",
            },
          },
        },
        grid: {
          left: 36,
          top: 37,
          right: 20,
          bottom: 25,
        },
        series: [
          {
            data: [50, 55, 66, 80, 95],
            type: "bar",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(56,183,253, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "rgba(56,183,253, 0.5)", // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgb(56,183,253)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
            },
          },
        ],
      },
      industryArray: [
        {
          title: "已入驻企业",
          value: "1503",
          unit: "家",
        },
        {
          title: "500强企业",
          value: "23",
          unit: "家",
        },
        {
          title: "企业员工数量",
          value: "3642",
          unit: "个",
        },
      ],
      buildingDetail: [
        {
          title: "园区产值",
          value: "95",
          unit: "亿元",
        },
        {
          title: "租金单价",
          value: "5000",
          unit: "¥/m²",
        },
        {
          title: "建筑数量",
          value: "350",
          unit: "幢",
        },
        {
          title: "待建项目",
          value: "25",
          unit: "个",
        },
      ],
    };
  },
  components:{ Charts },
  mounted() {
    this.$nextTick(() => {
      this.outputChart = this.$echarts.init(this.$refs.outputChart);
      this.outputChart.setOption(this.outputOptions);
      window.addEventListener("resize", () => {
        this.outputChart.resize();
      });
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
.industry-operate {
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  .top {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .top-item {
      width: 32%;
      box-sizing: border-box;
      /*border: 1px solid red;*/
      background-image: url("../../assets/img/index-samll-bg.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .bottom {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .bottom-item {
      width: 48.5%;
      height: 48%;
      /*margin-top: 1%;*/
      box-sizing: border-box;
      background-image: url("../../assets/img/indedx-big-bg.png");
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .bottom-item:nth-child(1),
    .bottom-item:nth-child(2) {
      margin-top: 2px;
    }
  }
  .item-title {
    font-size: 12px;
    color: #c6cfce;
  }
  .item-title::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #38b7fd;
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
      margin-left: 4px;
      font-size: 12px;
      color: #c6cfce;
    }
  }
}
</style>
