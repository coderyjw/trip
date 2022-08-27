import axios from "axios";
import useMainStore from "@/stores/modules/main";

import { TIMEOUT, baseURL } from "./config";
const mainStore = useMainStore();
let loadingNum = 0;
class Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({ baseURL, timeout });

    this.instance.interceptors.request.use(
      (config) => {
        startLoading();
        return config;
      },
      (err) => {
        endLoading();
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        endLoading();
        return res;
      },
      (err) => {
        endLoading();
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

function startLoading() {
  mainStore.isLoading = true;
  loadingNum++;
}

function endLoading() {
  loadingNum--;
  if (loadingNum === 0) {
    mainStore.isLoading = false;
  }
}
export default new Request(baseURL, TIMEOUT);
