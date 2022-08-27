<template>
  <div class="home-search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <van-icon name="aim" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="date-range" @click="showCalendar = true">
      <div class="start">
        <span class="tip">入住</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <span class="stay">共一晚</span>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      @confirm="onConfirm"
      color="#ff9854"
      :round="false"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { formatMonthDay } from "@/utils/format_date";
import dayjs from "dayjs";

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
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

const startDate = ref(formatMonthDay(dayjs()));
const endDate = ref(formatMonthDay(dayjs().add(1, "day")));

const showCalendar = ref(false);
const onConfirm = (value) => {
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  startDate.value = formatMonthDay(dayjs(selectStartDate));
  endDate.value = formatMonthDay(dayjs(selectEndDate));
  showCalendar.value = false;
};
</script>

<style lang="less" scoped>
.home-search-box {
  --van-calendar-popup-height: 100%;
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

  .date-range {
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;

    .stay {
      font-size: 12px;
    }
    .start,
    .end {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .tip {
        color: #333;
        display: block;
        font-size: 12px;
        margin-bottom: 5px;
      }

      .time {
        display: block;
        font-size: 14px;
      }
    }
  }
}
</style>
