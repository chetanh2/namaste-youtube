import React from "react";

const VideoCard = ({ info }) => {
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
    <div className="p-2 m-2 w-72">
      <img className="rounded-lg" src={thumbnails?.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li>{channelTitle}</li>
        <li className="my-0.5">{formatViewCount(statistics?.viewCount)} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
