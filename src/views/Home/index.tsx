import { ResizeProvider } from "../ResizeProvider"

import Header from "./Header"
import SideMenuMobile from "./Header/SideMenuMobile"
import PageData from "./PageData"
import "./index.less"

const Home = () => {
  return (
    <ResizeProvider>
      <div>
        <Header />
        {/*<SideMenuMobile />*/}
        <PageData />
      </div>
    </ResizeProvider>
  )
}

export default Home
