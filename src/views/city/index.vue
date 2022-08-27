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
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab
        v-for="(value, key, index) in allCities"
        :key="key"
        :title="value.title"
        >{{ value.title }}</van-tab
      >
    </van-tabs>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

const searchValue = ref("");
const router = useRouter();
const tabActive = ref(0);

const onSearch = (val) => {};
const onCancel = () => {
  router.back();
};

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.city {
}
</style>
