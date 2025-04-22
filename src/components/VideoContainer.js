import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu, toggleMenu } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  useEffect(() => {
    dispatch(openMenu());
  }, [isMenuOpen, location]);

  return (
    <div className="flex flex-wrap mt-2 ">
      {/* <VideoCard info={videos[0]}/> */}
      {videos[0] && <AdVideoCard info={videos[5]} />}
      {videos.map((video) => (
        <Link className="w-[24%]" to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
