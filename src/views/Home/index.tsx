import { ResizeProvider } from "../ResizeProvider"
import { SearchKeyWordProvider } from "../SearchKeyWordProvider"

import Header from "./Header"
import SideMenuMobile from "./Header/SideMenuMobile"
import PageData from "./PageData"

import "./index.less"

const Home = () => {
  return (
    <ResizeProvider>
      <SearchKeyWordProvider>
        <div>
          <Header />
          {/*<SideMenuMobile />*/}
          <PageData />
        </div>
      </SearchKeyWordProvider>
    </ResizeProvider>
  )
}

export default Home
