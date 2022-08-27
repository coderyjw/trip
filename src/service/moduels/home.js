import request from "../request";

export function getHotSuggests() {
  return request.get({ url: "/home/hotSuggests" });
}
