import { getHotSuggests, getHomeCategories } from "@/service";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      hotSuggests: [],
      categories: [],
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
  },
});

export default useHomeStore;
