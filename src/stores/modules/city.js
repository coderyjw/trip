import { getCityAll } from "@/service";
import { defineStore } from "pinia";

export const useCityStore = defineStore("city", {
  state() {
    return {
      allCities: {},
      currentCity: {
        cityName: "杭州",
        cityId: 7,
        gangAoTai: false,
        hot: false,
        latitude: "30.279",
        longitude: "120.162",
        pinYin: "hangzhou",
      },
    };
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});

export default useCityStore;
