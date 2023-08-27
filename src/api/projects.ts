// 获取项目列表
import { message } from "antd"

import { get } from "../request"

export const getProjects = async () => {
  try {
    const res = await get(
      `/api/cms/get-posts`)

    return res
  } catch (e: any) {
    message.error((e?.response.data?.message as string) || (e?.message as string))

    return {
      data:[]
    }
  }
}
