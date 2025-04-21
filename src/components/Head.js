import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch()

  useEffect(()=>{
    // API CALL
    // make an api call after every key press
    // but if the difference between 2 api calls is less < 200 ms
    // decline the api call
    const timer = setTimeout(()=>{
      getSearchResults();
    },200)
    return()=>{
      clearTimeout(timer)
    }
  },[searchQuery])
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
  const getSearchResults = async()=>{
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const response = await data.json()
    // console.log(response);
  }
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex gap-2 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          alt="menu"
        />
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
          alt="youtube-logo"
        />
      </div>
      {/* <div className="col-span-10 flex items-center"> */}
      <div className="col-span-10 flex  items-center">
        <input
          className="w-1/2 rounded-l-full border border-gray-400 p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <div className="fixed top-[7%] bg-white  py-3 w-[40%] rounded-xl shadow-lg z-10">
          <ul className="">
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer">Iphone</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone pro</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone max</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone 12</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone 13</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone 14</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone 15</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone 16</li>
            <li className="hover:bg-slate-100 px-6 py-0.5 cursor-pointer" >Iphone 16e</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-unb6q333.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
