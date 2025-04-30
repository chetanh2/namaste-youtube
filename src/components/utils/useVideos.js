import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API_IPHONE } from "../../utils/constant";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const searchQuery = useSelector((store) => store.search.searchQuery);

  const getVideos = async () => {
    try {
      const data = await fetch(`${YOUTUBE_SEARCH_API_IPHONE}${searchQuery}`);
      const json = await data.json();
      console.log(json.items);
      setVideos(json.items || []); // Fallback to empty array if json.items is undefined
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    
      getVideos(); // Fetch videos when searchQuery changes
    
  }, []); // Add searchQuery as a dependency

  return [videos, getVideos];
};

export default useVideos;
