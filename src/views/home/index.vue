<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <van-image height="100%" :src="getAssetURL('home/banner.png')" />
    </div>
    <home-search-box />
    <home-categories />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import { getAssetURL } from "@/utils/load_assets.js";
import { useHomeStore } from "@/stores/modules/home";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
</script>

<style lang="less" scoped>
.home {
  --van-font-weight-bold: 700;
  --van-nav-bar-title-text-color: var(--primary-color);
}
</style>
