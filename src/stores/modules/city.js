import { getCityAll } from "@/service";
import { defineStore } from "pinia";

export const useCityStore = defineStore("city", {
  state() {
    return {
      allCities: {},
      currentCity: {
        cityId: 45,
        cityName: "广州",
        gangAoTai: false,
        hot: false,
        latitude: "23.1354",
        longitude: "113.271",
        pinYin: "guangzhou",
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
