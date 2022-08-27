<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :icon="item.icon" :to="item.path">{{
          item.text
        }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import tabbarData from "@/assets/data/tabbar.js";

// 监听路由改变时, 找到对应的索引, 设置currentIndex
const route = useRoute();
const currentIndex = ref(0);
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  console.log(index, newRoute);
  if (index === -1) return;
  currentIndex.value = index;
});
</script>

<style lang="less" scoped>
.tab-bar {
}
</style>
