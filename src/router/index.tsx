/**
 * 路由组件封装
 */
import React from "react"
import { createBrowserRouter } from "react-router-dom"

const Home = React.lazy(() => import("../views/Home"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])
