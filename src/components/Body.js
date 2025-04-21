import react from "react"
import Sidebar from "./SIdebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"

const Body = ()=>{
    return(
        <div className="flex">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
export default Body