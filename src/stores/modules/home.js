import { getHotSuggests } from "@/service";
import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      hotSuggests: [],
    };
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;
