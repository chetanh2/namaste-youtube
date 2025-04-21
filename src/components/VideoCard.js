import React from "react";
import { Link } from "react-router-dom";

const  VideoCard = ({ info }) => {
  console.log(info);
  if(!info) return null
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const formatViewCount = (views) => {
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1) + "M views";
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1) + "K views";
    } else {
      return views + " views";
    }
  };
  
  return (
    <div className="p-2 m-2  cursor-pointer">
      <img className="rounded-lg w-full hover:scale-95 transition-all duration-300 ease-linear" src={thumbnails?.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li className="my-0.5">{formatViewCount(statistics?.viewCount)} views </li>
      </ul>
    </div>
  );
};
  export const AdVideoCard = ({info}) => {
    return (
      <div className="border w-[24%] border-red-300">
        {/* <Link className="w-[24%]" to={"/watch?v=" + info.id}> */}
          <VideoCard info={info}/>
        {/* </Link> */}
      </div>
    );
  };

export default VideoCard;
