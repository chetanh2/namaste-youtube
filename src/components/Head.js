import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { BsClockHistory } from "react-icons/bs";
import { cacheResults } from "../utils/searchSlice";
import { FaBars } from "react-icons/fa";
import youtubeDarkLogo from "../../src/images/YouTube-White-Full-Color-Dark-Background-Logo.wine.png"

const Head = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggesstions] = useState([]);
  const [showSuggestions, setShowSuggesstions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  /*
    searchCache = {
      "iphone": ["iphone 11","iphone 14"]
    }
    searchQuery = iphone
  */
  useEffect(() => {
    // API CALL
    // make an api call after every key press
    // but if the difference between 2 api calls is less < 200 ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggesstions(searchCache[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  /*
  key - i
  - render the component
  - useEffect - fetch the data
  - start timer => make api call after 200 ms
  
  key -ip
  - destroy the timer(useEffect return method)
  - re-render the component
  -useEffect()
  - start timer => make api call after 200ms

  setTimeout(200)

  */
  const getSearchResults = async () => {
    console.log(searchQuery);
    const query = searchQuery.trim() || "trending";
    const data = await fetch(YOUTUBE_SEARCH_API + query);
    const response = await data.json();
    // console.log(response);
    setSuggesstions(response[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      })
    );
  };
  if (window.innerWidth <= 768) {
    dispatch(closeMenu());
  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" fixed top-0 w-full z-20 grid grid-flow-col p-2  shadow-lg dark:bg-neutral-900">
      <div className="flex gap-4 items-center ml-3 col-span-1">
        <FaBars
          onClick={() => toggleMenuHandler()}
          className="text-2xl dark:text-white cursor-pointer"
        />
        {darkMode ? (
          <img className="h-9" src={youtubeDarkLogo} alt="youtube-logo" />
        ) : (
          <img
            className="h-6 "
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
            alt="youtube-logo"
          />
        )}
      </div>
      {/* <div className="col-span-10 flex items-center"> */}
      <div className="col-span-10 flex relative items-center">
        <input
          className="w-1/2 px-5 rounded-l-full border border-gray-400 p-2 dark:bg-neutral-900"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggesstions(true)}
          onBlur={() => setShowSuggesstions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {showSuggestions && (
          <div className="absolute top-11 bg-white  py-3 w-[50%] rounded-xl shadow-lg z-10 border border-gray-200">
            <ul className="">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-100 border-b border-gray-200  px-6 py-1 cursor-pointer flex items-center gap-2"
                >
                  <BsClockHistory />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* </div> */}
      <div className="col-span-1">
        <img
          className="h-8 dark:text-white"
          src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-unb6q333.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
