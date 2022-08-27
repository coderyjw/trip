<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <van-image height="100%" :src="getAssetURL('home/banner.png')" />
    </div>
    <home-search-box />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import { getAssetURL } from "@/utils/load_assets.js";
</script>

<style lang="less" scoped>
.home {
  --van-font-weight-bold: 700;
  --van-nav-bar-title-text-color: var(--primary-color);
}
</style>
