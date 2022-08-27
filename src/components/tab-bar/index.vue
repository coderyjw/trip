<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :name="item.text" :icon="item.icon" :to="item.path">{{
          item.text
        }}</van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import tabbarData from "@/assets/data/tabbar.js";

const active = ref(tabbarData[0].text);
</script>

<style lang="less" scoped>
.tab-bar {
}
</style>
