/**
 * @desc 项目列表项
 * @constructor
 */
import "./index.less"
import { Image } from "antd"
import React, { useContext } from "react"

import TextShuffleFragment from "../../../../components/TextShuffleFragment"
import { ResizeContext } from "../../../ResizeProvider"
type ProjectItemProps = {
  data: any
  marginLeft: number
  marginRight: number
  itemWidth: number
}
const ProjectItem: React.FC<ProjectItemProps> = ({ data, marginRight, itemWidth }) => {
  const { isMobile } = useContext(ResizeContext)

  return (
    <a
      href={"#"}
      className={"project"}
      style={{
        marginRight,
        width: itemWidth,
      }}
    >
      <div className={"img"}>
        <Image
          preview={false}
          src={`https://kashiwasato.com/${data.acf.mobile_image.sizes["mobile-thumbnail"]}`}
          className={"project-thums"}
        />
      </div>
      <div className="text">
        <TextShuffleFragment className="project-name" text={data.title} />
        <div className="project-desc">
          {data.acf.credits.map((item: { title: string; name: string }, index: number) => {
            if (index > 3) return null

            return (
              <p>
                {item.title} : {item.name}
              </p>
            )
          })}
          {isMobile ? null : (
            <p className="more">
              <span>READ MORE </span>
              <span className="plus">+</span>
            </p>
          )}
        </div>
      </div>
    </a>
  )
}

export default ProjectItem
