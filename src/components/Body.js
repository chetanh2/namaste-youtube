import react, { useState } from "react"
import Sidebar from "./SIdebar"
import MainContainer from "./MainContainer"
import { Outlet } from "react-router-dom"
import Head from "./Head"
import { useSelector } from "react-redux"

const Body = ()=>{
    const [darkMode, setDarkMode] = useState(false);
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
      <div className={`flex w-full mt-14 ${darkMode && "dark"}`}>
        <div className="flex bg-white dark:bg-neutral-900">
          <Head darkMode={darkMode} />
          <Sidebar />
          <div
            className={`p-5 w-full transition-all duration-300 ${isMenuOpen ? "ml-[12%] " : ""
              }`}
          >
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