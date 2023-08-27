// 排序并拼接参数

import { ParamsType } from "../../request/type"


export const sortParams = (params: ParamsType) => {
  // keys 排序
  const paramsKeys = Object.keys(params).sort()

  // 初始化参数
  let paramsString = ""
  for (const paramKey of paramsKeys) {
    // 判断如果不是int 或者 string, 剔除掉
    const type = typeof params[paramKey]

    if (type !== "number" && type !== "string") {
      continue
    }

    paramsString += `${paramKey}=${params[paramKey]}&`
  }

  // 截取末尾 '&'
  paramsString = paramsString.substring(0, paramsString.length - 1)

  return paramsString
}


