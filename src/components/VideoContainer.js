import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useVideos from "./utils/useVideos";

const VideoContainer = () => {

  const [videos] = useVideos()
  return (
    // <div className="flex flex-wrap mt-2 ">
    //   {/* <VideoCard info={videos[0]}/> */}
    //   {videos[0] && <AdVideoCard info={videos[5]} />}
    //   {videos.map((video) => (
    //     <Link className="" to={"/watch?v=" + video.id}>
    //       <VideoCard key={video.id} info={video} />
    //     </Link>
    //   ))}
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-2 ">
      {/* <VideoCard info={videos[0]}/> */}
      {videos[0] && <AdVideoCard info={videos[5]} />}
      {videos.map((video) => (
        <Link className="" to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
