<template>
  <div class="city-group ">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities">
        <van-index-anchor :index="group?.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
const props = defineProps({
  groupData: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();
const cityStore = useCityStore();
const indexList = computed(() => {
  const result = props?.groupData?.cities?.map((item) => item.group) || [];
  result?.unshift("#");
  return result;
});

const cityClick = (city) => {
  cityStore.currentCity = city;
  router.back();
};
</script>

<style lang="less" scoped>
.city-group {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;
    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      background-color: #fff4ec;
      font-size: 12px;
      display: flex;
      line-height: 28px;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }
  }
}
</style>
