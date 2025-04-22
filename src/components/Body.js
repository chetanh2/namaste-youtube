import react, { useState } from "react"
import Sidebar from "./SIdebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"

const Body = ()=>{
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
      <div className={`flex w-full mt-14 ${darkMode && "dark"}`}>
        <div className="flex bg-white dark:bg-neutral-900">
          <Sidebar />
          <div className="ml-[12%] p-5 w-[88%]">
            <Outlet />
            <button
              className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
              onClick={toggleDarkMode}
            >
              {darkMode ? "LHT" : "DRK"}
            </button>
          </div>
        </div>
      </div>
    );
}
export default Body