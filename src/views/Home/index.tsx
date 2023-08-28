import { ResizeProvider } from "../ResizeProvider"
import { SearchKeyWordProvider } from "../SearchKeyWordProvider"

import Footer from "./Footer"
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
          <Footer/>
        </div>
      </SearchKeyWordProvider>
    </ResizeProvider>
  )
}

export default Home
