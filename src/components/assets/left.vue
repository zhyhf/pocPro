<template>
  <div>
    <div class="panel-wrapper">
      <div class="panel-item">
        <div class="panel-title">资产宣传片</div>
        <div class="panel-item-body">
          <div class="panel-item-content advertising-video">
            <img
              v-show="chosenPic.indexOf('.mp4') === -1"
              :src="chosenPic"
              alt=""
              class="video"
            />
            <video
              :src="chosenPic"
              class="video"
              controls
              muted
              v-show="chosenPic.indexOf('.mp4') !== -1"
            />
            <el-pagination
              :isShowPager="true"
              class="el-pagination"
              :page-size="1"
              :total="3"
              @currentChange="currentPicChange"
            />
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">招商政策</div>
        <div class="panel-item-body">
          <div class="jump-to-login">
            <a :href="loginPage" target="_blank">
              <img src="../../assets/img/jump-arrow.png" />
            </a>
          </div>
          <div class="panel-item-content advertising-video">
            <img :src="chosenPolicy" alt="" class="video" />
            <el-pagination
              :isShowPager="true"
              class="el-pagination"
              :page-size="1"
              :total="3"
              @currentChange="currentPolicyChange"
            />
          </div>
        </div>
      </div>
      <div class="panel-item">
        <div class="panel-title">招商流程</div>
        <div class="panel-item-body">
          <div class="panel-item-content">
            <img
              src="../../assets/img/business-progress.png"
              alt=""
              style="width: 100%; display: block; margin-top: 3vh"
            />
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
      advertising: [
        require("../../../public/static/video/propaganda.mp4"),
        require("../../assets/img/policy1.jpg"),
        require("../../assets/img/propagate-img.jpg"),
      ],
      policy: [
        require("../../assets/img/policy3.png"),
        require("../../assets/img/policy1.jpg"),
        require("../../assets/img/policy2.jpg"),
      ],
      chosenPic: null,
      chosenPolicy: null,
      loginPage: "http://117.149.209.178:8092/login",
    };
  },
  created() {
    this.chosenPic = this.advertising[0];
    this.chosenPolicy = this.policy[0];
  },
  methods: {
    currentPicChange(current) {
      this.chosenPic = this.advertising[current - 1];
    },
    currentPolicyChange(current) {
      this.chosenPolicy = this.policy[current - 1];
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/panel.less";
@import "../../style/element.less";
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
.advertising-video {
  padding: 5px 10px;
  .video {
    width: 100%;
    height: 85%;
  }
}
.el-pagination {
  position: absolute;
  right: 4px;
  bottom: 2px;
}
</style>
