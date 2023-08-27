import { useMount, useUnmount } from "ahooks"
import React, { createContext, useState } from "react"

export const ResizeContext = createContext({
  marginRight: 0,
  marginLeft: 0,
  itemWidth: 250,
  countInEachRow: 1,
  isMobile: false,
})

type ResizeProviderTypes = {
  children: React.ReactNode
}
export const ResizeProvider: React.FC<ResizeProviderTypes> = ({ children }) => {
  const [marginRight, setMarginRight] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [itemWidth, setItemWidth] = useState(250)
  const [countInEachRow, setCountInEachRow] = useState(1)
  const handleResize = () => {
    const clientWidth = document.documentElement.clientWidth
    let marginRight = 0
    let marginLeft = 0
    let itemWidth = 250
    let countInEachRow = 1

    if (clientWidth < 768) {
      marginRight = 0
      marginLeft = 0
    } else if (clientWidth < 1190) {
      marginRight = 20
      marginLeft = 20
    } else {
      marginRight = 65
      marginLeft = 80
    }

    if (clientWidth < 768) {
      itemWidth = clientWidth
    } else {
      if (clientWidth < 1080) {
        countInEachRow = 2
      } else if (clientWidth < 1350) {
        countInEachRow = 3
      } else if (clientWidth < 1800) {
        countInEachRow = 4
      }

      itemWidth = Math.floor((clientWidth - marginLeft - marginRight * countInEachRow) / countInEachRow)
    }

    setMarginLeft(marginLeft)
    setMarginRight(marginRight)
    setItemWidth(itemWidth)
    setCountInEachRow(countInEachRow)
  }
  useMount(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  })
  useUnmount(() => {
    window.removeEventListener("resize", handleResize)
  })

  return (
    <ResizeContext.Provider
      value={{
        marginLeft,
        marginRight,
        itemWidth,
        countInEachRow,
        isMobile: document.documentElement.clientWidth < 765,
      }}
    >
      {children}
    </ResizeContext.Provider>
  )
}
