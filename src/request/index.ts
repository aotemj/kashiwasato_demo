/**
 * 封装统一请求方法
 */
import { message } from "antd"
import axios, { AxiosRequestConfig } from "axios"

import { REQUEST_METHOD } from "./constant"
import { RequestResponse, ParamsType } from "./type"

const instance = axios.create({
  // baseURL: "/",
  // 本地koa接口
  // baseURL: "http://localhost:3000",
  timeout: 30000,
})

const generateError = (msg: string) => {
  message.error(msg)

  return Promise.reject(new Error(msg))
}
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    return response
  },
  function (error) {
    // 对响应错误做点什么
    if (error.message?.includes("timeout")) {
      return generateError("请求超时")
    }

    if (error.response) {
      const status = error.response.status
      let msg = error.response?.data?.message
      switch (status) {
        case 401:
          msg = msg || "登录过期，请重新登录"
          break
        case 404:
          msg = msg || "请求接口不存在"
          break
        default:
          msg = msg || "服务器错误"
      }

      return generateError(msg)
    } else {
      return generateError("网络错误")
    }
  },
)

type CustomHeaders = AxiosRequestConfig["headers"] | Record<string, number | string | boolean>
export const get = async (
  url: string,
  params?: ParamsType,
  config?: AxiosRequestConfig | CustomHeaders,
): Promise<RequestResponse> => {
  const res = await instance.request({
    ...config,
    method: REQUEST_METHOD.GET,
    url,
    params,
  })

  if (res.status === 200) {
    return {
      data: res.data,
    }
  } else {
    return {
      data: [],
    }
  }
}

