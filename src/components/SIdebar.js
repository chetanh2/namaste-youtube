import React from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import {
  FaHome,
  FaVideo,
  FaGamepad,
  FaTv,
  FaBroadcastTower,
  FaMusic,
  FaFutbol,
  FaFilm,
  FaCommentDots,
  FaHistory,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";


function Sidebar(){

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    // Early return
    if(!isMenuOpen) return false
    return (
      <div className="p-5 shadow-lg w-[12%] fixed h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-transparent scrollbar-hover bg-white">
        <ul className="space-y-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center gap-6 rounded-lg px-4 py-3 cursor-pointer ${
                isActive
                  ? "bg-[#f2f2f2] dark:bg-[#272727] "
                  : "hover:bg-[#f2f2f2] dark:hover:bg-[#272727]"
              }`
            }
          >
            <FaHome className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base">
              Home
            </span>
          </NavLink>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaVideo className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Shorts
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaGamepad className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Games
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaTv className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Anime
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaBroadcastTower className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Live
            </span>
          </li>
        </ul>
        <hr className="mt-3" />
        <h1 className="font-bold py-3 mt-3 text-gray-800  dark:text-neutral-300  text-base  ">
          Subscriptions
        </h1>
        <ul className="space-y-2">
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaMusic className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Music
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaFutbol className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Sports
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaGamepad className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Games
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaTv className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Anime
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaFilm className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Movies
            </span>
          </li>
        </ul>
        <hr className="mt-3" />
        <h1 className="font-bold py-3 mt-3 text-gray-800  dark:text-neutral-300  text-base  ">
          Explore
        </h1>
        <ul className="space-y-2">
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaMusic className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Music
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaFutbol className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Sports
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaGamepad className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Games
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaTv className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Anime
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaFilm className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base  ">
              Movies
            </span>
          </li>
        </ul>
        <hr />
        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaCog className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base">
              Settings
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaQuestionCircle className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base">
              Help
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaHistory className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base">
              Report History
            </span>
          </li>
          <li className="flex items-center gap-6 dark:hover:bg-[#272727] hover:bg-[#f2f2f2] rounded-lg px-4 py-3 cursor-pointer">
            <FaCommentDots className="text-black dark:text-red-600 text-xl" />
            <span className="text-gray-800 hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-600 text-base">
              Send Feedback
            </span>
          </li>
        </ul>
      </div>
    );
}
export default Sidebar