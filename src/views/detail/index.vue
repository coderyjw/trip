<template>
  <div class="detail top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
    </div>
    <div class="footer">
      <img src="../../assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { getDetailInfos } from "@/service";

import DetailSwipe from "./cpns/detail_01-swipe.vue";

const router = useRouter();
const route = useRoute();
const houseId = route.params.id;

// 发送网络请求获取数据
const detailInfos = ref({});
const mainPart = computed(() => detailInfos.value.mainPart);
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data;
});

// 监听返回按钮的点击
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.detail {
  .tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
