import react from "react"
import Sidebar from "./SIdebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"

const Body = ()=>{
    return (
      <div className="flex w-full mt-14">
        <Sidebar />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    );
}
export default Body