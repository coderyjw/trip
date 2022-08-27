<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854">
      <template v-for="(group, index) in groupData.cities">
        <van-index-anchor :index="group?.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
defineProps({
  groupData: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="less" scoped>
.city-group {
}
</style>
