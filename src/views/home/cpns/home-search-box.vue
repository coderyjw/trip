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
      <span class="stay">共{{ stayCount }}晚</span>
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
      :formatter="formatter"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDate } from "@/utils/format_date";
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

const nowDate = dayjs();
const newDate = dayjs().add(1, "day");
const startDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(newDate));
const stayCount = ref(getDiffDate(nowDate, newDate));

const showCalendar = ref(false);

const formatter = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};
const onConfirm = (value) => {
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  startDate.value = formatMonthDay(dayjs(selectStartDate));
  endDate.value = formatMonthDay(dayjs(selectEndDate));
  stayCount.value = getDiffDate(selectStartDate, selectEndDate);
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
