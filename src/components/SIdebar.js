import React from "react"
import { useSelector } from "react-redux"

function Sidebar(){

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    // Early return
    if(!isMenuOpen) return false
    return(
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Games</li>
                <li>Anime</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold py-2">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Games</li>
                <li>Anime</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold py-2">Explore</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Games</li>
                <li>Anime</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}
export default Sidebar