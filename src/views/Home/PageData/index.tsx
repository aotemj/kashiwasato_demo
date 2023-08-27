import { useMount } from "ahooks"
import { useContext, useState } from "react"

import { getProjects } from "../../../api/projects"
import { ResizeContext } from "../../ResizeProvider"

import ProjectItem from "./ProjectItem"

import "./index.less"

/**
 * PageData 项目列表
 * @param props
 * @constructor
 */
const PageData = (props: any) => {
  const [data, setData] = useState<any[]>([])
  const { marginLeft, marginRight, itemWidth, countInEachRow } = useContext(ResizeContext)

  const initData = () => {
    getProjects().then((res) => {
      if (res) {
        setData(res?.data)
      }
    })
  }
  useMount(initData)

  return (
    <div>
      <div className="content_thumb">
        <div className="project-group">
          {data.map((item, index) => (
            <ProjectItem
              data={item}
              marginRight={(index + 1) % countInEachRow === 0 ? 0 : marginRight}
              marginLeft={marginLeft}
              itemWidth={itemWidth}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default PageData
