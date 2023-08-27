import { useContext, useState } from "react"

import TextShuffleFragment from "../../../../components/TextShuffleFragment"
import { ResizeContext } from "../../../ResizeProvider"
import { languages, subpages } from "../constant"
import "./index.less"

const SideMenuMobile = () => {
  const [activePage, setActivePage] = useState(subpages[0].value)
  const [activeLang, setActiveLang] = useState(languages[0].value)
  const [searchZIndex, setSearchZIndex] = useState(0)

  // 搜索关键字
  const handleSearch = () => {
    setSearchZIndex(1000)
  }
  const handleSearchLeave = () => {
    setSearchZIndex(0)
  }
  const { isMobile } = useContext(ResizeContext)
  // 切换换菜单项
  const handleSubpageClick = (value: string) => {
    setActivePage(value)
  }
  // 切换语言
  const handleLangSwitchClick = (value: string) => {
    setActiveLang(value)
  }

  return (
    <>
      <div className="side-menu">
        <ul>
          {subpages.map((item, index) => {
            return (
              <>
                <li
                  key={item.value}
                  onClick={() => handleSubpageClick(item.value)}
                  className={`${item.value?.toLowerCase()} ${item.value === activePage ? "current" : ""}`}
                >
                  <a href="#">
                    <TextShuffleFragment text={item.label} />
                  </a>
                </li>
              </>
            )
          })}
          <li />
        </ul>
        <div className="lang-switch">
          <div className="lang-list">
            <ul>
              {languages.map((item, index) => {
                return (
                  <>
                    <li
                      key={item.value}
                      onClick={() => handleLangSwitchClick(item.value)}
                      className={`${item.value} ${item.value === activeLang ? "current" : ""}`}
                    >
                      <a href="#">
                        <TextShuffleFragment text={item.label} />
                      </a>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
        </div>
        <div id="search_sp">
          <div className="input">
            <input type="text" placeholder="PLEASE INPUT KEYWORD" />
          </div>
          <div className="close" />
          <div className="button">SEARCH</div>
        </div>
      </div>
    </>
  )
}

export default SideMenuMobile
