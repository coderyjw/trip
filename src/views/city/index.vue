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
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const searchValue = ref("");
const router = useRouter();
const onSearch = (val) => Toast(val);
const onCancel = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.city {
}
</style>
