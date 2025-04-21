import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  FaHome,
  FaVideo,
  FaGamepad,
  FaTv,
  FaBroadcastTower,
  FaMusic,
  FaFutbol,
  FaFilm,
} from "react-icons/fa";


function Sidebar(){

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    // Early return
    if(!isMenuOpen) return false
    return (
      <div className="p-5 shadow-lg w-[12%]">

            <ul className="space-y-2">
            <li className="flex items-center space-x-2">
                <FaHome className="text-red-600" />
                <Link to="/" className="hover:text-red-600">
                Home
                </Link>
            </li>
            <li className="flex items-center space-x-2">
                <FaVideo className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Shorts</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaGamepad className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Games</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaTv className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Anime</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaBroadcastTower className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Live</span>
            </li>
            </ul>
            <h1 className="font-bold py-2 mt-4">Subscriptions</h1>
            <ul className="space-y-2">
            <li className="flex items-center space-x-2">
                <FaMusic className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Music</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaFutbol className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Sports</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaGamepad className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Games</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaTv className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Anime</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaFilm className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Movies</span>
            </li>
            </ul>
            <h1 className="font-bold py-2 mt-4">Explore</h1>
            <ul className="space-y-2">
            <li className="flex items-center space-x-2">
                <FaMusic className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Music</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaFutbol className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Sports</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaGamepad className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Games</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaTv className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Anime</span>
            </li>
            <li className="flex items-center space-x-2">
                <FaFilm className="text-red-600" />
                <span className="hover:text-red-600 cursor-pointer">Movies</span>
            </li>
            </ul>
      </div>
    );
}
export default Sidebar