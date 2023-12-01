import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Side from "./components/side"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Side/>
            <Header />
            <Outlet />
        </div>
    )
}