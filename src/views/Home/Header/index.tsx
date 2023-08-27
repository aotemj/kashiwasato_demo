import "./index.less"
import { useContext } from "react"

import TextShuffleFragment from "../../../components/TextShuffleFragment"
import { ResizeContext } from "../../ResizeProvider"

import SideMenu from "./SideMenu"
import SideMenuMobile from "./SideMenuMobile"

const Header = () => {
  const { isMobile } = useContext(ResizeContext)

  return (
    <header className={"header-container"}>
      <div className="left border-effect">
        <a>
          <TextShuffleFragment className={"name"} text={"KASHIWA SATO"} />
          <TextShuffleFragment className={"title"} text={"SAMURAI INC. TOKYO"} />
        </a>
      </div>
      <div className="right">
        {isMobile ? (
          <>
            <div>
              <a className="menu-button" href="#" data-reactid=".0.0.0.1.0">
                <div className="open-menu" />
                <div className="close-menu" />
              </a>
            </div>
          </>
        ) : (
          <SideMenu />
        )}
      </div>
    </header>
  )
}

export default Header
