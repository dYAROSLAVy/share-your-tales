import { accessTokenReactiveVar } from "@shared/apollo";
import axios, { AxiosInstance } from "axios";

export const api = axios.create({
  baseURL: "https://internship-social-media.purrweb.com/",
});

api.interceptors.request.use(async (config) => {
  const token = accessTokenReactiveVar();

  config.headers.set("Access-Control-Allow-Headers", "Authorize");

  config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});

function responseErrorMiddleware(error: any, _api: AxiosInstance) {
  return Promise.reject(error);
}

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => responseErrorMiddleware(error, api)
);

export const fileApi = axios.create({
  transformRequest: [
    function (data) {
      return data;
    },
  ],
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "*",
  },
  withCredentials: true,
});
