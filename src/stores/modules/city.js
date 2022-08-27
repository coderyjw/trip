import { getCityAll } from "@/service";
import { defineStore } from "pinia";

export const useCityStore = defineStore("city", {
  state() {
    return {
      allCities: {},
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
