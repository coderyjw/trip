import { getHotSuggests, getHomeCategories, getHomeHouselist } from "@/service";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      hotSuggests: [],
      categories: [],

      currentPage: 1,
      houselist: [],
    };
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage);
      this.houselist.push(...res.data);
      this.currentPage++;
    },
  },
});

export default useHomeStore;
