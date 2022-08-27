import request from "../request";

export function getHotSuggests() {
  return request.get({ url: "/home/hotSuggests" });
}

export function getHomeCategories() {
  return request.get({
    url: "/home/categories",
  });
}

export function getHomeHouselist(currentPage) {
  return request.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
