<template>
  <div class="city top-page">
    <van-search
      v-model="searchValue"
      show-action
      placeholder="城市/区域/位置"
      @search="onSearch"
      @cancel="onCancel"
      shape="round"
    />
    <van-tabs v-model:active="activeName" color="#ff9854">
      <van-tab title="国内/港澳台">国内/港澳台</van-tab>
      <van-tab title="海外">海外</van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import { getCityAll } from "@/service";

getCityAll().then((res) => {
  console.log({ res });
});
const searchValue = ref("");
const router = useRouter();
const activeName = ref(0);

const onSearch = (val) => Toast(val);
const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.city {
}
</style>
