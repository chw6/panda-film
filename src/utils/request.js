import axios from "axios";
import { getToken } from "./auth";

const instance = axios.create({
  timeout: 5000, // 请求超时时间
  baseURL: "http://api.cat-shop.penkuoer.com", // 表示网络请求的基础地址
});

// Add a request interceptor
// 全局请求拦截，作用是当所有的ajax请求发起之前先执行这个方法
//  用来设置请求头等信息的
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // console.log(config);
    // 在发起请求之前在请求头中设置token值
    config.headers.authorization = "bearer " + getToken();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
//  全局响应拦截，所有的ajax请求成功返回之后会走这个方法
//    做异常处理
//    比如 404，503， 401
instance.interceptors.response.use(
  function(response) {
    // console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("报错了");
    // console.dir(error);
    // 当服务器返回401状态码的时候跳转到登录页
    if (error.response.status == 401) {
      window.location.href = "#/login";
    }
    return Promise.reject(error);
  }
);

// export const get = (url) => instance.get(url);

export function get(url, params) {
  // 当设置了baseURL之后，实际请求地址为 baseURL+url
  return instance.get(url, {
    params,
  });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}

export function del(url) {
  return instance.delete(url);
}
