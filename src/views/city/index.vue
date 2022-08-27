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
    <van-tabs v-model:active="tabActive" color="#ff9854" class="top">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"> </van-tab>
      </template>
    </van-tabs>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="key === tabActive" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import useCityStore from "@/stores/modules/city";

import cityGroup from "./cpns/city-group.vue";

const router = useRouter();
const searchValue = ref("");
const tabActive = ref(0);

const onSearch = (val) => {};
const onCancel = () => {
  router.back();
};

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
  .top {
    position: relative;
    z-index: 9;
  }
}
</style>
