<template>
  <div class="home-search-box">
    <div class="location">
      <div class="city" @click="cityClick">杭州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon name="aim" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";


const router = useRouter();
const cityClick = () => {
  router.push("/city");
};

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log({ res });
    },
    (err) => {
      console.log({ err });
    }
  );
};
</script>

<style lang="less" scoped>
.home-search-box {
  .location {
    height: 46px;
    align-items: center;
    display: flex;
    padding: 0 20px;

    .city {
      flex: 1;
    }
    .position {
      width: 80px;
      display: flex;
      align-items: center;

      .van-icon {
        margin-left: 5px;
        color: var(--primary-color);
      }
    }
  }
}
</style>
